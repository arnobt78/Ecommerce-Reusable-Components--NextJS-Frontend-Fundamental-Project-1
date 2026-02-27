import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import Footer from '@/components/Footer'

/**
 * Font Configuration:
 * Next.js font optimization automatically self-hosts Google Fonts for better performance.
 * Geist Sans is used for body text, Geist Mono for code/monospace text.
 * The CSS variables allow us to use these fonts throughout the app via Tailwind.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * SEO Metadata Configuration:
 * This metadata object is used by Next.js to generate proper HTML meta tags,
 * Open Graph tags for social sharing, and Twitter Card tags.
 * The metadataBase sets the base URL for all relative URLs in metadata.
 * The title template allows child pages to set their own titles while maintaining brand consistency.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://freelance-qllp.vercel.app"),
  title: {
    default:
      "E-Commerce Reusable Components – Next.js, Tailwind CSS Frontend Fundamental Tutorial 1",
    template:
      "%s | E-Commerce Reusable Components – Next.js, Tailwind CSS Frontend Fundamental Tutorial 1", // Child pages can use: title: "Page Name" and it becomes "Page Name | E-Commerce Reusable Components – Next.js, Tailwind CSS Frontend Fundamental Tutorial 1"
  },
  description:
    "Production-ready, reusable Next.js e-commerce UI components with pixel-perfect Figma design. Features dynamic category filters, product cards, pagination, and responsive layouts built with TypeScript and Tailwind CSS.",
  keywords: [
    "Next.js",
    "Reusable Components",
    "UI Library",
    "TypeScript",
    "Tailwind CSS",
    "Category Filter",
    "Dropdown",
    "Checkbox",
    "Pixel-Perfect",
    "Figma",
    "Accessibility",
    "Frontend",
    "Pagination",
    "Product Card",
    "React",
    "ESLint",
    "SVG Icons",
    "Modular Design",
    "E-commerce UI",
    "App Router",
    "Mobile Responsive",
    "Teaching",
    "Demo",
    "Open Source",
    "E-commerce Components",
    "Product Filtering",
    "React Server Components",
  ],
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://www.arnobmahmud.com/",
    },
  ],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freelance-qllp.vercel.app",
    siteName:
      "E-Commerce Reusable Components – Next.js, Tailwind CSS Frontend Fundamental Tutorial 1",
    title:
      "E-Commerce Reusable Components – Next.js, Tailwind CSS Frontend Fundamental Tutorial 1",
    description:
      "Production-ready, reusable Next.js e-commerce UI components with pixel-perfect Figma design. Features dynamic category filters, product cards, pagination, and responsive layouts built with TypeScript and Tailwind CSS.",
    images: [
      {
        url: "/product-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance QLLP - Next.js E-commerce UI Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance QLLP – Next.js Reusable E-commerce UI Components",
    description:
      "Production-ready, reusable Next.js e-commerce UI components with pixel-perfect Figma design.",
    images: ["/product-image.png"],
    creator: "@arnobt78",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/favicon.ico", sizes: "180x180" }],
  },
  alternates: {
    canonical: "https://freelance-qllp.vercel.app",
  },
  category:
    "E-Commerce Reusable Components – Next.js, Tailwind CSS Frontend Fundamental Tutorial 1",
  classification: "Web Development, UI Components, Next.js",
};

/**
 * Root Layout Component:
 * This is the root layout for the entire Next.js application.
 * It wraps all pages and provides the HTML structure, fonts, and global styles.
 * suppressHydrationWarning prevents React hydration warnings for client-side only attributes.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
