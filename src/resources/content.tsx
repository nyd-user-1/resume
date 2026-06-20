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

about.openLetter = {
  display: true,
  title: "Open Letter",
  turns: [
    {
      role: "user",
      speaker: "Brendan",
      time: "7:23 PM",
      paragraphs: [
        <>
          Provide a concise explanation of The 4th Turning, a loose estimate of
          where current world events fit into this framework, and then layer on
          George Marshall's thoughts concerning leadership as outlined his
          November 1920 letter to Pershing. If you see loose parallels concerning
          Marshall's stance on the type of General that was successful in World
          War I versus the type of General he argued would be/was required for
          World War II as relevant to modern conditions briefly outline the
          similarities. You're entire response should be, roughly 500 words or
          less.
        </>,
      ],
    },
    {
      role: "assistant",
      speaker: "Claude",
      heading: "The Fourth Turning + Marshall",
      paragraphs: [
        <>
          <strong>Strauss-Howe Generational Theory</strong> posits that history
          moves in ~80-year cycles of four "turnings": High (institutions strong,
          individualism weak), Awakening (spiritual upheaval), Unraveling
          (institutions decay, individualism rises), and <strong>Crisis</strong> —
          the Fourth Turning — a period of existential danger and collective
          rebuilding. The last Crisis era was roughly 1929–1945.
        </>,
        <>
          By this framework, we entered the current Fourth Turning around
          2008–2012. We're now in its later, more acute phase — institutions are
          openly distrusted, political cohesion is fractured, and large-system
          shocks (pandemic, financial stress, geopolitical realignment) are
          accelerating. The theory suggests resolution — painful but clarifying —
          likely arrives in the late 2020s to early 2030s.
        </>,
        <>
          <strong>Marshall's 1920 Letter to Pershing</strong> is a quiet
          masterpiece of institutional thinking. Writing in the aftermath of WWI,
          Marshall argued that the generals who succeeded in that war were
          products of a particular environment: slow-moving, heavily resourced,
          industrialized attrition warfare where seniority, administrative
          competence, and the ability to manage vast logistical machines were the
          primary virtues. The system rewarded <em>consolidators</em>.
        </>,
        <>
          But Marshall's warning was forward-looking. He argued that the next war
          would demand something different — <em>adaptability, speed of decision,
          comfort with ambiguity, and the capacity to operate with initiative far
          from centralized command</em>. The coming conflict would be fluid,
          faster, and would punish rigidity. Generals forged in the WWI mold —
          methodical, hierarchical, credential-dependent — would be liabilities.
          The Army needed to identify and cultivate a different kind of officer{" "}
          <em>before</em> the crisis arrived, not during it.
        </>,
        <>
          He was, of course, right. And he spent the interwar years doing exactly
          that — quietly building his famous "little black book."
        </>,
        <>
          <strong>The Parallel to Now</strong> is hard to miss.
        </>,
        <>
          The institutional leaders who thrived in the post-WWII High — the long
          era of stable globalization, predictable capital flows, rules-based
          international order, and slow-moving bureaucratic competition — were
          optimized for <em>that</em> environment. Large organizations,
          credentialed hierarchies, and consensus-building were the right tools
          for a stable world.
        </>,
        <>
          The Fourth Turning doesn't reward those skills. It rewards leaders who
          can make fast decisions under radical uncertainty, hold teams together
          when legitimacy is thin, and think in systems while acting with speed.
          It punishes over-reliance on process, credential, and the assumption
          that the institutions around you will hold.
        </>,
        <>
          Marshall's insight was essentially: <strong>the last war selects for
          the wrong generals.</strong> The danger is that organizations — nations,
          companies, movements — enter a crisis period led by people who are{" "}
          <em>very good at conditions that no longer exist.</em>
        </>,
        <>
          The question his letter implicitly poses for today:{" "}
          <strong>Who is quietly keeping the little black book?</strong> Who is
          identifying, now, the leaders capable of navigating what's coming —
          rather than promoting those best suited for what just passed?
        </>,
        <>
          That gap, between the leader the last era produced and the leader the
          next era requires, may be the most underappreciated risk of a Fourth
          Turning.
        </>,
      ],
    },
    {
      role: "user",
      speaker: "Brendan",
      time: "7:35 PM",
      paragraphs: [
        <>
          Nice. I think your response exceeded 500 words, but since we now have a
          short essay on our hands go ahead and apply lessons from Clayton
          Christensen's "The Innovator's Dilemma" and Christopher Alexander's "A
          Pattern Language."
        </>,
      ],
    },
    {
      role: "assistant",
      speaker: "Claude",
      heading: "Adding Christensen & Alexander",
      paragraphs: [
        <>
          <strong>Christensen's lens</strong> maps cleanly onto the Marshall
          problem. Established institutions don't fail because they become
          incompetent — they fail because they optimize relentlessly for their
          current customers and conditions. The very feedback loops that made them
          dominant blind them to disruptive signals arriving from the margins. The
          WWI general isn't stupid; he's the product of a perfect optimization
          process for a world that's ending.
        </>,
        <>
          Applied to the Fourth Turning: legacy institutions — governments,
          universities, media, corporations — are still allocating resources
          toward sustaining the conditions of the last High. The disruption isn't
          coming from a better version of what exists. It's coming from actors
          operating on entirely different value networks, often dismissed until
          they can't be.
        </>,
        <>
          Marshall understood this intuitively. He wasn't trying to build a better
          WWI general. He was working on a different architecture entirely.
        </>,
        <>
          <strong>Alexander's contribution</strong> is subtler but profound. His
          central argument in <em>A Pattern Language</em> is that living,
          functional environments — buildings, towns, institutions — aren't
          designed top-down from abstract principles. They emerge from the
          repetition of human-scaled patterns that solve recurring problems at
          every level of organization, nested together coherently.
        </>,
        <>
          When those patterns are destroyed — by ideological urban planning, by
          institutional monoculture, by the imposition of efficiency over
          livability — the result is environments that function on paper but feel
          dead. People disengage. Belonging collapses.
        </>,
        <>
          The Fourth Turning can be read as a collective recognition that too many
          of the patterns holding society together have been hollowed out —
          family, community, local institution, civic ritual. The Crisis is, in
          part, the bill arriving for decades of pattern erosion.
        </>,
        <>
          <strong>Where all four converge:</strong>
        </>,
        <>
          Strauss-Howe identifies that a crisis is structural and cyclical.
          Marshall tells you the leadership type the moment requires. Christensen
          explains why incumbents can't self-correct — the innovator's dilemma is
          also an institution's dilemma; the incentives won't allow it. Alexander
          tells you what rebuilding actually looks like — not grand ideological
          projects, but the patient reconstruction of human-scaled patterns that
          make collective life functional and meaningful again.
        </>,
        <>
          The dangerous temptation of a Fourth Turning is to reach for large,
          fast, top-down solutions — exactly what Christensen warns against and
          Alexander's entire career argued was sterile. The resolution, if history
          is a guide, will be built by people working at the right scale, with the
          right instincts, often outside the institutions that failed.
        </>,
        <>
          Marshall's ideal officer for WWII wasn't waiting for orders from above.
          He was exercising initiative in conditions of ambiguity, holding small
          units together through competence and character, rebuilding trust one
          decision at a time.
        </>,
        <>That's also Alexander's pattern-builder. And Christensen's disruptor.</>,
        <>
          The through-line: Crisis periods don't get resolved by optimizing
          existing systems. They get resolved by people who understand what
          actually needs to exist — and build it, quietly, at human scale, before
          anyone gives them permission.
        </>,
      ],
    },
    {
      role: "user",
      speaker: "Brendan",
      time: "7:41 PM",
      paragraphs: [
        <>
          I agree, nearly completely. I'll tell you what. Just for fun, now add
          Ashley Spires's 2014 children's book "The Most Magnificent Thing". It is
          a humorous and relatable story that teaches children about resilience,
          the value of making mistakes, and the design process. I think you'll
          find it earns a place in this essay.
        </>,
      ],
    },
    {
      role: "assistant",
      speaker: "Claude",
      heading: "The Most Magnificent Thing",
      paragraphs: [
        <>
          Here's what Ashley Spires understood that the others only implied:
        </>,
        <>
          The little girl in the book knows exactly what she wants to build. She
          has a clear vision. She works hard. It comes out wrong. She tries again.
          Still wrong. She tries again and again, growing increasingly furious,
          until she quits — walks away — and returns with fresh eyes to discover
          that her earlier "failures" each contained something right. The
          magnificent thing gets built, but only after she nearly destroyed
          herself fighting the gap between vision and execution.
        </>,
        <>
          <strong>This is the missing chapter.</strong>
        </>,
        <>
          Strauss-Howe tells you the storm is coming. Marshall tells you what kind
          of person you need at the helm. Christensen tells you why the existing
          institutions will misread everything until it's too late. Alexander
          tells you that the rebuilding must be human-scaled and pattern-deep.
        </>,
        <>
          But none of them adequately prepares you for the middle part — the part
          where you're working on the magnificent thing and it looks, by every
          available measure, like a catastrophic mess.
        </>,
        <>
          The most underrated line in the book is when the girl walks away. Not
          forever — just long enough to see clearly again. That walk is not
          failure. It is, in Alexander's terms, a return to human scale. It is, in
          Marshall's terms, the composure required to re-assess under pressure. It
          is, in Christensen's terms, the willingness to abandon a non-working
          iteration without abandoning the mission.
        </>,
        <>
          Fourth Turnings are grinding precisely because the magnificent thing
          never looks magnificent mid-construction. The patterns are being
          reestablished messily. The right leaders are making visible mistakes on
          their way to competence. The disruptive alternatives to failing
          institutions look, for a long time, like toys — until they don't.
        </>,
        <>
          There's also something important in the fact that this is a children's
          book.
        </>,
        <>
          Alexander spent his career arguing that ordinary people — not expert
          planners — are the rightful authors of the environments they inhabit.
          Christensen's disruptors are rarely the credentialed elite. Marshall's
          best officers often weren't the top of their West Point class. Spires
          wrote her insight not for a business school or a war college but for a
          six-year-old.
        </>,
        <>
          The wisdom required for this moment is not esoteric. It is, in fact, so
          fundamental that we teach it to children — and then spend decades of
          institutional life systematically forgetting it.
        </>,
        <>
          <strong>The full framework, restated:</strong>
        </>,
        <>
          A Crisis is coming or here (Strauss-Howe). The leaders it requires are
          not the ones the last era produced (Marshall). The institutions most
          equipped to help will be structurally prevented from doing so
          (Christensen). The rebuilding will be local, human-scaled, and
          pattern-based (Alexander). And the work will look broken for a long time
          before it looks magnificent — so take a walk, look at what's working in
          the wreckage, and keep going (Spires).
        </>,
        <>A little girl and her dog figured out the hardest part.</>,
      ],
    },
    {
      role: "user",
      speaker: "Brendan",
      time: "9:58 PM",
      paragraphs: [<>Good summary.</>],
    },
    {
      role: "assistant",
      speaker: "Claude",
      paragraphs: [
        <>
          Thanks. It came together well — the four frameworks have more
          structural resonance than you'd expect given how different their domains
          are.
        </>,
        <>
          Worth noting: you essentially constructed a diagnostic stack.
          Strauss-Howe tells you when and why. Marshall tells you who. Christensen
          tells you why the wrong people stay in charge too long. Alexander tells
          you how to actually build something that lasts.
        </>,
        <>Not a bad lens to keep handy.</>,
      ],
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
