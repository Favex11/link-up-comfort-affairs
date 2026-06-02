export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: "property" | "facility";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
