"use client";

import React from "react";

/**
 * Pagination Component Props:
 * Controls for navigating through paginated content.
 */
interface PaginationProps {
  currentPage: number; // Currently active page (1-indexed)
  totalPages: number; // Total number of pages available
  onPageChange: (page: number) => void; // Callback when user clicks a page number
}

/**
 * getPages Function:
 * Smart pagination algorithm that generates an array of page numbers to display.
 * 
 * Strategy:
 * - Always shows first two and last two pages
 * - Shows ellipsis (...) when there are gaps
 * - Near start: shows more pages after 2
 * - Near end: shows more pages before last two
 * - In middle: shows current-1, current, current+1 with ellipses on both sides
 * 
 * Example outputs:
 * - Total 10, current 1: [1, 2, 3, 4, 5, ..., 9, 10]
 * - Total 10, current 5: [1, 2, ..., 4, 5, 6, ..., 9, 10]
 * - Total 10, current 9: [1, 2, ..., 6, 7, 8, 9, 10]
 */
const getPages = (current: number, total: number) => {
  // Always show first two and last two pages.
  // Show ... if there is a gap between the first/last two and the current window.
  // If current is near the start, show more numbers after 2; if near the end, show more before last two.
  // In the middle, show double ellipsis and current-1, current, current+1.
  const pages: (number | string)[] = [];
  if (total <= 6) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }
  pages.push(1);
  pages.push(2);
  if (current <= 4) {
    // Near start: show up to 5, then ...
    for (let i = 3; i <= 5; i++) {
      if (i < total - 1) pages.push(i);
    }
    if (total > 7) pages.push('...');
  } else if (current >= total - 3) {
    // Near end: ... then show total-4, total-3, total-2
    if (total > 7) pages.push('...');
    for (let i = total - 4; i <= total - 2; i++) {
      if (i > 2) pages.push(i);
    }
  } else {
    // In the middle: ... current-1, current, current+1 ...
    if (current > 5) pages.push('...');
    for (let i = current - 1; i <= current + 1; i++) {
      if (i > 2 && i < total - 1) pages.push(i);
    }
    if (current < total - 4) pages.push('...');
  }
  pages.push(total - 1);
  pages.push(total);
  // Remove duplicates and keep order
  const seen = new Set();
  return pages.filter((p) => {
    if (typeof p === 'number' && (p < 1 || p > total)) return false;
    if (seen.has(p)) return false;
    seen.add(p);
    return true;
  });
};

/**
 * Pagination Component:
 * Displays page numbers with Previous/Next buttons and smart ellipsis handling.
 * 
 * Features:
 * - Accessible navigation (ARIA labels, keyboard support)
 * - Disabled states for first/last page
 * - Hover effects and transitions
 * - Responsive design
 * - Smart page number display with ellipses
 */
export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = getPages(currentPage, totalPages); // Get array of page numbers/ellipses to display

  return (
    <nav
      className="flex flex-row items-center gap-2 h-[32px] select-none my-8 px-1 sm:px-0 w-full justify-center"
      style={{ maxWidth: 372, marginLeft: 'auto', marginRight: 'auto' }}
      aria-label="Pagination" // Accessibility: Screen readers announce this as pagination
    >
      {/* Previous Page Button: Disabled on first page */}
      <button
        className={
          `w-8 h-8 rounded-[4px] flex items-center justify-center border transition-all relative hover:scale-[1.1] transition-transform duration-300 ease-in-out
          ${currentPage === 1
            ? 'bg-[#919EAB] opacity-50 border-transparent cursor-default' // Disabled state styling
            : 'bg-white border-[#DFE3E8] hover:border-[#6DF4F9] cursor-pointer hover:scale-[1.1] transition-transform duration-300 ease-in-out'} // Active state styling
          `
        }
        disabled={currentPage === 1} // Disable when on first page
        onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)} // Navigate to previous page
        aria-label="Previous page" // Accessibility label
        tabIndex={0}
        style={{ boxSizing: 'border-box' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="pointer-events-none">
          <path d="M15 6L9 12L15 18" stroke="#C4CDD5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Page Number Buttons: Render numbers or ellipses */}
      {pages.map((p, idx) =>
        typeof p === "number" ? (
          // Page number button
          <button
            key={p}
            className={
              `w-8 h-8 rounded-[4px] flex items-center justify-center font-bold text-[14px] leading-[20px] transition-all border relative hover:scale-[1.1] transition-transform duration-300 ease-in-out
              ${p === currentPage
                ? 'bg-white border-[#6DF4F9] text-black shadow-sm z-10 cursor-default hover:scale-[1.1] transition-transform duration-300 ease-in-out' // Active page styling
                : 'bg-white border-[#DFE3E8] text-[#212B36] hover:border-[#6DF4F9] cursor-pointer hover:scale-105 hover:scale-[1.1] transition-transform duration-300 ease-in-out'} // Inactive page styling
              `
            }
            style={{ fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}
            onClick={() => p !== currentPage && onPageChange(p)} // Navigate to clicked page
            aria-current={p === currentPage ? "page" : undefined} // Accessibility: Mark current page
            tabIndex={0}
          >
            {p}
          </button>
        ) : (
          // Ellipsis span (non-clickable)
          <span
            key={"ellipsis-" + idx}
            className="w-8 h-8 rounded-[4px] flex items-center justify-center text-[14px] leading-[20px] text-[#212B36] font-bold select-none"
            style={{ fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}
          >
            ...
          </span>
        )
      )}
      {/* Next Page Button: Disabled on last page */}
      <button
        className={
          `w-8 h-8 rounded-[4px] flex items-center justify-center border transition-all relative hover:scale-[1.1] transition-transform duration-300 ease-in-out
          ${currentPage === totalPages
            ? 'bg-[#919EAB] opacity-50 border-transparent cursor-default' // Disabled state styling
            : 'bg-white border-[#DFE3E8] hover:border-[#6DF4F9] cursor-pointer  hover:scale-[1.1] transition-transform duration-300 ease-in-out'} // Active state styling
          `
        }
        disabled={currentPage === totalPages} // Disable when on last page
        onClick={() => currentPage !== totalPages && onPageChange(currentPage + 1)} // Navigate to next page
        aria-label="Next page" // Accessibility label
        tabIndex={0}
        style={{ boxSizing: 'border-box' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="pointer-events-none">
          <path d="M9 6L15 12L9 18" stroke="#C4CDD5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </nav>
  );
};
