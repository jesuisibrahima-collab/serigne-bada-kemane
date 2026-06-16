import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Serigne Bada Kemane — Influenceur Sénégalais',
  description: 'Découvrez l\'univers de Serigne Bada Kemane, influenceur sénégalais. Boutique en ligne, vidéos TikTok et bien plus.',
  openGraph: {
    title: 'Serigne Bada Kemane',
    description: 'Influenceur sénégalais — Boutique & Contenus',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
