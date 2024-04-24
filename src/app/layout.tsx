import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Suspense } from "react";
import Footer from "./components/footer";
import { Loader } from "./components/loader";

const inter = Inter({ subsets: ["latin"] });
const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavlo Portfolio",
  description: "Pavlo Lystopad portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense fallback={<Loader />}>
          <Header />
          <section className="bg-base-bg">{children}</section>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
