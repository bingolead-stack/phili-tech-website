export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Statistic {
  value: string;
  label: string;
}
