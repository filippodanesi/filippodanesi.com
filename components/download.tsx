"use client";

import { toast } from "sonner";
import { usePlausible } from "next-plausible";
import { cn } from "@/lib/utils";

type DownloadPDFProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pdfUrl: string;
  fileName?: string;
};

export function DownloadPDF({
  pdfUrl,
  fileName = "resume.pdf",
  className,
  ...props
}: DownloadPDFProps) {
  const plausible = usePlausible();

  const handleDownload = async () => {
    plausible("Download PDF", { props: { fileName } });
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
