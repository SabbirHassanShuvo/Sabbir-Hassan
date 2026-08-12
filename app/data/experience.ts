// src/data/experienceData.ts

export interface ExperienceItem {
  id: number;
  jobTitle: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  type?: "Full-time" | "Internship" | "Freelance";
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    jobTitle: "Laravel Developer",
    company: "Softvence Agency",
    duration: "December 2025 – Present",
    startDate: "December 2025",
    endDate: "Present",
    type: "Full-time",
    description:
      "Softvence Agency is a global digital agency specializing in scalable, user-focused web and mobile applications, built with modern technologies and strong design standards.",
    responsibilities: [
      "Developed scalable backend systems and designed robust RESTful APIs",
      "Implemented secure authentication, authorization, and role-based access control",
      "Built real-time features using WebSockets and Laravel Reverb for messaging and notifications",
      "Collaborated closely with frontend and design teams to deliver complete, high-quality web solutions",
      "Optimized database queries and API endpoints for maximum performance and reliability",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "RESTful API",
      "Laravel Reverb",
      "WebSockets",
      "Redis",
      "Stripe",
    ],
  },
  {
    id: 2,
    jobTitle: "Full Stack Laravel Developer",
    company: "KaizenITBD",
    duration: "December 2024 – December 2025",
    startDate: "December 2024",
    endDate: "December 2025",
    type: "Full-time",
    description:
      "Assisted in API development, database design, and backend architecture. Collaborated with the team to deliver high-quality, scalable web solutions.",
    responsibilities: [
      "Assisted in RESTful API development, database design, and backend architecture",
      "Developed and maintained full-stack features using Laravel and React",
      "Designed relational database schemas with MySQL and Eloquent ORM",
      "Integrated third-party services, mail configurations, and payment solutions",
      "Collaborated with the development team to deliver high-quality, responsive web solutions",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "JavaScript",
      "MySQL",
      "RESTful API",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
];