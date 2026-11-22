export const contactData = {
  email: "sabbirhassanshuvo71@gmail.com",
  phone: "01639208102",
  location: "Dhaka, Bangladesh",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/SabbirHassanShuvo",
      icon: "🔗",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sabbirhassan100",
      icon: "💼",
    },
    {
      name: "Portfolio",
      url: "https://sabbir-hassan.vercel.app/",
      icon: "🌐",
    },
    {
      name: "Email",
      url: "mailto:sabbirhassanshuvo71@gmail.com",
      icon: "✉️",
    },
  ],
  resumeLink: "https://drive.google.com/file/d/1lmnxQrSp9G2pdfqFR0fzEWJfpkrvM03C/view?usp=sharing",
};

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
