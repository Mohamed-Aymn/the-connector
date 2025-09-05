import React, { JSX } from "react";

interface HeadingProps {
  size: "sm" | "md" | "lg";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

function Heading({ size, level = 1, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // dynamic heading tag
  return (
    <Tag
      className={`
      uppercase text-center
      ${size === "sm"
          ? "text-[31px] font-[600]"
          : size === "md"
            ? "text-[40px] font-[600]"
            : "text-[64px] font-[700]"
        }
      ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default Heading;
