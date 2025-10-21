"use client";

import { toast } from "sonner";
import { track } from "@vercel/analytics";
import { cn } from "@/lib/utils";

type DownloadPDFProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pdfUrl: string;
  fileName?: string;
};

export function DownloadPDF({
  pdfUrl,
  fileName = "Filippo_Danesi_SEO_AI_Manager_Resume.pdf",
  className,
  ...props
}: DownloadPDFProps) {
  const handleDownload = async () => {
    track("Download PDF", { fileName });
    const loadingToastId = toast.loading("Downloading PDF…");

    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error("Failed to download PDF");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = fileName;
      link.click();

      URL.revokeObjectURL(url);
      toast.dismiss(loadingToastId);
      toast.success("PDF downloaded successfully!");
    } catch (err) {
      console.error(err);
      toast.dismiss(loadingToastId);
      toast.error("Failed to download PDF. Please try again.");
    }
  };

  return (
    <button
      onClick={handleDownload}
      aria-label={`Download ${fileName}`}
      {...props}
      className={cn("link", className)}
    >
      Download
    </button>
  );
}
