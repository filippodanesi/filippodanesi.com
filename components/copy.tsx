"use client";

import { toast } from "sonner";
import { cn } from "@/lib/utils";

type CopyProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Copy: React.FC<CopyProps> = ({
  text,
  className,
  children,
  ...props
}) => {
  const handleClick = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <button
      onClick={handleClick}
      {...props}
      className={cn("link", className)}
    >
      {children}
    </button>
  );
};
