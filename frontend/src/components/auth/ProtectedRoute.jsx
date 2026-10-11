import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

export function ProtectedRoute() {
  const status = useAuthStore(s => s.status);
  
  if (status === 'loading' || status === 'idle') {
    return <div className="min-h-screen flex items-center justify-center bg-surface text-white">Loading...</div>;
  }
  
  if (status === 'unauthenticated') {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
}

export function RoleRoute({ roles }) {
  const { user, status } = useAuthStore();
  
  if (status === 'loading' || status === 'idle') {
    return <div className="min-h-screen flex items-center justify-center bg-surface text-white">Loading...</div>;
  }
  
  if (status === 'unauthenticated') {
    return <Navigate to="/login" replace />;
  }
  
  const hasRole = user?.roles?.some(r => roles.includes(r));
  if (!hasRole) {
    return <Navigate to="/portal/loyalty" replace />;
  }
  
  return <Outlet />;
}
