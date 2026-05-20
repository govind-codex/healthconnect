import { HealthCamp, EmergencyContact } from '../types';

export const AREAS = [
  'Vijay Nagar', 'Palasia', 'Rau', 'Bhawarkuan', 'Annapurna', 
  'MG Road', 'Bengali Square', 'Rajendra Nagar', 'Geeta Bhawan', 'Sudama Nagar'
];

export const TEST_TYPES = [
  'ECG', 'BP Checkup', 'Sugar Test', 'Blood Group', 'Eye Checkup', 'General Health Checkup'
];

export const MOCK_CAMPS: HealthCamp[] = [
  {
    id: '1',
    name: 'Mega Heart & BP Camp',
    organizerId: 'org1',
    organizerName: 'CHL Hospital',
    date: '2026-06-15',
    startTime: '09:00',
    endTime: '14:00',
    address: 'Near Brilliant Convention Centre, Vijay Nagar',
    area: 'Vijay Nagar',
    availableTests: ['ECG', 'BP Checkup', 'General Health Checkup'],
    description: 'A comprehensive cardiac screening camp organized by CHL Hospital. Free consultations with senior cardiologists.',
    contactNumber: '+91 731-1234567',
    googleMapsLink: 'https://maps.google.com/?q=Brilliant+Convention+Centre+Indore',
    coordinates: { lat: 22.7533, lng: 75.8937 },
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'APPROVED',
    doctors: ['Dr. Rajesh Sharma', 'Dr. Amit Gupta'],
    eligibility: 'Above 18 years, Open for all'
  },
  {
    id: '2',
    name: 'Free Diabetic Screening',
    organizerId: 'org2',
    organizerName: 'Apollo Diagnostics',
    date: '2026-06-20',
    startTime: '08:00',
    endTime: '12:00',
    address: 'Saket Tower, Palasia Square',
    area: 'Palasia',
    availableTests: ['Sugar Test', 'Blood Group'],
    description: 'Early detection is key for diabetes. Get your fasting sugar and blood group tested for free.',
    contactNumber: '+91 731-9876543',
    googleMapsLink: 'https://maps.google.com/?q=Palasia+Square+Indore',
    coordinates: { lat: 22.7244, lng: 75.8839 },
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'APPROVED',
    doctors: ['Dr. Sunita Verma'],
    eligibility: 'Fasting required for 8 hours'
  },
  {
    id: '3',
    name: 'Community Vision Care',
    organizerId: 'org3',
    organizerName: 'Red Cross Indore',
    date: '2026-06-25',
    startTime: '10:00',
    endTime: '17:00',
    address: 'Community Hall, Sector B, Sudama Nagar',
    area: 'Sudama Nagar',
    availableTests: ['Eye Checkup', 'General Health Checkup'],
    description: 'Free eye screening and consultation for elderly and children. Distribution of free vitamin supplements.',
    contactNumber: '+91 731-5550123',
    googleMapsLink: 'https://maps.google.com/?q=Sudama+Nagar+Indore',
    coordinates: { lat: 22.6974, lng: 75.8333 },
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'APPROVED',
    doctors: ['Dr. Vikas Khanna', 'Dr. Priyanka Jha'],
    eligibility: 'Preference to Senior Citizens'
  },
  {
    id: '4',
    name: 'Wellness Drive for All',
    organizerId: 'org4',
    organizerName: 'Medanta Care Camp',
    date: '2026-07-05',
    startTime: '09:00',
    endTime: '15:00',
    address: 'Near Rajwada, MG Road',
    area: 'MG Road',
    availableTests: ['BP Checkup', 'Sugar Test', 'General Health Checkup'],
    description: 'General health checkup camp focusing on lifestyle diseases. Expert guidance on diet and exercise.',
    contactNumber: '+91 731-4443322',
    googleMapsLink: 'https://maps.google.com/?q=Rajwada+Indore',
    coordinates: { lat: 22.7196, lng: 75.8577 },
    imageUrl: 'https://images.unsplash.com/photo-1505751172107-1e5b38f87053?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'PENDING',
    doctors: ['Dr. Sanjay Mehra']
  },
  {
    id: '5',
    name: 'Children Orthopedic Camp',
    organizerId: 'org1',
    organizerName: 'CHL Hospital',
    date: '2026-07-10',
    startTime: '09:00',
    endTime: '13:00',
    address: 'Pediatric Wing, CHL Hospital, AB Road',
    area: 'MG Road',
    availableTests: ['General Health Checkup'],
    description: 'Special screening camp for bone-related issues in children. Consult with top orthopedic surgeons.',
    contactNumber: '+91 731-1234568',
    googleMapsLink: 'https://maps.google.com/?q=CHL+Hospital+Indore',
    coordinates: { lat: 22.7300, lng: 75.8800 },
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'APPROVED',
    doctors: ['Dr. Ramesh Iyer'],
    eligibility: 'Children below 15 years'
  },
  {
    id: '6',
    name: 'Blood Pressure Awareness',
    organizerId: 'org5',
    organizerName: 'Care NGO',
    date: '2026-07-12',
    startTime: '07:00',
    endTime: '11:00',
    address: 'Meghdoot Garden Entrance',
    area: 'Vijay Nagar',
    availableTests: ['BP Checkup'],
    description: 'Early morning BP checkup for morning walkers at Meghdoot Garden. Stay fit, stay healthy.',
    contactNumber: '+91 731-2223334',
    googleMapsLink: 'https://maps.google.com/?q=Meghdoot+Garden+Indore',
    coordinates: { lat: 22.7554, lng: 75.8904 },
    imageUrl: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'APPROVED',
    doctors: ['Dr. Manish Jain'],
    eligibility: 'Open for all'
  },
  {
    id: '7',
    name: 'Skin & Hair Care Camp',
    organizerId: 'org2',
    organizerName: 'Apollo Diagnostics',
    date: '2026-07-15',
    startTime: '11:00',
    endTime: '16:00',
    address: 'Apollo Clinic, Scheme 54',
    area: 'Vijay Nagar',
    availableTests: ['General Health Checkup'],
    description: 'Consult with dermatologists regarding seasonal skin issues and hair fall problems.',
    contactNumber: '+91 731-9876544',
    googleMapsLink: 'https://maps.google.com/?q=Apollo+Clinic+Indore',
    coordinates: { lat: 22.7500, lng: 75.8950 },
    imageUrl: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'APPROVED',
    doctors: ['Dr. Kavita Singh'],
    eligibility: 'None'
  },
  {
    id: '8',
    name: 'Anemia Detection Camp',
    organizerId: 'org3',
    organizerName: 'Red Cross Indore',
    date: '2026-07-18',
    startTime: '10:00',
    endTime: '15:00',
    address: 'Govt School, Rajendra Nagar',
    area: 'Rajendra Nagar',
    availableTests: ['Blood Group', 'General Health Checkup'],
    description: 'Hemoglobin testing and consultation for women and children to detect and prevent anemia.',
    contactNumber: '+91 731-5550124',
    googleMapsLink: 'https://maps.google.com/?q=Rajendra+Nagar+Indore',
    coordinates: { lat: 22.6800, lng: 75.8200 },
    imageUrl: 'https://images.unsplash.com/photo-1505751172107-1e5b38f87053?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'APPROVED',
    doctors: ['Dr. Seema Gupta'],
    eligibility: 'Women and Children'
  }
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'e1',
    title: 'Ambulance Service',
    number: '108',
    description: 'Free government ambulance service for emergencies across Madhya Pradesh.',
    type: 'AMBULANCE'
  },
  {
    id: 'e2',
    title: 'Indore Blood Bank',
    number: '+91 731-2525252',
    description: 'Centralized blood repository and emergency blood support.',
    type: 'BLOOD_BANK'
  },
  {
    id: 'e3',
    title: 'Women Helpline',
    number: '1090',
    description: 'Immediate assistance for women in distress or medical emergency.',
    type: 'HELPLINE'
  },
  {
    id: 'e4',
    title: 'Govt. Health Support',
    number: '181',
    description: 'Information regarding CM Health Schemes and government facilities.',
    type: 'GOVERNMENT'
  }
];
