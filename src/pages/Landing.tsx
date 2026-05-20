import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Calendar, MapPin, Users, Heart, ArrowRight, CheckCircle2, 
  Stethoscope, Activity, Eye, Thermometer, ShieldCheck 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-8 lg:pt-12 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <p className="text-blue-600 font-bold text-xs sm:text-sm mb-4 uppercase tracking-[0.2em] flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 sm:w-10 h-0.5 bg-blue-600"></span>
              Available Now in Indore
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6 sm:mb-8">
              Find Free <br className="hidden sm:block" />Health <br className="hidden sm:block" /><span className="text-blue-600">Camps</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mb-8 sm:mb-10 font-medium mx-auto lg:mx-0">
              Discover free medical checkups, blood tests, and specialist consultations across Indore limits. 
              Geometric balance in healthcare discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/camps"
                className="geometric-btn-primary px-8 py-4 text-sm w-full sm:w-auto text-center"
              >
                Explore Camps
              </Link>
              <Link
                to="/login?role=ORGANIZER"
                className="bg-slate-100 text-slate-600 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all w-full sm:w-auto text-center"
              >
                Become Partner
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 lg:mt-0 lg:col-span-6 px-4 sm:px-0"
          >
            <div className="relative p-2 bg-white rounded-[40px] shadow-2xl shadow-slate-200">
              <img
                className="rounded-[32px] w-full aspect-[4/3] object-cover"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Indore Health"
              />
              <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 bg-slate-900 text-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] shadow-2xl">
                <p className="text-2xl sm:text-3xl font-black mb-1 tracking-tighter">12</p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Camps Organised', value: '150+' },
    { label: 'Tests Provided', value: '12k+' },
    { label: 'Partner Hospitals', value: '45+' },
    { label: 'Lives Impacted', value: '25k+' },
  ];

  return (
    <div className="bg-slate-900 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl sm:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</p>
              <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestsSection = () => {
  const tests = [
    { name: 'ECG Check', icon: Activity, color: 'bg-red-50 text-red-600' },
    { name: 'Blood Glucose', icon: Thermometer, color: 'bg-blue-50 text-blue-600' },
    { name: 'Eye Checkup', icon: Eye, color: 'bg-indigo-50 text-indigo-600' },
    { name: 'General Health', icon: Stethoscope, color: 'bg-green-50 text-green-600' },
    { name: 'Blood Group', icon: Heart, color: 'bg-rose-50 text-rose-600' },
  ];

  return (
    <div className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="text-center md:text-left">
            <p className="text-blue-600 font-bold text-xs sm:text-sm mb-4 uppercase tracking-[0.2em]">Diagnostic Services</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Free Medical <br className="hidden sm:block" />Health Tests</h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-center md:text-right hidden sm:block">
            Most of our camps provide these essential diagnostic services completely free of charge to all citizens.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {tests.map((test, idx) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col items-center text-center"
            >
              <div className={`${test.color} p-4 sm:p-5 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-sm`}>
                <test.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest">{test.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Easy Discovery',
      desc: 'Quickly find health camps in your area of Indore with our smart search and filters.',
      icon: MapPin
    },
    {
      title: 'Verified Organizers',
      desc: 'All camps are organized by reputable hospitals and NGOs, verified by our admins.',
      icon: ShieldCheck
    },
    {
      title: 'Real-time Updates',
      desc: 'Get the latest information on camp timings, dates, and available health services.',
      icon: Calendar
    }
  ];

  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-20">
          {features.map((feature, idx) => (
            <div key={idx} className="mb-12 lg:mb-0 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="p-4 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 lg:mb-8 shadow-xl shadow-blue-100">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <Features />
      <TestsSection />
      
      {/* Call to Action */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[32px] sm:rounded-[48px] p-8 sm:p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group">
            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[0.95]">
                Start Your Free <br className="hidden sm:block" /><span className="text-blue-500">Checkup</span> Today.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 font-medium leading-relaxed">
                Join thousands of citizens who have benefited from free healthcare services. 
                Geometric balance in public healthcare utility.
              </p>
              <Link
                to="/camps"
                className="geometric-btn-primary px-8 lg:px-10 py-4 lg:py-5 text-sm lg:text-base inline-block"
              >
                Browse Camps Now
              </Link>
            </div>
            
            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <div className="bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-2xl max-w-sm mx-auto">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-900/50">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-black text-xl sm:text-2xl tracking-tighter uppercase leading-none">HealthConnect</h4>
                    <p className="text-slate-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Indore City</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-3/4 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="h-3 w-1/2 bg-white/10 rounded-full"></div>
                  <div className="h-1 w-full bg-blue-500/30 rounded-full mt-6"></div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-800/50 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
