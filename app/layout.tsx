import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jonasriven.com"),

  title: {
    default: "The Buried Reality — Jonas Riven",
    template: "%s | Jonas Riven",
  },

  description:
    "The Buried Reality by Jonas Riven — discover the hidden truths beneath the reality we think we know.",

  keywords: [
    "The Buried Reality",
    "The Buried Reality book",
    "Jonas Riven",
    "Jonas Riven book",
  ],

  authors: [
    {
      name: "Jonas Riven",
      url: "https://jonasriven.com",
    },
  ],

  creator: "Jonas Riven",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "The Buried Reality — Jonas Riven",
    description:
      "Discover The Buried Reality by Jonas Riven — a journey into the hidden truths beneath the reality we think we know.",
    url: "https://jonasriven.com",
    siteName: "Jonas Riven",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Buried Reality by Jonas Riven",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Buried Reality — Jonas Riven",
    description: "Discover The Buried Reality by Jonas Riven.",
    images: ["/e-book2.webp"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
