import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import api from '../../lib/api';

export default function AdminDashboard() {
  const { user, logout } = useAuthStore();
  const [pingResult, setPingResult] = useState('');

  useEffect(() => {
    const testAdminPing = async () => {
      try {
        const res = await api.get('/admin/ping');
        setPingResult(`Ping Success: ${res.data.data.message}`);
      } catch (err) {
        setPingResult(`Ping Failed: ${err.response?.status} - ${err.response?.data?.error || err.message}`);
      }
    };
    testAdminPing();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center pb-4 border-b">
          <h1 className="text-3xl font-bold">Admin Dashboard Placeholder</h1>
          <button onClick={() => logout()} className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg font-medium">
            Log Out
          </button>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Welcome, {user?.profile?.firstName || 'Admin'}</h2>
          <p className="text-slate-600 mb-4">You are viewing this page because you have the <strong>admin</strong> role.</p>
        </div>

        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm">
          <h3 className="font-bold text-slate-700 mb-2">/api/v1/admin/ping Test:</h3>
          <p className={pingResult.includes('Success') ? 'text-green-600' : 'text-red-600'}>
            {pingResult || 'Pinging backend...'}
          </p>
        </div>
      </div>
    </div>
  );
}
