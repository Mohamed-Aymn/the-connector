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
    <footer className={cn("bg-background w-full px-6 sm:px-8 mt-20")}>
      <div className="max-w-container mx-auto">
        <FooterComponent>
          {/* ✅ Responsive footer layout */}
          <FooterContent className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* Left logo section */}
            <FooterColumn className="flex-shrink-0 flex justify-center md:justify-start">
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
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full md:w-auto justify-center md:justify-end">
              {columns.map((column, index) => (
                <FooterColumn key={index} className="text-center sm:text-right">
                  <h3
                    className={cn(
                      "text-md pt-1 font-semibold break-words",
                      column.mood === "service1"
                        ? "text-secondary bg-primary p-1"
                        : column.mood === "service2"
                          ? "text-primary bg-secondary p-1"
                          : ""
                    )}
                  >
                    {column.title}
                  </h3>
                  <div className="flex flex-col items-center sm:items-end mt-2">
                    {column.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="text-muted-foreground text-sm mb-2 hover:underline"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </FooterColumn>
              ))}
            </div>
          </FooterContent>

          {/* Bottom row */}
          <FooterBottom className="flex justify-center items-center mt-6">
            <div className="text-xs sm:text-sm text-muted-foreground text-center">
              {t("copyright")}
            </div>
          </FooterBottom>
        </FooterComponent>
      </div>
    </footer>
  );
}
