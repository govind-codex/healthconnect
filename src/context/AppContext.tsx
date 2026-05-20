import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, HealthCamp, UserRole } from '../types';
import { MOCK_CAMPS } from '../data/mockData';

interface AppContextType {
  user: User | null;
  camps: HealthCamp[];
  login: (role: UserRole) => void;
  logout: () => void;
  addCamp: (camp: Omit<HealthCamp, 'id' | 'status'>) => void;
  updateCamp: (id: string, updates: Partial<HealthCamp>) => void;
  deleteCamp: (id: string) => void;
  approveCamp: (id: string) => void;
  rejectCamp: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [camps, setCamps] = useState<HealthCamp[]>(MOCK_CAMPS);

  // Persistence (optional but good for a "real" feel)
  useEffect(() => {
    const savedCamps = localStorage.getItem('hc_camps');
    if (savedCamps) {
      setCamps(JSON.parse(savedCamps));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hc_camps', JSON.stringify(camps));
  }, [camps]);

  const login = (role: UserRole) => {
    if (role === 'ADMIN') {
      setUser({ id: 'admin1', name: 'Super Admin', email: 'admin@healthcamp.in', role: 'ADMIN' });
    } else if (role === 'ORGANIZER') {
      setUser({ 
        id: 'org1', 
        name: 'Nihal Goud', 
        email: 'org@hospital.com', 
        role: 'ORGANIZER', 
        organization: 'CHL Hospital' 
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const addCamp = (campData: Omit<HealthCamp, 'id' | 'status'>) => {
    const newCamp: HealthCamp = {
      ...campData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'PENDING'
    };
    setCamps(prev => [newCamp, ...prev]);
  };

  const updateCamp = (id: string, updates: Partial<HealthCamp>) => {
    setCamps(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  const deleteCamp = (id: string) => {
    setCamps(prev => prev.filter(c => c.id !== id));
  };

  const approveCamp = (id: string) => {
    updateCamp(id, { status: 'APPROVED' });
  };

  const rejectCamp = (id: string) => {
    updateCamp(id, { status: 'REJECTED' });
  };

  return (
    <AppContext.Provider value={{ 
      user, camps, login, logout, addCamp, updateCamp, deleteCamp, approveCamp, rejectCamp 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
