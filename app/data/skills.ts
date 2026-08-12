// src/data/skillsData.ts

export interface Skill {
  name: string;
}

export interface SkillsCategory {
  id: number;
  category: string;
  icon?: string;           // Optional emoji or icon
  skills: Skill[];
}

export const skillsData: SkillsCategory[] = [
  {
    id: 1,
    category: "Backend & Laravel",
    icon: "🛠️",
    skills: [
      { name: "Laravel" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "RESTful API" },
      { name: "Eloquent ORM" },
      { name: "Authentication / JWT / OTP" },
      { name: "Laravel Reverb (WebSockets)" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "MVC Architecture" },
    ],
  },
  {
    id: 2,
    category: "Frontend & React",
    icon: "⚡",
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "React Hook Form" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    id: 3,
    category: "Servers & DevOps",
    icon: "🚀",
    skills: [
      { name: "VPS Hosting" },
      { name: "Server Deployment" },
      { name: "Hostinger & Namecheap" },
      { name: "Cron Jobs & Automation" },
      { name: "SMTP & Mail Configuration" },
      { name: "SMS Gateway Integration" },
      { name: "Docker" },
      { name: "Git & GitHub" },
      { name: "Postman" },
    ],
  },
  {
    id: 4,
    category: "Additional Expertise",
    icon: "💡",
    skills: [
      { name: "Real-time Chat & WebSockets" },
      { name: "Stripe & PayPal Gateways" },
      { name: "Webhook Handling" },
      { name: "Video & Audio Calling" },
      { name: "Performance Optimization" },
      { name: "Debugging & Problem Solving" },
    ],
  },
];