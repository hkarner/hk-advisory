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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:p-3">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
