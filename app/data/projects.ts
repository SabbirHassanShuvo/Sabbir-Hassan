// projects-data.ts

export interface Contributor {
  name: string;
  role: string;
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface CaseStudy {
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  challenges: Challenge[];
  contributors: Contributor[];
  technologies: string[];
  liveLink: string;
  githubLink: string | null;
  youtubeId?: string;
  desktopReady: boolean;
  mobileReady: boolean;
  itsClientProject: boolean;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  year: string;
  role: string;
  coverImage: string;
  images: string[];
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  // ─────────────────────────────────────────────
  // 1. Swipe Sale – Local Marketplace Mobile App
  // ─────────────────────────────────────────────
  {
    id: "1",
    title: "Swipe Sale – Local Marketplace Mobile App",
    shortDescription: "Swipe-based community marketplace with real-time chat & paid boost",
    year: "2025",
    role: "Full Stack Laravel Developer",
    coverImage: "/myStudyPal/cover.png",
    images: [
      "/myStudyPal/cover.png",
      "/myStudyPal/dashboard.png",
      "/myStudyPal/image1.png",
      "/myStudyPal/image2.png",
      "/myStudyPal/image3.png",
    ],
    caseStudy: {
      tagline:
        "Swipe-based community marketplace app for buying, selling & free item pickups with real-time chat, match logic, and paid boost system.",
      overview:
        "Swipe Sale is a full-stack mobile marketplace application built with swipe-to-match browsing, in-app chat, push notifications, payment integration, and admin portal. Self-hosted on VPS with multi-city scalability, it enables users to seamlessly discover local deals, buy and sell items, and coordinate free community pickups.",
      problem:
        "Traditional classifieds and local marketplace apps suffer from cluttered interfaces, slow communication between buyers and sellers, and lack of engaging discovery mechanisms, making local item discovery and community sharing cumbersome.",
      solution:
        "Built a full-stack mobile marketplace featuring an engaging swipe-to-match browsing experience, real-time in-app WebSocket chat, automated push notifications, and a secure payment gateway integration for item boost promotions. Developed a comprehensive admin portal for content moderation, dispute resolution, and platform analytics.",
      impact:
        "Delivers a fast, engaging local commerce experience with high user retention through swipe logic, instant buyer-seller connectivity, and scalable multi-city deployment on VPS infrastructure.",
      features: [
        "Swipe-to-match browsing & item discovery",
        "Real-time in-app chat with WebSocket connectivity",
        "Push notification system for matches, messages & deals",
        "Paid boost system & payment gateway integration",
        "Free item pickup & community sharing workflows",
        "Admin portal for listing moderation & user management",
        "Self-hosted VPS infrastructure with multi-city scalability",
      ],
      challenges: [
        {
          title: "High-Concurrency Matching & Geolocation Querying",
          description:
            "Efficiently filtering thousands of local items by radius and swipe history without database bottlenecking.",
          solution:
            "Implemented indexed geospatial queries in MySQL and cached candidate feeds in Redis with sliding-window pre-fetching.",
        },
        {
          title: "Real-Time WebSocket Chat Scalability",
          description:
            "Managing low-latency message delivery and typing indicators across high volume active conversations.",
          solution:
            "Integrated Laravel Reverb with event-driven broadcasting and queued notification processing.",
        },
      ],
      contributors: [
        { name: "Sabbir Hassan", role: "Full Stack Laravel Developer" },
      ],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "RESTful API",
        "WebSockets",
        "Laravel Reverb",
        "Redis",
        "Payment Gateway",
        "VPS Hosting",
        "Push Notifications",
      ],
      liveLink: "https://sabbir-hassan.vercel.app/",
      githubLink: "https://github.com/SabbirHassanShuvo",
      youtubeId: "dQw4w9WgXcQ",
      desktopReady: true,
      mobileReady: true,
      itsClientProject: false,
    },
  },

