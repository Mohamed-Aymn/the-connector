import React from "react"
import Heading from "@/components/shared/typography/heading"
import Description from "@/components/shared/typography/description"
import { useTranslations } from "next-intl"

function AboutSection() {
  const t = useTranslations("Home.about")
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Heading
          level={2}
          size="md"
        >
          About Us
        </Heading>
        <div className="flex flex-col gap-2 text-center">
          <Description size="md">
            {t("description1.0")}{" "}
            <span className="font-semibold text-foreground">
              {t("description1.1")}
            </span>,
            {t("description1.2")}
          </Description>
          <Description size="md">{t("description2")}</Description>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
