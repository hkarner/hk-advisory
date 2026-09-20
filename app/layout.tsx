import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hk-advisory.com"),
  title: {
    default: "HK Advisory | Practical AI Workflow Consulting",
    template: "%s | HK Advisory"
  },
  description:
    "Practical AI adoption, Notion builds, and workflow consulting for scientists, researchers, founders, and teams.",
  openGraph: {
    type: "website",
    siteName: "HK Advisory",
    title: "HK Advisory | Practical AI Workflow Consulting",
    description:
      "AI workflow design, Notion builds, and practical AI training for rigorous people doing real work."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
