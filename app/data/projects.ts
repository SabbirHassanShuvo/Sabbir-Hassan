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
  // 4. ChannelGum – Digital Asset Marketplace
  // ─────────────────────────────────────────────
  {
    id: "4",
    title: "ChannelGum – Digital Asset Marketplace",
    shortDescription:
      "Escrow-protected marketplace to buy and sell YouTube channels, Instagram pages & other digital assets",
    year: "2025 – 2026",
    role: "Backend & Full Stack Developer",
    coverImage: "/channelGum/channelGum-cover.png",
    images: [
      "/channelGum/channelGum-cover.png",
      "/channelGum/channelGum-image1.png",
      "/channelGum/channelGum-image2.png",
      "/channelGum/channelGum-image3.png",
      "/channelGum/channelGum-image4.png",
      "/channelGum/channelGum-image5.png",
      "/channelGum/channelGum-image6.png",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "A secure marketplace where creators and buyers trade YouTube channels, Instagram pages, and other digital assets — with built-in escrow protection, live chat, and multi-gateway payments.",
      overview: `Built ChannelGum, a full-featured digital asset marketplace that lets sellers list monetized YouTube channels, Instagram pages, and other social accounts for sale, while buyers browse, filter, and safely purchase through a dedicated escrow flow.

The Challenge:
Buying and selling digital accounts is high-trust and high-risk — buyers need proof of channel performance before paying, and sellers need protection from chargebacks or fraudulent transfers. The platform had to combine a discovery-friendly marketplace with a trustworthy, guided transaction process, all while supporting many different payment methods used across regions.

The Solution:
Designed a Laravel-powered backend covering listing management, category/platform filtering, seller dashboards, and a purpose-built escrow module. Every purchase spins up a dedicated deal thread with an Escrow Agent, tracked through a visible deal-progress timeline (Deal started → Fee covered → Account secured → Payment/Account delivered), with support for bank transfer, PayPal, Bitcoin, Zelle, Cash App, TransferWise, Google Pay, Payoneer, Western Union, and MoneyGram.

Key Features:
- Marketplace listings with platform, category, subscriber count, and monthly income filters
- Channel detail pages with analytics screenshots, quick stats, and seller reputation
- Multi-payment-method escrow deal flow with a dedicated Escrow Agent
- Real-time deal-progress tracker (started, fee paid, account secured, delivered)
- In-app messaging between buyer, seller, and escrow agent per deal
- Seller dashboard with active listings, pending deals, total sales, and revenue
- "Gum Power" seller tier/badge system to boost listing visibility
- Create Listing flow with account URL, category, content type, pricing, and live preview

Impact:
Delivered an end-to-end marketplace that lets creators monetize their channels and buyers acquire established accounts with confidence, reducing fraud risk through a guided, transparent escrow process instead of direct peer-to-peer payments.`,
      problem:
        "Trading digital accounts (YouTube, Instagram, etc.) carries high fraud risk for both buyers and sellers, and no unified platform existed to combine discovery, verification, and safe payment handling in one flow.",
      solution:
        "Built a Laravel-based marketplace with category/platform browsing, detailed listing pages, and a dedicated escrow module — a per-deal chat with an Escrow Agent, a visible deal-progress tracker, and support for ten+ payment methods.",
      impact:
        "Enabled creators to list and sell channels confidently while giving buyers a transparent, escrow-backed path to purchase — replacing risky direct transfers with a guided, trackable transaction process.",
      features: [
        "Marketplace listings with platform & category filtering",
        "Channel detail pages with analytics preview and quick stats",
        "Escrow-based deal flow with dedicated Escrow Agent chat",
        "Visual deal-progress tracker across 4 transaction stages",
        "Support for 10+ payment methods (bank, PayPal, crypto, Zelle, etc.)",
        "Seller dashboard: active listings, pending deals, sales, revenue",
        "Gum Power seller tier system for boosted visibility",
        "Create Listing flow with live preview before publishing",
      ],
      challenges: [
        {
          title: "Coordinating a Multi-Party Escrow Flow",
          description:
            "Each deal involves three parties — buyer, seller, and an escrow agent — and needed a clear, trackable state that all sides could follow without confusion.",
          solution:
            "Modeled each transaction as a Deal with a defined status pipeline (started → fee covered → account secured → delivered), surfaced as a shared timeline in the chat UI so every party sees the same progress in real time.",
        },
        {
          title: "Supporting Many Regional Payment Methods",
          description:
            "Buyers and sellers across different regions expected different payment rails — bank transfer, mobile wallets, crypto, and remittance services like Western Union.",
          solution:
            "Built a flexible payment-method selector tied to each deal, keeping payment metadata separate from the escrow status logic so new methods can be added without touching the core deal workflow.",
        },
      ],
      contributors: [{ name: "Sabbir Hassan", role: "Backend & Full Stack" }],
      technologies: [
        "Laravel",
        "PHP",
        "Blade",
        "JavaScript",
        "MySQL",
        "Tailwind CSS",
        "RESTful API",
        "Authentication",
        "Escrow/Payment Flow",
      ],
      liveLink: "",
      githubLink: "",
      youtubeId: "",
      desktopReady: true,
      mobileReady: false,
      itsClientProject: false,
    },
  },

  // ─────────────────────────────────────────────
  // 5. SN Nutrition – Affiliate Wellness Commerce Platform
  // ─────────────────────────────────────────────
  {
    id: "5",
    title: "SN Nutrition – Affiliate Wellness Commerce Platform",
    shortDescription:
      "Laravel-based nutrition e-commerce platform with personalized product recommendations, live specialist consultations, and an affiliate/partner payout system",
    year: "2025 – 2026",
    role: "Full Stack Laravel Developer",
    coverImage: "/sn-nutrition/Cover.png",
    images: [
      "/sn-nutrition/Cover.png",
      "/sn-nutrition/1.png",
      "/sn-nutrition/2.png",
      "/sn-nutrition/3.png",
      "/sn-nutrition/4.png",
      "/sn-nutrition/5.png",
      "/sn-nutrition/6.png",
      "/sn-nutrition/7.png",
      "/sn-nutrition/8.png",
      "/sn-nutrition/9.png",
      "/sn-nutrition/10.png",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "A Laravel 12 nutrition e-commerce platform that pairs a personalized product quiz and live specialist consultations with a full affiliate/partner earnings system.",
      overview: `Built SN Nutrition, a full-stack nutrition and wellness commerce platform on Laravel 12 that goes beyond a standard storefront — combining a guided onboarding quiz for personalized supplement recommendations, live video consultations with specialists via the Zoom API, a store/pharmacy/gym locator, and a complete affiliate partner program with tracked links and payouts.

The Challenge:
Nutrition shoppers often don't know which product fits their goals, and the business wanted to connect customers with real specialists (not just sell products), while also giving partners/affiliates a way to earn commission by referring customers — all needing to be managed from one CMS-driven admin panel.

The Solution:
Engineered a Laravel 12 backend with a dual authentication system (JWT for the customer-facing API, Sanctum sessions for the admin dashboard), Spatie-powered role-based access control, and Google/social login via Laravel Socialite. A short onboarding quiz maps user answers to product recommendations, a dedicated ZoomService auto-generates consultation meeting links through Zoom's Server-to-Server OAuth, and an affiliate module generates trackable referral links per product with a partner dashboard showing lifetime earnings, monthly earnings, and pending payouts.

Key Features:
- Personalized onboarding quiz that recommends products from user answers
- Live specialist consultation booking with automatic Zoom meeting creation
- Affiliate/partner program: trackable referral links, commission tracking, payout history
- Product comparison tool across nutrition facts, ingredients, and features
- Gym & pharmacy locator integrated into the storefront
- Cart, wishlist, promo codes, and full checkout with bank transfer support
- JWT-secured REST API for customers, Sanctum-session admin dashboard
- Google/social login via Laravel Socialite
- Role-based access control (RBAC) via Spatie Laravel Permission
- Fully CMS-driven pages (home, about, FAQ, offers, banners) editable from admin

Impact:
Delivered a single Laravel codebase that turns a nutrition storefront into a guided wellness platform — matching customers to products and specialists automatically, while giving the business a self-serve affiliate channel to grow sales through partner referrals.`,
      problem:
        "Customers needed guidance choosing the right nutrition products and access to real specialists, while the business also needed a self-serve way for affiliates/partners to refer customers and earn tracked commissions — all from one admin-managed platform.",
      solution:
        "Built a Laravel 12 platform combining a personalized onboarding quiz, Zoom-integrated consultation booking, an affiliate link/payout system, and a full e-commerce flow (cart, wishlist, promo codes, checkout), secured with JWT for the API and Sanctum + Spatie RBAC for the admin dashboard.",
      impact:
        "Delivered a guided wellness commerce experience that pairs customers with the right products and specialists automatically, while giving partners a self-service dashboard to track referral earnings and payouts.",
      features: [
        "Personalized onboarding quiz mapping answers to product recommendations",
        "Live specialist consultations with auto-generated Zoom meetings",
        "Affiliate program with trackable referral links & payout history",
        "Product comparison across nutrition facts and ingredients",
        "Gym & pharmacy locator",
        "Cart, wishlist, promo codes & bank-transfer checkout",
        "Dual auth: JWT for API clients, Sanctum sessions for admin",
        "RBAC via Spatie Laravel Permission",
        "Google/social login via Laravel Socialite",
        "CMS-driven pages managed entirely from the admin panel",
      ],
      challenges: [
        {
          title: "Auto-Scheduling Specialist Consultations",
          description:
            "Booking a consultation needed to instantly produce a working video meeting link without manual coordination between the customer and specialist.",
          solution:
            "Built a dedicated ZoomService that authenticates via Zoom's Server-to-Server OAuth and creates a meeting on booking confirmation, attaching the join link directly to the ConsultationBooking record.",
        },
        {
          title: "Tracking Affiliate Attribution & Payouts",
          description:
            "Referral links needed to reliably attribute orders to the right partner and compute commissions without double-counting or missing conversions.",
          solution:
            "Generated a unique tracking code per partner/product pair via an AffiliateLink model, linked it through the order pipeline, and aggregated commission data per partner into a dashboard showing lifetime earnings, this-month earnings, and pending payout status.",
        },
      ],
      contributors: [{ name: "Sabbir Hassan", role: "Full Stack" }],
      technologies: [
        "Laravel 12",
        "PHP",
        "Blade",
        "MySQL",
        "JWT Auth",
        "Laravel Sanctum",
        "Laravel Socialite",
        "Spatie Laravel Permission",
        "Zoom API",
        "Intervention Image",
        "Yajra DataTables",
        "Tailwind CSS",
      ],
      liveLink: "",
      githubLink: "https://github.com/SabbirHassanShuvo/Sn_Nutrition_nasserlee",
      youtubeId: "",
      desktopReady: true,
      mobileReady: false,
      itsClientProject: true,
    },
  },
  // ─────────────────────────────────────────────
  // 6. Cylore Cloth – E-commerce Platform
  // ─────────────────────────────────────────────
  {
    id: "6",
    title: "Cylore Cloth – E-commerce Platform",
    shortDescription:
      "Full-stack clothing e-commerce platform with role-based admin dashboard, product variants, and multi-gateway payment checkout",
    year: "2025 – 2026",
    role: "Full Stack Developer",
    coverImage: "/Cylore/Cover.png",
    images: [
      "/Cylore/Cover.png",
      "/Cylore/1.png",
      "/Cylore/2.png",
      "/Cylore/3.png",
      "/Cylore/4.png",
      "/Cylore/5.png",
      "/Cylore/6.png",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "A modern clothing e-commerce platform combining Laravel's backend security with a React SPA experience via Inertia.js, supporting product variants, role-based dashboards, and multiple payment gateways at checkout.",
      overview: `Built Cylore Cloth, a full-stack e-commerce platform for a clothing brand using Laravel on the backend and React 19 on the frontend, bridged with Inertia.js so pages render as a fast single-page application without needing a separate REST API layer.

The Challenge:
The client needed a professional storefront where customers could browse categorized products with size/variant options, while staff with different access levels (Admin, Manager) managed inventory, categories, and orders — all backed by a checkout that could accept multiple payment methods, not just one gateway.

The Solution:
Used Laravel for authentication, authorization, and data handling, with Inertia.js passing data directly to React 19 views — avoiding a separate API while keeping the frontend fully componentized. Tailwind CSS v4 and Radix UI power the design system, with Framer Motion for interface animation. A three-tier role system (Admin, Manager, Customer) controls access to the dashboard, and checkout was built to support multiple payment methods so customers aren't locked into a single option.

Key Features:
- Authentication with login, registration, and forgot-password flows
- Three-tier role-based access: Admin, Manager, Customer
- User profile management with avatar/image upload
- Category & sub-category organization for products
- Full product management: create, edit, delete, image gallery, size/variant options
- Storefront pages: Home, Shop, Product Details, Cart
- Admin/Manager dashboard with full CRUD over users, categories, and products
- Multi-gateway payment checkout, giving customers a choice of payment method
- SPA-like navigation via Inertia.js with no full page reloads

Impact:
Delivered a scalable, professional e-commerce foundation that pairs Laravel's backend security with a smooth React SPA experience, giving the client both an easy-to-manage product catalog and a flexible, multi-option checkout for customers.`,
      problem:
        "The client needed a fast, professional storefront with variant-based products (size, gallery images), tiered staff access for managing inventory and orders, and a checkout that wasn't limited to a single payment provider.",
      solution:
        "Built a Laravel + Inertia.js + React 19 stack: Laravel handles auth, roles, and data; Inertia passes data straight to React views for an SPA feel; Tailwind CSS v4 and Radix UI drive the design system; checkout integrates multiple payment gateways so customers can choose how they pay.",
      impact:
        "Delivered a scalable e-commerce platform with role-based dashboards for staff, a smooth variant-aware shopping experience for customers, and flexible multi-payment checkout that increases conversion by not restricting customers to one payment method.",
      features: [
        "Login, registration & forgot-password authentication flow",
        "Three-tier roles: Admin, Manager, Customer",
        "Profile management with image upload",
        "Category & sub-category product organization",
        "Product CRUD with image gallery and size/variant management",
        "Storefront: Home, Shop, Product Details, Cart",
        "Admin/Manager dashboard with full CRUD control",
        "Multi-gateway payment checkout (multiple payment methods supported)",
        "SPA-style navigation via Inertia.js (no separate REST API needed)",
      ],
      challenges: [
        {
          title: "SPA Experience Without a Separate API Layer",
          description:
            "The client wanted a smooth, app-like frontend, but building and maintaining a full separate REST API alongside the Laravel backend would add unnecessary overhead.",
          solution:
            "Used Inertia.js to bridge Laravel controllers directly to React 19 pages, passing data as props on each request — keeping Laravel's routing/auth/validation while giving the frontend a true SPA feel with Vite-powered fast builds.",
        },
        {
          title: "Supporting Multiple Payment Methods at Checkout",
          description:
            "Customers expected choice at checkout rather than being locked into a single payment provider, which meant the order/checkout flow had to stay payment-method agnostic.",
          solution:
            "Decoupled the checkout flow from any single gateway's logic, structuring order creation to accept a selected payment method and route to the corresponding gateway integration before confirming the order.",
        },
      ],
      contributors: [{ name: "Sabbir Hassan", role: "Full Stack" }],
      technologies: [
        "Laravel",
        "PHP",
        "React 19",
        "Inertia.js",
        "Tailwind CSS v4",
        "Radix UI",
        "Framer Motion",
        "Vite",
        "MySQL",
      ],
      liveLink: "",
      githubLink: "",
      youtubeId: "",
      desktopReady: true,
      mobileReady: false,
      itsClientProject: true,
    },
  },
  // ─────────────────────────────────────────────
  // 7. Employee Management System
  // ─────────────────────────────────────────────
  {
    id: "7",
    title: "Employee Management System",
    shortDescription:
      "Advanced HR platform for employee records, attendance, roles & departments",
    year: "2025",
    role: "Full Stack Laravel Developer",
    coverImage: "/Ems/cover.jpg",
    images: [
      "/Ems/cover.jpg",
      "/Ems/1.jpg",
      "/Ems/2.jpg",
      "/Ems/3.jpg",
      "/Ems/4.jpg",
      "/Ems/5.jpg",
      "/Ems/6.jpg",
      "/Ems/7.jpg",
      "/Ems/8.jpg",
      "/Ems/9.jpg",
      "/Ems/10.jpg",
      "/Ems/11.jpg",
      "/Ems/12.jpg",
      "/Ems/13.jpg",
      "/Ems/14.jpg",
      "/Ems/15.jpg",
      "/Ems/16.jpg",
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
  // 8. DailySunnah – Islamic Habit Tracker App
  // ─────────────────────────────────────────────
  {
    id: "8",
    title: "DailySunnah – Islamic Habit Tracker App",
    shortDescription:
      "React Native mobile app that helps Muslims build daily Sunnah habits with streak tracking, hadith references, and offline access",
    year: "2025 – 2026",
    role: "Mobile & Backend Developer",
    coverImage: "/Dailysunnah/Cover.png",
    images: [
      "/Dailysunnah/Cover.png",
      "/Dailysunnah/1.png",
      "/Dailysunnah/2.png",
      "/Dailysunnah/3.png",
      "/Dailysunnah/4.png",
      "/Dailysunnah/5.png",
    ],
    category: ["app"],
    caseStudy: {
      tagline:
        "A React Native (Expo) app, powered by a Laravel backend, that turns daily Sunnah practices into a trackable checklist, with streaks, hadith references, and gender- and mazhab-specific Islamic guidance — fully usable offline.",
      overview: `Built DailySunnah, a React Native mobile app that helps users build consistent daily Islamic habits (Sunnahs) through a simple checklist experience, backed by streak tracking, daily reminders, and rich Islamic educational content synced from a Laravel-powered backend.

The Challenge:
Many Muslims want to practice daily Sunnahs (small prophetic traditions like using miswak, eating with the right hand, giving salam) but lack a simple way to track consistency or understand the hadith basis and scholarly (mazhab) context behind each practice. The content (hadiths, daily tips, duas, mazhab explanations) also needed to be manageable and updatable without shipping a new app release, while the app itself still had to work reliably offline on lower-end Android devices.

The Solution:
Built the mobile client with React Native and Expo, using AsyncStorage for offline-first local persistence of habits, streaks, and daily state so the checklist keeps working without a network connection. A Laravel backend serves as the content and API layer — managing and delivering the Sunnah habit list, hadith references, daily tips/duas, mazhab explanations, and forgotten-Sunnah content — so new content can be added or corrected from an admin side without an app update, while the mobile app caches it locally for offline use. Each Sunnah habit in the checklist links to its hadith reference and explanation, plus a breakdown across the four major mazhabs (Hanafi, Shafi'i, Maliki, Hanbali). The app also curates a "forgotten Sunnahs" section and gender-specific Islamic guidance (separate content tracks for men and women), with a daily tip and daily Arabic dua rotated based on the date.

Key Features:
- Daily Sunnah checklist with tap-to-complete tracking
- Streak counter that persists across days via AsyncStorage
- Daily progress bar showing completed vs total Sunnahs for the day
- Hadith reference & explanation shown under each habit
- Four-mazhab (Hanafi/Shafi'i/Maliki/Hanbali) explanation modal per habit
- Rotating daily tip and Arabic dua with Bangla translation & context
- "Forgotten Sunnahs" section highlighting lesser-known practices
- Gender-specific Islamic guidance sections (for men and women)
- Fully offline-first — all data stored and read locally via AsyncStorage
- Automatic daily reset of checklist at midnight based on device date
- Dark mode support via system color scheme detection
- Laravel backend API serving and managing all Islamic content (habits, hadiths, tips, duas, mazhab explanations)
- Distributed as a standalone Android APK alongside the Expo project

Impact:
Delivered a lightweight, offline-capable Islamic habit-tracking app backed by a manageable Laravel content API — combining behavior-building (streaks, checklists) with authentic, easily-updatable hadith and mazhab context, making it easy for users to build consistency in daily Sunnah practice.`,
      problem:
        "Muslims wanting to build consistency in daily Sunnah practices had no simple, offline-friendly way to track habits while also learning the hadith basis and mazhab context behind each one — and the content itself needed to be easy to update without app releases.",
      solution:
        "Built a React Native (Expo) client with a Laravel backend API: the app stores habit, streak, and daily-state data locally via AsyncStorage for offline-first use, while Laravel manages and serves the Sunnah content (hadiths, daily tips, duas, mazhab breakdowns) so it can be updated independently of the app.",
      impact:
        "Delivered a habit-tracking experience that works offline day-to-day while staying easy to maintain and expand from the backend, surfacing authentic hadith and scholarly context behind each habit directly in the checklist.",
      features: [
        "Daily Sunnah checklist with tap-to-complete tracking",
        "Persistent streak counter across days (AsyncStorage)",
        "Daily progress bar for completed vs total habits",
        "Hadith reference & explanation per habit",
        "Four-mazhab (Hanafi/Shafi'i/Maliki/Hanbali) explanations",
        "Rotating daily tip & Arabic dua with Bangla translation",
        '"Forgotten Sunnahs" highlight section',
        "Gender-specific Islamic guidance content",
        "Laravel backend API for content management & delivery",
        "Offline-first local caching of synced content",
        "Automatic daily checklist reset",
        "Dark mode support",
      ],
      challenges: [
        {
          title: "Reliable Offline-First Data Persistence",
          description:
            "The app needed to track habits, streaks, and daily reset state without any backend, while surviving app restarts and date changes correctly.",
          solution:
            "Used AsyncStorage as the single source of truth: on launch, the app compares the stored lastDate against today's date via moment.js, resets the checklist when a new day starts, and persists habits and streak count back to AsyncStorage on every toggle.",
        },
        {
          title: "Delivering Educational Depth Without Clutter",
          description:
            "Each Sunnah habit could be explained from a hadith reference, four different mazhab perspectives, and gender-specific context — too much to show inline without overwhelming the checklist UI.",
          solution:
            "Kept the main checklist minimal (icon, name, short hadith caption) and pushed deeper content — full mazhab breakdowns and gender-specific guidance — into expandable/modal views triggered on demand.",
        },
      ],
      contributors: [
        { name: "Sabbir Hassan", role: "Mobile & Backend Developer" },
      ],
      technologies: [
        "React Native",
        "Expo",
        "React 19",
        "Laravel",
        "PHP",
        "MySQL",
        "RESTful API",
        "AsyncStorage",
        "Moment.js",
        "React Native SVG",
        "React Native Vector Icons",
      ],
      liveLink: "",
      githubLink: "https://github.com/SabbirHassanShuvo/DailySunnah-App",
      youtubeId: "",
      desktopReady: false,
      mobileReady: true,
      itsClientProject: false,
    },
  },

  // ─────────────────────────────────────────────
  // 9. Stand Blog – Role-Based Blogging Platform
  // ─────────────────────────────────────────────
  {
    id: "9",
    title: "Stand Blog – Role-Based Blogging Platform",
    shortDescription:
      "Laravel blog platform with custom-built authentication, three-tier role permissions, and a full admin/moderator content workflow",
    year: "2025",
    role: "Full Stack Developer",
    coverImage: "/standblog/cover.jpg",
    images: [
      "/standblog/cover.jpg",
      "/standblog/1.jpg",
      "/standblog/2.jpg",
      "/standblog/3.jpg",
      "/standblog/4.jpg",
      "/standblog/5.jpg",
      "/standblog/6.jpg",
      "/standblog/7.jpg",
      "/standblog/8.jpg",
      "/standblog/9.jpg",
      "/standblog/10.jpg",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "A responsive Laravel blogging platform built from scratch with manual authentication logic and a three-tier role system — Admin, Moderator, and User.",
      overview: `Built Stand Blog, a full-stack Laravel blogging platform where content permissions are strictly tied to user roles. Rather than relying on Laravel's built-in auth scaffolding, the authentication and session logic were written manually, giving full control over registration, login, password reset, and role assignment.

The Challenge:
The platform needed clear separation of responsibility between three types of users — Admins who manage the whole system, Moderators who help manage content, and regular Users who read and comment — while keeping the authentication flow, email notifications, and post/comment workflows fully custom rather than relying on a scaffolding package.

The Solution:
Built a custom AuthController handling registration, login, and logout by hand (hashing, session/cache-based password reset tokens, and role assignment on signup), backed by Laravel Mail classes for welcome emails, password-reset emails, and contact-form replies sent over SMTP. Posts, categories, and comments are managed through role-guarded Admin controllers, with image upload and thumbnail generation on post creation. The frontend uses Blade templates with Bootstrap 5 for a responsive reading and admin experience.

Key Features:
- Manual (non-scaffolded) authentication: registration, login, logout
- Three-tier role-based access: Admin, Moderator, User
- Cache/token-based password reset flow with email delivery
- Automated welcome emails on registration (separate templates for admin vs. general users)
- Blog post CRUD with image upload & thumbnail generation, permissioned by role
- Category management for organizing posts
- Comment system on posts
- Contact form with an admin reply-by-email feature
- Admin dashboard for managing users, posts, categories, and comments
- Posts listed by latest publish date
- Fully responsive Blade + Bootstrap 5 frontend

Impact:
Delivered a self-contained Laravel blogging platform with a hand-built, fully understood authentication and permissions system — giving the client a content workflow where Admins and Moderators can safely manage posts and comments without touching user-facing account security logic.`,
      problem:
        "The platform needed a blogging system with clearly separated Admin, Moderator, and User permissions, custom-built authentication (not off-the-shelf scaffolding), and a reliable email flow for account and contact interactions.",
      solution:
        "Built a Laravel backend with a hand-written AuthController (registration, login, cache/token-based password reset), Mail classes for welcome/reset/contact-reply emails, and role-guarded Admin controllers for posts, categories, users, and comments — rendered through Blade + Bootstrap 5.",
      impact:
        "Delivered a fully custom, role-aware blogging platform where Admins and Moderators manage content and users through a dedicated dashboard, while the authentication and email systems remain transparent and fully owned rather than dependent on a package.",
      features: [
        "Manually built authentication (register, login, logout)",
        "Three-tier roles: Admin, Moderator, User",
        "Token/cache-based password reset via email",
        "Automated welcome emails on registration",
        "Blog post CRUD with image upload & thumbnails",
        "Category management",
        "Comment system on posts",
        "Contact form with admin email-reply feature",
        "Admin dashboard: users, posts, categories, comments",
        "Responsive Blade + Bootstrap 5 frontend",
      ],
      challenges: [
        {
          title: "Building Authentication Without Scaffolding",
          description:
            "Skipping Laravel's built-in auth starter kits meant registration, login, session handling, and password-reset security had to be implemented and secured entirely by hand.",
          solution:
            "Wrote a dedicated AuthController that validates and hashes credentials directly, assigns a default role on registration, and generates cache-backed, time-limited password-reset tokens emailed via a custom ResetPasswordEmail mailable.",
        },
        {
          title: "Role-Guarded Content Workflows",
          description:
            "Admins, Moderators, and Users needed different levels of access to posts, categories, and comments without duplicating controller logic across roles.",
          solution:
            "Centralized post, category, and user management inside role-checked Admin controllers, using the user_role field set at registration to gate access to dashboard routes and actions.",
        },
      ],
      contributors: [{ name: "Sabbir Hassan", role: "Backend" }],
      technologies: [
        "Laravel",
        "PHP",
        "Blade",
        "Bootstrap 5",
        "MySQL",
        "SMTP Mail",
        "Custom Auth",
      ],
      liveLink: "",
      githubLink: "https://github.com/SabbirHassanShuvo/Stand-Blog-Laravel",
      youtubeId: "",
      desktopReady: true,
      mobileReady: false,
      itsClientProject: false,
    },
  },

  // ─────────────────────────────────────────────
  // 10. Blood Donation Management System
  // ─────────────────────────────────────────────
  {
    id: "10",
    title: "Blood Donation Management System",
    shortDescription:
      "Core PHP web app that connects blood donors and recipients with donor search, admin management, and donation history tracking",
    year: "2025 – 2026",
    role: "Backend Developer",
    coverImage: "/bloodbank/Cover.jpg",
    images: [
      "/bloodbank/Cover.jpg",
      "/bloodbank/1.jpg",
      "/bloodbank/2.jpg",
      "/bloodbank/3.jpg",
      "/bloodbank/4.jpg",
      "/bloodbank/5.jpg",
      "/bloodbank/6.jpg",
      "/bloodbank/7.jpg",
      "/bloodbank/8.jpg",
      "/bloodbank/9.jpg",
      "/bloodbank/10.jpg",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "A core PHP web application built to bridge the gap between people who need blood and people who can donate — with donor search, admin oversight, and donation history tracking.",
      overview: `Built a Blood Donation Management System in core PHP (no framework) to help hospitals, NGOs, and communities manage blood donors and requests in one place. The system connects people searching for blood with registered donors by blood group and location, while giving admins tools to manage users and monitor activity.

The Challenge:
Finding an available, eligible donor quickly during an emergency is difficult without a searchable, centralized donor registry. The platform needed straightforward donor registration and lookup, secure account recovery, and an admin layer to keep donor and user data clean — all without the overhead of a full framework.

The Solution:
Built entirely in core PHP with a MySQL/MariaDB database, using parameterized/escaped queries for donor search and pagination. Authentication covers registration, login, logout, and a forgot-password flow that emails a reset link via PHPMailer over SMTP (Mailtrap in development). Donor records track blood group, contact info, and last donation date so requesters can judge donor eligibility and recency at a glance. An admin dashboard provides full CRUD over users and donors.

Key Features:
- User authentication: register, login, logout, forgot/reset password
- Donor management: add, edit, and view donor profiles
- Donor search by name, phone, or blood group with pagination
- Donation history — shows how long ago a donor last donated
- Admin panel for managing users and monitoring donor records
- Password-reset emails sent via PHPMailer/SMTP
- Responsive Bootstrap-based UI
- Server-side input escaping for safer database queries

Impact:
Delivered a lightweight, framework-free donor management platform that makes it faster to locate a matching, eligible donor by blood group — while giving admins the tools to keep the donor registry accurate and up to date.`,
      problem:
        "Hospitals, NGOs, and communities needed a simple, centralized way to register blood donors and quickly search for an eligible match by blood group and location during urgent requests, without adopting a heavy framework.",
      solution:
        "Built a core PHP + MySQL application with donor CRUD, a searchable/paginated donor listing filtered by name, phone, or blood group, an admin panel for user/donor oversight, and a PHPMailer-powered forgot-password email flow.",
      impact:
        "Delivered a fast, easy-to-deploy donor registry that lets requesters search available donors by blood group in seconds, while admins maintain data accuracy through a dedicated management panel.",
      features: [
        "Register, login, logout & forgot/reset password",
        "Add, edit & view donor profiles",
        "Search donors by name, phone, or blood group",
        "Paginated donor listing",
        "Donation history (time since last donation)",
        "Admin panel for user & donor management",
        "PHPMailer/SMTP-powered password reset emails",
        "Responsive Bootstrap UI",
      ],
      challenges: [
        {
          title: "Fast, Safe Donor Search",
          description:
            "Requesters needed to quickly filter a growing donor list by blood group, name, or phone without slow queries or SQL injection risk.",
          solution:
            "Built a single search query that escapes user input and matches across name, phone, and blood_group fields, combined with SQL-level pagination (LIMIT/OFFSET) to keep listings fast as the donor table grows.",
        },
        {
          title: "Account Recovery Without a Framework",
          description:
            "Without Laravel-style auth scaffolding, password reset needed to be built securely by hand — validating tokens and expiry, then emailing a reset link.",
          solution:
            "Integrated PHPMailer directly for SMTP delivery, generating and validating reset tokens in reset_password.php and forgot_password.php before allowing a password change.",
        },
      ],
      contributors: [{ name: "Sabbir Hassan", role: "Backend" }],
      technologies: [
        "PHP",
        "MySQL",
        "Bootstrap",
        "HTML",
        "CSS",
        "PHPMailer",
        "SMTP",
      ],
      liveLink: "",
      githubLink: "https://github.com/SabbirHassanShuvo/Blood_Donation",
      youtubeId: "",
      desktopReady: true,
      mobileReady: false,
      itsClientProject: false,
    },
  },

  // ─────────────────────────────────────────────
  // 11. Cylore Construction – Construction Service Website
  // ─────────────────────────────────────────────
  {
    id: "11",
    title: "Cylore Construction – Construction Service Website",
    shortDescription:
      "Full-stack construction brand website with a Laravel API backend and a React admin-managed frontend for services, projects, and testimonials",
    year: "2025 – 2026",
    role: "Full Stack Developer",
    coverImage: "/contruction/cover.jpg",
    images: [
      "/contruction/cover.jpg",
      "/contruction/1.jpg",
      "/contruction/2.jpg",
      "/contruction/3.jpg",
      "/contruction/4.jpg",
      "/contruction/5.jpg",
      "/contruction/6.jpg",
      "/contruction/7.jpg",
      "/contruction/8.jpg",
    ],
    category: ["web"],
    caseStudy: {
      tagline:
        "A modern construction service website for Cylore, built as a decoupled Laravel 11 API backend paired with a React 18 (Vite) frontend, covering services, projects, team, and testimonials.",
      overview: `Built the Cylore Construction website as a decoupled full-stack application: a Laravel 11 REST API backend and a separate React 18 + Vite frontend, for a construction brand offering building, renovation, and management services.

The Challenge:
A construction company needed a marketing site that could showcase its services, past projects, team members, and client testimonials — fully manageable from an admin panel — while still feeling fast and polished on the public-facing side, with a proper enquiry/contact pipeline for leads.

The Solution:
Split the codebase into a Laravel 11 API (Sanctum-authenticated) serving structured content — services, projects, team members, testimonials, and articles/blog posts — and a React 18 + Vite frontend consuming that API. Admin controllers manage all content types (services, projects, testimonials, members, articles) separately from the public "front" controllers that serve read-only data to the React app. Image uploads are optimized with Intervention/Image, and a temp-image controller handles preview uploads before content is saved. The frontend uses React Hook Form with React Toastify for validated, feedback-rich forms (including the contact/enquiry form), Swiper.js for image carousels, and Jodit React as a rich text editor for admin content entry.

Key Features:
- User authentication (register, login, logout) via Laravel Sanctum
- Profile update & password reset
- Admin dashboard for managing services, projects, team, testimonials & articles
- Public service listing with search & filter
- Contact form with enquiry management for the admin
- Image optimization via Intervention/Image, with temp-image upload handling
- Rich text content editing (Jodit React) for admin-authored content
- Image sliders/carousels via Swiper.js
- Real-time form validation (React Hook Form) with toast notifications
- Fully responsive, mobile-friendly UI
- Decoupled architecture: Laravel API + React SPA over Vite

Impact:
Delivered a fast, fully admin-manageable construction brand website — separating public marketing pages from a clean Laravel API and admin panel, so non-technical staff can update services, showcase completed projects, and manage incoming enquiries without developer involvement.`,
      problem:
        "Cylore needed a professional, fast-loading construction brand website where services, projects, team, and testimonials were fully editable by admin staff, alongside a working contact/enquiry pipeline for potential clients.",
      solution:
        "Built a decoupled Laravel 11 API (Sanctum auth, Intervention/Image processing) serving services, projects, members, testimonials, and articles, consumed by a React 18 + Vite frontend with React Hook Form, React Toastify, Swiper.js, and Jodit React for a polished public and admin experience.",
      impact:
        "Delivered a construction brand website that stays easy for staff to update (services, portfolio, team, testimonials) through a dedicated admin panel, while giving visitors a fast, responsive React frontend and a working enquiry pipeline.",
      features: [
        "Authentication (register, login, logout) via Laravel Sanctum",
        "Profile update & password reset",
        "Admin dashboard for services, projects, members, testimonials & articles",
        "Public service listing with search & filter",
        "Contact form & enquiry management",
        "Image optimization via Intervention/Image",
        "Rich text editing (Jodit React) for admin content",
        "Image carousels via Swiper.js",
        "Real-time validated forms (React Hook Form + Toastify)",
        "Fully responsive, mobile-friendly UI",
      ],
      challenges: [
        {
          title: "Decoupling Admin Content from the Public API",
          description:
            "Services, projects, testimonials, and articles all needed both an admin management interface and a lightweight public read endpoint, without mixing write-permissioned logic into the public API surface.",
          solution:
            "Split controllers into separate `admin` and `front` namespaces per content type (e.g. ServiceController in both), so admin routes handle full CRUD behind Sanctum auth while front routes only expose safe, read-only data to the React app.",
        },
        {
          title: "Smooth Image Uploads Before Content Is Saved",
          description:
            "Admins needed to preview and attach images while creating or editing services/projects, without leaving orphaned files if the form was abandoned.",
          solution:
            "Built a dedicated TempImageController that handles uploads to a temporary location first, processes them via Intervention/Image, and only associates them with the final record once the parent form is actually submitted.",
        },
      ],
      contributors: [{ name: "Sabbir Hassan", role: "Full Stack" }],
      technologies: [
        "Laravel 11",
        "Laravel Sanctum",
        "PHP",
        "React 18",
        "Vite 6",
        "React Router v7",
        "React Hook Form",
        "React Toastify",
        "Bootstrap 5",
        "React-Bootstrap",
        "Sass",
        "Jodit React",
        "Swiper.js",
        "Intervention/Image",
        "MySQL",
      ],
      liveLink: "",
      githubLink: "https://github.com/SabbirHassanShuvo/Cylore-Construction",
      youtubeId: "",
      desktopReady: true,
      mobileReady: false,
      itsClientProject: true,
    },
  },
];
