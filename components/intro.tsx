"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg";
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

      <h1 className="fade-in-up !delay-100">{intro.name}</h1>

      <div className="dont-print flex gap-4 fade-in-up !delay-200">
        <a href={intro.href} target="_blank" onClick={() => plausible("Click Blog Link", { props: { location: "header", target: intro.href } })}>
          Blog
        </a>
        <a href={intro.github} target="_blank" onClick={() => plausible("Click Github Link", { props: { location: "header", target: intro.github } })}>
          Github
        </a>
        <a href={intro.linkedin} target="_blank" onClick={() => plausible("Click LinkedIn Link", { props: { location: "header", target: intro.linkedin } })}>
          LinkedIn
        </a>
        <Copy text={intro.email}>Email</Copy>
        <DownloadPDF
          pdfUrl="../resume.pdf"
          fileName={`${intro.name
            .toString()
            .toLowerCase()
            .replace(/\s/g, "_")}_resume_2025.pdf`}
        />
      </div>

      <p className="text-muted-foreground max-w-prose fade-in-up !delay-300">
        {intro.about}
      </p>
    </section>
  );
} 