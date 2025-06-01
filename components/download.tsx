"use client";

import { toast } from "sonner";
import { usePlausible } from "next-plausible";

interface DownloadPDFProps {
  pdfUrl: string;
  fileName?: string;
}

export function DownloadPDF({
  pdfUrl,
  fileName = "resume.pdf",
}: DownloadPDFProps) {
  const plausible = usePlausible();
  const handleDownload = async () => {
    plausible("Download PDF", { props: { fileName } });
    const loadingToastId = toast.loading("Downloading PDF...");

    try {
      const response = await fetch(pdfUrl);

      if (!response.ok) throw new Error("Failed to download PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create link and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup
      window.URL.revokeObjectURL(url);

      toast.dismiss(loadingToastId);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss(loadingToastId);
      toast.error("Failed to download PDF. Please try again.");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="link"
      aria-label={`Download ${fileName}`}
    >
      Download
    </button>
  );
}
