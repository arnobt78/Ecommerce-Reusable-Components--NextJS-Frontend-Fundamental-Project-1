import { useState } from "react";

/**
 * useProductPagination Hook:
 * Custom React hook for handling pagination logic.
 * 
 * This hook:
 * - Manages the current page state
 * - Calculates total pages based on products and items per page
 * - Returns a slice of products for the current page
 * - Provides setter function to change pages
 * 
 * @param products - Array of products to paginate
 * @param perPage - Number of items to show per page
 * @returns Object with page state, setter, total pages, and paginated products
 * 
 * Example: If you have 20 products and perPage is 6, you get 4 pages (6, 6, 6, 2)
 */
export function useProductPagination<T>(products: T[], perPage: number) {
  const [page, setPage] = useState(1); // Current page (1-indexed)
  const totalPages = Math.ceil(products.length / perPage); // Calculate total pages needed
  // Slice products array to get only items for current page
  // Example: page 2, perPage 6 = slice(6, 12) = items 7-12
  const paginated = products.slice((page - 1) * perPage, page * perPage);
  return {
    page,
    setPage,
    totalPages,
    paginated,
  };
}
