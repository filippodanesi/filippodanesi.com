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
    <section className="grid gap-4">
      <h1 className="font-semibold fade-in-up !delay-100">{intro.name}</h1>

      <div className="dont-print flex gap-4 fade-in-up !delay-200">
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
          pdfUrl="../resume.pdf"
          fileName={`${intro.name.toLowerCase().replace(/\s+/g, "_")}_resume_2025.pdf`}
          className="text-muted-foreground hover:text-foreground transition-all"
        />
      </div>

      <p className="text-muted-foreground max-w-prose fade-in-up !delay-300">
        {intro.about}
      </p>
    </section>
  );
}
