import { create } from 'zustand';
import api from '../lib/api';

export const useAuthStore = create((set, get) => ({
  user: null,
  accessToken: null,
  status: 'idle', // idle, loading, authenticated, unauthenticated
  error: null,

  setToken: (token) => set({ accessToken: token }),
  
  initialize: async () => {
    // Prevent multiple initializations or overwriting an active login
    if (get().status === 'authenticated') return;
    
    set({ status: 'loading' });
    try {
      const res = await api.post('/auth/refresh');
      set({ accessToken: res.data.data.accessToken });
      
      const meRes = await api.get('/auth/me');
      set({ user: meRes.data.data, status: 'authenticated' });
    } catch (err) {
      // Only set to unauthenticated if a login hasn't already succeeded
      if (get().status !== 'authenticated') {
        set({ user: null, accessToken: null, status: 'unauthenticated' });
      }
    }
  },

  login: async (credentials) => {
    set({ status: 'loading', error: null });
    try {
      const res = await api.post('/auth/login', credentials);
      set({ accessToken: res.data.data.accessToken });
      
      const meRes = await api.get('/auth/me');
      set({ user: meRes.data.data, status: 'authenticated' });
      return true;
    } catch (err) {
      set({ status: 'unauthenticated', error: err.response?.data?.error || 'Login failed' });
      return false;
    }
  },

  signup: async (data) => {
    set({ status: 'loading', error: null });
    try {
      const res = await api.post('/auth/register', data);
      set({ accessToken: res.data.data.accessToken });
      
      const meRes = await api.get('/auth/me');
      set({ user: meRes.data.data, status: 'authenticated' });
      return true;
    } catch (err) {
      set({ status: 'unauthenticated', error: err.response?.data?.error || 'Signup failed' });
      return false;
    }
  },

  logout: async (localOnly = false) => {
    if (!localOnly) {
      try { await api.post('/auth/logout'); } catch (e) {}
    }
    set({ user: null, accessToken: null, status: 'unauthenticated' });
  }
}));
