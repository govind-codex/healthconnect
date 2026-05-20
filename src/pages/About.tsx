import React from 'react';
import { ShieldCheck, Heart, Users, Target, Rocket, Award } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 bg-white">
      {/* Narrative Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Bridging the Gap in <br className="hidden sm:block" /><span className="text-blue-600">Healthcare Access</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto px-4">
            HealthCamp Connect is Indore's first dedicated platform for discovering free health camps. 
            We believe that financial constraints should never stand in the way of basic medical screening.
          </p>
        </div>
        
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
          className="w-full h-64 sm:h-96 object-cover rounded-[2rem] sm:rounded-[3rem] shadow-2xl"
          alt="Healthcare team"
        />
      </div>

      {/* Mission & Vision */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
            <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg shadow-blue-100">
                <Target className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                To simplify the discovery of free medical services across Indore by creating a 
                transparent platform where hospitals, NGOs, and citizens connect seamlessly. 
                Our goal is to reach the underserved communities and promote regular health checkups.
              </p>
            </div>
            <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg shadow-green-100">
                <Rocket className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Our Vision</h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We envision an Indore where every citizen is aware of and has access to free 
                preventative healthcare. We aim to become the standard for community medical 
                coordination, leveraging technology to save lives and improve health statistics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Transparency', icon: ShieldCheck, desc: 'Every camp is verified for authenticity before being listed on the platform.' },
              { title: 'Community', icon: Users, desc: 'Built by the people of Indore, for the people of Indore. Community-first always.' },
              { title: 'Empathy', icon: Heart, desc: 'We understand the struggles of accessing healthcare and design with kindness.' },
              { title: 'Excellence', icon: Award, desc: 'Partnering only with reputable medical institutions to ensure quality care.' }
            ].map((v, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all border border-transparent group-hover:border-blue-100">
                  <v.icon className="h-10 w-10" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Impact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to make an impact?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              If you are a medical professional, hospital administrator, or an NGO lead, 
              join our network and help us organize more camps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all">
                Join our Network
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20">
                Contact our Team
              </button>
            </div>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-slate-100/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
