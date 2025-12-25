"use client";

// import Image from "next/image";
import React from "react";

/**
 * Stock Status Type:
 * Defines the possible stock states for a product.
 * Used throughout the app to display appropriate stock indicators.
 */
export type StockStatus = 'in_stock' | 'low_stock' | 'last_3' | 'no_stock';

interface SingleProductCardProps {
  productImage: string;
  productName: string;
  salePrice?: string;
  originalPrice: string;
  saleLabel?: string;
  shippingLabel: string;
  stockStatus: StockStatus;
  onAddToBasket?: () => void;
}

/**
 * SingleProductCard Component:
 * Reusable product card component displaying product information in a card format.
 * 
 * Features:
 * - Responsive sizing (smaller on mobile, larger on desktop)
 * - Gradient background matching Figma design
 * - Sale badges and shipping labels
 * - Hover effects for interactivity
 * - Optional "Add to Basket" functionality
 * - Price display with sale price support
 */
export const SingleProductCard: React.FC<SingleProductCardProps> = ({
  productImage,
  productName,
  salePrice,
  originalPrice,
  saleLabel,
  shippingLabel,
  stockStatus,
  onAddToBasket,
}) => {
  return (
    <div
      className="relative w-[160px] h-[240px] sm:w-full sm:max-w-[248px] sm:h-[329px] rounded-[16px] mx-auto overflow-hidden shadow-lg flex-shrink hover:scale-[1.01] transition-transform duration-300 ease-in-out"
      style={{
        background: "linear-gradient(180deg, #CEF6F8 0%, #F0F1F1 100%)", // Figma-accurate gradient
        minWidth: 0,
      }}
    >
      {/* Top badges: Sale label (conditional) and shipping label */}
      <div className="absolute flex flex-row w-full justify-between top-[8px] left-0 px-2 z-0">
        {/* Sale badge (conditionally render) - Only shows if product is on sale */}
        {saleLabel ? (
          <div className="bg-white rounded-[6px] w-[54px] h-[18px] flex items-center justify-center">
            <span className="italic font-semibold text-[10px] leading-[12px] text-[#C02929]">{saleLabel}</span>
          </div>
        ) : <div className="w-[54px] h-[18px]" />} {/* Spacer to maintain layout when no sale */}
        {/* Free shipping badge - Always visible */}
        <div className="bg-white rounded-[6px] w-[74px] h-[18px] flex items-center justify-center">
          <span className="italic font-semibold text-[10px] leading-[12px] text-black">{shippingLabel}</span>
        </div>
      </div>

      {/* Product image */}
      <div className="absolute left-1/2 top-[24px] sm:top-[38px] -translate-x-1/2 w-[80px] h-[80px] w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
          src={productImage}
          alt={productName}
          width={120}
          height={120}
          className="object-contain rounded-[12px] w-full h-full"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Product name, prices, and Add to Basket (bottom area) */}
      <div className="absolute left-2 right-2 bottom-3 flex flex-row items-end justify-between">
        {/* Product Info Section: Name and pricing */}
        <div className="flex flex-col gap-1">
          <span className="font-normal text-[12px] leading-[14px] text-black truncate">{productName}</span>
          <div className="flex items-center gap-2">
            {/* Conditional price display: Show sale price + strikethrough original, or just original */}
            {salePrice ? (
              <>
                <span className="font-normal text-[12px] leading-[14px] text-[#C02929]">{salePrice}</span>
                <span className="font-normal text-[11px] leading-[13px] text-black line-through">{originalPrice}</span>
              </>
            ) : (
              <span className="font-normal text-[12px] leading-[14px] text-black">{originalPrice}</span>
            )}
          </div>
        </div>

        {/* Decorative ellipses and Add to Basket button (right) */}
        {/* The decorative circles create a layered visual effect matching the Figma design */}
        <div className="relative flex flex-row items-end gap-1 min-w-[40px] justify-end">
          <div className="w-[36px] h-[36px] rounded-full bg-[#CCEBE5] z-0 absolute right-0 bottom-0" />
          <div className="w-[28px] h-[28px] rounded-full bg-[#DDFFF8] z-0 absolute right-1 bottom-1" />
          {/* Add to Basket Button: Circular button with basket icon, includes hover and active states */}
          <button
            className="w-[28px] h-[28px] flex items-center justify-center z-10 focus:outline-none absolute right-1 bottom-1 cursor-pointer rounded-full hover:bg-[#fff] active:bg-[#B2E0DF] scale-105 transition-transform duration-300 ease-in-out"
            onClick={onAddToBasket}
            aria-label="Add to Basket" // Accessibility: Screen readers will announce this button
            type="button"
          >
            {/* Simple basket icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14" fill="none">
              <rect width="15" height="14" fill="url(#pattern0_7817_2152)"/>
              <defs>
                <pattern id="pattern0_7817_2152" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_7817_2152" transform="matrix(0.0103704 0 0 0.0111111 0.0333333 0)"/>
                </pattern>
                <image id="image0_7817_2152" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTklEQVR4nO2dzasOURzHP9drUkKIq6ysbGRlIy/5D5SFssHKy4biYWXpykUKC2VjQXaSjeR6yU5KkWzFJa/lKroLjs5tpq7rOXOfZ+bMOWfmfj/13TzdM3Pm07nz/ObMzHmgXWwArgKfgG/ARWBB7E61ibXAXcB0yeXYnWsLR4BfDsk2P4CB2J1sMnOAKwWC84zF7miTGQCu9yDZ5kLszjaZkz0I/gkMA/Nid7apbAL+THNOPgEsjd3RJjMXeFEg+SmwJnYn28DeAsmPgYWxO9gWnjkkvwWWxe5cm676jCM7YneuTRx1SH6lCxK/3HaIPuZ5PzOe1w7RG2e8Gc98cYhWveyZ3w7Rs3zvaKZjHBESnR5ne5yJKxM7sSQmTXteq0HyTZ3D/8dOZ97zKPkhML/LfgSwCHjuQfJLYImMFjMIvKkg+Z2mSntnXfa4QL+SvwPr+9iPADZPc3d7asaB7TJXjp0FV4STY29t7S65D5FxoAfRh/M/FtUYLpB8puK2xSTsxNGNLpLtZ5pUquGC5jzwNcs5PbMhhBBCCNFvOXUaeF/DhLxpWUaBobLl5lACB2AaFuusbzSS6Vv0hzKiY48O09BINBJN7FGoEU18cTp1EF+qztE0SPRoAqPDNCz2UYe+0QULfYs+VUb0vEy2Rjb1XoJP5aOHf63x7J2TwSyd7LOU2xbFrgvinREPHet02W4n8bZFeVCD54nVXKp2bFWX7a5MvG1RrJMoD7JMFxcpty2KdeKdrRLNVNFb6hBt37XWiOYfB8upCfstq1MHEw5sFVYb9ltWoqmv4si5JNHUWnHkHJRoctH76xRdtfJwkXLboBWHr8rDRcptg1ccPioPFym3DV5x5NgXJWe66BECUKXycJFy2+AVh4/Kw0XKbYNXHDnbJBr7DmTtrJBogq2xV7byGOyyrdWJt41ScVStPDpdtnU88bZRKo6qlcd4dtBl7/vFaBul4sg5VLKTpgUJUnH4qDxMwxOk4vBReZiGJ/iqvp8TOGgTOEErjpw7CRy4CZxbMUTvSuDATeDYhVqCY5dveJTAwZtAuR9zyQq70u2TBCSYmmMH1GIS+IWffdmPGYwlIMV4ylgmeA8wO7ZkIYQQQgghhBBCCBLiL+jG5pQWk0kFAAAAAElFTkSuQmCC"/>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
