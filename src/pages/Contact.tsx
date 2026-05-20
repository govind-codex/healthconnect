import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
          {/* Left Side: Info */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Connect with HealthCamp Team</h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Have questions about organizing a camp? Or need help finding services near you? 
              Our team is here to support the health of Indore.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-slate-600 font-medium">support@healthcamp.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Call Support</h4>
                  <p className="text-slate-600 font-medium">+91 731-255-0123</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Headquarters</h4>
                  <p className="text-slate-600 font-medium">Vijay Nagar, Indore, MP 452010</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Follow our Impact</h4>
              <div className="flex space-x-4">
                {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <button key={i} className="p-3 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-16 lg:mt-0 bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Organization (Optional)</label>
                <input type="text" placeholder="Hospital or NGO name" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Your Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