  // ─────────────────────────────────────────────
  // 2. Adventure Rentals Management System
  // ─────────────────────────────────────────────
  {
    id: "2",
    title: "Adventure Rentals Management System",
    shortDescription: "Scalable rental management platform for adventure equipment & vehicle bookings",
    year: "2025 – 2026",
    role: "Backend & Full Stack Developer",
    coverImage: "/adventure/adventure-cover.png",
    images: [
      "/adventure/adventure-cover.png",
      "/adventure/adventure-dashboard.png",
      "/adventure/adventure-image1.png",
      "/adventure/adventure-image2.png",
      "/adventure/adventure-image3.png",
    ],
    caseStudy: {
      tagline:
        "A scalable and production-ready rental management platform built to handle adventure equipment bookings, secure user authentication, and real-time system operations.",
      overview:
        "Developed a full-stack rental management system for web and mobile applications, featuring secure JWT-based APIs, smart authentication (OTP & social login), and an admin panel with role-based access control. Integrated Stripe for payments, built a payroll system, and implemented real-time chat and notifications using Laravel Reverb (WebSockets).",
      problem:
        "Managing adventure vehicle and equipment rentals required coordinating availability, customer identity verification, payment holds, multi-party communications, and staff payroll across disparate, manual workflows.",
      solution:
        "Engineered a robust Laravel backend with JWT-secured RESTful endpoints, OTP authentication, automated booking calendars, Stripe payment handling with webhook listeners, role-based admin controls, and real-time WebSocket communication.",
      impact:
        "Streamlined end-to-end rental operations from customer booking and security verification to staff payroll and instant owner-renter communication.",
      features: [
        "Secure JWT-based RESTful API architecture",
        "Smart authentication with OTP verification & social login",
        "Role-based access control (RBAC) admin panel",
        "Stripe payment gateway integration with webhooks",
        "Integrated payroll and commission tracking system",
        "Real-time chat & notifications using Laravel Reverb (WebSockets)",
        "Equipment availability calendar & reservation management",
      ],
      challenges: [
        {
          title: "Stripe Webhook Concurrency & Idempotency",
          description:
            "Ensuring booking state and payment verification stayed atomic during network retries or out-of-order webhook delivery.",
          solution:
            "Implemented idempotency keys, database transaction locks, and dedicated webhook event listeners with audit logging.",
        },
        {
          title: "Real-Time Chat & State Synchronization",
          description:
            "Delivering instant messages and notification badges across web and mobile clients simultaneously.",
          solution:
            "Deployed Laravel Reverb for scalable WebSocket event broadcasting with presence channels.",
        },
      ],
      contributors: [
        { name: "Sabbir Hassan", role: "Backend & Full Stack Developer" },
      ],
      technologies: [
        "Laravel",
        "Laravel Reverb",
        "WebSockets",
        "PHP",
        "MySQL",
        "JWT Auth",
        "Stripe",
        "React",
        "Tailwind CSS",
        "Redis",
      ],
      liveLink: "https://sabbir-hassan.vercel.app/",
      githubLink: "https://github.com/SabbirHassanShuvo",
      youtubeId: "dQw4w9WgXcQ",
      desktopReady: true,
      mobileReady: true,
      itsClientProject: true,
    },
  },

