import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — JollyD App",
  description:
    "Support center, bug reporting, and FAQs for JollyD App applications including Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1.",
};

export default function SupportLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
