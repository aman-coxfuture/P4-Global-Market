import { create } from 'zustand';
import api from '../lib/api';

const fetchCurrentUser = () => api.get('/auth/me', {
  // A unique URL also protects login against a stale intermediary/browser
  // cache when an older backend process is still serving the previous build.
  params: { _authCheck: Date.now() },
  headers: { 'Cache-Control': 'no-cache' }
});

const getUserFromAccessToken = (token, email) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
    return { ...payload.user, email };
  } catch {
    return null;
  }
};

let initializationPromise = null;
let authActionVersion = 0;

export const useAuthStore = create((set, get) => ({
  user: null,
  accessToken: null,
  status: 'idle', // idle, loading, authenticated, unauthenticated
  error: null,

  setToken: (token) => set({ accessToken: token }),
  
  initialize: () => {
    // React StrictMode can run mount effects twice. Share one refresh request:
    // concurrent refresh-token rotations can otherwise revoke each other's session.
    if (get().status === 'authenticated') return Promise.resolve();
    if (initializationPromise) return initializationPromise;

    const requestVersion = authActionVersion;
    set({ status: 'loading' });
    initializationPromise = (async () => {
      try {
        const res = await api.post('/auth/refresh');
        if (requestVersion !== authActionVersion) return;
        set({ accessToken: res.data.data.accessToken });

        const meRes = await fetchCurrentUser();
        if (requestVersion !== authActionVersion) return;
        set({ user: meRes.data.data, status: 'authenticated' });
      } catch {
        // A login/logout started during refresh owns the newer auth state.
        if (requestVersion === authActionVersion) {
          set({ user: null, accessToken: null, status: 'unauthenticated' });
        }
      } finally {
        initializationPromise = null;
      }
    })();
    return initializationPromise;
  },

  login: async (credentials) => {
    authActionVersion += 1;
    set({ status: 'loading', error: null });
    try {
      const res = await api.post('/auth/login', credentials);
      const { accessToken, user } = res.data.data;
      if (!accessToken) throw new Error('Login response is missing an access token');
      // Keep sign-in independent from a follow-up /me request. Older backend
      // instances return only the token, which already contains id and roles.
      const authenticatedUser = user || getUserFromAccessToken(accessToken, credentials.email);
      if (!authenticatedUser) throw new Error('Could not read account details from the login response');
      set({ accessToken, user: authenticatedUser, status: 'authenticated', error: null });
      return true;
    } catch (err) {
      set({ user: null, accessToken: null, status: 'unauthenticated', error: err.response?.data?.error || err.message || 'Login failed' });
      return false;
    }
  },

  signup: async (data) => {
    authActionVersion += 1;
    set({ status: 'loading', error: null });
    try {
      const res = await api.post('/auth/register', data);
      set({ accessToken: res.data.data.accessToken });
      
      const meRes = await fetchCurrentUser();
      set({ user: meRes.data.data, status: 'authenticated' });
      return true;
    } catch (err) {
      set({ status: 'unauthenticated', error: err.response?.data?.error || 'Signup failed' });
      return false;
    }
  },

  logout: async (localOnly = false) => {
    authActionVersion += 1;
    if (!localOnly) {
      try { await api.post('/auth/logout'); } catch (e) {}
    }
    set({ user: null, accessToken: null, status: 'unauthenticated' });
  }
}));
