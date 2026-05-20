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
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 h-16 flex items-center shadow-sm overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 mr-8 md:mr-12">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold italic shadow-blue-200 shadow-lg shrink-0">H</div>
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
              className={`text-xs font-bold uppercase tracking-widest transition-all duration-200 relative group ${
                isActive(link.href) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="h-5 w-px bg-slate-200"></div>
          
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to={user.role === 'ADMIN' ? '/admin' : '/organizer'}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-slate-400 hover:text-red-500 transition-colors flex-shrink-0"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-slate-900 text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors duration-200 whitespace-nowrap"
            >
              Partner Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-blue-600 p-2 -mr-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
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
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-lg overflow-y-auto max-h-[calc(100vh-4rem)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
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
              ))}
              
              <div className="my-4 h-px bg-gray-200"></div>
              
              <div className="space-y-2 pt-2">
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
