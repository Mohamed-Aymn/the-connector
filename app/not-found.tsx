import { useTranslations } from "next-intl";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <html>
      <body
        className={roboto.className}
        style={{
          margin: 0,
          padding: 0
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#111",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", margin: "0.3em" }}>404</h1>
          <p style={{ fontSize: "1.125rem" }}>
            {t("title")}
          </p>
          <Link
            href="/"
            style={{
              // marginTop: "1rem",
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            {t("button")}
          </Link>
        </div>
      </body>
    </html>
  );
}
