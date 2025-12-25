
import React from "react";
import type { StockStatus } from "../ProductCard/SingleProductCard";
import { ProductQuantityDropdownSelect } from "./ProductQuantityDropdownSelect";
import { ProductQuantityImageSection } from "./ProductQuantityImageSection";

/**
 * ProductPurchaseSection Props:
 * Contains all data and callbacks needed for the purchase interface.
 */
interface ProductPurchaseSectionProps {
  productName: string;
  stockStatus: StockStatus;
  salePrice: string;
  originalPrice: string;
  quantity: number;
  onQuantityChange: (qty: number) => void;
  onBuyNow: () => void;
  onAddToCart: () => void;
}

/**
 * ProductPurchaseSection Component:
 * Main purchase interface for product detail page.
 * 
 * Features:
 * - Product name and stock status display
 * - Quantity selection (dropdown + visual quantity selector)
 * - Dynamic price calculation based on quantity
 * - Buy Now and Add to Cart buttons
 * - Shipping options display
 * - Guarantee information
 */
export const ProductPurchaseSection: React.FC<ProductPurchaseSectionProps> = ({
  productName,
  stockStatus,
  salePrice,
  originalPrice,
  quantity,
  onQuantityChange,
  onBuyNow,
  onAddToCart,
}) => {
  return (
    <div className="w-full max-w-[687px] flex flex-col gap-6 px-2 sm:px-0">
      {/* Product Name & Stock Status: Centered display with visual stock indicator */}
      <div className="flex flex-col items-center justify-center w-full text-center">
        <span className="font-medium text-[30px] leading-[40px] text-black -tracking-[0.01em] break-words">{productName}</span>
        <div className="flex flex-row items-center gap-2 flex-wrap justify-center mt-2">
          {/* Dynamic Stock Status Indicator: Color and label change based on stock status */}
          {(() => {
            let color = '#15FF00'; // Green for in stock
            let shadow = '0 0 8px 2px #15FF00';
            let label = 'In stock';
            if (stockStatus === 'low_stock') {
              color = '#FFD600'; // Yellow for low stock
              shadow = '0 0 8px 2px #FFD600';
              label = 'Low stock';
            } else if (stockStatus === 'last_3') {
              color = '#FFD600'; // Yellow for last items
              shadow = '0 0 8px 2px #FFD600';
              label = 'Last 3 cans';
            } else if (stockStatus === 'no_stock') {
              color = '#FF3B30'; // Red for out of stock
              shadow = '0 0 8px 2px #FF3B30';
              label = 'No stock';
            }
            return <>
              {/* Colored dot with glow effect */}
              <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: color, boxShadow: shadow }} />
              <span className="text-[17px] leading-[21px] text-black">{label}</span>
            </>;
          })()}
        </div>
      </div>

      {/* Quantity and Price Section: Quantity selector and calculated total price */}
      <div className="flex flex-row items-center mt-2 flex-wrap justify-between">
        <div className="flex flex-row w-full justify-between items-center">
          {/* Quantity Dropdown: Allows user to select quantity (1-10) */}
          <div className="relative">
            <ProductQuantityDropdownSelect
              value={quantity}
              onChange={onQuantityChange}
              salePrice={salePrice}
              originalPrice={originalPrice}
            />
          </div>
          {/* Price Display: Shows total price (price × quantity) with sale price support */}
          {(salePrice || originalPrice) && (
            <div className="flex flex-row items-center gap-2 ml-4">
              {salePrice ? (
                <>
                  {/* Original Price (strikethrough): Shows original total when on sale */}
                  <span className="font-normal text-[12px] leading-[13px] text-black line-through">
                    {/* Price Calculation: Extracts number, multiplies by quantity, preserves currency symbol */}
                    {(() => {
                      const normalized = originalPrice.replace(/[^\d.,]/g, '').replace(',', '.');
                      const num = parseFloat(normalized);
                      const currency = originalPrice.replace(/[\d.,\s]/g, '');
                      return !isNaN(num) ? (num * quantity).toFixed(2) + (currency ? ' ' + currency : '') : originalPrice;
                    })()}
                  </span>
                  {/* Sale Price: Shows discounted total in red */}
                  <span className="font-normal text-[18px] leading-[14px] text-[#C02929]">
                    {/* Price Calculation: Same logic for sale price */}
                    {(() => {
                      const normalized = salePrice.replace(/[^\d.,]/g, '').replace(',', '.');
                      const num = parseFloat(normalized);
                      const currency = salePrice.replace(/[\d.,\s]/g, '');
                      return !isNaN(num) ? (num * quantity).toFixed(2) + (currency ? ' ' + currency : '') : salePrice;
                    })()}
                  </span>
                </>
              ) : (
                // Regular Price: No sale, just show original price × quantity
                <span className="font-normal text-[18px] leading-[14px] text-black">
                  {(() => {
                    const normalized = originalPrice.replace(/[^\d.,]/g, '').replace(',', '.');
                    const num = parseFloat(normalized);
                    const currency = originalPrice.replace(/[\d.,\s]/g, '');
                    return !isNaN(num) ? (num * quantity).toFixed(2) + (currency ? ' ' + currency : '') : originalPrice;
                  })()}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Quantity Item Images: Visual quantity selector with discount badges */}
      <ProductQuantityImageSection
        selected={quantity}
        onSelect={onQuantityChange}
      />
      
      {/* Action Buttons: Primary (Buy Now) and Secondary (Add to Cart) actions */}
      <div className="flex flex-col gap-2 mt-2 sm:flex-row">
        {/* Buy Now Button: Primary action - solid background */}
        <button
          className="flex-1 bg-[#8EF7FB] rounded-[3.3px] py-3 text-[19px] font-medium text-black hover:bg-[#6ee7f7] transition transform duration-300 cursor-pointer active:bg-[#8EF7FB]"
          onClick={onBuyNow}
        >
          Buy now
        </button>
        {/* Add to Cart Button: Secondary action - outlined style */}
        <button
          className="flex-1 border-2 border-[#8EF7FB] bg-white rounded-[3.3px] py-3 text-[19px] font-medium text-black hover:bg-[#e0f7fa] transition transform duration-300 cursor-pointer active:bg-[#8EF7FB]"
          onClick={onAddToCart}
        >
          Add to cart
        </button>
      </div>

      {/* Guarantee/Shipping/Returns: Trust indicators in a subtle background */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#8EF7FB]/12 px-4 py-4 mt-2 gap-2">
        <span className="text-[15px] text-[#343232]">30 Day Guarantee</span>
        <span className="text-[15px] text-[#343232]">Free Shipping</span>
        <span className="text-[15px] text-[#343232]">Free Returns</span>
      </div>

      {/* Shipping Options: Display different shipping methods with icons and estimated delivery */}
      <div className="flex flex-col gap-4 mt-4 w-full">
        <div className="flex flex-row items-center gap-4">
          {/* Truck Icon */}
          <span className="inline-flex items-center justify-center w-7 h-7">
            <svg width="28" height="28" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1398 27.0508C12.6778 27.0508 13.9246 25.8041 13.9246 24.266C13.9246 22.728 12.6778 21.4812 11.1398 21.4812C9.60179 21.4812 8.35498 22.728 8.35498 24.266C8.35498 25.8041 9.60179 27.0508 11.1398 27.0508Z" stroke="black" strokeWidth="1.67" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25.0636 27.0508C26.6017 27.0508 27.8485 25.8041 27.8485 24.266C27.8485 22.728 26.6017 21.4812 25.0636 21.4812C23.5256 21.4812 22.2788 22.728 22.2788 24.266C22.2788 25.8041 23.5256 27.0508 25.0636 27.0508Z" stroke="black" strokeWidth="1.67" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.9944 24.266H20.8868V9.78494C20.8868 9.32354 20.5128 8.94949 20.0514 8.94949H1.39307" stroke="black" strokeWidth="1.67" strokeLinecap="round"/>
              <path d="M7.86762 24.266H5.01318C4.55178 24.266 4.17773 23.892 4.17773 23.4306V16.6078" stroke="black" strokeWidth="1.67" strokeLinecap="round"/>
              <path d="M2.78467 13.1267H8.35431" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.8867 13.1267H28.6983C29.0284 13.1267 29.3277 13.3212 29.4617 13.6229L31.954 19.2305C32.0015 19.3375 32.026 19.453 32.026 19.5698V23.4306C32.026 23.892 31.652 24.266 31.1906 24.266H28.545" stroke="black" strokeWidth="1.67" strokeLinecap="round"/>
              <path d="M20.8867 24.266H22.2789" stroke="black" strokeWidth="1.67" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-[13px] text-black leading-tight">Free shipping</span>
            <span className="text-[13px] text-[#C9C9C9] leading-tight">2-3 business days</span>
          </div>
        </div>
        <div className="flex flex-row items-center pt-2 gap-4">
          {/* Rocket Icon */}
          <span className="inline-flex items-center justify-center w-7 h-7">
            <svg width="28" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7734 16.8138C19.015 17.8362 19.0222 18.8999 18.7943 19.9254C18.5664 20.9509 18.1094 21.9116 17.4575 22.7353C16.8056 23.5591 15.9757 24.2247 15.0301 24.6822C14.0844 25.1397 13.0475 25.3773 11.997 25.3772V19.8075M18.7734 16.8138C20.9895 15.1995 22.7923 13.0839 24.0346 10.6397C25.2768 8.19558 25.9233 5.49221 25.9211 2.75048C23.1796 2.7485 20.4764 3.39503 18.0325 4.63727C15.5886 5.87951 13.4731 7.68223 11.8589 9.89819M18.7734 16.8138C16.7566 18.2889 14.4457 19.3102 11.997 19.8075M11.997 19.8075C11.8775 19.8319 11.7568 19.8551 11.6361 19.8771C10.5835 19.0424 9.63035 18.0893 8.79562 17.0366C8.81754 16.9157 8.83959 16.795 8.86408 16.6746M11.8589 9.89819C10.8365 9.65637 9.7726 9.64909 8.74696 9.87689C7.72132 10.1047 6.76054 10.5617 5.93662 11.2136C5.1127 11.8655 4.447 12.6954 3.98942 13.6412C3.53184 14.5869 3.29424 15.624 3.29443 16.6746H8.86408M11.8589 9.89819C10.384 11.9147 9.36158 14.2263 8.86408 16.6746M6.26607 19.4478C5.50278 20.0154 4.90931 20.781 4.54995 21.6617C4.19059 22.5424 4.07903 23.5047 4.22735 24.4442C5.16703 24.5924 6.12934 24.4807 7.01006 24.1211C7.89078 23.7616 8.65633 23.1679 9.22379 22.4044M19.8293 10.5828C19.8293 11.0444 19.6459 11.4871 19.3195 11.8135C18.9931 12.1399 18.5504 12.3233 18.0888 12.3233C17.6272 12.3233 17.1845 12.1399 16.8581 11.8135C16.5317 11.4871 16.3483 11.0444 16.3483 10.5828C16.3483 10.1212 16.5317 9.67847 16.8581 9.35206C17.1845 9.02565 17.6272 8.84228 18.0888 8.84228C18.5504 8.84228 18.9931 9.02565 19.3195 9.35206C19.6459 9.67847 19.8293 10.1212 19.8293 10.5828Z" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-[13px] text-black leading-tight">Express shipping</span>
            <span className="text-[13px] text-[#C9C9C9] leading-tight">Tomorrow</span>
          </div>
        </div>
        <div className="flex flex-row items-center pt-2 gap-4">
          {/* Store Icon */}
          <span className="inline-flex items-center justify-center w-7 h-7">
            <svg width="28" height="28" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.36719 11.1401V21.1655C3.36719 22.396 4.36463 23.3934 5.59505 23.3934H21.1901C22.4205 23.3934 23.4179 22.396 23.4179 21.1655V11.1401" stroke="black" strokeWidth="1.67"/>
              <path d="M16.5483 23.3934V16.7098C16.5483 15.4793 15.5509 14.4819 14.3205 14.4819H12.0926C10.8622 14.4819 9.86475 15.4793 9.86475 16.7098V23.3934" stroke="black" strokeWidth="1.67" strokeMiterlimit="16"/>
              <path d="M24.3296 10.4319L22.4426 3.82738C22.3607 3.54045 22.0984 3.34263 21.8 3.34263H17.2915L17.821 9.69622C17.8383 9.90415 17.9513 10.092 18.1305 10.1988C18.5642 10.4573 19.4138 10.9363 20.0763 11.1401C21.2079 11.4882 22.862 11.3627 23.8041 11.2468C24.1959 11.1987 24.4381 10.8114 24.3296 10.4319Z" stroke="black" strokeWidth="1.67"/>
              <path d="M15.6211 11.1401C16.2533 10.9456 17.0558 10.5006 17.5047 10.2357C17.7184 10.1096 17.8361 9.8714 17.8155 9.62412L17.292 3.34263H9.49453L8.97107 9.62412C8.95046 9.8714 9.06815 10.1096 9.28184 10.2357C9.73076 10.5006 10.5333 10.9456 11.1654 11.1401C12.8285 11.6519 13.958 11.6519 15.6211 11.1401Z" stroke="black" strokeWidth="1.67"/>
              <path d="M4.34166 3.82738L2.45466 10.4319C2.34622 10.8114 2.58848 11.1987 2.98025 11.2468C3.92226 11.3627 5.57653 11.4882 6.70802 11.1401C7.37055 10.9363 8.22019 10.4573 8.65381 10.1988C8.83303 10.092 8.94605 9.90415 8.96338 9.69622L9.49284 3.34263H4.9843C4.68589 3.34263 4.42364 3.54045 4.34166 3.82738Z" stroke="black" strokeWidth="1.67"/>
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-[13px] text-black leading-tight">Pickup from warehouse</span>
            <span className="text-[13px] text-[#C9C9C9] leading-tight">Today (Wroclaw)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
