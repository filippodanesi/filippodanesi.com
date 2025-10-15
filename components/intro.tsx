"use client";

import { Copy } from "@/components/copy";
import { DownloadPDF } from "@/components/download";
import { usePlausible } from "next-plausible";
import type { Intro as IntroType } from "@/lib/content";

interface IntroProps {
  intro: IntroType;
}

export function Intro({ intro }: IntroProps) {
  const plausible = usePlausible();

  return (
    <section className="flex flex-col">
      <h1 className="font-semibold tracking-tight fade-in-up !delay-100 mb-1">
        {intro.name}
      </h1>

      <h2 className="font-serif italic text-muted-foreground/70 tracking-tight fade-in-up !delay-200">
        SEO & AI Search Strategy
      </h2>
      
      <div className="dont-print flex gap-4 fade-in-up !delay-400 mt-4">
        <a
          href={intro.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-all"
          onClick={() =>
            plausible("Click Blog Link", {
              props: { location: "header", target: intro.href },
            })
          }
        >
          Blog
        </a>

        <a
          href={intro.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-all"
          onClick={() =>
            plausible("Click Github Link", {
              props: { location: "header", target: intro.github },
            })
          }
        >
          Github
        </a>

        <a
          href={intro.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-all"
          onClick={() =>
            plausible("Click LinkedIn Link", {
              props: { location: "header", target: intro.linkedin },
            })
          }
        >
          LinkedIn
        </a>

        <Copy
          text={intro.email}
          className="text-muted-foreground hover:text-foreground transition-all"
        >
          Email
        </Copy>

        <DownloadPDF
          pdfUrl="/Filippo_Danesi_SEO_AI_Manager_Resume.pdf"
          fileName="Filippo_Danesi_SEO_AI_Manager_Resume.pdf"
          className="text-muted-foreground hover:text-foreground transition-all"
        />
      </div>

      <p className="text-muted-foreground max-w-prose fade-in-up !delay-500 mt-4">
        {intro.about}
      </p>
    </section>
  );
}
