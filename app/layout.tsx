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
  title: "Infralyft LLC - Innovate Beyond",
  description: "Professional technology solutions and consulting services. Empowering businesses with cutting-edge innovation, AI agents, and emerging technologies.",
  keywords: ["technology", "consulting", "innovation", "enterprise solutions", "digital transformation", "AI", "artificial intelligence", "AI agents", "emerging technologies"],
  authors: [{ name: "Infralyft LLC" }],
  icons: {
    icon: "/logo-sm.png",
    apple: "/logo-sm.png",
  },
  openGraph: {
    title: "Infralyft LLC - Innovate Beyond",
    description: "Professional technology solutions and consulting services. Exploring AI agents and emerging technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infralyft LLC - Innovate Beyond",
    description: "Professional technology solutions and consulting services. Exploring AI agents and emerging technologies.",
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
