import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "@/components/logos/launch-ui";
import Image from "next/image"
import {
  Footer as FooterComponent,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function Footer({
  name = "Launch UI",
  columns = [
    {
      title: "Building Brands & Software Engineering",
      links: [
        { text: "Services", href: "/services/buliding-brands-and-software-engineering" },
        { text: "Portfolio", href: "/portfolio/building-brands" },
      ],
    },
    {
      title: "Staff Augmentation & Soft Landing",
      links: [
        { text: "Staff Augmentation Service", href: "/services/staff-augmentation" },
        { text: "Soft Landing Service", href: "/services/soft-landing" },
        { text: "Portfolio", href: "/portfolio/staff-augmentation-and-soft-landing" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Contact us Page", href: "/contact" },
        { text: "Facebook", href: "#" },
        { text: "Linkedin", href: "#" },
      ],
    },
  ],
  copyright = "© 2025 The Connector. All rights reserved",

  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-8", className)}>
      <div className="max-w-container mx-auto">
        <FooterComponent>
          <FooterContent className="flex justify-between items-start">
            {/* Left logo section */}
            <FooterColumn className="flex-shrink-0">
              <div className="flex items-center gap-2 w-12 h-12">
                <Image
                  src={"/icons/logoBlue.svg"}
                  alt={"logo"}
                  width={100}
                  height={100}
                />
              </div>
            </FooterColumn>

            {/* Right columns section */}
            <div className="flex gap-8">
              {columns.map((column, index) => (
                <FooterColumn key={index}>
                  <h3 className="text-md pt-1 font-semibold text-right break-words">
                    {column.title}
                  </h3>
                  <div className="flex flex-col items-end"> {/* 👈 align links to right */}
                    {column.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="text-muted-foreground text-sm mb-2"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </FooterColumn>
              ))}
            </div>
          </FooterContent>
          <FooterBottom className="flex justify-center items-center">
            <div>{copyright}</div>
          </FooterBottom>
        </FooterComponent>
      </div>
    </footer>
  );
}
