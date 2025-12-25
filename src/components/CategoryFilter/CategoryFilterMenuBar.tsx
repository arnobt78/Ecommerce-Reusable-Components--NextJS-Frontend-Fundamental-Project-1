"use client";

import React, { useState } from "react";
import { FilterDropDown } from "./FilterDropDown";


import { products } from "../../data/products";

/**
 * Helper Function: getUnique
 * Extracts unique values from an array, removing duplicates and empty values.
 * Used to dynamically generate filter options from product data.
 */
const getUnique = (arr: string[]) => Array.from(new Set(arr)).filter(Boolean);

/**
 * Filter Data Configuration:
 * Dynamically generates filter options from product data.
 * Each filter category (brands, flavors, strength) extracts unique values from products.
 * This ensures filters always match available products without manual updates.
 */
const filterData = [
  {
    title: "brands",
    options: getUnique(products.map((p) => p.brand)),
  },
  {
    title: "flavors",
    options: getUnique(products.map((p) => p.flavor)),
  },
  {
    title: "strength",
    options: getUnique(products.map((p) => p.strength)),
  },
];

/**
 * CategoryFilterMenuBar Component:
 * Main filter bar that contains multiple filter dropdowns (Brand, Flavor, Strength).
 * Manages the state of all selected filters and communicates changes to parent component.
 * Features custom SVG icons for each filter category, matching the Figma design.
 */

