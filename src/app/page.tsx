import type { Metadata } from "next";
import { ListProductCard } from "../components/ProductCard/ListProductCard";

/**
 * Home Page Metadata:
 * Page-specific SEO metadata that extends the root layout metadata.
 * This helps search engines understand what this specific page is about.
 */
export const metadata: Metadata = {
  title: "Home",
  description:
    "Browse our collection of reusable Next.js e-commerce UI components. Explore dynamic category filters, product cards, and pagination with pixel-perfect Figma design. Built with TypeScript and Tailwind CSS.",
  openGraph: {
    title: "Freelance QLLP – Next.js Reusable E-commerce UI Components",
    description:
      "Browse our collection of reusable Next.js e-commerce UI components. Explore dynamic category filters, product cards, and pagination with pixel-perfect Figma design.",
    url: "https://freelance-qllp.vercel.app",
    images: [
      {
        url: "/product-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance QLLP - E-commerce UI Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance QLLP – Next.js Reusable E-commerce UI Components",
    description:
      "Browse our collection of reusable Next.js e-commerce UI components with pixel-perfect design.",
    images: ["/product-image.png"],
  },
};

/**
 * Home Page Component:
 * The main landing page that displays the product listing with filters and pagination.
 * Uses a centered layout with responsive padding for mobile and desktop views.
 */
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-2">
      <ListProductCard />
    </div>
  );
}
