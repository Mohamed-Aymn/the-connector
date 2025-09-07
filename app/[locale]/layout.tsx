import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Toaster } from "sonner";
import Nav from "@/components/shared/layout/nav";
import Whatsapp from "@/components/shared/layout/whatsapp";
import Footer from "@/components/shared/layout/footer";
import { CursorProvider } from "@/context/cursorContext";
import { generateMetadataAbstraction } from "@/lib/metaUtils";

const cairo = Cairo({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataAbstraction("Meta");
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${cairo.className} antialiased min-h-screen flex flex-col`}>
        <NextIntlClientProvider>
          <CursorProvider>
            <Nav />
            <main className="space-y-[120px]">{children}</main>
            <Whatsapp mobileNumber={"966533746410"} />
            <Footer />
            <Toaster closeButton richColors position="bottom-center" />
          </CursorProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}