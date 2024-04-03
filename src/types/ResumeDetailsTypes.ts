export type PersonalInfo = {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  jobTitle: string;
  socialLinks: SocialLinks[];
};

export type SocialLinks = {
  socialMedia: "Github" | "LinkedIn" | "Twitter" | "Portfolio";
  link: string;
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  field: string;
  educationStartDate: string;
  educationEndDate: string;
  scoreType: string;
  score: string;
};

export type Experience = {
  organization: string;
  location: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
};

export type Skills = {
  languages: string;
  libraries: string;
  platforms: string;
};

export type Project = {
  projectTitle: string;
  technologies: string;
  projectLinks: string;
  description: string;
  projectStart: string;
  projectEnd: string;
};
