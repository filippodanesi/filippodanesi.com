import type { Metadata } from 'next'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Filippo Danesi. SEO specialist working on organic search and AI search visibility for enterprise e-commerce.',
  alternates: {
    canonical: 'https://www.filippodanesi.com/about',
  },
  openGraph: {
    title: 'About ~ Filippo Danesi',
    description: 'About Filippo Danesi. SEO specialist working on organic search and AI search visibility for enterprise e-commerce.',
    url: 'https://www.filippodanesi.com/about',
  },
}

const experiences = [
  {
    role: 'SEO & AI Search Manager',
    company: 'Triumph International',
    location: 'Zurich, Switzerland',
    date: 'May 2025 — Present',
    description: 'I run organic search and AI search visibility for Triumph\'s e-commerce across EMEA (15+ domains). I also build internal tools that automate SEO processes the team can\'t handle manually.',
  },
  {
    role: 'SEO Specialist (Innovation Lead)',
    company: 'NUR Digital Marketing Agency',
    location: 'Mantua, Italy',
    date: 'Sep 2022 — Apr 2025',
    description: 'SEO strategy for enterprise clients. I pushed AI and automation into the agency\'s workflow and led the innovation side of projects.',
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
  'AEO',
  'GEO',
  'Technical SEO',
  'AI Automation',
  'SEO',
  'NLP/NLU',
]


export default function About() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">About</h1>
      </header>

      <section className="section">
        <h2 className="section-title">Bio</h2>
        <div className="section-content">
          <p>I do SEO for enterprise e-commerce across EMEA (15+ domains). Most of my work lately is about making brands visible not just on Google, but inside AI search systems like ChatGPT, Perplexity, and AI Overviews.</p>
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
