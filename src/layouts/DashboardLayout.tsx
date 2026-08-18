import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Calendar, LogOut, LayoutDashboard, PlusCircle, Settings, Users, Clock, Menu, X 
 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';
import Footer from '../components/Footer';
import { staggerContainer, staggerItem } from '../utils/useAnimations';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const isAdmin = user?.role === 'ADMIN';

  const menuItems = isAdmin ? [
    { name: 'Overview', icon: LayoutDashboard, href: '/admin' },
    { name: 'Approval Queue', icon: Clock, href: '/admin/approvals' },
    { name: 'Manage Organizers', icon: Users, href: '/admin/organizers' },
  ] : [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/organizer' },
    { name: 'My Camps', icon: Calendar, href: '/organizer/camps' },
    { name: 'Add New Camp', icon: PlusCircle, href: '/organizer/add' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const SidebarContent = () => (
    <div className="h-full flex flex-col p-6">
      <div className="mb-10">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
            className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold italic shadow-blue-200 shadow-lg shrink-0"
          >
            H
          </motion.div>
          <span className="text-lg font-black tracking-tighter text-slate-800 uppercase leading-none">
            HealthCamp<br/><span className="text-blue-600 ml-0.5">Connect</span>
          </span>
        </Link>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col gap-2"
      >
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">
          {isAdmin ? 'System Console' : 'Partner Portal'}
        </p>
        {menuItems.map((item) => {
          const active = location.pathname === item.href;
          return (
            <motion.div key={item.href} variants={staggerItem}>
              <Link
                to={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 group relative",
                  active 
                    ? "bg-blue-50 text-blue-700 shadow-sm" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
                )}
              >
                {active && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <motion.div whileHover={{ rotate: active ? 0 : 15 }} transition={{ duration: 0.2 }}>
                  <item.icon className={cn("h-4 w-4 transition-colors duration-300", active ? "text-blue-600" : "text-slate-400 group-hover:text-blue-600")} />
                </motion.div>
                <span>{item.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-auto border-t border-slate-100 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-50 rounded-2xl p-4 mb-4 border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black shadow-lg shadow-blue-100"
            >
              {user?.name.charAt(0)}
            </motion.div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-slate-900 truncate uppercase tracking-tight">{user?.name}</p>
              <p className="text-[10px] text-slate-500 truncate uppercase font-bold tracking-widest">{isAdmin ? 'System Manager' : user?.organization}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-red-600 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
          >
            <LogOut className="h-3 w-3" />
            <span>Sign Out</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden relative">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-slate-100 flex-col shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 w-72 bg-white z-50 shadow-2xl"
            >
              <div className="absolute top-6 right-4 lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.9, rotate: -90 }}
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50/50">
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between shrink-0 sticky top-0 z-10"
        >
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
            <div className="flex items-end gap-2">
              <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase truncate max-w-[150px] sm:max-w-none">
                {menuItems.find(item => item.href === location.pathname)?.name || 'Dashboard'}
              </h1>
              {isAdmin && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25, delay: 0.3 }}
                  className="bg-green-500 text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest mb-1 shadow-sm hidden xs:inline-block"
                >
                  Verified
                </motion.span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4 border-l border-slate-200 pl-4 sm:pl-6 h-8 items-center font-sans">
              <motion.div
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="h-8 w-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 cursor-pointer transition-colors border border-slate-100"
              >
                <Settings className="h-4 w-4" />
              </motion.div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] hidden md:block leading-none">Healthcare Discovery Engine</p>
            </div>
          </div>
        </motion.header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-6xl mx-auto"
          >
            {children}
            <div className="mt-12 border-t border-slate-100">
              <Footer />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
