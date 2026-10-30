export const siteConfig = {
  name: "TUSHAR LABS",
  legalName: "Tushar Labs Digital Studio",
  tagline: "Independent Digital Solutions & Technology Studio",
  description:
    "We design and build websites, custom software, and intelligent digital systems that help ambitious businesses move forward.",
  url: "https://tusharlabs.vercel.app",
  ogImage: "/og.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/tushar-kapoor-47a9a61b3",
    instagram: "https://www.instagram.com/ai.solution_tushar",
    whatsapp: "https://wa.me/919667645518?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    github: "https://github.com",
  },
  contact: {
    email: "tusharkapoor756@gmail.com",
    phone: "+91 9667645518",
    whatsappNumber: "+91 9667645518",
    location: "New Delhi, India — Available Globally",
    operatingHours: "Mon — Fri / 09:00 — 18:00 IST",
  },
  cta: {
    startProject: "/contact",
    exploreWork: "/work",
    whatsappDirect: "https://wa.me/919667645518?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20start%20a%20project.",
  },
  navigation: [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export interface ServiceDetail {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  leadParagraph: string;
  deliverables: string[];
  keyCapabilities: string[];
  useCases: { title: string; desc: string }[];
}

export const studioServices: ServiceDetail[] = [
  {
    slug: "website-development",
    index: "01",
    title: "Website Design & Development",
    tagline: "High-performance digital flagships engineered for conversion and brand authority.",
    leadParagraph:
      "We design and construct tailored web platforms that reject interchangeable templates. Every pixel and line of code is structured to convey brand authority, deliver instantaneous load times, and maximize user conversion.",
    deliverables: [
      "Custom Business Websites & Redesigns",
      "Editorial & High-Impact Portfolio Platforms",
      "Interactive High-Conversion Landing Pages",
      "Headless E-Commerce Frontends",
      "Design Systems & Responsive Web UI",
    ],
    keyCapabilities: [
      "Next.js 14 App Router & Static Pre-rendering",
      "TypeScript Type-Safe Architecture",
      "Tailwind CSS Bespoke Tokens",
      "Subtle Micro-Interactions & Accessible Motion",
      "Advanced Technical SEO & Schema Markup",
      "Core Web Vitals Optimization",
    ],
    useCases: [
      {
        title: "B2B & Venture-Backed Startups",
        desc: "Founders seeking a high-trust digital presence that converts investors and premium enterprise clients.",
      },
      {
        title: "Independent Agencies & Studios",
        desc: "Design studios and consultants requiring a flagship portfolio that reflects exceptional craftsmanship.",
      },
      {
        title: "Hospitality & Boutique Brands",
        desc: "Restaurants, luxury travel, and hospitality firms wanting high-touch customer booking journeys.",
      },
    ],
  },
  {
    slug: "custom-software",
    index: "02",
    title: "Custom Software Development",
    tagline: "Tailored full-stack platforms, SaaS foundations, and operational tooling.",
    leadParagraph:
      "When off-the-shelf software compromises your operational speed or customer experience, we build bespoke full-stack applications and scalable SaaS engines designed specifically for your business logic.",
    deliverables: [
      "Full-Stack Web Applications",
      "SaaS MVP Architecture & Rapid Launch",
      "Enterprise Admin Portals & Command Dashboards",
      "Custom CRM & Client Management Engines",
      "Secure Customer & Vendor Portals",
    ],
    keyCapabilities: [
      "React & Next.js Dynamic Client Interfaces",
      "Node.js & Express RESTful API Engineering",
      "Supabase & PostgreSQL Relational Databases",
      "Role-Based Access Control (RBAC) & Auth",
      "Real-time WebSocket Data Synchronization",
      "Edge Functions & Cloud Infrastructure",
    ],
    useCases: [
      {
        title: "SaaS Founders & Product Teams",
        desc: "Building a functional MVP with clean database schemas and robust API architecture to onboard early adopters.",
      },
      {
        title: "Multi-Location Operations",
        desc: "Businesses transitioning from fragmented spreadsheets to an integrated central operating dashboard.",
      },
      {
        title: "Client & Partner Portals",
        desc: "Firms requiring secure authenticated portals for file sharing, billing, and order tracking.",
      },
    ],
  },
  {
    slug: "ai-automation",
    index: "03",
    title: "AI & Workflow Automation",
    tagline: "Practical intelligent automation that eliminates manual bottlenecks and captures revenue.",
    leadParagraph:
      "We replace manual data entry and disjointed workflows with deterministic automation pipelines and custom conversational AI agents connected directly to your existing software stack.",
    deliverables: [
      "Custom Conversational AI Assistants",
      "Automated WhatsApp Business Pipelines",
      "Multi-Service n8n Workflow Architectures",
      "Automated Inbound Lead Qualification",
      "Deterministic LLM Knowledge Retrieval Systems",
    ],
    keyCapabilities: [
      "Gemini & OpenRouter Multi-Model Integrations",
      "WhatsApp Cloud API Webhooks & Event Handlers",
      "Self-Hosted n8n Visual Automation Pipelines",
      "Deterministic Guardrails & Structured Output Parsing",
      "CRM & Spreadsheet Two-Way Data Sync",
      "Vector Embeddings & Semantic Search",
    ],
    useCases: [
      {
        title: "Lead Qualification & Sales Routing",
        desc: "Instant 24/7 engagement on website and WhatsApp to qualify buyer budget before notifying sales reps.",
      },
      {
        title: "Customer Support Automation",
        desc: "Automated answering of order statuses, menu questions, and operating hours with zero hallucination.",
      },
      {
        title: "Cross-App Data Synchronization",
        desc: "Connecting payment webhooks, database updates, and email notifications into reliable background pipelines.",
      },
    ],
  },
  {
    slug: "branding-design",
    index: "04",
    title: "Branding & Digital Design",
    tagline: "Distinctive, coherent brand identities and precision UI/UX design systems.",
    leadParagraph:
      "A great digital experience starts with a disciplined visual foundation. We create cohesive brand identities, editorial typographic hierarchies, and production-ready design systems that command attention.",
    deliverables: [
      "Brand Identity & Visual Guidelines",
      "Typography & Color Architectures",
      "Product UI/UX & Responsive Systems (Figma)",
      "High-Fidelity Interactive Prototypes",
      "Digital Marketing Visual Systems",
    ],
    keyCapabilities: [
      "Figma Advanced Auto-Layout & Component Tokens",
      "Swiss Typography Hierarchy & Grid Systems",
      "Interactive High-Fidelity Prototyping",
      "Vector Asset Design (Adobe Illustrator)",
      "3D Spatial Visualization & SketchUp",
      "Design-to-Code Implementation Alignment",
    ],
    useCases: [
      {
        title: "Rebranding Established Businesses",
        desc: "Elevating outdated visual identities to compete effectively in modern, design-conscious international markets.",
      },
      {
        title: "New Venture Visual Foundations",
        desc: "Creating an original name mark, color palette, and initial UI library prior to product engineering.",
      },
      {
        title: "Product Interface Modernization",
        desc: "Auditing and redesigning complex legacy software to make it intuitive and aesthetically commanding.",
      },
    ],
  },
];

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  year: string;
  status: "Live Product" | "Technical Foundation" | "Design & Planning" | "Concept / Architecture";
  statusColor: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  tech: string[];
  challenges: string;
  accent: string;
  externalLink?: string;
  nextProject: { id: string; title: string };
}

