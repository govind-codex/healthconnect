import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Calendar, MapPin, Users, Heart, ArrowRight, CheckCircle2, 
  Stethoscope, Activity, Eye, Thermometer, ShieldCheck 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, 
  staggerContainer, staggerItem, staggerItemScale,
  useCountUp
} from '../utils/useAnimations';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="relative bg-white overflow-hidden pt-8 lg:pt-12 pb-20 lg:pb-32">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-indigo-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/20 rounded-full blur-[80px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div
            style={{ opacity }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <motion.p
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-blue-600 font-bold text-xs sm:text-sm mb-4 uppercase tracking-[0.2em] flex items-center justify-center lg:justify-start gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-0.5 bg-blue-600 inline-block"
              />
              Available Now in Indore
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6 sm:mb-8"
            >
              {['Find', 'Free'].map((word, i) => (
                <motion.span key={i} variants={staggerItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              <motion.span variants={staggerItem} className="inline-block mr-3">Health</motion.span>
              <br className="hidden sm:block" />
              <motion.span variants={staggerItem} className="inline-block text-blue-600">Camps</motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mb-8 sm:mb-10 font-medium mx-auto lg:mx-0"
            >
              Discover free medical checkups, blood tests, and specialist consultations across Indore limits. 
              Geometric balance in healthcare discovery.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/camps"
                  className="geometric-btn-primary px-8 py-4 text-sm w-full sm:w-auto text-center block shadow-lg shadow-blue-200/50"
                >
                  Explore Camps
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/login?role=ORGANIZER"
                  className="bg-slate-100 text-slate-600 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all w-full sm:w-auto text-center block"
                >
                  Become Partner
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-12 lg:mt-0 lg:col-span-6 px-4 sm:px-0"
          >
            <motion.div
              style={{ y }}
              className="relative"
            >
              <div className="relative p-2 bg-white rounded-[40px] shadow-2xl shadow-slate-200 overflow-hidden group">
                <img
                  className="rounded-[32px] w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Indore Health"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 animate-float-slow"
              >
                <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] shadow-2xl">
                  <CountUpBadge value="12" />
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Today</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CountUpBadge: React.FC<{ value: string }> = ({ value }) => {
  const num = parseInt(value, 10);
  const [ref, count] = useCountUp(num, 1500);

  return (
    <p ref={ref as React.Ref<HTMLParagraphElement>} className="text-2xl sm:text-3xl font-black mb-1 tracking-tighter">
      {count}
    </p>
  );
};

const StatCounter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, '');
  const [ref, count] = useCountUp(num, 2000);

  return (
    <div className="text-center">
      <p ref={ref as React.Ref<HTMLParagraphElement>} className="text-3xl sm:text-5xl font-black text-white mb-2 tracking-tighter">
        {count}{suffix}
      </p>
      <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
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
    <div className="bg-slate-900 py-12 lg:py-16 relative overflow-hidden">
      {/* Subtle animated accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px] animate-blob animation-delay-2000" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={staggerItemScale}>
              <StatCounter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </motion.div>
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <motion.div variants={staggerItem} className="text-center md:text-left">
            <p className="text-blue-600 font-bold text-xs sm:text-sm mb-4 uppercase tracking-[0.2em]">Diagnostic Services</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Free Medical <br className="hidden sm:block" />Health Tests</h2>
          </motion.div>
          <motion.p variants={staggerItem} className="text-slate-500 font-medium max-w-sm text-center md:text-right hidden sm:block">
            Most of our camps provide these essential diagnostic services completely free of charge to all citizens.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {tests.map((test, idx) => (
            <motion.div
              variants={staggerItemScale}
              whileHover={{ y: -8, scale: 1.03 }}
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-blue-100/40 transition-shadow duration-500 group"
            >
              <motion.div
                whileHover={{ rotate: [0, -15, 15, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`${test.color} p-4 sm:p-5 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-sm transition-transform duration-300`}
              >
                <test.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </motion.div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest">{test.name}</span>
            </motion.div>
          ))}
        </motion.div>
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:grid lg:grid-cols-3 lg:gap-20"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="mb-12 lg:mb-0 text-center lg:text-left flex flex-col items-center lg:items-start group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-4 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 lg:mb-8 shadow-xl shadow-blue-100 group-hover:shadow-2xl group-hover:shadow-blue-200 transition-shadow duration-500"
              >
                <feature.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-slate-900 rounded-[32px] sm:rounded-[48px] p-8 sm:p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group"
          >
            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[0.95]"
              >
                Start Your Free <br className="hidden sm:block" /><span className="text-blue-500">Checkup</span> Today.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 font-medium leading-relaxed"
              >
                Join thousands of citizens who have benefited from free healthcare services. 
                Geometric balance in public healthcare utility.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link
                    to="/camps"
                    className="geometric-btn-primary px-8 lg:px-10 py-4 lg:py-5 text-sm lg:text-base inline-block shadow-lg shadow-blue-900/30"
                  >
                    Browse Camps Now
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 shrink-0 w-full lg:w-auto"
            >
              <div className="bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-2xl max-w-sm mx-auto animate-float-slow">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-900/50"
                  >
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8" />
                  </motion.div>
                  <div className="text-left">
                    <h4 className="text-white font-black text-xl sm:text-2xl tracking-tighter uppercase leading-none">HealthConnect</h4>
                    <p className="text-slate-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Indore City</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-3/4 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-white/40 rounded-full"
                    />
                  </div>
                  <div className="h-3 w-1/2 bg-white/10 rounded-full"></div>
                  <div className="h-1 w-full bg-blue-500/30 rounded-full mt-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-800/50 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
