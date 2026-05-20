import React from 'react';
import { 
  Users, Calendar, CheckCircle2, Clock, 
  TrendingUp, ArrowUpRight, ArrowDownRight, 
  Trash2, XCircle, MoreVertical 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';

const AdminDashboard = () => {
  const { camps, approveCamp, rejectCamp, deleteCamp } = useApp();

  const totalCamps = camps.length;
  const pendingCamps = camps.filter(c => c.status === 'PENDING').length;
  const approvedCamps = camps.filter(c => c.status === 'APPROVED').length;
  const uniqueOrganizers = new Set(camps.map(c => c.organizerId)).size;

  const stats = [
    { label: 'Total Camps', value: totalCamps, icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+12%', up: true },
    { label: 'Pending Approval', value: pendingCamps, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', trend: '-2%', up: false },
    { label: 'Live Camps', value: approvedCamps, icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', trend: '+8%', up: true },
    { label: 'Active Organizers', value: uniqueOrganizers, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50', trend: '+4%', up: true },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={stat.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600' + ' px-2 py-1 rounded-lg text-xs font-bold flex items-center'}>
                {stat.up ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h2 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Approval Queue */}
      <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Camp Approval Queue</h3>
            <p className="text-xs text-slate-400 font-medium">Manage pending health camp requests</p>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Camp Details</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Organizer</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date & Time</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {camps.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-8 py-12 text-center text-slate-400 font-medium">
                    No camps found in the system.
                  </td>
                </tr>
              ) : (
                camps.map((camp) => (
                  <tr key={camp.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-8 py-5">
                      <div>
                        <p className="font-bold text-slate-900">{camp.name}</p>
                        <p className="text-xs text-slate-400">{camp.area}, Indore</p>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm font-semibold text-slate-600">{camp.organizerName}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-xs">
                        <p className="font-bold text-slate-700">{new Date(camp.date).toLocaleDateString()}</p>
                        <p className="text-slate-400">{camp.startTime}</p>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={
                        `px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest 
                         ${camp.status === 'APPROVED' ? 'bg-green-50 text-green-700 border border-green-100' : 
                           camp.status === 'PENDING' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 
                           'bg-red-50 text-red-700 border border-red-100'}`
                      }>
                        {camp.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {camp.status === 'PENDING' && (
                          <>
                            <button 
                              onClick={() => approveCamp(camp.id)}
                              className="p-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors"
                              title="Approve"
                            >
                              <CheckCircle2 className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => rejectCamp(camp.id)}
                              className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
                              title="Reject"
                            >
                              <XCircle className="h-4 w-4" />
                            </button>
                          </>
                        )}
                        <button 
                          onClick={() => deleteCamp(camp.id)}
                          className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                          title="Delete Permanently"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid of secondary info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900">Recent Platform Activity</h3>
            <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">New organizer signed up</p>
                  <p className="text-xs text-slate-400 mt-0.5">Apollo Clinic, Vijay Nagar branch has joined the platform.</p>
                  <p className="text-[10px] font-bold text-blue-600 mt-2">2 HOURS AGO</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Platform Settings</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-xs font-bold text-white/40 uppercase mb-2">Auto-Approval</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Enabled for VIP partners</span>
                <div className="w-8 h-4 bg-blue-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-xs font-bold text-white/40 uppercase mb-2">Email Notifications</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Admin daily digest</span>
                <div className="w-8 h-4 bg-blue-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
            System Maintenance
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
