interface Project {
  name: string;
  description: string;
  responsibilities?: string[]; // Optional, since some projects have no responsibilities
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  duration: string;
  technologiesUsed?: string[]; // Optional field, present in some records
  projects: Project[];
}
