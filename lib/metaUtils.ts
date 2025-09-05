import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadataAbstraction(path: string): Promise<Metadata> {
  const t = await getTranslations(path);
  const logoUrl = "/icons/coloredLogo.svg";

  return {
    title: t("title"),
    description: t("description"),
    keywords: ["The Connector", "Connector", "Services", "Staff Augmentation", "Software Engineering", "Portfolio", "Soft Landing"],
    authors: [{ name: "The Connector" }],
    metadataBase: new URL("https://www.yourdomain.com"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      siteName: "The Connector",
      images: [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
