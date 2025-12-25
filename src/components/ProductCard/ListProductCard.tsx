"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SingleProductCard } from "./SingleProductCard";
import { useProductPagination } from "./useProductPagination";
import { Pagination } from "../Pagination/Pagination";
import { products as allProducts } from "../../data/products";

import { CategoryFilterMenuBar } from "../CategoryFilter/CategoryFilterMenuBar";

/**
 * ListProductCard Component:
 * Main container component that orchestrates the product listing page.
 * Manages filtering, pagination, and navigation to product detail pages.
 * 
 * Key Features:
 * - Multi-select category filtering (brands, flavors, strength)
 * - Pagination with 6 products per page (2 rows × 3 columns on desktop)
 * - Responsive grid layout (2 columns mobile, 3 columns desktop)
 * - Click-to-navigate to product detail pages
 */
export const ListProductCard: React.FC = () => {
  const router = useRouter(); // Next.js App Router hook for programmatic navigation
  const [filtered, setFiltered] = React.useState(allProducts); // State for filtered products
  // 6 cards per page, 2 rows of 3
  const { page, setPage, totalPages, paginated } = useProductPagination(filtered, 6);

  /**
   * Filter Change Handler:
   * Memoized with useCallback to prevent unnecessary re-renders and infinite loops.
   * Implements AND logic: product must match ALL selected filter categories.
   * If no filters are selected in a category, all products in that category pass.
   * Optimized to only update state if the filtered results actually changed.
   */
  const handleFilterChange = React.useCallback((filters: { brands: string[]; flavors: string[]; strength: string[] }) => {
    setPage(1); // Reset to first page on filter change for better UX
    setFiltered((prev) => {
      // Filter products: must match selected brands AND flavors AND strength
      const next = allProducts.filter((p) =>
        (filters.brands.length === 0 || filters.brands.includes(p.brand)) &&
        (filters.flavors.length === 0 || filters.flavors.includes(p.flavor)) &&
        (filters.strength.length === 0 || filters.strength.includes(p.strength))
      );
      // Only update if changed - prevents unnecessary re-renders
      if (prev.length === next.length && prev.every((p, i) => p.productName === next[i].productName)) {
        return prev;
      }
      return next;
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full lg:px-2 sm:px-0">
      {/* Category Filter Bar: Allows users to filter by brand, flavor, and strength */}
      <CategoryFilterMenuBar onFilterChange={handleFilterChange} />
      {/* Product Grid: Responsive layout - 2 cols mobile, 3 cols desktop */}
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-5xl mt-6 sm:px-2 min-h-[200px]"
      >
        {paginated.length > 0 ? (
          // Render paginated products with click-to-navigate functionality
          paginated.map((product, idx) => (
            <div
              className="w-full flex justify-center"
              key={idx + (page - 1) * 6} // Unique key based on page and index
            >
              <div
                className="w-full flex justify-center cursor-pointer"
                onClick={() => router.push(`/product-detail?idx=${allProducts.findIndex((p) => p.productName === product.productName)}`)}
              >
                <SingleProductCard {...product} />
              </div>
            </div>
          ))
        ) : (
          // Empty state: Show message when no products match filters
          <div className="col-span-full flex flex-col items-center justify-center w-full min-h-[180px] py-8">
            <span className="text-lg sm:text-xl font-semibold text-gray-500 text-center">
              No products matched your category filter.
            </span>
          </div>
        )}
      </div>
      {/* Pagination Controls: Only shown when there are multiple pages */}
      <div className="w-full flex justify-center mt-6">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
};
