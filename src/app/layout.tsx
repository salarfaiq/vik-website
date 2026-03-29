import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VIKurdistan - Where Mountains Meet the Sky",
  description:
    "Book your dream adventure in Kurdistan's Zagros Mountains. Halgurd summit expeditions, the Zagros Mountain Trail, glamping, and cultural experiences in Choman.",
  keywords: [
    "Kurdistan tourism",
    "Zagros Mountain Trail",
    "Halgurd Mountain",
    "Iraq hiking",
    "Choman",
    "Kurdistan adventure",
    "VIKurdistan",
  ],
  openGraph: {
    title: "VIKurdistan - Where Mountains Meet the Sky",
    description:
      "Trek ancient paths to Iraq's highest peak. Camp under stars at 3,000 meters. Your Kurdistan adventure starts in Choman.",
    url: "https://visitiraqikurdistan.com",
    siteName: "VIKurdistan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-nunito)]">
        {children}
      </body>
    </html>
  );
}
