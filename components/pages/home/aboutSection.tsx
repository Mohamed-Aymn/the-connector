import React from "react"
import Heading from "@/components/shared/typography/heading"
import Description from "@/components/shared/typography/description"
import { useTranslations } from "next-intl"
import Section from "@/components/shared/layout/section"
import NumbersCountUp from "@/components/shared/lib/numbersCountUp"

function AboutSection() {
  const t = useTranslations("Home.AboutSection")
  return (
    <Section type="outer">
      <div className="max-w-4xl mx-auto" id="about">
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

        <div className="mt-10 flex justify-center items-center">
          <NumbersCountUp />
        </div>
      </div>
    </Section>
  )
}

export default AboutSection
