import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion — JollyD App",
  description:
    "Instructions for deleting app data or requesting account deletion for JollyD App applications, including Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1.",
};

export default function DeleteAccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
