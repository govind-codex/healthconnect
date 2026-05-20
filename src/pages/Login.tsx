import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Heart, Mail, Lock, ArrowRight, ShieldCheck, 
  Hospital, Loader2, AlertCircle, ChevronLeft 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useApp();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      navigate(user.role === 'ADMIN' ? '/admin' : '/organizer');
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock API call
    setTimeout(() => {
      if (email === 'admin@healthcamp.in' && password === 'admin123') {
        login('ADMIN');
        setLoading(false);
      } else if (email === 'org@hospital.com' && password === 'org123') {
        login('ORGANIZER');
        setLoading(false);
      } else {
        setLoading(false);
        setError('Invalid credentials. For demo: admin@healthcamp.in / admin123 or org@hospital.com / org123');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden px-4">
      {/* Background blobs */}
      <div className="absolute top-0 -left-64 w-1/2 h-1/2 bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 -right-64 w-1/2 h-1/2 bg-green-100 rounded-full blur-[120px] opacity-60"></div>

      <div className="w-full max-w-xl relative">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
        >
          <div className="flex flex-col items-center mb-10">
            <div className="bg-blue-600 p-3 rounded-2xl shadow-xl shadow-blue-200 mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Partner Login</h1>
            <p className="text-slate-500 text-sm font-medium">Access your HealthCamp organizer portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-start space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-red-700 leading-relaxed">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="org@hospital.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center space-x-2 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-slate-500">
            Interested in partnering? <Link to="/contact" className="text-blue-600 font-bold hover:underline">Contact Us</Link>
          </p>
        </motion.div>

        <div className="mt-8 border-t border-slate-100/50">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
