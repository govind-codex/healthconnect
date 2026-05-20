import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '../components/Footer';

const Navbar = () => {
  const { user, logout } = useApp();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Explore Camps', href: '/camps' },
    { name: 'Emergency', href: '/emergency' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 h-16 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold italic shadow-blue-200 shadow-lg shrink-0">H</div>
          <span className="text-base sm:text-xl font-black tracking-tighter text-slate-800 uppercase flex items-center">
            HealthCamp<span className="text-blue-600 ml-0.5">Connect</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`transition-colors hover:text-blue-600 pb-1 ${
                isActive(link.href) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-slate-200"></div>
          
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to={user.role === 'ADMIN' ? '/admin' : '/organizer'}
                className="geometric-btn-primary px-5 py-2.5"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="geometric-btn-dark px-6 py-2.5"
              >
                Partner Login
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-blue-600 p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive(link.href)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
                {user ? (
                  <>
                    <Link
                      to={user.role === 'ADMIN' ? '/admin' : '/organizer'}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 px-3 py-2.5 rounded-lg text-blue-700 bg-blue-50 font-semibold"
                    >
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Console</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="flex w-full items-center space-x-2 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 font-medium"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 rounded-lg text-base font-semibold text-white bg-slate-900 text-center"
                    >
                      Partner Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
