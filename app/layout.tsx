import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site";
import { LanguageProvider } from "@/components/language";
export const metadata: Metadata = {
  title: "JollyD App — Thoughtful apps for everyday life",
  description: "JollyD App creates useful, intuitive mobile applications for learning, personalization, and everyday life.",
  metadataBase: new URL("https://JollyD.app")
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><LanguageProvider><SiteHeader />{children}<SiteFooter /></LanguageProvider></body></html>;
}