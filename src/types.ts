export type UserRole = 'PUBLIC' | 'ORGANIZER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
}

export type CampStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface HealthCamp {
  id: string;
  name: string;
  organizerId: string;
  organizerName: string;
  date: string;
  startTime: string;
  endTime: string;
  address: string;
  area: string;
  availableTests: string[];
  description: string;
  contactNumber: string;
  googleMapsLink: string;
  coordinates?: { lat: number; lng: number };
  imageUrl: string;
  status: CampStatus;
  doctors?: string[];
  eligibility?: string;
}

export interface EmergencyContact {
  id: string;
  title: string;
  number: string;
  description: string;
  type: 'AMBULANCE' | 'BLOOD_BANK' | 'HELPLINE' | 'GOVERNMENT';
}
