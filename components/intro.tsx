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
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{intro.name}</h1>
        <div className="flex items-center gap-4">
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
          <a
            href={`mailto:${intro.email}`}
            className="text-muted-foreground hover:text-foreground transition-all"
          >
            Email
          </a>
          
          {/* Componenti Copy e DownloadPDF con styling applicato */}
          <Copy className="text-muted-foreground hover:text-foreground transition-all" />
          <DownloadPDF className="text-muted-foreground hover:text-foreground transition-all" />
        </div>
      </div>
      
      <div className="prose">
        <p>{intro.about}</p>
      </div>
    </div>
  );
}