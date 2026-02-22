export interface Service {
  icon: any;
  title: string;
  description: string;
  color: string;
}

export interface Project {
  title: string;
  laptop: string;
  phone: string;
  url: string;
}

export interface ProcessStep {
  icon: any;
  title: string;
  description: string;
  color: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export type SubmissionStatus = "idle" | "submitting" | "success" | "error";
