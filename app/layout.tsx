import type { Metadata } from "next";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { openGraphImage } from "./shared-metadata";
import { body, display, lettering } from "./fonts";
import "normalize.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoomment: Empower Your Website with Open Source Commenting Widget",
  description:
    "Enhance engagement on your Static Site Generated (SSG) website effortlessly with Zoomment, an open-source commenting widget. Easily embed Zoomment to receive and manage comments, fostering community interaction seamlessly.",
  other: {
    zoomment: "65e5027029aeb252fcaae656",
  },
  openGraph: {
    ...openGraphImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-mode="light"
      className={`${body.variable} ${display.variable} ${lettering.variable}`}
    >
      <body>
        <AuthProvider>
          <Header />
          <main style={{ minHeight: "calc(100vh - 68px)" }}>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
