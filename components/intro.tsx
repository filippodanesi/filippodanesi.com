"use client";

import { Copy } from "@/components/copy";
import { DownloadPDF } from "@/components/download";
import { track } from "@vercel/analytics";
import type { Intro as IntroType } from "@/lib/content";

interface IntroProps {
  intro: IntroType;
}

export function Intro({ intro }: IntroProps) {
  return (
    <section className="flex flex-col">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight fade-in-up !delay-100 mb-2 gradient-text">
        {intro.name}
      </h1>

      <h2 className="text-lg md:text-xl text-muted-foreground tracking-tight fade-in-up !delay-200 mb-2">
        SEO & AI Search Strategy
      </h2>

      <div className="dont-print flex flex-wrap gap-3 fade-in-up !delay-400 mt-6">
        <a
          href={intro.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-accent/50 text-accent-foreground hover:bg-accent hover:scale-105 transition-all font-medium"
          onClick={() =>
            track("Click Blog Link", {
              location: "header",
              target: intro.href,
            })
          }
        >
          Blog
        </a>

        <a
          href={intro.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-accent/50 text-accent-foreground hover:bg-accent hover:scale-105 transition-all font-medium"
          onClick={() =>
            track("Click Github Link", {
              location: "header",
              target: intro.github,
            })
          }
        >
          Github
        </a>

        <a
          href={intro.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-accent/50 text-accent-foreground hover:bg-accent hover:scale-105 transition-all font-medium"
          onClick={() =>
            track("Click LinkedIn Link", {
              location: "header",
              target: intro.linkedin,
            })
          }
        >
          LinkedIn
        </a>

        <Copy
          text={intro.email}
          className="px-3 py-1.5 rounded-lg bg-accent/50 text-accent-foreground hover:bg-accent hover:scale-105 transition-all font-medium"
        >
          Email
        </Copy>

        <DownloadPDF
          pdfUrl="/Filippo_Danesi_SEO_AI_Manager_Resume.pdf"
          fileName="Filippo_Danesi_SEO_AI_Manager_Resume.pdf"
          className="px-3 py-1.5 rounded-lg bg-accent/50 text-accent-foreground hover:bg-accent hover:scale-105 transition-all font-medium"
        />
      </div>

      <p className="text-muted-foreground text-base leading-relaxed max-w-prose fade-in-up !delay-500 mt-6">
        {intro.about}
      </p>
    </section>
  );
}
