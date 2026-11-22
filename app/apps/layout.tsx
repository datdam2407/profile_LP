import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps — JollyD App",
  description:
    "Explore Android apps developed by JollyD App, including Ôn Thi GPLX A1 and Kuro Anime Live Wallpapers 4K.",
};

export default function AppsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
