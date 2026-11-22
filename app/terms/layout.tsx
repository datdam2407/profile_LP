import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — JollyD App",
  description:
    "Terms of Service and copyright removal policy for JollyD App applications, including Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1.",
};

export default function TermsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
