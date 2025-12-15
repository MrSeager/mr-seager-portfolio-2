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
  title: "Mr.Seager Portfolio",
  description: "Mr.Seager Front-End Portfolio created by using Next.js, CSS, TypeScript and etc",
  openGraph: {
    title: "Mr.Seager Portfolio",
    description: "Mr.Seager Front-End Portfolio created by using Next.js, CSS, TypeScript and etc",
    images: [
      {
        url: "/preview.jpeg", // this must be in /public
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/preview.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
