export interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'agricultural';
  description: string;
  details: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  applications: string[];
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
} 