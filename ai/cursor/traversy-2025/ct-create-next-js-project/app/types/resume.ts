export interface Resume {
  name: string;
  email: string;
  phone?: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  skill: string[];
}

