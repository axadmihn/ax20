import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-merriweather" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://axnmihn.com";
let metadataBase: URL | undefined;

try {
  metadataBase = new URL(siteUrl);
} catch {
  metadataBase = undefined;
}

export const metadata: Metadata = {
  title: "Axnmihn — Protocols from cognition to structure",
  description:
    "Axnmihn aligns gene therapy, data science, and clinical decision support to convert uncertainty into precision frameworks.",
  metadataBase,
  openGraph: {
    title: "Axnmihn — Protocols from cognition to structure",
    description:
      "Programmable decision systems for therapeutic contexts: gene therapy, methodological naturalism, and clinical support.",
    url: siteUrl,
    siteName: "Axnmihn",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Axnmihn",
    description:
      "Gene therapy, data science, and clinical decision support merging into accountable protocols.",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body
        className={cn(
          "relative min-h-screen bg-slate-950 text-slate-100",
          inter.variable,
          merriweather.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
