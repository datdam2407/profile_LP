import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — JollyD App",
  description:
    "Learn about JollyD App, an independent mobile app studio building thoughtful tools for learning and personalization.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
