import React from 'react';
import { Map, Marker } from 'pigeon-maps';
import { 
  MapPin, Calendar, Clock, Phone, ExternalLink, 
  Search, Filter, ChevronRight, Stethoscope, AlertCircle, Users
} from 'lucide-react';
import { HealthCamp } from '../types';
import { AREAS, TEST_TYPES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

const CampCard: React.FC<{ camp: HealthCamp; onClick: () => void }> = ({ camp, onClick }) => {
  return (
    <motion.div
      layout
      className="geometric-card overflow-hidden group h-full flex flex-col"
    >
      <div className="p-1 shrink-0">
        <div className="relative h-56 rounded-[28px] overflow-hidden bg-slate-200">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
          <img 
            src={camp.imageUrl} 
            alt={camp.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">Approved</span>
            <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">{camp.area}</span>
          </div>
          <div className="absolute bottom-4 left-4 z-20 pr-4">
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">By {camp.organizerName}</p>
            <h3 className="text-white text-2xl font-black tracking-tight leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
              {camp.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">
          <span className="text-slate-900 border-b border-blue-600 pb-0.5">{new Date(camp.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
          <span>•</span>
          <span>{camp.startTime} — {camp.endTime}</span>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-8 line-clamp-2 font-medium flex-grow">
          {camp.description}
        </p>

        <div className="flex gap-2">
          <button 
            onClick={onClick}
            className="flex-1 geometric-btn-primary py-3.5"
          >
            View Details
          </button>
          <a 
            href={camp.googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100 flex items-center justify-center shadow-sm"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Camps = () => {
  const { camps } = useApp();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedArea, setSelectedArea] = React.useState('All');
  const [selectedTest, setSelectedTest] = React.useState('All');
  const [selectedCamp, setSelectedCamp] = React.useState<HealthCamp | null>(null);

  const filteredCamps = camps.filter(camp => {
    const matchesSearch = camp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          camp.organizerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          camp.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === 'All' || camp.area === selectedArea;
    const matchesTest = selectedTest === 'All' || camp.availableTests.includes(selectedTest);
    const isApproved = camp.status === 'APPROVED';
    
    return matchesSearch && matchesArea && matchesTest && isApproved;
  });

  return (
    <div className="min-h-screen pt-8 sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-bold text-xs sm:text-sm mb-4 uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-8 sm:w-10 h-0.5 bg-blue-600"></span>
              Discovery Engine
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6">Discover Free <br className="hidden sm:block" /><span className="text-blue-600">Health Camps</span></h1>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              Browse through verified health camps organized by trusted medical facilities across Indore.
            </p>
          </div>
          <div className="shrink-0 flex gap-6 sm:gap-8 border-l border-slate-200 pl-6 sm:pl-8">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter">12</p>
              <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-widest">Active Today</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter">4.8k</p>
              <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-widest">Users Helped</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="sm:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by hospital name or area..." 
                className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-slate-50 border-none rounded-xl sm:rounded-2xl text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all font-medium text-sm sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select 
                className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-slate-50 border-none rounded-xl sm:rounded-2xl text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all font-medium appearance-none text-sm sm:text-base"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="All">All Areas</option>
                {AREAS.map(area => <option key={area} value={area}>{area}</option>)}
              </select>
            </div>

            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select 
                className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-slate-50 border-none rounded-xl sm:rounded-2xl text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all font-medium appearance-none text-sm sm:text-base"
                value={selectedTest}
                onChange={(e) => setSelectedTest(e.target.value)}
              >
                <option value="All">All Tests</option>
                {TEST_TYPES.map(test => <option key={test} value={test}>{test}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredCamps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCamps.map((camp) => (
                <CampCard 
                  key={camp.id} 
                  camp={camp} 
                  onClick={() => setSelectedCamp(camp)} 
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No camps found</h3>
            <p className="text-slate-500">Try adjusting your filters or searching for something else.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCamp && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCamp(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row shadow-black/20"
            >
              <div className="lg:w-2/5 h-64 lg:h-auto shrink-0 relative">
                <img 
                  src={selectedCamp.imageUrl} 
                  className="w-full h-full object-cover font-sans" 
                  alt={selectedCamp.name} 
                />
                <button 
                  onClick={() => setSelectedCamp(null)}
                  className="absolute top-6 left-6 lg:hidden bg-white/90 p-2 rounded-full shadow-lg"
                >
                  <ChevronRight className="h-6 w-6 rotate-180" />
                </button>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 flex-1 relative">
                <button 
                  onClick={() => setSelectedCamp(null)}
                  className="absolute top-8 right-8 hidden lg:flex bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-all"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
                  Free Medical Camp
                </div>
                
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{selectedCamp.name}</h2>
                <p className="text-lg font-bold text-blue-600 mb-8">{selectedCamp.organizerName}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <div className="p-2.5 bg-slate-50 rounded-xl">
                      <Calendar className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Date</p>
                      <p className="font-bold text-sm">{new Date(selectedCamp.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <div className="p-2.5 bg-slate-50 rounded-xl">
                      <Clock className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Timings</p>
                      <p className="font-bold text-sm">{selectedCamp.startTime} - {selectedCamp.endTime}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Description</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{selectedCamp.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Available Free Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCamp.availableTests.map((test) => (
                      <div key={test} className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-xl text-xs font-bold border border-green-100">
                        <Stethoscope className="h-3.5 w-3.5 mr-2" />
                        {test}
                      </div>
                    ))}
                  </div>
                </div>

                {selectedCamp.doctors && (
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Attending Doctors</h4>
                    <div className="flex flex-wrap gap-4 text-slate-600 text-sm font-medium">
                      {selectedCamp.doctors.map((doc, idx) => (
                        <div key={idx} className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-blue-400" />
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="h-48 w-full bg-slate-100 relative">
                    {selectedCamp.coordinates ? (
                      <Map 
                        height={192} 
                        defaultCenter={[selectedCamp.coordinates.lat, selectedCamp.coordinates.lng]} 
                        defaultZoom={15}
                        metaWheelZoom={false}
                      >
                        <Marker width={40} anchor={[selectedCamp.coordinates.lat, selectedCamp.coordinates.lng]} color="#ef4444" />
                      </Map>
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400 font-medium">
                        Coordinates not available
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <MapPin className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400 mb-0.5">Location Address</p>
                          <p className="text-xs font-bold text-slate-800 leading-tight">{selectedCamp.address}</p>
                        </div>
                      </div>
                      <a 
                        href={selectedCamp.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-800 transition-all shadow-sm"
                        title="Open in Google Maps"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center text-slate-500">
                    <Phone className="h-5 w-5 mr-3 text-blue-500" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider">Helpdesk</p>
                      <p className="text-sm font-bold text-slate-800">{selectedCamp.contactNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-slate-400 italic">Open for all citizens of Indore</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Camps;
