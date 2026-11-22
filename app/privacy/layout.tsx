import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — JollyD App",
  description:
    "Privacy Policy for applications developed by JollyD App, including Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1.",
};

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
