import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductDetailLayout } from "@/components/ProductDetail/ProductDetailLayout";

/**
 * Product Detail Page Metadata:
 * SEO metadata specific to product detail pages.
 * Helps with search engine indexing and social media sharing of individual products.
 */
export const metadata: Metadata = {
  title: "Product Details",
  description:
    "View detailed product information including specifications, pricing, availability, and more. Explore our e-commerce product detail page component built with Next.js, TypeScript, and Tailwind CSS.",
  openGraph: {
    title: "Product Details | Freelance QLLP",
    description:
      "View detailed product information including specifications, pricing, and availability. Built with Next.js and TypeScript.",
    url: "https://freelance-qllp.vercel.app/product-detail",
    images: [
      {
        url: "/product-image.png",
        width: 1200,
        height: 630,
        alt: "Product Details - Freelance QLLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Details | Freelance QLLP",
    description:
      "View detailed product information with our Next.js e-commerce component.",
    images: ["/product-image.png"],
  },
};

/**
 * Product Detail Page Component:
 * Uses React Suspense to handle async data loading gracefully.
 * The fallback shows a loading state while the product data is being fetched.
 * This improves perceived performance and user experience.
 */
export default function ProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div
          className="flex items-center justify-center min-h-screen w-full bg-white"
          style={{
            color: "#111",
            fontSize: 22,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Loading product details...
        </div>
      }
    >
      <ProductDetailLayout />
    </Suspense>
  );
}