export const studioProjects: ProjectDetail[] = [
  {
    id: "kitchenzap",
    title: "KitchenZap",
    category: "Restaurant Operating Platform / SaaS",
    year: "2024",
    status: "Live Product",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    summary:
      "A restaurant operating platform connecting ordering, POS, kitchen operations, billing, and customer management into one synchronized system.",
    problem:
      "Independent restaurants often battle disjointed systems: POS terminals, paper tickets, third-party tablet ordering, and disconnected inventory spreadsheets. This causes ticket discrepancies, billing bottlenecks, and slow order throughput.",
    solution:
      "Designed and engineered KitchenZap as a unified operating system. The platform synchronizes dining-room orders with kitchen display screens, manages table availability, handles deterministic billing, and logs customer transaction history in real-time.",
    role: "Full-Stack Software Architecture, UI/UX Design System, Database Modeling & Deployment.",
    features: [
      "Kitchen Display System (KDS) with real-time order status updates",
      "Digital table management and active seating allocation",
      "Synchronized POS terminal and instant receipt generation",
      "Daily revenue summaries and category-based sales metrics",
      "Role-based staff authentication for cashiers and kitchen managers",
    ],
    tech: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"],
    challenges:
      "Ensuring sub-second synchronization between front-of-house order inputs and kitchen display screens without dropped orders during peak dining rushes.",
    accent: "#FF5500",
    externalLink: "https://kitchenzap.com",
    nextProject: { id: "restroex", title: "Restroex" },
  },
  {
    id: "restroex",
    title: "Restroex",
    category: "AI Restaurant Ordering Architecture",
    year: "2024",
    status: "Technical Foundation",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    summary:
      "An AI-assisted restaurant ordering platform with deterministic menu parsing, stateful cart management, and conversational ordering architecture.",
    problem:
      "Standard conversational bots frequently hallucinate non-existent menu items or fail to maintain precise cart calculations when customers modify portions, dietary requests, and quantities during multi-turn conversations.",
    solution:
      "Architected a stateful conversational engine combining LLM natural language understanding with deterministic validation guards. Cart mutations are strictly validated against the active menu database before any item is added or calculated.",
    role: "Backend Architecture, Conversational Schema Engineering, Supabase Schema, API Development.",
    features: [
      "Deterministic menu entity extraction with strict schema validation",
      "Multi-turn conversational cart management with dynamic price calculating",
      "Custom modifier handling (dietary tags, spice preferences, portions)",
      "Supabase real-time order queue and status webhooks",
      "OpenRouter multi-model LLM abstraction layer",
    ],
    tech: ["Node.js", "TypeScript", "Express", "Supabase", "OpenRouter"],
    challenges:
      "Preventing LLM hallucinations during pricing updates by decoupling the natural language parsing layer from the mathematical billing logic.",
    accent: "#38BDF8",
    nextProject: { id: "safaronroads", title: "Safaronroads" },
  },
  {
    id: "safaronroads",
    title: "Safaronroads",
    category: "Adventure Travel & Digital Platform",
    year: "2024",
    status: "Design & Planning",
    statusColor: "text-sky-400 bg-sky-950/40 border-sky-800/40",
    summary:
      "Adventure-focused expedition and travel agency platform with immersive route discovery, itinerary planning, and custom booking workflows.",
    problem:
      "Traditional travel agency websites are cluttered with generic packages, lack topography and route transparency, and overwhelm adventure travelers seeking rugged, bespoke road journeys.",
    solution:
      "Created an editorial, topography-inspired digital platform. Built an itinerary planning system with visual elevation profiles, day-by-day expedition route breakdowns, vehicle requirements, and seamless enquiry qualification.",
    role: "Brand Identity, Visual Art Direction, Frontend Architecture & Figma Design System.",
    features: [
      "Editorial expedition cards with route maps and difficulty ratings",
      "Day-by-day interactive expedition itineraries",
      "Vehicle requirement checklists and gear recommendations",
      "Direct WhatsApp and enquiry form dispatch with trip pre-selection",
      "High-contrast dark editorial aesthetic optimized for outdoor photography",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Figma Design System"],
    challenges:
      "Balancing high-resolution expedition visual moments with fast mobile page loading for travelers browsing in low-bandwidth regions.",
    accent: "#E2E8F0",
    nextProject: { id: "agent-x", title: "Agent-X" },
  },
  {
    id: "agent-x",
    title: "Agent-X",
    category: "Conversational AI Sales Assistant",
    year: "2024",
    status: "Technical Foundation",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    summary:
      "Autonomous conversational sales assistant architecture engineered to qualify inbound leads, schedule demos, and interface with CRM backends.",
    problem:
      "Inbound website visitors often bounce because static contact forms fail to provide immediate answers or qualify budget and timeline in real-time.",
    solution:
      "Engineered an autonomous conversational agent capable of engaging visitors, answering service capabilities from indexed documentation, qualifying project budget, and capturing contact information directly into CRM tables.",
    role: "System Architecture, Prompt Engineering, API Integration & Full-Stack Prototyping.",
    features: [
      "Real-time streaming conversational interface",
      "Context-aware qualification heuristics (budget, timeline, scope)",
      "Automated lead handoff notification via WhatsApp and email webhook",
      "CRM database schema synchronization",
      "Configurable qualification criteria without code changes",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "Gemini API", "Vector Store"],
    challenges:
      "Enforcing deterministic fallback states when user inquiries fall outside predefined studio practice parameters.",
    accent: "#FF5500",
    nextProject: { id: "nexus", title: "Nexus" },
  },
  {
    id: "nexus",
    title: "Nexus",
    category: "AI Business Operating System",
    year: "2024",
    status: "Concept / Architecture",
    statusColor: "text-purple-400 bg-purple-950/40 border-purple-800/40",
    summary:
      "A conceptual AI-powered business workspace unifying multi-channel client inquiries, project task automation, and central database architecture.",
    problem:
      "Small digital studios and consultancies operate across 5+ disconnected tools for invoicing, task management, WhatsApp client messages, and proposal generation.",
    solution:
      "Architected Nexus as an unified operating concept: an intelligent hub where client communications trigger automated task generation, draft estimates, and update central database pipelines from a single command dashboard.",
    role: "System Conceptualization, Data Architecture Blueprint, UI Prototyping.",
    features: [
      "Unified command palette with natural-language workflow triggering",
      "Automated proposal drafting from brief entity extraction",
      "Multi-channel client message aggregation",
      "Central relational project and client database schema",
      "Visual workflow canvas powered by n8n architecture patterns",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "n8n Architecture"],
    challenges:
      "Synthesizing high-density data visualization with an un-cluttered, high-contrast studio interface.",
    accent: "#A855F7",
    nextProject: { id: "kitchenzap", title: "KitchenZap" },
  },
];

export const studioProcess = [
  {
    step: "01",
    name: "Discover",
    headline: "Unpacking Core Objectives",
    description:
      "We dive deep into your business model, operational friction, user psychology, and competitive positioning before writing a line of code or designing a single frame.",
  },
  {
    step: "02",
    name: "Define",
    headline: "Architectural & Functional Scope",
    description:
      "We establish rigorous technical specifications, schema definitions, user journeys, and project milestones to ensure deterministic execution without scope bloat.",
  },
  {
    step: "03",
    name: "Design",
    headline: "Editorial & Interaction Craft",
    description:
      "We create bespoke visual systems, typographic hierarchies, and interactive responsive layouts that convey distinction and effortless functional clarity.",
  },
  {
    step: "04",
    name: "Develop",
    headline: "Clean, Scalable Implementation",
    description:
      "We construct modern, type-safe frontends and robust backends utilizing modern frameworks, rigorous state management, and optimized API layers.",
  },
  {
    step: "05",
    name: "Deliver",
    headline: "Production Launch & Support",
    description:
      "We handle deployment to global edge infrastructure, verify production analytics and SEO schemas, and hand over thorough documentation and ongoing support.",
  },
];

export const studioCapabilities = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  backend: ["Node.js", "Express", "RESTful APIs", "FastAPI", "Edge Functions"],
  database: ["Supabase", "PostgreSQL", "Prisma", "Redis"],
  aiAutomation: ["Gemini 1.5 Pro / Flash", "OpenRouter", "n8n Automation", "WhatsApp Cloud API", "LangChain"],
  design: ["Figma Design Systems", "Adobe Photoshop", "Adobe Illustrator", "SketchUp / 3D Visualization"],
  deployment: ["Vercel Edge Network", "GitHub CI/CD", "Cloudflare", "Supabase Cloud"],
};
