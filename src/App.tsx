import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Public Pages
import Landing from './pages/Landing';
import Camps from './pages/Camps';
import Emergency from './pages/Emergency';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

// Dashboard Pages
import AdminDashboard from './pages/AdminDashboard';
import OrganizerDashboard from './pages/OrganizerDashboard';

const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRole: 'ADMIN' | 'ORGANIZER' }> = ({ children, allowedRole }) => {
  const { user } = useApp();
  const location = useLocation();

  if (!user) {
    return <Navigate to={`/login?role=${allowedRole}`} state={{ from: location }} replace />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route path="/" element={<MainLayout><Landing /></MainLayout>} />
        <Route path="/camps" element={<MainLayout><Camps /></MainLayout>} />
        <Route path="/emergency" element={<MainLayout><Emergency /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        
        {/* Auth Route (No Layout) */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Routes */}
        <Route 
          path="/admin/*" 
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/organizer/*" 
          element={
            <ProtectedRoute allowedRole="ORGANIZER">
              <OrganizerDashboard />
            </ProtectedRoute>
          } 
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}
