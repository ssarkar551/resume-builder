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
