import React from "react";

import { cn } from "@/lib/utils";

interface DescriptionProps {
  size: "lg" | "sm" | "md";
  className?: string;
  children?: React.ReactNode;
}

function Description({ size, className, children }: DescriptionProps) {
  return (
    <p
      className={cn(
        `
          text-ternary
          ${size === "sm"
          ? "text-[14px] font-[400]"
          : size === "md"
            ? "text-[20px] font-[400]"
            : "text-[24px] font-[700]"
        }
        }`,
        className
      )}
    >
      {children}
    </p>
  );
}

export default Description;
