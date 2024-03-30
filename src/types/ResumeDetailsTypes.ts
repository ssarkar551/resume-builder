export type PersonalInfo = {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  jobTitle: string;
  socialLinks: SocialLinks[];
};

export type SocialLinks = {
  socialMedia: string;
  link: string;
};

export type Education = {
  institution: string,
  location: string,
  degree: string,
  field: string,
  startDate: string,
  endDate: string,
  scoreType: string,
  score: string,
}

export type Experience = {
  organization: string,
  location: string,
  title: string,
  description: string,
  startDate: Date,
  endDate: Date,

}