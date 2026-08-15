import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import { BreadcrumbJsonLd, ProfilePageJsonLd } from '../components/JsonLd'

const siteUrl = 'https://www.filippodanesi.com'
const description = 'SEO & AI Search Manager at Triumph International. 15+ sites across EMEA and APAC, an in-house LLM visibility tracker, and the tools behind both.'

export const metadata: Metadata = {
  title: {
    absolute: 'About Filippo Danesi ~ SEO & AI Search Manager',
  },
  description,
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: 'About Filippo Danesi ~ SEO & AI Search Manager',
    description,
    url: `${siteUrl}/about`,
    type: 'profile',
    images: [
      {
        url: '/api/og?title=About',
        width: 1200,
        height: 630,
        alt: 'About Filippo Danesi ~ SEO & AI Search Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Filippo Danesi ~ SEO & AI Search Manager',
    description,
    images: ['/api/og?title=About'],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: siteUrl },
  { name: 'About', url: `${siteUrl}/about` },
]

const experiences = [
  {
    role: 'Global SEO & AI Search Manager',
    company: 'Triumph International',
    location: 'Zurich, Switzerland',
    date: 'May 2025 — Present',
    description: 'I run organic and AI search for Triumph across 15+ sites in EMEA and APAC. I built the tracker that tells us whether ChatGPT, Perplexity, Gemini and Claude mention us at all, and who they cite instead. ASO for the app is mine too, from pre-launch to publication on both stores. So is the pipeline that writes product copy for 10,000+ SKUs.',
  },
  {
    role: 'Product Owner — Verbalist',
    company: 'NUR Digital Marketing Agency',
    location: 'Mantua, Italy',
    date: 'May 2025 — Present',
    description: 'I own the roadmap for an AI content-generation SaaS, run the pre-sales calls, and reworked the pricing twice until it made sense.',
  },
  {
    role: 'SEO Specialist (Innovation Lead)',
    company: 'NUR Digital Marketing Agency',
    location: 'Mantua, Italy',
    date: 'Sep 2022 — Apr 2025',
    description: 'SEO strategy for enterprise clients, mostly technical work on Adobe Experience Manager and the other big CMS platforms. I pushed AI and automation into the agency\'s workflow and led the innovation side of projects.',
  },
  {
    role: 'SEO Specialist',
    company: 'TeseCom Agency',
    location: 'Pisa, Italy',
    date: 'Sep 2020 — Sep 2022',
    description: 'Full SEO management for B2B and B2C. This is where I got solid on the technical and analytical side of the job.',
  },
  {
    role: 'SEO Specialist',
    company: 'Brand-On Agency',
    location: 'Pisa, Italy',
    date: 'May 2019 — Sep 2020',
    description: 'My first SEO role. On-page, link building, local, the basics, done across a mix of SMB clients.',
  },
]

const skills = [
  'Generative AI',
  'Prompt Engineering',
  'LLM Optimization',
  'RAG',
  'Python',
  'SQL',
  'AEO',
  'GEO',
  'Technical SEO',
  'International SEO',
  'Structured Data',
  'ASO',
  'Digital PR',
  'AI Automation',
  'SEO',
  'NLP/NLU',
]

const education = [
  {
    degree: 'Executive Master, Global Marketing, Communication & Made in Italy',
    school: 'Centro Studi Comunicare l\'Impresa',
    location: 'Rome',
    date: '2021 — 2022',
  },
  {
    degree: 'Executive Master, Data Analytics and Marketing Intelligence',
    school: '24ORE Business School',
    location: 'Milan',
    date: '2021',
  },
  {
    degree: 'Executive Master, E-commerce: Design and Management',
    school: 'IED European Institute of Design',
    location: 'Pisa',
    date: '2020 — 2021',
  },
  {
    degree: 'Higher Technical Certificate, Web Development & Programming',
    school: 'Istituto Modartech',
    location: 'Pontedera',
    date: '2018 — 2019',
  },
  {
    degree: 'BSc Clinical Psychology',
    school: 'University of Pisa',
    location: 'Pisa',
    date: '2013 — 2017',
  },
]


export default function About() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ProfilePageJsonLd />

      <header className="page-header">
        <h1 className="page-title">About</h1>
      </header>

      <section className="section">
        <h2 className="section-title">Bio</h2>
        <div className="section-content">
          <p>I do SEO for enterprise e-commerce across EMEA and APAC (15+ domains). Most of my work lately is about making brands visible not just on Google, but inside AI search systems like ChatGPT, Perplexity, and AI Overviews, and measuring whether any of it actually lands.</p>
          <p>I also build the tools I need. If a process is too slow or too manual, I write the code to automate it. That has cut content production costs significantly.</p>
        </div>
        <a href="/Filippo_Danesi_CV.pdf" target="_blank" className="cv-button">
          <Download size={16} />
          Download CV
        </a>
      </section>

      <section className="section">
        <h2 className="section-title">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <span className="experience-role">{exp.role}</span>
              <span className="experience-date">{exp.date}</span>
            </div>
            <div className="experience-company">{exp.company} · {exp.location}</div>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="experience-item education-item">
            <div className="experience-header">
              <span className="experience-role">{edu.degree}</span>
              <span className="experience-date">{edu.date}</span>
            </div>
            <div className="experience-company">{edu.school} · {edu.location}</div>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

    </>
  )
}