  // ─────────────────────────────────────────────
  // 3. Employee Management System
  // ─────────────────────────────────────────────
  {
    id: "3",
    title: "Employee Management System",
    shortDescription: "Advanced HR platform for employee records, attendance, roles & departments",
    year: "2025",
    role: "Full Stack Laravel Developer",
    coverImage: "/neyo/neyo-cover.png",
    images: [
      "/neyo/neyo-cover.png",
      "/neyo/neyo-dashboard.png",
      "/neyo/neyo-image1.png",
      "/neyo/neyo-image2.png",
    ],
    caseStudy: {
      tagline:
        "An advanced Employee Management System that manages employee records, attendance, roles, and departments with accuracy.",
      overview:
        "An advanced Employee Management System that manages employee records, attendance, roles, and departments with accuracy. It offers secure access control and a clean dashboard to support efficient HR operations.",
      problem:
        "Manual employee record keeping, attendance logging, and paper-based approval workflows caused administrative delays, payroll discrepancies, and security vulnerabilities in role access.",
      solution:
        "Built an end-to-end HR management platform featuring automated attendance tracking, department and designation management, granular role permissions, and an interactive analytics dashboard for executive oversight.",
      impact:
        "Boosted HR workflow efficiency by automating employee data management, attendance auditing, and department role governance in a secure unified portal.",
      features: [
        "Centralized employee profiles and records management",
        "Daily attendance logging & leave request approval workflows",
        "Department, designation, and role hierarchy management",
        "Granular Role-Based Access Control (RBAC)",
        "Clean, intuitive HR analytics dashboard",
        "Automated report generation and data export",
      ],
      challenges: [
        {
          title: "Granular Role-Based Permission Architecture",
          description:
            "Designing a flexible permission matrix supporting custom roles without hardcoding permissions in views and controllers.",
          solution:
            "Structured dynamic roles and permissions with Laravel Gates, Policies, and middleware, cached for rapid authorization checks.",
        },
      ],
      contributors: [
        { name: "Sabbir Hassan", role: "Full Stack Laravel Developer" },
      ],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Authentication",
        "Tailwind CSS",
        "RESTful API",
        "Blade",
        "React",
      ],
      liveLink: "https://sabbir-hassan.vercel.app/",
      githubLink: "https://github.com/SabbirHassanShuvo",
      youtubeId: "dQw4w9WgXcQ",
      desktopReady: true,
      mobileReady: true,
      itsClientProject: false,
    },
  },

  // ─────────────────────────────────────────────
  // 4. Construction Services Web App
  // ─────────────────────────────────────────────
  {
    id: "4",
    title: "Construction Services Web App",
    shortDescription: "Fullstack platform with enquiry management, quotes & admin dashboard",
    year: "2025",
    role: "Full Stack Developer",
    coverImage: "/channelGum/channelGum-cover.png",
    images: [
      "/channelGum/channelGum-cover.png",
      "/channelGum/channelGum-image1.png",
      "/channelGum/channelGum-image2.png",
    ],
    caseStudy: {
      tagline:
        "A fullstack construction services platform built with Laravel and React, featuring admin dashboard, enquiry management, and responsive user interface.",
      overview:
        "A fullstack construction services platform built with Laravel and React, featuring admin dashboard, enquiry management, and responsive user interface. Designed to showcase construction portfolios and handle client inquiries seamlessly.",
      problem:
        "Construction contractors lacked a modern digital presence to effectively present high-resolution project case studies and manage prospective client quotes and enquiries systematically.",
      solution:
        "Developed a dual-purpose web platform offering an elegant client-facing portfolio paired with a powerful administrative backend for enquiry triage, project catalog management, and automated email notifications.",
      impact:
        "Increased client consultation conversions by providing transparent service breakdowns, project showcases, and instant enquiry confirmation.",
      features: [
        "Dynamic project portfolio showcase with image galleries",
        "Interactive client enquiry & consultation booking forms",
        "Admin dashboard for managing quotes, leads & content",
        "Responsive design optimized for mobile, tablet & desktop",
        "Automated SMTP email notifications for new client inquiries",
        "RESTful API architecture connecting React frontend to Laravel backend",
      ],
      challenges: [
        {
          title: "Optimizing High-Resolution Media Delivery",
          description:
            "Serving high-resolution architecture photos without slowing down page load times across mobile devices.",
          solution:
            "Implemented automated image compression pipelines and responsive srcset rendering for optimal performance.",
        },
      ],
      contributors: [
        { name: "Sabbir Hassan", role: "Full Stack Developer" },
      ],
      technologies: [
        "Laravel",
        "React",
        "RESTful API",
        "MySQL",
        "Tailwind CSS",
        "JavaScript",
        "PHP",
        "SMTP",
      ],
      liveLink: "https://sabbir-hassan.vercel.app/",
      githubLink: "https://github.com/SabbirHassanShuvo",
      youtubeId: "dQw4w9WgXcQ",
      desktopReady: true,
      mobileReady: true,
      itsClientProject: false,
    },
  },

  // ─────────────────────────────────────────────
  // 5. Cylore E-Commerce Web App
  // ─────────────────────────────────────────────
  {
    id: "5",
    title: "Cylore E-Commerce Web App",
    shortDescription: "Complete online clothing store platform managing products, orders, and customer interactions",
    year: "2024 – 2025",
    role: "Full Stack Developer",
    coverImage: "/brip/brip-cover.png",
    images: [
      "/brip/brip-cover.png",
      "/brip/brip-image1.png",
      "/brip/brip-image2.png",
    ],
    caseStudy: {
      tagline:
        "A complete online clothing store platform managing products, orders, and customer interactions with a user-friendly interface.",
      overview:
        "A complete online clothing store platform managing products, orders, and customer interactions with a user-friendly interface. Features a full catalog, cart and checkout system, user management, and administrative control.",
      problem:
        "Creating an engaging online fashion shopping experience that balances rich visuals, fast product filtering, cart persistence, and secure order processing.",
      solution:
        "Built a complete online store using Laravel and modern web technologies with secure checkout flows, product inventory management, order tracking, and clean UI styling with Tailwind CSS.",
      impact:
        "Provides an intuitive, high-speed shopping experience with structured order lifecycle management from checkout to fulfillment.",
      features: [
        "Product catalog with categorization, search, and dynamic filtering",
        "Persistent shopping cart & streamlined checkout workflow",
        "Customer authentication, profile & order tracking",
        "Admin dashboard for inventory management & sales reporting",
        "Secure payment gateway integration & automated invoicing",
        "Fully responsive layout across all device viewports",
      ],
      challenges: [
        {
          title: "Cart State Synchronization & Inventory Locking",
          description:
            "Preventing race conditions where multiple customers attempt to purchase the last item in stock simultaneously.",
          solution:
            "Implemented database row locks and atomic stock decrement operations within checkout transactions.",
        },
      ],
      contributors: [
        { name: "Sabbir Hassan", role: "Full Stack Developer" },
      ],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Tailwind CSS",
        "Payment Gateway",
        "RESTful API",
      ],
      liveLink: "https://github.com/SabbirHassanShuvo/cylorecloth.git",
      githubLink: "https://github.com/SabbirHassanShuvo/cylorecloth.git",
      youtubeId: "dQw4w9WgXcQ",
      desktopReady: true,
      mobileReady: true,
      itsClientProject: false,
    },
  },
];
