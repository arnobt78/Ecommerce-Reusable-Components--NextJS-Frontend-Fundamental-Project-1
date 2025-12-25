"use client";

// This file is a React component for a reusable filter dropdown menu.
import React, { useState } from "react";

/**
 * FilterDropDown Component Props:
 * A reusable dropdown component for multi-select filtering.
 * Supports custom icons, multiple selections, and keyboard navigation.
 */
interface FilterDropDownProps {
  title: string;
  // The icon prop is intentionally unused to preserve the component API for future use.
  // To satisfy ESLint, prefix with an underscore and make it optional:
  _icon?: React.ReactNode;
  options: string[]; // Available filter options (e.g., ["Klint", "Velo", "Loop"])
  selected: string[]; // Currently selected options
  onChange: (selected: string[]) => void; // Callback when selection changes
}

/**
 * FilterDropDown Component:
 * Reusable dropdown with multi-select checkboxes.
 * 
 * Features:
 * - Opens/closes on button click
 * - Multi-select with checkboxes
 * - Custom SVG icons support
 * - Keyboard accessible
 * - Smooth animations
 * - Scrollable dropdown for many options
 */
export const FilterDropDown: React.FC<FilterDropDownProps> = ({
  title,
  _icon,
  options,
  selected,
  onChange,
}) => {
  const [open, setOpen] = useState(false); // Controls dropdown open/closed state

  /**
   * Handle Option Selection:
   * Toggles option selection - if already selected, removes it; otherwise adds it.
   * This implements multi-select functionality.
   */
  const handleSelect = (option: string) => {
    if (selected.includes(option)) {
      // Deselect: Remove from selected array
      onChange(selected.filter((item) => item !== option));
    } else {
      // Select: Add to selected array
      onChange([...selected, option]);
    }
  };

  return (
    <div className="relative w-full sm:w-[255px]">
      {/* Dropdown Toggle Button */}
      <button
        className="flex flex-col items-start w-full px-4 py-2 sm:px-5 sm:py-3 bg-[#ffffff] border-0 rounded-[12px] shadow-none hover:bg-[#D2F3F7] focus:outline-none min-h-[56px] sm:min-h-[72px]"
        onClick={() => setOpen((prev) => !prev)} // Toggle open/closed state
        type="button"
      >
        <span className="flex items-center gap-2 mb-1">
          {/* Custom icon for each filter, passed from parent */}
          {_icon}
          <span className="font-bold text-[18px] text-[#222] capitalize leading-[22px]">{title}</span>
        </span>
        <span className="ml-8 sm:ml-8 text-[#A3A3A3] text-[15px] sm:text-[16px] leading-[19px] font-normal flex items-center gap-2">
          Choose
          {/* Animated chevron icon - rotates 180° when dropdown is open */}
          <svg
            className={`w-5 h-5 ml-4 sm:ml-10 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="#A3A3A3"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Dropdown menu: Only rendered when open */}
      {open && (
        <div className="absolute left-0 z-[100] w-full mt-2 bg-white border-0 rounded-[16px] shadow-[0_8px_40px_0_rgba(0,0,0,0.18)] max-h-[255px] overflow-y-auto py-2 min-w-[180px] sm:min-w-[216px]">
          {/* Map through all available options and render as checkboxes */}
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-5 py-3 cursor-pointer hover:bg-[#F8F8F8] border-b border-[#EFEFEF] last:border-b-0"
              style={{ minHeight: 44 }}
            >
              {/* Custom Checkbox: Hidden native checkbox, custom styled overlay */}
              <span className="relative flex items-center justify-center" style={{ width: 24, height: 24 }}>
                <input
                  type="checkbox"
                  checked={selected.includes(option)} // Controlled component - reflects selected state
                  onChange={() => handleSelect(option)}
                  className="appearance-none w-[24px] h-[24px] rounded-[5px] border border-[#222] bg-white checked:bg-[#8EF7FB] checked:border-[#222] focus:ring-0 focus:outline-none"
                  style={{ boxShadow: "none" }}
                />
                {/* Custom checkmark SVG: Only shown when option is selected */}
                {selected.includes(option) && (
                  <svg
                    className="absolute left-0 top-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#8EF7FB" stroke="#222"/>
                    <path d="M6.5 12.5L11 17L18 9.5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>

              {/* Option label */}
              <span className="ml-4 text-[#222] text-[18px] leading-[22px] font-normal">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
