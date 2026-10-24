import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Jaffar Saadiq | AI & Data Science",
  description:
    "Portfolio of Mohammed Jaffar Saadiq — AI, data analytics, computer vision, and software development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
