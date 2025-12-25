// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SingleProductCard } from "../ProductCard/SingleProductCard";
import { ProductCardDescriptionSection } from "./ProductCardDescriptionSection";
import { ProductPurchaseSection } from "./ProductPurchaseSection";
import { ProductCardReel } from "./ProductCardReel";

import { useSearchParams } from "next/navigation";
import { products } from "../../data/products";

/**
 * ProductDetailLayout Component:
 * Main layout component for the product detail page.
 * 
 * Features:
 * - Reads product index from URL query parameter (?idx=0)
 * - Displays product image, description, and purchase section
 * - Responsive layout (stacks on mobile, side-by-side on desktop)
 * - Quantity selection with state management
 * - Related products reel at the bottom
 * - Sticky purchase section on desktop for better UX
 * 
 * URL Format: /product-detail?idx=2 (where 2 is the product index)
 */
export const ProductDetailLayout: React.FC = () => {
  const searchParams = useSearchParams(); // Next.js hook to read URL query parameters
  const idx = Number(searchParams.get("idx")) || 0; // Get product index from URL, default to 0
  const product = products[idx] || products[0]; // Get product by index, fallback to first product
  const [quantity, setQuantity] = useState(1); // Quantity state for purchase section

const mockDescription = {
  brand: "Velo",
  flavor: "Mint",
  strength: "Medium",
  nicotinePerPouch: "6 mg",
  description: "",
  howToUse: "",
};

const mockReelProducts = Array(5).fill({
  productImage: "/product-image.png",
  productName: "Klint Artic Mint",
  salePrice: "€ 3,60",
  originalPrice: "€ 4,99",
  saleLabel: "Sale 30%",
  shippingLabel: "Free shipping",
});

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Main Content Container: Responsive layout - stacks on mobile, side-by-side on desktop */}
      <div className="w-full max-w-[1440px] bg-white flex flex-col lg:flex-row gap-4 mx-auto pt-16 px-1 sm:px-32">
        {/* Left Column: Product Card and Description (on desktop), only Product Poster Card on mobile */}
        <div className="flex flex-col gap-8 w-full bg-white lg:w-[687px]">
          {/* Product Poster Card: Large product image display with badges */}
          <div className="relative flex flex-col items-center shadow-lg bg-zinc-200 overflow-visible w-full aspect-square max-w-[640px] mx-auto">
            {/* Top badges */}
            <div className="absolute flex flex-row w-full justify-between top-4 left-0 px-4 z-10">
              {product.saleLabel ? (
                <div className="bg-white rounded-[6px] w-[70px] h-[24px] flex items-center justify-center shadow-sm">
                  <span className="italic font-semibold text-[13px] leading-[16px] text-[#C02929]">{product.saleLabel}</span>
                </div>
              ) : <div className="w-[70px] h-[24px]" />}
              <div className="bg-white rounded-[6px] w-[110px] h-[24px] flex items-center justify-center shadow-sm">
                <span className="italic font-semibold text-[13px] leading-[16px] text-black">{product.shippingLabel}</span>
              </div>
            </div>
            {/* Product image as poster */}
            <div className="relative flex flex-col items-center justify-center w-full h-full z-0 ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.productImage}
                alt={product.productName}
                className="object-contain w-full h-full mx-auto drop-shadow-xl"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
          {/* Description Section: Hidden on mobile (shown below purchase on mobile), visible on desktop */}
          <div className="relative bg-white overflow-visible hidden sm:block">
            <div className="relative z-10 p-6">
              <ProductCardDescriptionSection
                brand={product.brand}
                flavor={product.flavor}
                strength={product.strength}
                nicotinePerPouch={product.nicotinePerPouch}
                description={product.description}
                howToUse={product.howToUse}
              />
            </div>
          </div>
        </div>
        {/* Right Column: Purchase Section - Sticky on desktop for better UX */}
        <div className="flex-1 flex flex-col items-start min-w-full sm:min-w-[350px] max-w-full sm:max-w-[687px] mx-auto px-1 sm:px-0">
          {/* Sticky Purchase Section: Stays visible when scrolling on large screens */}
          <div className="relative w-full bg-white overflow-visible lg:sticky lg:top-0">
            <div className="relative z-10 px-4 sm:px-8">
              <ProductPurchaseSection
                productName={product.productName}
                stockStatus={product.stockStatus}
                salePrice={product.salePrice || ""}
                originalPrice={product.originalPrice || ""}
                quantity={quantity}
                onQuantityChange={setQuantity}
                onBuyNow={() => {}}
                onAddToCart={() => {}}
              />
            </div>
          </div>
          {/* Description Section for mobile only: Shown below purchase section on mobile devices */}
          <div className="relative bg-white overflow-visible block sm:hidden w-full">
            <div className="relative z-10 p-6">
              <ProductCardDescriptionSection
                brand={product.brand}
                flavor={product.flavor}
                strength={product.strength}
                nicotinePerPouch={product.nicotinePerPouch}
                description={product.description}
                howToUse={product.howToUse}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Product Card Reel: Shows related/similar products at the bottom */}
      <div className="w-full max-w-[1440px] mx-auto mt-16">
        <ProductCardReel products={products.slice(0, 6)} />
      </div>
      {/* Reviews Section Placeholder: Reserved for future reviews functionality */}
      <div className="w-full flex justify-center my-12">
        <span className="font-bold text-[32px] leading-[38px] text-black">Reviews</span>
      </div>
    </div>
  );
};
