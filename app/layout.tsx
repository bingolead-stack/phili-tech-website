import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Philitech - Innovate Beyond",
  description: "Professional technology solutions and consulting services. Empowering businesses with cutting-edge innovation.",
  keywords: ["technology", "consulting", "innovation", "enterprise solutions", "digital transformation"],
  authors: [{ name: "Philitech" }],
  openGraph: {
    title: "Philitech - Innovate Beyond",
    description: "Professional technology solutions and consulting services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philitech - Innovate Beyond",
    description: "Professional technology solutions and consulting services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
