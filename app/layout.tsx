import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./print.css";
import { intro } from "@/lib/content";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: `${intro.name} ~ SEO & AI Search Strategy`,
  description: "SEO & AI Search Strategiest. Over 6 years optimizing global brands through data science, automation, and LLM-driven tools that scale visibility across Google and AI search.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="SEO specialist combining data, AI, and content to drive search growth and deliver measurable results." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.filippodanesi.com/" />
        <meta property="og:title" content="Resume of Filippo Danesi" />
        <meta property="og:description" content="SEO specialist combining data, AI, and content to drive search growth and deliver measurable results." />
        <meta property="og:url" content="https://www.filippodanesi.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.filippodanesi.com/logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Resume of Filippo Danesi" />
        <meta name="twitter:description" content="SEO specialist combining data, AI, and content to drive search growth and deliver measurable results." />
        <meta name="twitter:image" content="https://www.filippodanesi.com/logo.svg" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Filippo Danesi",
          "url": "https://www.filippodanesi.com/",
          "image": "https://www.filippodanesi.com/logo.svg",
          "jobTitle": "SEO, AI & GEO Manager",
          "description": "SEO specialist combining data, AI, and content to drive search growth and deliver measurable results.",
          "email": "mailto:hello@filippodanesi.com",
          "sameAs": [
            "https://github.com/filippodanesi",
            "https://linkedin.com/in/filippodanesi",
            "https://www.serp-secrets.com"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Triumph International",
            "url": "https://www.triumph.com"
          },
          "knowsAbout": [
            "SEO",
            "Content Strategy",
            "Data Analytics",
            "AI",
            "Machine Learning",
            "NLP",
            "NLU",
            "GEO",
            "AEO"
          ],
          "skills": [
            "Technical SEO",
            "Content Optimization",
            "Data Analysis",
            "AI Integration",
            "Machine Learning",
            "Natural Language Processing"
          ],
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Fondazione Italia USA",
              "url": "https://www.fondazioneitaliausa.org"
            },
            {
              "@type": "EducationalOrganization",
              "name": "24ORE Business School",
              "url": "https://www.24orebs.com"
            },
            {
              "@type": "EducationalOrganization",
              "name": "IED",
              "url": "https://www.ied.edu"
            }
          ]
        }) }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} sm:p-12 antialiased`}
      >
        {children}
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  );
}
