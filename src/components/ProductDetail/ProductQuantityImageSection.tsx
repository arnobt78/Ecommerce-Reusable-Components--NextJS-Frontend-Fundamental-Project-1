import React from "react";

/**
 * ProductQuantityImageOption Interface:
 * Defines the structure for quantity selection options with visual representation.
 */
export interface ProductQuantityImageOption {
  percent: string; // Discount percentage badge (e.g., "-10%")
  label: string; // Label displayed on the can (e.g., "10X")
  value: number; // Actual quantity value
  description?: string; // Optional description text
}

/**
 * ProductQuantityImageSection Props:
 * Visual quantity selector with can images and discount badges.
 */
export interface ProductQuantityImageSectionProps {
  options?: ProductQuantityImageOption[]; // Custom options, or uses defaults
  selected?: number; // Currently selected quantity value
  onSelect?: (value: number) => void; // Callback when quantity is selected
}

/**
 * Default Quantity Options:
 * Pre-configured bulk quantity options with discount percentages.
 * Users can select larger quantities to get better discounts.
 */
const defaultOptions: ProductQuantityImageOption[] = [
  { percent: "-10%", label: "10X", value: 10, description: "10 cans" },
  { percent: "-13%", label: "20X", value: 20, description: "20 cans" },
  { percent: "-16%", label: "35X", value: 35, description: "35 cans" },
  { percent: "-20%", label: "50X", value: 50, description: "50 cans" },
];

/**
 * CanSVG Component:
 * Reusable SVG component for the can image with optional label overlay.
 * The label is transformed/rotated to match the Figma design.
 */
function CanSVG({ label }: { label?: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', display: 'block' }}>
      {/* Top ellipse shape */}
      <path d="M28.482 0.0635986C13.3872 0.0635986 0.633789 5.99733 0.633789 13.0217C0.633789 20.0461 13.3872 25.9798 28.482 25.9798C43.5769 25.9798 56.3302 20.0461 56.3302 13.0217C56.3302 5.99733 43.5769 0.0635986 28.482 0.0635986Z" fill="#8EF7FB"/>
      <path d="M27.9259 4.36008C17.3595 4.36008 8.43213 8.51369 8.43213 13.4307C8.43213 18.3478 17.3595 22.5014 27.9259 22.5014C38.4923 22.5014 47.4197 18.3478 47.4197 13.4307C47.4197 8.51369 38.4923 4.36008 27.9259 4.36008Z"/>
      <path d="M28.482 28.1395C15.6922 28.1395 5.01669 24.2963 0.633789 18.7276V21.6604C0.633789 23.6247 1.59992 25.5241 3.50433 27.3048C8.31241 31.8163 17.8825 34.6186 28.482 34.6186C39.0815 34.6186 48.6515 31.8163 53.4584 27.3058C55.3639 25.5241 56.3302 23.6247 56.3302 21.6604V18.7276C51.9473 24.2963 41.2719 28.1395 28.482 28.1395Z" fill="white"/>
      <path d="M2.77637 29.5185V37.3181C2.77637 44.1751 14.2798 49.7364 28.4824 49.7364C42.6743 49.7364 54.1882 44.1751 54.1882 37.3181V29.5185C48.8215 34.0117 39.1098 36.7782 28.4824 36.7782C17.8562 36.7782 8.14463 34.0117 2.77637 29.5185Z" fill="#8EF7FB"/>
      {/* Top label as HTML, absolutely positioned above the can */}
      {label && (
        <foreignObject x="0" y="-2" width="57" height="30">
          <div style={{
            width: '100%',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            fontSize: '18px',
            fontStyle: 'italic',
            fontWeight: 600,
            color: '#000',
            pointerEvents: 'none',
            userSelect: 'none',
            lineHeight: 1.1,
            letterSpacing: '0.03em',
            top: '4px',
            left: '-2px',
          
            position: 'absolute',
            transform: 'skew(-50deg, 0deg) rotate(20deg)',
            WebkitTransform: 'skew(-50deg, 0deg) rotate(20deg)',
            MozTransform: 'skew(-50deg, 0deg) rotate(20deg)',
            msTransform: 'skew(-50deg, 0deg) rotate(20deg)',
            OTransform: 'skew(-50deg, 0deg) rotate(20deg)',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </div>
        </foreignObject>
      )}
    </svg>
  );
}


/**
 * ProductQuantityImageSection Component:
 * Visual quantity selector with can images, discount badges, and selection states.
 * 
 * Features:
 * - Visual can representations for each quantity option
 * - Discount percentage badges
 * - Selected state with border highlight
 * - Click to select quantity
 * - Responsive spacing
 */
export const ProductQuantityImageSection: React.FC<ProductQuantityImageSectionProps> = ({
  options = defaultOptions,
  selected,
  onSelect,
}) => {
  return (
    <div className="w-full flex flex-row justify-center gap-2 sm:gap-6 mt-2 mb-2">
      {/* Map through quantity options and render as selectable cards */}
      {options.map((opt, idx) => {
        const isSelected = selected === opt.value; // Check if this option is currently selected
        return (
          <button
            type="button"
            key={opt.label}
            className={`relative flex flex-col items-center justify-center bg-[#F0F1F1] rounded-[5.8px] shadow focus:outline-none transition-all duration-300 ${isSelected ? 'border-2 border-black/90' : 'border border-transparent'} group`}
            style={{ width: 86.5, height: 86.5, cursor: onSelect ? 'pointer' : 'default' }}
            aria-pressed={isSelected} // Accessibility: Indicates selected state
            tabIndex={0}
            onClick={() => onSelect?.(opt.value)} // Select this quantity when clicked
          >
            {/* Discount Badge: Shows discount percentage (e.g., "-10%") */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-3 flex flex-row justify-center items-center px-3 py-1 bg-[#EBF5F5] rounded-[6.9px] shadow"
              style={{ minWidth: 43, height: 17 }}
            >
              <span className="text-[10.3px] leading-[13px] font-normal text-black uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>{opt.percent}</span>
            </div>
            {/* Can SVG and Label: Centered can image with rotated label overlay */}
            <div className="relative flex flex-col items-center justify-center w-full grow" style={{height: '60px'}}>
              <div className="flex items-center justify-center w-full h-full">
                <CanSVG label={opt.label} /> {/* Can image with label overlay */}
              </div>
            </div>
            {/* Optionally show description below */}
            {/* {opt.description && (
              <span className=" text-xs text-gray-500 group-hover:text-black transition-colors duration-300">{opt.description}</span>
            )} */}
          </button>
        );
      })}
    </div>
  );
};

export default ProductQuantityImageSection;
