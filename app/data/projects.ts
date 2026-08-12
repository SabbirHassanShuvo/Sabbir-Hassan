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
  category: string[];
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  // ─────────────────────────────────────────────
  // 1. Swipe Sale – Local Marketplace Mobile App
  // ─────────────────────────────────────────────
  {
    id: "1",
    title: "Swipe Sale – Local Marketplace Mobile App",
    shortDescription:
      "Swipe-based community marketplace with real-time chat & paid boost",
    year: "2025",
    role: "Full Stack Laravel Developer",
    coverImage: "/SwapSale/cover.png",
    images: [
      "/SwapSale/cover.png",
      "/SwapSale/1.png",
      "/SwapSale/2.png",
      "/SwapSale/3.png",
      "/SwapSale/4.png",
      "/SwapSale/5.png",
      "/SwapSale/6.png",
      "/SwapSale/7.png",
      "/SwapSale/8.png",
    ],
    category: ["app"],
    caseStudy: {
      tagline:
        "A feature-rich item-swapping and local marketplace platform featuring real-time communication, video/audio calls, and secure payment processing.",
      overview: `Developed a comprehensive item-swapping and local marketplace application. The platform enables users to list items for trade or sale, negotiate deals through real-time chat, and conduct virtual inspections via integrated video and audio calls. Implemented secure payment gateways (Stripe and PayPal) to handle shipping costs, premium listing boosts, and secure escrow services.

The Challenge:
Traditional local marketplaces lack built-in virtual inspection tools and secure payment methods, forcing users to rely on third-party apps for communication and exposing them to potential fraud or unreliable trading partners.

The Solution:
Engineered a scalable Laravel backend that powers a seamless user experience. Integrated real-time WebSockets for instant messaging, WebRTC-based video/audio calling for remote item inspection, and dual payment gateways (PayPal & Stripe) to ensure secure and flexible transaction processing.

Key Features:
• Secure user authentication and profile management
• Real-time chat & notifications using Laravel WebSockets
• Integrated Video & Audio calling for virtual item inspections
• Dual payment gateway integration (Stripe & PayPal)
• Item listing, search, and intelligent matching algorithm
• Premium listing boosts and secure escrow services
• Responsive and intuitive user interface

Impact:
Created a secure and engaging community-driven marketplace that significantly reduces the friction of local trading, ensuring trust and convenience through built-in communication and payment tools.`,
      problem:
        "Traditional local marketplaces lack built-in virtual inspection tools and secure payment methods, forcing users to rely on third-party apps for communication and exposing them to potential fraud.",
      solution:
        "Engineered a scalable Laravel backend with real-time WebSockets for instant messaging, WebRTC-based video/audio calling for remote item inspection, and dual payment gateways (PayPal & Stripe) for secure transactions.",
      impact:
        "Created a secure and engaging community-driven marketplace that significantly reduces the friction of local trading, ensuring trust and convenience through built-in communication and payment tools.",
      features: [
        "Secure user authentication and profile management",
        "Real-time chat & notifications using Laravel WebSockets",
        "Integrated Video & Audio calling for virtual item inspections",
        "Dual payment gateway integration (Stripe & PayPal)",
        "Item listing, search, and intelligent matching algorithm",
        "Premium listing boosts and secure escrow services",
        "Responsive and intuitive user interface",
      ],
      challenges: [
        {
          title: "Real-Time Video/Audio Call Integration",
          description:
            "Seamlessly connecting users for virtual item inspections without leaving the app, ensuring low latency and high reliability.",
          solution:
            "Implemented WebRTC protocols with dedicated signaling to establish direct, secure, and high-quality peer-to-peer media streams.",
        },
        {
          title: "Dual Payment Gateway Synchronization",
          description:
            "Managing transactional states consistently across both PayPal and Stripe, especially during refunds or escrow holds.",
          solution:
            "Created a unified payment interface pattern in Laravel with dedicated webhook listeners and idempotent transaction logging.",
        },
      ],
      contributors: [
        { name: "Sabbir Hassan", role: "Backend Laravel" },
        { name: "Shaed Nur", role: "App Flutter" },
      ],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "RESTful API",
        "WebSockets",
        "Laravel Reverb",
        "Redis",
        "Video Call",
        "Audio Call",
        "Chat",
        "PayPal",
        "Stripe",
        "VPS Hosting",
        "Push Notifications",
      ],
      liveLink: "https://swipesaleapp.info/",
      githubLink: "https://github.com/SabbirHassanShuvo",
      youtubeId: "dQw4w9WgXcQ",
      desktopReady: true,
      mobileReady: true,
      itsClientProject: false,
    },
  },
  // ─────────────────────────────────────────────
  // 2. Lymetales – Personalized Storybook Platform
  // ─────────────────────────────────────────────
  {
    id: "2",
    title: "Lymetales – Personalized Storybook Platform",
    shortDescription:
      "E-commerce platform for personalized children's storybooks with real-time preview and multi-currency checkout",
    year: "2026",
    role: "Full Stack Developer",
    coverImage: "/lymetales/Cover.png",
    images: [
      "/lymetales/Cover.png",
      "/lymetales/1.png",
      "/lymetales/2.png",
      "/lymetales/3.png",
      "/lymetales/4.png",
      "/lymetales/5.png",
      "/lymetales/6.png",
      "/lymetales/7.png",
      "/lymetales/8.png",
      "/lymetales/9.png",
      "/lymetales/10.png",
    ],
    category: ["web", "ecommerce"],
    caseStudy: {
      tagline:
        "A personalized storybook e-commerce platform that turns every child into the hero of their own book, with real-time preview and a dedicated content dashboard.",
      overview: `Built a full-stack e-commerce platform (Next.js frontend + separate admin dashboard) for creating personalized children's storybooks. Customers pick a book, enter a child's details/photo, preview the personalization in real time, and check out with multi-currency support. A companion dashboard (dashboard.lymetales.com) powers dynamic homepage banners, product catalog, and site content without redeploying the frontend.

The Challenge:
Parents and gift-givers needed a fast, low-friction way to personalize a physical storybook (name, photos, details) and see exactly what they'd receive before paying, while the business needed to manage a growing, occasion-based catalog (books, gift cards, seasonal collections) without engineering involvement for every content change.

The Solution:
Built a Next.js storefront with a step-by-step personalization flow (fill details → live preview → checkout), integrated with a CMS-driven dashboard for banners, categories, and product management, plus multi-currency support and a review/testimonial system.

Key Features:
- Real-time book personalization preview (name, photos, details)
- Category-based catalog: Occasions, Personalized Gifts, Back to School
- Gift cards & personalized gift vouchers
- Multi-currency storefront (starts in USD)
- CMS-driven homepage banners & content via dashboard.lymetales.com
- Customer reviews & testimonials section
- Newsletter signup with first-order discount

Impact:
Gave gift-givers a fast, visual way to create a one-of-a-kind keepsake book, while giving the business a self-serve dashboard to manage campaigns and catalog without developer involvement.`,
      problem:
        "Parents and gift-givers needed a fast, low-friction way to personalize a physical storybook and preview it before paying, while the business needed to manage a growing catalog and seasonal campaigns without engineering involvement.",
      solution:
        "Built a Next.js storefront with a step-by-step personalization flow and live preview, backed by a CMS-driven dashboard for banners, categories, and product management, with multi-currency checkout.",
      impact:
        "Gave gift-givers a fast, visual way to create a personalized keepsake book, while giving the business a self-serve dashboard for campaigns and catalog updates.",
      features: [
        "Real-time book personalization preview",
        "Category-based catalog (Occasions, Gifts, Back to School)",
        "Gift cards & personalized vouchers",
        "Multi-currency storefront",
        "CMS-driven homepage & content management",
        "Customer reviews & testimonials",
        "Newsletter signup with discount incentive",
      ],
      challenges: [
        {
          title: "Real-Time Personalization Preview",
          description:
            "Rendering an accurate live preview of a personalized book (name, photo placement, page details) without noticeable lag as users edit inputs.",
          solution:
            "Optimized image pipeline via Next.js image handling and incremental preview updates tied to form state.",
        },
        {
          title: "Decoupled Content Management",
          description:
            "Marketing needed to update banners, categories, and featured products frequently without code deploys.",
          solution:
            "Separated a dashboard (dashboard.lymetales.com) as the CMS/API layer feeding the Next.js storefront dynamically.",
        },
      ],
      contributors: [{ name: "Sabbir Hassan", role: "Full Stack" }],
      technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "REST API"],
      liveLink: "https://lymetales.com/",
      githubLink: "https://github.com/SabbirHassanShuvo/lymetales_urska",
      youtubeId: "",
      desktopReady: true,
      mobileReady: true,
      itsClientProject: true,
    },
  },
  // ─────────────────────────────────────────────
  // 3. Adventure Rentals Management System
  // ─────────────────────────────────────────────
  {
    id: "3",
    title: "Adventure Rentals Management System",
    shortDescription:
      "Production-ready rental management platform for adventure equipment & vehicle bookings",
    year: "2025 – 2026",
    role: "Backend & Full Stack Developer",
    coverImage: "/adventure/adventure-cover.png",
    images: [
      "/adventure/adventure-cover.png",
      "/adventure/adventure-dashboard.png",
      "/adventure/adventure-image1.png",
      "/adventure/adventure-image2.png",
      "/adventure/adventure-image3.png",
      "/adventure/adventure-image4.png",
      "/adventure/adventure-image5.png",
      "/adventure/6.png",
      "/adventure/7.png",
      "/adventure/8.png",
      "/adventure/9.png",
      "/adventure/10.png",
      "/adventure/11.png",
      "/adventure/12.png",
    ],
    category: ["web", "app"],
    caseStudy: {
      tagline:
        "A production-ready rental management platform built with Laravel 12 to handle adventure equipment bookings, secure user authentication, and real-time system operations.",
      overview: `Built a production-ready rental management system with Laravel 12, featuring JWT-secured RESTful APIs, OTP-based email verification, an admin panel with role-based access control (RBAC), Stripe payment processing with webhooks, and real-time chat/notifications powered by Laravel Reverb (WebSockets).

The Challenge:
Managing adventure vehicle and equipment rentals required coordinating availability, customer identity verification, payment holds, multi-party communications, and a secure admin panel across a single unified backend serving both mobile/web clients and an internal dashboard.

The Solution:
Engineered a Laravel 12 backend combining JWT-based stateless API authentication for customer-facing clients with session-based (Sanctum) auth for the admin dashboard. OTP verification runs through a dedicated OtpService, payments flow through Stripe with webhook handling, role/permission management uses Spatie's Laravel Permission package, and real-time events broadcast through Laravel Reverb over private WebSocket channels.

Key Features:
- JWT-based RESTful API architecture (php-open-source-saver/jwt-auth)
- OTP email verification exchanged for JWT tokens on registration
- Role-based access control (RBAC) via Spatie Laravel Permission
- Stripe payment gateway integration with webhook handling
- Auto-generated chat threads linked to each booking (renter ↔ owner)
- Real-time private-channel messaging via Laravel Reverb & Laravel Echo
- Image upload & manipulation via Intervention Image
- Dual auth system: JWT for API clients, Sanctum sessions for the admin dashboard

Impact:
Delivered a unified backend that securely verifies users, processes payments, auto-links renters and owners into real-time chat per booking, and gives admins full RBAC-protected control — all from a single Laravel 12 codebase.`,
      problem:
        "Managing adventure vehicle and equipment rentals required coordinating availability, customer identity verification, payment holds, and multi-party communications, all while serving both API clients and an internal admin dashboard from one backend.",
      solution:
        "Engineered a Laravel 12 backend with JWT-secured RESTful endpoints, OTP-based email verification, Stripe payment handling with webhook listeners, Spatie-powered RBAC, and real-time WebSocket communication via Laravel Reverb.",
      impact:
        "Delivered a unified backend that verifies users, processes payments, auto-generates booking-linked chat threads, and gives admins full RBAC-protected control.",
      features: [
        "JWT-based RESTful API architecture",
        "OTP email verification exchanged for JWT on registration",
        "Role-based access control (RBAC) via Spatie Laravel Permission",
        "Stripe payment gateway integration with webhooks",
        "Auto-generated booking chat threads (renter ↔ owner)",
        "Real-time private-channel messaging via Laravel Reverb",
        "Image upload & manipulation via Intervention Image",
        "Dual auth: JWT for API clients, Sanctum sessions for admin dashboard",
      ],
      challenges: [
        {
          title: "Linking Bookings to the Right Chat Thread",
          description:
            "Each booking needed to resolve to the correct chat between renter and owner — without duplicating threads or missing existing ones.",
          solution:
            "Implemented a getChatIdAttribute() accessor on the Booking model that checks loaded relations first, then queries the database, then falls back to a unified chat lookup between the two users.",
        },
        {
          title: "Scoped Real-Time Delivery",
          description:
            "Messages needed to reach only the intended recipient in real time, not broadcast to all connected clients.",
          solution:
            "Used Laravel Reverb with a MessageSent event broadcasting on a PrivateChannel scoped to the receiver's ID, consumed on the frontend via Laravel Echo and Pusher-js.",
        },
      ],
      contributors: [
        { name: "Sabbir Hassan", role: "Backend" },
        { name: "Najmul Islam", role: "App" },
        { name: "Mohammad Rifat", role: "Web" },
      ],
      technologies: [
        "Laravel 12",
        "Laravel Reverb",
        "WebSockets",
        "PHP",
        "Blade",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "JWT Auth",
        "Laravel Sanctum",
        "Stripe",
        "Spatie Laravel Permission",
        "Intervention Image",
      ],
      liveLink: "https://adventurerentalsoffroad.com",
      githubLink: "https://github.com/SabbirHassanShuvo/adventure_rentals_timo",
      youtubeId: "",
      desktopReady: true,
      mobileReady: true,
      itsClientProject: true,
    },
  },

  // ─────────────────────────────────────────────
  // 4. Employee Management System
  // ─────────────────────────────────────────────
  {
    id: "4",
    title: "Employee Management System",
    shortDescription:
      "Advanced HR platform for employee records, attendance, roles & departments",
    year: "2025",
    role: "Full Stack Laravel Developer",
    coverImage: "/neyo/neyo-cover.png",
    images: [
      "/neyo/neyo-cover.png",
      "/neyo/neyo-dashboard.png",
      "/neyo/neyo-image1.png",
      "/neyo/neyo-image2.png",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "An advanced Employee Management System that manages employee records, attendance, roles, and departments with accuracy.",
      overview: `An advanced Employee Management System that manages employee records, attendance, roles, and departments with accuracy. It offers secure access control and a clean dashboard to support efficient HR operations.

The Challenge:
Manual employee record keeping, attendance logging, and paper-based approval workflows caused administrative delays, payroll discrepancies, and security vulnerabilities in role access.

The Solution:
Built an end-to-end HR management platform featuring automated attendance tracking, department and designation management, granular role permissions, and an interactive analytics dashboard for executive oversight.

Key Features:
• Centralized employee profiles and records management
• Daily attendance logging & leave request approval workflows
• Department
• designation
• and role hierarchy management
• Granular Role-Based Access Control (RBAC)
• Clean
• intuitive HR analytics dashboard
• Automated report generation and data export

Impact:
Boosted HR workflow efficiency by automating employee data management, attendance auditing, and department role governance in a secure unified portal.`,
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
    shortDescription:
      "Fullstack platform with enquiry management, quotes & admin dashboard",
    year: "2025",
    role: "Full Stack Developer",
    coverImage: "/channelGum/channelGum-cover.png",
    images: [
      "/channelGum/channelGum-cover.png",
      "/channelGum/channelGum-image1.png",
      "/channelGum/channelGum-image2.png",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "A fullstack construction services platform built with Laravel and React, featuring admin dashboard, enquiry management, and responsive user interface.",
      overview: `A fullstack construction services platform built with Laravel and React, featuring admin dashboard, enquiry management, and responsive user interface. Designed to showcase construction portfolios and handle client inquiries seamlessly.

The Challenge:
Construction contractors lacked a modern digital presence to effectively present high-resolution project case studies and manage prospective client quotes and enquiries systematically.

The Solution:
Developed a dual-purpose web platform offering an elegant client-facing portfolio paired with a powerful administrative backend for enquiry triage, project catalog management, and automated email notifications.

Key Features:
• Dynamic project portfolio showcase with image galleries
• Interactive client enquiry & consultation booking forms
• Admin dashboard for managing quotes
• leads & content
• Responsive design optimized for mobile
• tablet & desktop
• Automated SMTP email notifications for new client inquiries
• RESTful API architecture connecting React frontend to Laravel backend

Impact:
Increased client consultation conversions by providing transparent service breakdowns, project showcases, and instant enquiry confirmation.`,
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
      contributors: [{ name: "Sabbir Hassan", role: "Full Stack Developer" }],
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
    shortDescription:
      "Complete online clothing store platform managing products, orders, and customer interactions",
    year: "2024 – 2025",
    role: "Full Stack Developer",
    coverImage: "/brip/brip-cover.png",
    images: [
      "/brip/brip-cover.png",
      "/brip/brip-image1.png",
      "/brip/brip-image2.png",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "A complete online clothing store platform managing products, orders, and customer interactions with a user-friendly interface.",
      overview: `A complete online clothing store platform managing products, orders, and customer interactions with a user-friendly interface. Features a full catalog, cart and checkout system, user management, and administrative control.

The Challenge:
Creating an engaging online fashion shopping experience that balances rich visuals, fast product filtering, cart persistence, and secure order processing.

The Solution:
Built a complete online store using Laravel and modern web technologies with secure checkout flows, product inventory management, order tracking, and clean UI styling with Tailwind CSS.

Key Features:
• Product catalog with categorization
• search
• and dynamic filtering
• Persistent shopping cart & streamlined checkout workflow
• Customer authentication
• profile & order tracking
• Admin dashboard for inventory management & sales reporting
• Secure payment gateway integration & automated invoicing
• Fully responsive layout across all device viewports

Impact:
Provides an intuitive, high-speed shopping experience with structured order lifecycle management from checkout to fulfillment.`,
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
      contributors: [{ name: "Sabbir Hassan", role: "Full Stack Developer" }],
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
