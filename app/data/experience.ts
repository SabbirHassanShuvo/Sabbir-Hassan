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
  logo?: string;
  website?: string;
  location?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    jobTitle: "Software Developer",
    company: "Prediction Infotech Limited",
    duration: "July 2025 – Present",
    startDate: "July 2025",
    endDate: "Present",
    type: "Full-time",
    logo: "/experience/prediction-it.jpg",
    website: "https://pitechr.com/",
    location: "Dhaka 1206, Bangladesh",
    description:
      "Prediction Infotech Limited specializes in HR Management, Candidate Verification (CPV), and Job Recruitment solutions. Worked as a Laravel Developer, building scalable backend systems, RESTful APIs, authentication, and business-focused web solutions.",
    responsibilities: [
      "Engineered scalable backend systems and robust RESTful APIs for enterprise web solutions",
      "Built and maintained core platforms for HR Management, Candidate Verification (CPV), and Job Recruitment",
      "Implemented secure authentication, role-based authorization, and data integrity safeguards",
      "Designed and optimized MySQL database architectures, relational schemas, and high-performance queries",
      "Integrated third-party APIs and automated backend workflows to deliver seamless business solutions",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "RESTful API",
      "Authentication",
      "Database Design",
      "Backend Architecture",
      "React",
    ],
  },
  {
    id: 2,
    jobTitle: "Laravel Developer",
    company: "Softvence Agency",
    duration: "December 2024 – Jun 2025",
    startDate: "December 2024",
    endDate: "Jun 2025",
    type: "Full-time",
    logo: "/experience/softvence.png",
    website: "https://softvence.agency/",
    location: "Dhaka 1212, Bangladesh",
    description:
      "Softvence Agency is a global digital agency specializing in scalable, user-focused web and mobile applications, built with modern technologies and strong design standards. Worked as a Laravel Developer, where I developed scalable backend systems, designed RESTful APIs, implemented secure authentication, and collaborated closely with frontend and design teams to deliver complete, high-quality web solutions.",
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
];
