import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./print.css";
import { intro } from "@/lib/content";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: `Resume of ${intro.name}`,
  description: "SEO specialist: unisco dati, AI e contenuti per strategie di crescita e risultati misurabili.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="SEO specialist: unisco dati, AI e contenuti per strategie di crescita e risultati misurabili." />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Filippo Danesi",
          "url": "https://www.filippodanesi.com/",
          "image": "https://www.filippodanesi.com/logo.svg",
          "sameAs": [
            "https://github.com/filippodanesi",
            "https://linkedin.com/in/filippodanesi",
            "https://www.serp-secrets.com"
          ],
          "jobTitle": "SEO Specialist",
          "description": "SEO specialist: unisco dati, AI e contenuti per strategie di crescita e risultati misurabili.",
          "email": "mailto:hello@filippodanesi.com"
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
