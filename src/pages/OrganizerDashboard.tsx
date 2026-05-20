import React, { useState } from 'react';
import { 
  Plus, Calendar, Clock, MapPin, 
  Trash2, Edit2, AlertCircle, CheckCircle2, 
  Image as ImageIcon, Phone, Send, X, ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AREAS, TEST_TYPES } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { HealthCamp } from '../types';

const OrganizerDashboard = () => {
  const { user, camps, addCamp, deleteCamp, updateCamp } = useApp();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCamp, setEditingCamp] = useState<HealthCamp | null>(null);

  // Filter camps created by this organizer
  const myCamps = camps.filter(c => c.organizerId === user?.id);
  const stats = [
    { label: 'My Camps', value: myCamps.length, icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Approved', value: myCamps.filter(c => c.status === 'APPROVED').length, icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Pending', value: myCamps.filter(c => c.status === 'PENDING').length, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  const handleToggleForm = () => {
    setEditingCamp(null);
    setShowAddForm(!showAddForm);
  };

  const handleEdit = (camp: HealthCamp) => {
    setEditingCamp(camp);
    setShowAddForm(true);
  };

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Welcome, {user?.name}</h2>
          <p className="text-slate-500 font-medium">Manage health camps on behalf of <span className="text-blue-600 font-bold">{user?.organization}</span></p>
        </div>
        <button
          onClick={handleToggleForm}
          className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Camp</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h2 className="text-2xl font-black text-slate-900">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* My Camps List */}
        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">My Health Camps</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {myCamps.length === 0 ? (
              <div className="px-8 py-16 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-slate-300" />
                </div>
                <p className="text-slate-400 font-medium">You haven't added any camps yet.</p>
                <button 
                  onClick={handleToggleForm}
                  className="mt-4 text-sm font-bold text-blue-600 hover:underline"
                >
                  Create your first camp
                </button>
              </div>
            ) : (
              myCamps.map((camp) => (
                <div key={camp.id} className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-center space-x-6">
                    <img src={camp.imageUrl} alt={camp.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm border border-slate-100" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{camp.name}</h4>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-slate-400" />
                          {new Date(camp.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-xs text-slate-500">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-slate-400" />
                          {camp.area}
                        </div>
                        <div className="flex items-center text-xs text-slate-500">
                          <CheckCircle2 className={`h-3.5 w-3.5 mr-1 ${camp.status === 'APPROVED' ? 'text-green-500' : 'text-amber-500'}`} />
                          <span className={camp.status === 'APPROVED' ? 'text-green-600 font-semibold' : 'text-amber-600 font-semibold'}>
                            {camp.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleEdit(camp)}
                      className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => deleteCamp(camp.id)}
                      className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button className="px-5 py-2 text-sm font-bold text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all ml-2">
                      View Stats
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Slide-over Form Overlay */}
      <AnimatePresence>
        {showAddForm && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleToggleForm}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{editingCamp ? 'Edit Health Camp' : 'Register New Health Camp'}</h3>
                  <p className="text-sm text-slate-500 font-medium">Fill in the details to list your free medical camp</p>
                </div>
                <button 
                  onClick={handleToggleForm}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <CampForm 
                  initialData={editingCamp} 
                  onSubmit={(data) => {
                    if (editingCamp) {
                      updateCamp(editingCamp.id, data);
                    } else {
                      addCamp({
                        ...data,
                        organizerId: user?.id || 'unknown',
                        organizerName: user?.organization || 'unknown',
                      });
                    }
                    handleToggleForm();
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CampForm = ({ initialData, onSubmit }: { initialData?: HealthCamp | null, onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    date: initialData?.date || '',
    startTime: initialData?.startTime || '09:00',
    endTime: initialData?.endTime || '17:00',
    address: initialData?.address || '',
    area: initialData?.area || AREAS[0],
    availableTests: initialData?.availableTests || [],
    description: initialData?.description || '',
    contactNumber: initialData?.contactNumber || '',
    googleMapsLink: initialData?.googleMapsLink || '',
    imageUrl: initialData?.imageUrl || 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    doctors: initialData?.doctors?.join(', ') || '',
    eligibility: initialData?.eligibility || ''
  });

  const toggleTest = (test: string) => {
    setFormData(prev => ({
      ...prev,
      availableTests: prev.availableTests.includes(test)
        ? prev.availableTests.filter(t => t !== test)
        : [...prev.availableTests, test]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      doctors: formData.doctors.split(',').filter(d => d.trim())
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-12">
      {/* General Information */}
      <section>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <Calendar className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-slate-800">General Information</h4>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Camp Name</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Mega Diabetic Screening Camp"
              className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Date</label>
              <input 
                type="date" 
                required
                className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Start Time</label>
                <input 
                  type="time" 
                  className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                  value={formData.startTime}
                  onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">End Time</label>
                <input 
                  type="time" 
                  className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                  value={formData.endTime}
                  onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-red-100 p-2 rounded-lg text-red-600">
            <MapPin className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-slate-800">Location Settings</h4>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Area / Locality</label>
            <select 
              className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium appearance-none"
              value={formData.area}
              onChange={(e) => setFormData({...formData, area: e.target.value})}
            >
              {AREAS.map(area => <option key={area} value={area}>{area}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Address</label>
            <textarea 
              rows={3}
              placeholder="Building name, landmark, street detail..."
              className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium resize-none"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Google Maps Link</label>
            <input 
              type="url" 
              placeholder="https://maps.google.com/?q=..."
              className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium"
              value={formData.googleMapsLink}
              onChange={(e) => setFormData({...formData, googleMapsLink: e.target.value})}
            />
          </div>
        </div>
      </section>

      {/* Medical Services */}
      <section>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-green-100 p-2 rounded-lg text-green-600">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-slate-800">Medical Services</h4>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Select Available Free Tests</label>
            <div className="flex flex-wrap gap-3">
              {TEST_TYPES.map((test) => (
                <button
                  key={test}
                  type="button"
                  onClick={() => toggleTest(test)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    formData.availableTests.includes(test)
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100'
                      : 'bg-white text-slate-500 border-slate-200 hover:border-blue-400'
                  }`}
                >
                  {test}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Available Doctors (Optional)</label>
            <input 
              type="text" 
              placeholder="Separated by commas (e.g. Dr. Verma, Dr. Shiv)"
              className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium"
              value={formData.doctors}
              onChange={(e) => setFormData({...formData, doctors: e.target.value})}
            />
          </div>
        </div>
      </section>

      {/* Details & Images */}
      <section>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
            <ImageIcon className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-slate-800">Media & Details</h4>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Camp Description</label>
            <textarea 
              rows={4}
              placeholder="Tell people about the camp, specialities, or mission..."
              className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium resize-none"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Public Contact Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input 
                type="tel" 
                placeholder="+91 00000 00000"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                value={formData.contactNumber}
                onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Cover Image URL</label>
            <input 
              type="url" 
              placeholder="https://..."
              className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all font-medium"
              value={formData.imageUrl}
              onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
            />
          </div>
        </div>
      </section>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center space-x-2"
        >
          <span>{initialData ? 'Save Changes' : 'Submit for Approval'}</span>
          <Send className="h-5 w-5" />
        </button>
        <p className="mt-4 text-center text-xs text-slate-400">
          * New camps will be visible to public after admin verification.
        </p>
      </div>
    </form>
  );
};

export default OrganizerDashboard;
