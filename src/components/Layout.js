import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { Toaster } from 'react-hot-toast';

import './layout.css';

export const Layout = () => {
  return (
    <div className="container">
      <AppBar />
      <div className="layout">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Toaster position="bottom: -center" reversOrder={false} />
    </div>
  );
};
