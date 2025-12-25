

import React from "react";
import { useRouter } from "next/navigation";
import { SingleProductCard } from "../ProductCard/SingleProductCard";
import { products as globalProducts } from "../../data/products";

/**
 * ProductCardReel Props:
 * Displays a horizontal reel of product cards, typically used for "related products" or "you may also like".
 */
interface ProductCardReelProps {
  products?: Array<React.ComponentProps<typeof SingleProductCard>>; // Optional custom products array
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onProductClick?: (product: any) => void; // Optional custom click handler
}

/**
 * ProductCardReel Component:
 * Displays a horizontal grid of product cards, typically shown on product detail pages.
 * 
 * Features:
 * - Responsive: Shows 2 cards on mobile, 5 on desktop
 * - Clickable cards that navigate to product detail pages
 * - Keyboard accessible (Enter/Space to activate)
 * - Uses global products if no products prop provided
 * - Custom click handler support for flexibility
 */
export const ProductCardReel: React.FC<ProductCardReelProps> = ({ products, onProductClick }) => {
  // Responsive logic: Detect mobile vs desktop to show appropriate number of cards
  const [isMobile, setIsMobile] = React.useState(false);
  const router = useRouter();
  // Window resize listener: Updates mobile state when window size changes
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640); // 640px = Tailwind's 'sm' breakpoint
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);
  const cardsToShow = isMobile ? 2 : 5; // 2 cards mobile, 5 cards desktop

  // Use products prop if provided, otherwise fallback to globalProducts
  const productsToUse = products && products.length > 0 ? products : globalProducts;

  /**
   * Helper Function: getProductIndex
   * Finds the index of a product in the products array by matching productName.
   * Used to construct the URL for product detail navigation.
   */
  const getProductIndex = (product: any) => {
    return productsToUse.findIndex((p: any) => p.productName === product.productName);
  };

  return (
    <div className="w-full flex flex-col items-center px-1 sm:px-0">
      <div
        className="grid grid-cols-2 sm:grid-cols-5 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-7xl"
      >
        {productsToUse.slice(0, cardsToShow).map((product: any, idx: number) => (
          <div className="w-full flex justify-center" key={idx}>
            {/* Clickable Product Card: Supports custom handler or default navigation */}
            <div
              className="w-full flex justify-center cursor-pointer"
              onClick={() => {
                // Use custom click handler if provided, otherwise default navigation
                if (typeof onProductClick === 'function') {
                  onProductClick(product);
                } else {
                  // Default: navigate to product detail page using idx from URL query
                  const index = getProductIndex(product);
                  if (index !== -1) {
                    router.push(`/product-detail?idx=${index}`);
                  }
                }
              }}
              tabIndex={0} // Make keyboard focusable
              role="button" // Accessibility: Indicates this is a button
              aria-label={`View details for ${product.productName}`} // Screen reader label
              onKeyDown={(e) => {
                // Keyboard accessibility: Enter or Space activates the button
                if (e.key === 'Enter' || e.key === ' ') {
                  if (typeof onProductClick === 'function') {
                    onProductClick(product);
                  } else {
                    const index = getProductIndex(product);
                    if (index !== -1) {
                      router.push(`/product-detail?idx=${index}`);
                    }
                  }
                }
              }}
            >
              <SingleProductCard {...product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
