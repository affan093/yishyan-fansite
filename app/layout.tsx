import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yishyan's Fan Site",
  description:
    "A fan-made website dedicated to Foo Yi Shyan (Yishyan), captain of KLP48.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans pb-24 md:pb-28">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
