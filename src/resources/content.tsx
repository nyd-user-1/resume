import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Brendan",
  lastName: "Stanton",
  name: `Brendan Stanton`,
  role: "Founder",
  avatar: "/images/avatar-1.avif",
  email: "Brendan@nysgpt.com",
  location: "New York",
  timeZone: "America/New_York",
  languages: [],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nyd-user-1",
    essential: true,
  },
  {
    name: "Call",
    icon: "phone",
    link: "tel:6317932012",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Building AI tools
      <br />
      for legacy systems
    </>
  ),
  featured: {
    display: false,
    title: <></>,
    href: "/work",
  },
  subline: (
    <>
      Domain specific AI applications for government and regulatory environments.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} of NYSgpt.com based in Long Island, NY`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Brendan is a New York-based design engineer and Founder of NYSgpt.com where he designs
        digital products and new user interfaces for complex, legacy database systems. His work spans
        government and regulatory environments with a focus on domain-specific AI-application
        architecture.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "NYSgpt",
        timeframe: "January 2026 – Present",
        role: "Founder",
        logo: "/images/nysgpt-badge.png",
        achievements: [
          <>Design and development of production-grade AI platforms over large, structured datasets, enabling natural language interaction with complex domains and real-world decision workflows.</>,
          <>Built SportsGPT, SolarGPT, InsuranceGPT, PolicyGPT, and DatabaseGPT — each a domain-specific application combining structured data ingest, AI chat, and guided decision workflows.</>,
          <>Engineered parallel route architecture for a browser-as-workspace UX; one URL encodes a three-panel drill-down across entity, chart, and detail layers.</>,
          <>Multi-model orchestration across OpenAI (GPT-4-class) and Anthropic Claude APIs with prompt design for structured outputs and evaluation loops driving accuracy improvements from ~60–70% to &gt;90%.</>,
        ],
        images: [],
      },
      {
        company: "Suffolk County Government",
        timeframe: "Mar 2022 – Jan 2025",
        role: "Chief Innovation Analyst / Mktg. Specialist",
        achievements: [
          <>Led digital transformation of 1.5M-resident county through ransomware attack and organizational resistance.</>,
          <>Shipped enterprise CRM serving 11,000+ users processing 500,000+ services in Salesforce Lightning.</>,
          <>Fortuitously migrated job intake to CRM 30 days before ransomware attack — saved critical citizen data.</>,
          <>Built "Resume Warehouse": AI-ready talent database with keyword/topic matching for 10,000+ job seekers.</>,
          <>Created real-time KPI dashboards with GeoJSON mapping enabling executives to see problems as they emerge.</>,
          <>Converted 7 methodologies (PMP, Six Sigma, SHRM, ADKAR, Design Thinking) into a unified framework library.</>,
        ],
        images: [],
      },
      {
        company: "Nassau County Government",
        timeframe: "Jan 2018 – Dec 2021",
        role: "Public Information Officer",
        achievements: [
          <>Turned crisis communications into a digital command center through creative tool usage and systematic innovation.</>,
          <>Built 24/7 Joint Information Center serving 1.3M residents during COVID — zero downtime, no playbook.</>,
          <>Briefed Police Commissioner daily by triangulating intel from a 50-person call center.</>,
          <>Repurposed HubSpot properties like Salesforce objects — predicted outbreak hotspots via call pattern analysis.</>,
          <>Synthesized data streams (health, police, logistics) into 2-page executive briefs across 15+ agencies.</>,
        ],
        images: [],
      },
      {
        company: "American & Interstate Signcrafters",
        timeframe: "Sep 2015 – Jan 2018",
        role: "Director of Marketing",
        achievements: [
          <>Doubled revenue ($21M→$42M) transforming a manufacturer through digital adoption and enterprise GTM.</>,
          <>Redesigned sales strategy: replaced 2-year prospecting cycle with focused RFP execution (2–3Q avg. close).</>,
          <>Secured AIA accreditation (HSW) to inject product at architectural Phase 1 — established trust before sales.</>,
          <>Built RFP system winning Fortune 500, healthcare (Northwell/Yale), and financial services accounts.</>,
        ],
        images: [],
      },
      {
        company: "Meltzer Lippe",
        timeframe: "Nov 2011 – Dec 2014",
        role: "Communications Officer",
        achievements: [
          <>Modernized NY-Metro law firm through design-led digital transformation and trust-building client communications.</>,
          <>Led wholesale rebrand and website redesign serving 50+ attorneys across multiple practice areas.</>,
          <>Created digital video laboratory in YouTube's early days, pioneering law firm multimedia content.</>,
          <>Built internal communications design system standardizing materials across equity partners.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "The George Washington University",
        description: <>BA in Political Science, 2005.</>,
        image: "/images/gwu-logo.png",
      },
      {
        name: "Project Management Institute",
        description: <>PMP®, PMI-ACP®, CAPM®</>,
        image: "/images/pmp-logo.png",
      },
      {
        name: "Society for Human Resource Management",
        description: <>SHRM-SCP®</>,
        image: "/images/shrm-logo.png",
      },
      {
        name: "Council for Six Sigma",
        description: <>Lean Six Sigma Black Belt</>,
        image: "/images/CSSC-Logo-Small.jpg",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AI / LLM",
        description: <>Claude, GPT-4, Perplexity APIs · Prompt Engineering · RAG Systems · Multi-model Orchestration · Structured Output Extraction · Systems Design</>,
        tags: [],
        images: [],
      },
      {
        title: "Technical / Product",
        description: <>React · Next.js · TypeScript · JavaScript · HTML/CSS · PostgreSQL · Supabase · NeonDB · APIs · MCP · GitHub · Webflow · Salesforce · HubSpot · Notion · Figma</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Figma", icon: "figma" },
          { name: "Supabase", icon: "supabase" },
          { name: "NeonDB" },
          { name: "GitHub", icon: "githubsi" },
        ],
        images: [],
      },
      {
        title: "Design & Research",
        description: <>UI/UX · User Research · A/B Testing · Wireframing · Rapid Prototyping · Information Architecture</>,
        tags: [],
        images: [],
      },
      {
        title: "Leadership",
        description: <>Agile/Scrum · Design Thinking · ADKAR Change Management · Public & Legislative Affairs · Crisis Communications · Stakeholder Management</>,
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/project-01/sports-1.avif",
      alt: "SportsGPT",
      orientation: "horizontal",
      title: "Historic Analysis",
      caption: "SportsGPT's complete view of Section XI football.",
    },
    {
      src: "/images/projects/project-06/nysgpt-2.jpg",
      alt: "PolicyGPT",
      orientation: "horizontal",
      title: "Follow the Money",
      caption: "PolicyGPT traces the budget to each agency.",
    },
    {
      src: "/images/projects/project-08/dashboard.avif",
      alt: "44B Dashboard",
      orientation: "horizontal",
      title: "The State of AI Accountability",
      caption: "44B charts AI accountability across New York.",
    },
    {
      src: "/images/projects/project-02/ba-map.jpg",
      alt: "SolarGPT Balancing Authority",
      orientation: "horizontal",
      title: "Independent System Operators",
      caption: "SolarGPT maps DOE data by ISO region and county.",
    },
    {
      src: "/images/projects/project-03/nsr-5.avif",
      alt: "NSRgpt",
      orientation: "horizontal",
      title: "The Literature, Indexed",
      caption: "NSRgpt indexes nuclear-structure references.",
    },
    {
      src: "/images/projects/project-07/tariffs-4.avif",
      alt: "TariffsGPT",
      orientation: "horizontal",
      title: "One Box, Two Corpora",
      caption: "TariffsGPT spans tariff codes and customs rulings.",
    },
    {
      src: "/images/projects/project-08/discussion.avif",
      alt: "44B Forum",
      orientation: "horizontal",
      title: "The Commons",
      caption: "44B hosts a forum on compliance and incidents.",
    },
    {
      src: "/images/projects/project-01/sports-3.avif",
      alt: "SportsGPT",
      orientation: "horizontal",
      title: "Launchpad",
      caption: "SportsGPT opens on rankings and dynasties.",
    },
    {
      src: "/images/projects/project-04/cc-4.avif",
      alt: "ChildcareGPT",
      orientation: "horizontal",
      title: "Where Care Is Scarcest",
      caption: "ChildcareGPT maps providers against local demand.",
    },
    {
      src: "/images/projects/project-05/insurance-1.avif",
      alt: "InsuranceGPT",
      orientation: "horizontal",
      title: "The Broker's Desk",
      caption: "InsuranceGPT puts clients and quotes on one desk.",
    },
    {
      src: "/images/projects/project-08/lab.avif",
      alt: "44B Labs",
      orientation: "horizontal",
      title: "Every Lab, Profiled",
      caption: "44B profiles every AI lab and its flagship model.",
    },
    {
      src: "/images/projects/project-02/utilities-1.jpg",
      alt: "SolarGPT Utilities",
      orientation: "horizontal",
      title: "Utility Service Territories",
      caption: "SolarGPT colors each county by its utility.",
    },
    {
      src: "/images/projects/project-06/nysgpt-4.jpg",
      alt: "PolicyGPT",
      orientation: "horizontal",
      title: "Guided Walkthroughs",
      caption: "PolicyGPT turns bill research into outreach.",
    },
    {
      src: "/images/projects/project-01/sports-2.avif",
      alt: "SportsGPT",
      orientation: "horizontal",
      title: "Friday Night Lights",
      caption: "SportsGPT runs a Section XI football photo gallery.",
    },
    {
      src: "/images/projects/project-08/paper.avif",
      alt: "44B Library",
      orientation: "horizontal",
      title: "A Research Library",
      caption: "44B reads the field's papers in place.",
    },
    {
      src: "/images/projects/project-03/nsr-3.avif",
      alt: "NSRgpt",
      orientation: "horizontal",
      title: "Nuclear Data Reports",
      caption: "NSRgpt surfaces ENDF evaluations and covariances.",
    },
    {
      src: "/images/projects/project-07/tariffs-3.avif",
      alt: "TariffsGPT",
      orientation: "horizontal",
      title: "Every Binding Ruling",
      caption: "TariffsGPT makes customs rulings searchable.",
    },
    {
      src: "/images/projects/project-05/insurance-2.avif",
      alt: "InsuranceGPT",
      orientation: "horizontal",
      title: "Get a Quote",
      caption: "InsuranceGPT opens with one chat box for quotes.",
    },
    {
      src: "/images/projects/project-08/search.avif",
      alt: "44B Search",
      orientation: "horizontal",
      title: "One Search, Five Corpora",
      caption: "44B searches five accountability corpora at once.",
    },
    {
      src: "/images/projects/project-04/cc-2.avif",
      alt: "ChildcareGPT",
      orientation: "horizontal",
      title: "A Statewide View",
      caption: "ChildcareGPT plots 16,800 providers statewide.",
    },
    {
      src: "/images/projects/project-01/sports-4.avif",
      alt: "SportsGPT",
      orientation: "horizontal",
      title: "Head to Head",
      caption: "SportsGPT puts two players side by side.",
    },
  ],
};

about.books = {
  display: true,
  title: "Book Recommendations",
  items: [
    { title: "A Pattern Language", author: "C. Alexander" },
    { title: "The 4th Turning", author: "Strauss & Howe" },
    { title: "The Generals", author: "Thomas E. Ricks" },
    { title: "The Most Magnificent Thing", author: "A. Spires" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
