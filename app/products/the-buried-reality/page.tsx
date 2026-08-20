import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "The Buried Reality — Digital Edition",

  description:
    "Read The Buried Reality by Jonas Riven, a digital book exploring power, psychology, consciousness, belief, influence, and the hidden structures behind reality.",

  alternates: {
    canonical: "https://jonasriven.com/products/the-buried-reality",
  },

  openGraph: {
    title: "The Buried Reality — Digital Edition",
    description: "Discover The Buried Reality by Jonas Riven.",
    url: "https://jonasriven.com/products/the-buried-reality",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Buried Reality by Jonas Riven",
      },
    ],
  },
};

export default function Page() {
  return <ProductPage />;
}
