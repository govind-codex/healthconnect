import React from 'react';
import { 
  Phone, AlertTriangle, ShieldCheck, Heart, 
  MapPin, Clock, Info, ArrowRight, Ambulance, 
  Droplet, PhoneForwarded, Cross
} from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/mockData';
import { motion } from 'motion/react';

const Emergency = () => {
  return (
    <div className="min-h-screen py-12 lg:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-red-600 font-bold text-xs sm:text-sm mb-4 uppercase tracking-[0.2em] flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 sm:w-10 h-0.5 bg-red-600"></span>
              Emergency Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6">Indore Helpline <br className="hidden sm:block" /><span className="text-red-600">Directory</span></h1>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              Immediate medical assistance and emergency contact information for the citizens of Indore limits. 
            </p>
          </div>
          <div className="shrink-0 bg-white p-2 rounded-[32px] sm:rounded-[40px] shadow-2xl shadow-red-100 border border-red-50 mx-auto lg:mx-0">
            <div className="bg-red-600 p-8 sm:p-10 rounded-[24px] sm:rounded-[32px] text-white flex flex-col items-center">
              <Phone className="h-8 w-8 sm:h-10 sm:w-10 mb-4 animate-bounce" />
              <p className="text-[10px] sm:text-xs font-bold opacity-80 uppercase tracking-widest mb-1">State Ambulance</p>
              <p className="text-5xl sm:text-6xl font-black tracking-tighter">108</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 lg:mb-24">
          {EMERGENCY_CONTACTS.map((contact) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={contact.id}
              className="geometric-card p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                {contact.type === 'AMBULANCE' && <Ambulance size={120} />}
                {contact.type === 'BLOOD_BANK' && <Droplet size={120} />}
                {contact.type === 'HELPLINE' && <PhoneForwarded size={120} />}
                {contact.type === 'GOVERNMENT' && <Cross size={120} />}
              </div>

              <div className={
                `w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                 ${contact.type === 'AMBULANCE' ? 'bg-red-100 text-red-600' : 
                   contact.type === 'BLOOD_BANK' ? 'bg-rose-100 text-rose-600' :
                   contact.type === 'HELPLINE' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`
              }>
                {contact.type === 'AMBULANCE' && <Ambulance className="h-7 w-7" />}
                {contact.type === 'BLOOD_BANK' && <Droplet className="h-7 w-7" />}
                {contact.type === 'HELPLINE' && <PhoneForwarded className="h-7 w-7" />}
                {contact.type === 'GOVERNMENT' && <Cross className="h-7 w-7" />}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">{contact.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{contact.description}</p>
              
              <div className="mt-auto">
                <a 
                  href={`tel:${contact.number}`}
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-lg"
                >
                  {contact.number}
                  <Phone className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50">
          <div className="lg:flex items-start lg:items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 lg:mb-10">Government Health Facilities</h2>
              <div className="space-y-6 lg:space-y-8">
                <div className="flex gap-4 sm:gap-6">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1">M.Y. Hospital (Indore)</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">The largest government hospital in Central India, providing 24/7 tertiary care services.</p>
                    <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mt-2">M.G. Road, Indore</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-6">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600 border border-green-100">
                    <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1">District Hospital (Dhār Road)</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Public health facility focused on primary care and maternal health for all citizens.</p>
                    <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mt-2">Dhar Road, Indore</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-6">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-purple-600 border border-purple-100">
                    <Info className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1">Blood Cell (Red Cross)</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Centralized blood repository managing donations across all camps in the city.</p>
                    <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mt-2">Collectorate Campus, Indore</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Need Immediate Help?</h3>
                <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  If you are experiencing a life-threatening emergency, please call 108 immediately. 
                  Do not wait for a health camp to seek urgent medical attention.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 sm:mb-4">Poison Control</p>
                    <p className="text-lg sm:text-xl font-bold text-slate-900">0731-2525252</p>
                  </div>
                  <div className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 sm:mb-4">Police Help</p>
                    <p className="text-lg sm:text-xl font-bold text-slate-900">100 / 112</p>
                  </div>
                </div>
                <button className="w-full mt-6 sm:mt-8 py-3.5 sm:py-4 bg-red-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-red-700 transition-all flex items-center justify-center shadow-xl shadow-red-100">
                  Find Nearest Hospital
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
