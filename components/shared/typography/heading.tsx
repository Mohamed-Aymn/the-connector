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
          ? "text-[1.938rem] md:text-[2.5rem]"      // ~31px → 40px
          : size === "md"
            ? "text-[2.5rem] md:text-[3rem]"        // 40px → 48px
            : "text-[3.5rem] md:text-[5rem] lg:text-[6rem]" // 64px → 80px → 96px
        }
    font-[700] 
    ${className}
  `}
    >
      {children}
    </Tag>

  );
}

export default Heading;
