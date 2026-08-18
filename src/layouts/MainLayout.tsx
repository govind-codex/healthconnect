import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import Footer from '../components/Footer';
import { staggerContainer, staggerItem } from '../utils/useAnimations';

const Navbar = () => {
  const { user, logout } = useApp();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: 'Explore Camps', href: '/camps' },
    { name: 'Emergency', href: '/emergency' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`sticky top-0 z-50 h-16 flex items-center overflow-x-hidden transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100/80 shadow-lg shadow-slate-200/20'
          : 'bg-white border-b border-slate-100 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 mr-8 md:mr-12 group">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold italic shadow-blue-200 shadow-lg shrink-0 animate-pulse-glow"
          >
            H
          </motion.div>
          <span className="text-sm sm:text-base md:text-lg font-black tracking-tighter text-slate-800 uppercase flex items-center whitespace-nowrap">
            HealthCamp<span className="text-blue-600 ml-0.5">Connect</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group py-1 ${
                isActive(link.href) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {!isActive(link.href) && (
                <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 w-0 group-hover:w-full rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="h-5 w-px bg-slate-200"></div>
          
          {user ? (
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to={user.role === 'ADMIN' ? '/admin' : '/organizer'}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-200/50"
                >
                  Dashboard
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.15, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                onClick={logout}
                className="text-slate-400 hover:text-red-500 transition-colors flex-shrink-0"
              >
                <LogOut className="h-4 w-4" />
              </motion.button>
            </div>
          ) : (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/login"
                className="bg-slate-900 text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors duration-300 whitespace-nowrap shadow-lg shadow-slate-200/50"
              >
                Partner Login
              </Link>
            </motion.div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center ml-auto">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-blue-600 p-2 -mr-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg overflow-y-auto max-h-[calc(100vh-4rem)]"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="px-4 py-4 space-y-1"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={staggerItem}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                      isActive(link.href)
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={staggerItem} className="my-4 h-px bg-gray-200"></motion.div>
              
              <motion.div variants={staggerItem} className="space-y-2 pt-2">
                {user ? (
                  <>
                    <Link
                      to={user.role === 'ADMIN' ? '/admin' : '/organizer'}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-colors"
                    >
                      <LayoutDashboard className="h-5 w-5 flex-shrink-0" />
                      <span>Dashboard</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 font-semibold text-base transition-colors"
                    >
                      <LogOut className="h-5 w-5 flex-shrink-0" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 text-center w-full transition-colors"
                  >
                    Partner Login
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default MainLayout;
