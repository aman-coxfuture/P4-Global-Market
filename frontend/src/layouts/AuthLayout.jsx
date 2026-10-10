import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] flex flex-col justify-between antialiased selection:bg-[#00C853] selection:text-black">
      <Outlet />
    </div>
  );
}
