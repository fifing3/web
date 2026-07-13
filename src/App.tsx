import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React, { Suspense } from 'react';
import Layout from './components/Layout';
import GoogleAnalytics from './components/GoogleAnalytics';

// Dynamic imports for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Modul = React.lazy(() => import('./pages/Modul'));
const Tryout = React.lazy(() => import('./pages/Tryout'));
const KelasOnline = React.lazy(() => import('./pages/KelasOnline'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <BrowserRouter>
        <Suspense fallback={<div className="flex h-screen items-center justify-center text-blue-700">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="modul" element={<Modul />} />
              <Route path="tryout" element={<Tryout />} />
              <Route path="kelas-online" element={<KelasOnline />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
