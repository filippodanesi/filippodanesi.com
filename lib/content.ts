// PASSO 1: Definiamo ed esportiamo i Tipi direttamente qui.
export interface Intro {
  name: string;
  about: string;
  location: string;
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

export interface EducationItem extends ResumeItem {}
export interface ProjectItem extends ResumeItem {}
export interface OpenSourceItem extends ResumeItem {}


// PASSO 2: I tuoi dati, che ora usano i tipi definiti sopra.
export const intro: Intro = {
  name: "Filippo Danesi",
  location: "Zurich, CH",
  about:
    "SEO and Content Marketing Specialist with 6+ years of experience, focusing on strategic optimization for global brands across diverse international and local markets (GEO). I merge traditional SEO with generative AI and LLMs to engineer Answer Engine Optimization (AEO) and content intelligence solutions, scaling marketing efforts through automation.",
  href: "https://www.serp-secrets.com",
  github: "https://github.com/filippodanesi",
  linkedin: "https://linkedin.com/in/filippodanesi",
  email: "filippo.danesi93@gmail.com",
};

export const work: ResumeItem[] = [
  {
    title: "Content Manager, SEO at Triumph International",
    href: "https://www.triumph.com/corporate/",
    date: "2025 to Present",
    location: "Zürich, CH",
    description: [
      "Led SEO strategy for triumph.com and sloggi.com across 15+ international markets, with direct management of the DACH region.",
      "Spearheaded e-commerce optimizations for Distance Retail, enhancing product visibility and conversion funnels.",
      "Developed a global governance framework to streamline content production.",
      "Engineered NLP/NLU and LLM pipelines to automate content analysis and scale content intelligence.",
    ],
  },
  {
    title: "SEO Specialist (Tech Lead) at NUR Digital Marketing Agency",
    href: "https://www.nur.it/en/",
    date: "2022 to 2024",
    location: "Mantova, IT",
    description: [
      "Conducted 50+ technical and content audits for enterprise clients, identifying critical growth opportunities.",
      "Developed proprietary AI-SEO workflows using GPT/Claude APIs to automate semantic analysis and keyword clustering.",
      "Mentored a team of 5 junior SEOs on advanced technical SEO and AI-driven strategies.",
    ],
  },
  {
    title: "SEO Specialist at Tesecom - Marketing and Communications Agency",
    href: "https://www.tesecom.it/",
    date: "2020 to 2022",
    location: "Pisa, IT",
    description: [
      "Designed intent-based content strategies that improved client keyword rankings by an average of 40% over 12 months.",
      "Created and presented performance dashboards for a portfolio of 20+ clients.",
      "Aligned SEO and PPC campaigns to maximize Return on Investment (ROI).",
    ],
  },
  {
    title: "SEO Specialist at Brand-On Communication Agency",
    href: "https://www.brand-on.it/",
    date: "2019 to 2020",
    location: "Pisa, IT",
    description: [
      "Optimized site architecture and technical performance for over 15 e-commerce clients.",
      "Executed on-page and off-page strategies, securing 100+ high-quality backlinks.",
      "Maintained a 95% client retention rate through clear communication and consistent results.",
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
    ],
  },
  {
    title: "Data Analytics at 24ORE Business School",
    date: "2021",
    location: "Milan, IT",
    description: [
      "Learned advanced data analytics and marketing intelligence techniques.",
      "Applied methodologies to real-world business cases to automate and visualize large data sets.",
    ],
  },
  {
    title: "E-commerce: Des. and Mgmt. at IED",
    date: "2020 to 2021",
    location: "Florence, IT",
    description: [
      "Studied advanced e-commerce management, focusing on user experience and digital sales strategies.",
    ],
  },
  {
    title: "Web Design at Istituto Modartech",
    date: "2018 to 2019",
    location: "Pisa, IT",
    description: ["Learned web design fundamentals and UX/UI principles for front-end development."],
  },
  {
    title: "B.A. in Clinical Psychology at University of Pisa",
    date: "2013 to 2017",
    location: "Pisa, IT",
    description: ["Studied core psychology and research methodologies with a focus on clinical applications."],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Verbalist",
    href: "https://www.verbalist.it/en/",
    description: [
      "AI-powered platform for SEO content analysis and optimization.",
      "Built with Python, OpenAI/Claude APIs, and IBM Watson NLU.",
    ],
  },
];

export const openSource: OpenSourceItem[] = [
  {
    title: "VisionDescribe",
    href: "https://www.vision-describe.com/",
    description: [
      "Generates e-commerce product descriptions from images using GPT-4 Vision.",
      "Tech Stack: React, TypeScript, Node.js, Express, OpenAI API.",
    ],
  },
  {
    title: "NLU Analyzer",
    href: "https://nlu-analyzer.vercel.app/",
    description: [
      "Open-source tool for semantic content analysis using IBM Watson NLU.",
      "Built with React, TypeScript, and Tailwind CSS.",
    ],
  },
  {
    title: "Web Content Scraper",
    href: "https://website-content-scraper.vercel.app/",
    description: [
      "Minimalist tool for clean content extraction from URLs for SEO analysis.",
      "Built with React, TypeScript, and Firecrawl API.",
    ],
  },
];
