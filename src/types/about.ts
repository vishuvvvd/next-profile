interface Award {
  id: string;
  award: string;
  company: string;
  description: string;
}

export interface KeyExperience {
  frontendDevelopment: {
    technology: string;
    description: string;
  }[];
  backendDevelopment: {
    technology: string;
    description: string;
  }[];
  authenticationSecurity: {
    technology: string;
    description: string;
  }[];
  aws: {
    technology: string;
    description: string;
  }[];
}

interface Journey {
  overview: string;
  learning: string;
}

interface AboutMe {
  intro: string;
  previousExperience: string;
  awards: Award[];
}

export interface Profile {
  aboutMe: AboutMe;
  keyExperience: KeyExperience;
  journey: Journey;
}

export type Education = {
  degree: string;
  institution: string;
  duration: string;
};
