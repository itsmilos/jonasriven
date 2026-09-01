import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "The Reality Without Witnesses - Jonas Riven",

  description:
    "Read The Reality Without Witnesses by Jonas Riven, a digital book exploring power, psychology, consciousness, belief, influence, and the hidden structures behind reality.",

  alternates: {
    canonical: "https://jonasriven.com/products/the-reality-without-witnesses",
  },

  openGraph: {
    title: "The Reality Without Witnesses — Jonas Riven",
    description: "Discover The Reality Without Witnesses by Jonas Riven.",
    url: "https://jonasriven.com/products/the-reality-without-witnesses",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Reality Without Witnesses by Jonas Riven",
      },
    ],
  },
};

export default function Page() {
  return <ProductPage />;
}