export const CategoryFilterMenuBar: React.FC<{ onFilterChange?: (filters: { brands: string[]; flavors: string[]; strength: string[] }) => void }> = ({ onFilterChange }) => {
  /**
   * Selected Filters State:
   * Array of arrays - each inner array represents selected values for one filter category.
   * [0] = brands, [1] = flavors, [2] = strength
   * Example: [[], ["Mint", "Lime"], ["Medium"]] = no brands, Mint & Lime flavors, Medium strength
   */
  const [selected, setSelected] = useState<string[][]>([[], [], []]);

  /**
   * Filter Change Effect:
   * Watches selected filters and notifies parent component whenever filters change.
   * This allows the parent (ListProductCard) to update the product list accordingly.
   */
  React.useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        brands: selected[0],
        flavors: selected[1],
        strength: selected[2],
      });
    }
  }, [selected, onFilterChange]);

  /**
   * Custom SVG Icons:
   * Each filter category has a unique icon extracted from the Figma design.
   * These icons are passed to FilterDropDown components for visual identification.
   */
  // Checklist icon for Brands
  const brandIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
      <path d="M17.0309 17.7182L20.7288 14.0203C20.9372 13.812 21.1802 13.712 21.458 13.7203C21.7358 13.7286 21.9788 13.8373 22.1872 14.0463C22.3781 14.2547 22.4736 14.4977 22.4736 14.7755C22.4736 15.0533 22.3781 15.2963 22.1872 15.5047L17.7861 19.9318C17.5778 20.1401 17.3347 20.2443 17.057 20.2443C16.7792 20.2443 16.5361 20.1401 16.3278 19.9318L14.0882 17.6922C13.8972 17.5012 13.8018 17.2582 13.8018 16.963C13.8018 16.6679 13.8972 16.4248 14.0882 16.2338C14.2792 16.0429 14.5222 15.9474 14.8174 15.9474C15.1125 15.9474 15.3556 16.0429 15.5466 16.2338L17.0309 17.7182ZM17.0309 9.38489L20.7288 5.68697C20.9372 5.47864 21.1802 5.37864 21.458 5.38697C21.7358 5.3953 21.9788 5.50398 22.1872 5.71301C22.3781 5.92135 22.4736 6.1644 22.4736 6.44218C22.4736 6.71996 22.3781 6.96301 22.1872 7.17135L17.7861 11.5984C17.5778 11.8068 17.3347 11.9109 17.057 11.9109C16.7792 11.9109 16.5361 11.8068 16.3278 11.5984L14.0882 9.35885C13.8972 9.16787 13.8018 8.92482 13.8018 8.62968C13.8018 8.33454 13.8972 8.09148 14.0882 7.90051C14.2792 7.70954 14.5222 7.61405 14.8174 7.61405C15.1125 7.61405 15.3556 7.70954 15.5466 7.90051L17.0309 9.38489ZM3.12468 18.5776C2.82954 18.5776 2.58232 18.4776 2.38301 18.2776C2.18371 18.0776 2.08371 17.8304 2.08301 17.5359C2.08232 17.2415 2.18232 16.9943 2.38301 16.7943C2.58371 16.5943 2.83093 16.4943 3.12468 16.4943H10.4163C10.7115 16.4943 10.9591 16.5943 11.1591 16.7943C11.3591 16.9943 11.4587 17.2415 11.458 17.5359C11.4573 17.8304 11.3573 18.0779 11.158 18.2786C10.9587 18.4793 10.7115 18.579 10.4163 18.5776H3.12468ZM3.12468 10.2443C2.82954 10.2443 2.58232 10.1443 2.38301 9.94426C2.18371 9.74426 2.08371 9.49704 2.08301 9.2026C2.08232 8.90815 2.18232 8.66093 2.38301 8.46093C2.58371 8.26093 2.83093 8.16093 3.12468 8.16093H10.4163C10.7115 8.16093 10.9591 8.26093 11.1591 8.46093C11.3591 8.66093 11.4587 8.90815 11.458 9.2026C11.4573 9.49704 11.3573 9.74461 11.158 9.9453C10.9587 10.146 10.7115 10.2457 10.4163 10.2443H3.12468Z" fill="black"/>
    </svg>
  );
  // Strawberry icon for Flavors
  const flavorIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
      <path d="M18.2086 8.16092L21.8544 4.51509M18.2086 8.16092V2.95259M18.2086 8.16092H23.4169M9.35439 10.7651H9.36481M13.5211 9.72342H13.5315M8.31272 14.9318H8.32314M12.4794 13.8901H12.4898M16.6461 12.8484H16.6565M7.27105 19.0984H7.28147M11.4377 18.0568H11.4481M15.6044 17.0151H15.6148M2.68772 18.6818C2.52797 19.3709 2.54629 20.0893 2.74097 20.7694C2.93564 21.4495 3.30026 22.0688 3.80047 22.569C4.30067 23.0692 4.91999 23.4338 5.60007 23.6285C6.28015 23.8232 6.9986 23.8415 7.68772 23.6818L17.0627 21.4943C18.2538 21.2425 19.3518 20.6655 20.2346 19.8272C21.1175 18.989 21.7506 17.9223 22.0636 16.7458C22.3766 15.5693 22.3572 14.3291 22.0077 13.163C21.6582 11.9968 20.9921 10.9504 20.0836 10.1401L16.1252 6.28592C15.2723 5.43942 14.2094 4.83517 13.0457 4.53524C11.882 4.2353 10.6594 4.25048 9.50355 4.57922C8.34767 4.90796 7.30011 5.53841 6.46842 6.40583C5.63673 7.27326 5.05089 8.34641 4.77105 9.51509L2.68772 18.6818Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  // Static chart icon for Strength
  const strengthIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
      <path d="M23.4375 24.3068H17.1875V3.99426H23.4375V24.3068ZM18.75 22.7443H21.875V5.55676H18.75V22.7443ZM15.625 24.3068H9.375V10.2443H15.625V24.3068ZM7.8125 24.3068H1.5625V14.9318H7.8125V24.3068Z" fill="black"/>
    </svg>
  );

  /**
   * Handle Filter Change:
   * Updates the selected filters state when a dropdown selection changes.
   * @param idx - Index of the filter category (0=brands, 1=flavors, 2=strength)
   * @param values - Array of selected values for that category
   */
  const handleChange = (idx: number, values: string[]) => {
    setSelected((prev) => prev.map((s, i) => (i === idx ? values : s)));
  };

  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center bg-[#E6FAFC] border-0 rounded-[20px] shadow-none px-2 py-4 sm:px-4 sm:py-6 w-full max-w-2xl mt-8"
      style={{ minWidth: 0, minHeight: 80 }}
    >
      <div className="flex flex-col sm:flex-row w-full max-w-2xl gap-2 sm:gap-0">
        {/* Brands Filter Dropdown */}
        <FilterDropDown
          title={filterData[0].title}
          _icon={brandIcon}
          options={filterData[0].options}
          selected={selected[0]}
          onChange={(values) => handleChange(0, values)}
        />
        {/* Divider: Only visible on desktop (sm and up) */}
        <div className="hidden sm:flex items-center mx-2" style={{ height: 'auto' }}>
          <div className="border-l border-[#E0E0E0]" style={{ height: '56px', width: 0, margin: '0 auto' }} />
        </div>
        {/* Flavors Filter Dropdown */}
        <FilterDropDown
          title={filterData[1].title}
          _icon={flavorIcon}
          options={filterData[1].options}
          selected={selected[1]}
          onChange={(values) => handleChange(1, values)}
        />
        {/* Divider: Only visible on desktop */}
        <div className="hidden sm:flex items-center mx-2" style={{ height: 'auto' }}>
          <div className="border-l border-[#E0E0E0]" style={{ height: '56px', width: 0, margin: '0 auto' }} />
        </div>
        {/* Strength Filter Dropdown */}
        <FilterDropDown
          title={filterData[2].title}
          _icon={strengthIcon}
          options={filterData[2].options}
          selected={selected[2]}
          onChange={(values) => handleChange(2, values)}
        />
      </div>
    </div>
  );
};
