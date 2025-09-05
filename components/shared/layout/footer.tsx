import { cn } from "@/lib/utils";
import Image from "next/image"
import {
  Footer as FooterComponent,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer")
  const columns = [
    {
      title: t("columns.0.title"),
      links: [
        { text: t("columns.0.items.0"), href: "/services/software-engineering" },
        { text: t("columns.0.items.1"), href: "/services/buliding-brands" },
        { text: t("columns.0.items.2"), href: "/portfolio/building-brands" },
      ],
      mood: "service1",
    },
    {
      title: t("columns.1.title"),
      links: [
        { text: t("columns.1.items.0"), href: "/services/staff-augmentation" },
        { text: t("columns.1.items.1"), href: "/services/soft-landing" },
        { text: t("columns.1.items.2"), href: "/portfolio/staff-augmentation-and-soft-landing" },
      ],
      mood: "service2",
    },
    {
      title: t("columns.2.title"),
      links: [
        { text: t("columns.2.items.0"), href: "/contact" },
        { text: t("columns.2.items.1"), href: "#" },
        { text: t("columns.2.items.2"), href: "#" },
      ],
      mood: "general",
    },
  ]

  return (
    <footer className={cn("bg-background w-full px-8 mt-38")}>
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
                  <h3 className={`text-md pt-1 font-semibold text-right break-words
                  ${column.mood === "service1" ?
                      "text-secondary bg-primary p-1" :
                      column.mood === "service2" ?
                        "text-primary bg-secondary p-1"
                        : ""}
                    
                    `}>
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
            <div>{t("copyright")}</div>
          </FooterBottom>
        </FooterComponent>
      </div>
    </footer>
  );
}
