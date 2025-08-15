export interface Intro {
  name: string;
  about: string;
  href: string;
  github: string;
  linkedin: string;
  email: string;
}

export interface ResumeItem {
  title: string;
  href?: string;
  date?: string;
  location?: string;
  description: string[];
}

export interface EducationItem extends ResumeItem {
  title: string;
  date: string;
  location: string;
  description: string[];
}

export interface ProjectItem extends ResumeItem {
  title: string;
  href: string;
  description: string[];
}

export interface OpenSourceItem extends ResumeItem {
  title: string;
  href: string;
  description: string[];
}

export const intro: Intro = {
  name: "Filippo Danesi",
  about:
    "As an SEO specialist with 6+ years of experience, I drive measurable business growth where code, content, and data intersect. My work turns complex analytics into results by combining deep Data Analysis with foundational Technical SEO & Audits. I then leverage AI to build advanced Content Strategies and implement cutting-edge LLM Optimization for Search.",
  href: "https://www.serp-secrets.com",
  github: "https://github.com/filippodanesi",
  linkedin: "https://linkedin.com/in/filippodanesi",
  email: "hello@filippodanesi.com",
};

export const work: ResumeItem[] = [
  {
    title: "Content Manager, SEO at Triumph Int.",
    href: "https://www.triumph.com/corporate/",
    date: "2025 to Present",
    location: "Zürich, CH",
    description: [
      "Grew organic visibility across 15+ international markets by managing and optimizing global content strategies.",
      "Established global content governance and editorial guidelines to ensure brand consistency and scale SEO performance.",
      "Pioneered the use of NLP and NLU technologies to automate content analysis and unlock new, data-driven SEO opportunities.",
    ],
  },
  {
    title: "SEO Specialist (Tech Lead) at NUR",
    href: "https://www.nur.it/en/",
    date: "2022 to 2025",
    location: "Mantova, IT",
    description: [
      "Led technical and content SEO audits for enterprise clients.",
      "Developed and executed strategies that increased organic traffic by X% and conversion rates by Y% for key enterprise clients.",
      "Drove R&D in AI-SEO and machine learning for optimization.",
    ],
  },
  {
    title: "SEO Specialist at Tesecom",
    href: "https://www.tesecom.it/",
    date: "2020 to 2022",
    location: "Pisa, IT",
    description: [
      "Designed and executed content strategies based on analysis and research.",
      "Delivered performance reports and actionable insights to clients.",
      "Collaborated with PPC team for integrated organic and paid strategies.",
    ],
  },
  {
    title: "SEO Specialist at Brand-On",
    href: "https://www.brand-on.it/",
    date: "2019 to 2020",
    location: "Pisa, IT",
    description: [
      "Specialized in eCommerce SEO and site architecture optimization.",
      "Improved search rankings through targeted on-page optimization and strategic off-page initiatives.",
      "Built strong client relationships through clear communication.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Global Marketing at Fondazione Italia USA",
    date: "2021 to 2022",
    location: "Rome, IT",
    description: [
      "Studied global marketing and export strategies for Made in Italy goods.",
      "Awarded scholarship for excellence in international communication.",
      "Focused on movement and promotion of Italian products abroad.",
    ],
  },
  {
    title: "Data Analytics at 24ORE Business School",
    date: "2021",
    location: "Milan, IT",
    description: [
      "Learned advanced data analytics and marketing intelligence techniques.",
      "Explored automation and visualization of large data sets.",
      "Applied methodologies to real-world business cases.",
    ],
  },
  {
    title: "E-commerce: Des. and Mgmt. at IED",
    date: "2020 to 2021",
    location: "Florence, IT",
    description: [
      "Studied advanced e-commerce management and marketing.",
      "Focused on user experience and digital sales strategies.",
      "Applied concepts to practical projects and case studies.",
    ],
  },
  {
    title: "Web Design at Istituto Modartech",
    date: "2018 to 2019",
    location: "Pisa, IT",
    description: [
      "Learned web design fundamentals and UX/UI principles.",
      "Practiced front-end development techniques.",
      "Developed digital projects from concept to launch.",
    ],
  },
  {
    title: "B.A. in Clinical Psychology at Univ. of Pisa",
    date: "2013 to 2017",
    location: "Pisa, IT",
    description: [
      "Developed a deep understanding of human behavior and cognitive biases, principles I now apply to analyze user intent and build effective user journeys.",
      "Studied core psychology and research methodologies.",
      "Gained practical experience through internships and workshops.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Verbalist",
    href: "https://www.verbalist.it/en/",
    description: [
      "An advanced AI tool I designed to solve the challenge of large-scale content analysis and SEO optimization.",
      "Role: Product Designer and AI Engineer, focused on content strategy automation.",
      "Built with Python, IBM Watson NLU, OpenAI, and Anthropic APIs.",
    ],
  },
];

export const openSource: OpenSourceItem[] = [
  {
    title: "NLU Analyzer",
    href: "https://github.com/filippodanesi/ibm-watson-nlu-analyzer",
    description: [
      "An open-source tool built to make advanced text analysis accessible to SEO specialists, using IBM Watson NLU and AI models.",
      "Features text analysis, AI optimization, and multiple export formats.",
      "Built with React, TypeScript, Tailwind CSS, and shadcn/ui.",
    ],
  },
  {
    title: "Web Content Scraper",
    href: "https://github.com/filippodanesi/website-content-scraper",
    description: [
      "Clean web content extraction tool with minimalist design.",
      "Built with React, TypeScript, and Firecrawl API integration.",
      "Features dark mode and API key management.",
    ],
  },
];
