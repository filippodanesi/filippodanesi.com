import {
  Intro,
  ResumeItem,
  EducationItem,
  ProjectItem,
  OpenSourceItem,
} from "@/lib/types";

export const intro: Intro = {
  name: "Filippo Danesi",
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
      "Developed a governance framework that reduced content production time.",
      "Implemented NLP, NLU, and early LLM pipelines for content analysis and optimization.",
    ],
  },
  {
    title: "SEO Specialist (Tech Lead) at NUR Digital Marketing Agency",
    href: "https://www.nur.it/en/",
    date: "2022 to 2024",
    location: "Mantova, IT",
    description: [
      "Conducted 50+ technical and content audits for enterprise clients.",
      "Developed proprietary AI-SEO workflows using GPT/Claude APIs.",
      "Mentored 5 junior SEOs on technical SEO and AI-driven strategies.",
    ],
  },
  {
    title: "SEO Specialist at Tesecom - Marketing and Communications Agency",
    href: "https://www.tesecom.it/",
    date: "2020 to 2022",
    location: "Pisa, IT",
    description: [
      "Designed intent-based content strategies using semantic SEO.",
      "Improved client keyword rankings by 40% over 12 months.",
      "Aligned SEO with PPC campaigns for higher ROI.",
    ],
  },
  {
    title: "SEO Specialist at Brand-On Communication Agency",
    href: "https://www.brand-on.it/",
    date: "2019 to 2020",
    location: "Pisa, IT",
    description: [
      "Optimized site architecture and navigation for 15+ clients.",
      "Implemented schema markup, improving crawlability by 30%.",
      "Maintained a 95% client retention rate through consistent results.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Global Marketing at Fondazione Italia USA",
    date: "2021 to 2022",
    location: "Rome, IT",
    description: [
      "Studied global marketing and export strategies for Made in Italy goods",
      "Awarded scholarship for excellence in international communication",
    ],
  },
  {
    title: "Data Analytics at 24ORE Business School",
    date: "2021",
    location: "Milan, IT",
    description: [
      "Learned advanced data analytics and marketing intelligence techniques",
      "Explored automation and visualization of large data sets",
    ],
  },
  {
    title: "E-commerce: Des. and Mgmt. at IED",
    date: "2020 to 2021",
    location: "Florence, IT",
    description: [
      "Studied advanced e-commerce management and marketing",
      "Focused on user experience and digital sales strategies",
    ],
  },
  {
    title: "Web Design at Istituto Modartech",
    date: "2018 to 2019",
    location: "Pisa, IT",
    description: ["Learned web design fundamentals and UX/UI principles"],
  },
  {
    title: "B.A. in Clinical Psychology at University of Pisa",
    date: "2013 to 2017",
    location: "Pisa, IT",
    description: ["Studied core psychology and research methodologies"],
  },
];

// Verbalist ora è l'unico progetto "principale".
export const projects: ProjectItem[] = [
  {
    title: "Verbalist",
    href: "https://www.verbalist.it/en/",
    description: [
      "AI-powered SEO content analysis and optimization platform.",
      "Built with Python, OpenAI/Claude APIs, and IBM Watson NLU.",
    ],
  },
];

// VisionDescribe è stato spostato qui.
export const openSource: OpenSourceItem[] = [
  {
    title: "VisionDescribe",
    href: "https://www.vision-describe.com/",
    description: [
      "E-commerce product descriptions generator from images using GPT-4 Vision.",
      "Tech Stack: React, TypeScript, Node.js, Express, OpenAI API.",
    ],
  },
  {
    title: "NLU Analyzer",
    href: "https://nlu-analyzer.vercel.app/",
    description: [
      "Open-source tool for semantic content analysis with IBM Watson NLU.",
      "Built with React, TypeScript, and Tailwind CSS.",
    ],
  },
  {
    title: "Web Content Scraper",
    href: "https://website-content-scraper.vercel.app/",
    description: [
      "Minimalist content extraction tool for SEO analysis.",
      "Built with React, TypeScript, and Firecrawl API integration.",
    ],
  },
];
