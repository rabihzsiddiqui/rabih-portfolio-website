import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rabih's Portfolio",
  description:
    "Cognitive Science graduate from UC San Diego with experience in product testing and UX research at Google and Meta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-100 antialiased font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
