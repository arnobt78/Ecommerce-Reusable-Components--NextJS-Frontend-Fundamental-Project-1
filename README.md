# E-Commerce Reusable Components – Next.js, Tailwind CSS Frontend Fundamental Tutorial 1

A comprehensive, production-ready collection of reusable e-commerce UI components built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates modern frontend development practices, component architecture, and pixel-perfect design implementation.

**Live Demo:** [https://freelance-qllp.vercel.app/](https://freelance-qllp.vercel.app/)

![Screenshot 2025-07-07 at 01 13 39](https://github.com/user-attachments/assets/202a9e1b-3fde-4b28-9006-caffe4b204e8)
![Screenshot 2025-07-07 at 01 14 50](https://github.com/user-attachments/assets/af966c07-ad13-4b3c-9a98-aa632dc79bc2)

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Running the Project](#️-running-the-project)
- [Environment Variables](#-environment-variables)
- [Routes & API Endpoints](#-routes--api-endpoints)
- [Component Walkthrough](#-component-walkthrough)
- [Reusing Components](#-reusing-components)
- [Code Examples](#-code-examples)
- [Key Functionalities](#-key-functionalities)
- [Keywords](#-keywords)
- [Conclusion](#-conclusion)

---

## 🎯 Project Overview

This project is a complete e-commerce UI component library designed for learning and production use. It showcases:

- **Modular Component Architecture**: Each component is self-contained and reusable
- **TypeScript Type Safety**: Full type coverage for better development experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance Optimizations**: Code splitting, lazy loading, and optimized images
- **SEO Optimization**: Comprehensive metadata, Open Graph, and Twitter Card tags

The project uses static product data for demonstration purposes, but the architecture supports easy integration with backend APIs.

---

## ✨ Features

### Core Features

- **Dynamic Category Filtering**: Multi-select filters for brands, flavors, and strength with real-time product updates
- **Product Listing**: Responsive grid layout with pagination (6 products per page)
- **Product Detail Pages**: Comprehensive product information with quantity selection
- **Smart Pagination**: Intelligent page number display with ellipsis for large page counts
- **Stock Status Indicators**: Visual indicators for in-stock, low-stock, last-3, and out-of-stock states
- **Quantity Selection**: Multiple ways to select quantity (dropdown and visual selector)
- **Price Calculation**: Dynamic price calculation based on quantity with currency support
- **Related Products**: Product reel showing related items
- **Collapsible Sections**: Expandable product descriptions and usage instructions

### Design Features

- **Pixel-Perfect Figma Design**: All components match the original Figma design exactly
- **Custom SVG Icons**: Scalable vector graphics for filters and UI elements
- **Smooth Animations**: Transitions and hover effects for better UX
- **Gradient Backgrounds**: Custom gradients matching the design system
- **Responsive Breakpoints**: Optimized for mobile, tablet, and desktop

### Technical Features

- **Next.js App Router**: Modern routing with server and client components
- **React Server Components**: Optimized rendering strategy
- **Custom Hooks**: Reusable logic with `useProductPagination`
- **TypeScript Interfaces**: Strong typing throughout the codebase
- **ESLint Configuration**: Code quality and consistency

---

## 🛠 Technology Stack

### Core Technologies

- **Next.js 15.3.8**: React framework with App Router
- **React 19.0.0**: UI library
- **TypeScript 5**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework

### Development Tools

- **ESLint**: Code linting and quality checks
- **Turbopack**: Fast bundler for development
- **PostCSS**: CSS processing

### Design Tools

- **Figma**: Design reference (see `desktop_design.fig`)
- **SVG**: Custom icons and graphics

---

## 📁 Project Structure

```bash
freelance-qllp/
├── public/                          # Static assets
│   ├── favicon.ico                 # Site favicon
│   └── product-image.png          # Product placeholder image
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout with metadata
│   │   ├── page.tsx               # Home page (product listing)
│   │   ├── product-detail/
│   │   │   └── page.tsx           # Product detail page
│   │   ├── globals.css            # Global styles
│   │   └── favicon.ico            # App favicon
│   ├── components/                 # Reusable components
│   │   ├── CategoryFilter/
│   │   │   ├── CategoryFilterMenuBar.tsx  # Main filter bar
│   │   │   └── FilterDropDown.tsx         # Individual dropdown
│   │   ├── Pagination/
│   │   │   └── Pagination.tsx              # Pagination controls
│   │   ├── ProductCard/
│   │   │   ├── ListProductCard.tsx         # Product grid container
│   │   │   ├── SingleProductCard.tsx       # Individual product card
│   │   │   └── useProductPagination.ts     # Pagination hook
│   │   └── ProductDetail/
│   │       ├── ProductDetailLayout.tsx           # Main detail layout
│   │       ├── ProductCardDescriptionSection.tsx # Product specs
│   │       ├── ProductPurchaseSection.tsx        # Purchase interface
│   │       ├── ProductCardReel.tsx               # Related products
│   │       ├── ProductQuantityDropdownSelect.tsx # Quantity dropdown
│   │       └── ProductQuantityImageSection.tsx   # Visual quantity selector
│   └── data/
│       └── products.ts            # Centralized product data
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration (if exists)
├── postcss.config.mjs              # PostCSS configuration
├── eslint.config.mjs               # ESLint configuration
└── package.json                    # Dependencies and scripts
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 9.0 or higher (comes with Node.js)
- **Git**: For cloning the repository

### Step 1: Clone the Repository

```bash
git clone https://github.com/arnobt78/freelancing-reusable-ui-components--NextJS.git
cd freelancing-reusable-ui-components--NextJS
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required dependencies including:

- Next.js and React
- TypeScript and type definitions
- Tailwind CSS and PostCSS
- ESLint and configuration

### Step 3: Verify Installation

Check that all dependencies are installed correctly:

```bash
npm list --depth=0
```

---

## ▶️ Running the Project

### Development Mode

Start the development server with Turbopack (faster builds):

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

**Features in Development Mode:**

- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- Detailed error messages
- Source maps for debugging

### Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The production build includes:

- Code minification
- Tree shaking
- Image optimization
- Static asset optimization

### Linting

Check code quality:

```bash
npm run lint
```

This runs ESLint to identify code issues and enforce coding standards.

---

## 🔐 Environment Variables

**Important Note**: This project currently does not require any environment variables as it uses static product data. However, if you plan to integrate with a backend API, you can add environment variables.

### Optional Environment Variables (for future API integration)

Create a `.env.local` file in the root directory:

```env
# API Configuration (Example - not currently used)
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_API_KEY=your_api_key_here

# Analytics (Example - not currently used)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags (Example - not currently used)
NEXT_PUBLIC_ENABLE_REVIEWS=true
```

### Environment Variable Best Practices

1. **Never commit `.env.local`**: Add it to `.gitignore`
2. **Use `NEXT_PUBLIC_` prefix**: For variables that need to be accessible in the browser
3. **Restart dev server**: After adding new environment variables
4. **Type safety**: Create TypeScript types for environment variables

### Example: Adding API Integration

If you want to fetch products from an API:

1. Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

1. Update `src/data/products.ts` to fetch from API:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function getProducts(): Promise<ProductData[]> {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
}
```

---

## 🛣 Routes & API Endpoints

### Application Routes

This project uses Next.js App Router with the following routes:

#### Home Page (`/`)

- **File**: `src/app/page.tsx`
- **Component**: `ListProductCard`
- **Features**: Product listing, filters, pagination
- **Query Parameters**: None

#### Product Detail Page (`/product-detail`)

- **File**: `src/app/product-detail/page.tsx`
- **Component**: `ProductDetailLayout`
- **Features**: Product details, purchase section, related products
- **Query Parameters**:

  - `idx` (number): Product index in the products array
  - Example: `/product-detail?idx=0`

### Route Examples

```typescript
// Navigate to home page
router.push("/");

// Navigate to product detail
router.push("/product-detail?idx=2");

// Read query parameters
const searchParams = useSearchParams();
const productIndex = Number(searchParams.get("idx")) || 0;
```

### API Endpoints (Future Integration)

Currently, the project uses static data. For API integration, you would typically have:

```text
GET /api/products          # Get all products
GET /api/products/:id      # Get single product
GET /api/products/filter   # Filter products
POST /api/cart             # Add to cart
GET /api/cart              # Get cart items
```

---

## 🧩 Component Walkthrough

### 1. CategoryFilterMenuBar

**Location**: `src/components/CategoryFilter/CategoryFilterMenuBar.tsx`

**Purpose**: Main filter bar containing multiple filter dropdowns (Brand, Flavor, Strength)

**Key Features**:

- Dynamically generates filter options from product data
- Manages filter state for all categories
- Communicates filter changes to parent component
- Custom SVG icons for each filter type

**Usage**:

```typescript
<CategoryFilterMenuBar
  onFilterChange={(filters) => {
    console.log("Selected filters:", filters);
    // filters: { brands: string[], flavors: string[], strength: string[] }
  }}
/>
```

---

### 2. FilterDropDown

**Location**: `src/components/CategoryFilter/FilterDropDown.tsx`

**Purpose**: Reusable multi-select dropdown with checkboxes

**Key Features**:

- Multi-select functionality
- Custom checkbox styling
- Keyboard accessible
- Click outside to close
- Smooth animations

**Usage**:

```typescript
<FilterDropDown
  title="brands"
  _icon={<BrandIcon />}
  options={["Klint", "Velo", "Loop"]}
  selected={selectedBrands}
  onChange={(selected) => setSelectedBrands(selected)}
/>
```

---

### 3. ListProductCard

**Location**: `src/components/ProductCard/ListProductCard.tsx`

**Purpose**: Main container for product listing with filtering and pagination

**Key Features**:

- Integrates filter bar and product grid
- Handles filter logic (AND operation across categories)
- Manages pagination state
- Responsive grid layout
- Empty state handling

**Usage**:

```typescript
<ListProductCard />
```

---

### 4. SingleProductCard

**Location**: `src/components/ProductCard/SingleProductCard.tsx`

**Purpose**: Individual product card component

**Key Features**:

- Product image display
- Sale badges and shipping labels
- Price display (with sale price support)
- Stock status indicators
- Add to basket button
- Hover effects

**Usage**:

```typescript
<SingleProductCard
  productImage="/product.png"
  productName="Klint Artic Mint"
  salePrice="€ 3,60"
  originalPrice="€ 4,99"
  saleLabel="Sale 30%"
  shippingLabel="Free shipping"
  stockStatus="in_stock"
  onAddToBasket={() => console.log("Added to basket")}
/>
```

---

### 5. Pagination

**Location**: `src/components/Pagination/Pagination.tsx`

**Purpose**: Smart pagination controls with ellipsis handling

**Key Features**:

- Intelligent page number display
- Ellipsis for large page counts
- Previous/Next buttons
- Disabled states
- Keyboard navigation

**Usage**:

```typescript
<Pagination
  currentPage={2}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
/>
```

---

### 6. ProductDetailLayout

**Location**: `src/components/ProductDetail/ProductDetailLayout.tsx`

**Purpose**: Main layout for product detail page

**Key Features**:

- Reads product from URL query parameter
- Responsive layout (stacks on mobile, side-by-side on desktop)
- Sticky purchase section on desktop
- Related products reel
- Quantity state management

**Usage**:

```typescript
// Automatically used in /product-detail page
// Reads ?idx=0 from URL to get product
```

---

### 7. ProductPurchaseSection

**Location**: `src/components/ProductDetail/ProductPurchaseSection.tsx`

**Purpose**: Purchase interface with quantity selection and pricing

**Key Features**:

- Stock status display with color indicators
- Quantity selection (dropdown + visual selector)
- Dynamic price calculation
- Buy Now and Add to Cart buttons
- Shipping options display
- Guarantee information

**Usage**:

```typescript
<ProductPurchaseSection
  productName="Klint Artic Mint"
  stockStatus="in_stock"
  salePrice="€ 3,60"
  originalPrice="€ 4,99"
  quantity={quantity}
  onQuantityChange={setQuantity}
  onBuyNow={() => handleBuyNow()}
  onAddToCart={() => handleAddToCart()}
/>
```

---

### 8. useProductPagination Hook

**Location**: `src/components/ProductCard/useProductPagination.ts`

**Purpose**: Custom hook for pagination logic

**Key Features**:

- Generic type support (works with any array)
- Calculates total pages
- Returns paginated slice
- Page state management

**Usage**:

```typescript
const { page, setPage, totalPages, paginated } = useProductPagination(
  products,
  6 // items per page
);
```

---

## 🔄 Reusing Components

### Using Components in Your Project

#### Step 1: Copy Component Files

Copy the desired component folder from `src/components/` to your project:

```bash
# Example: Copy Pagination component
cp -r src/components/Pagination /your-project/src/components/
```

#### Step 2: Copy Dependencies

Ensure you copy all dependencies:

- **Pagination**: No dependencies
- **CategoryFilter**: Requires `FilterDropDown`
- **ProductCard**: Requires `SingleProductCard` and `useProductPagination`
- **ProductDetail**: Requires multiple sub-components

#### Step 3: Install Required Dependencies

```bash
npm install next react react-dom typescript tailwindcss
```

#### Step 4: Update Imports

Update import paths to match your project structure:

```typescript
// Before (in this project)
import { Pagination } from "../Pagination/Pagination";

// After (in your project)
import { Pagination } from "@/components/Pagination/Pagination";
```

#### Step 5: Provide Required Props

Each component has TypeScript interfaces that document required props:

```typescript
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
```

### Complete Example: Adding Pagination

```typescript
// 1. Import the component
import { Pagination } from "@/components/Pagination/Pagination";

// 2. Use in your component
export default function MyProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      {/* Your product list */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
```

---

## 💻 Code Examples

### Example 1: Basic Product Listing

```typescript
import { ListProductCard } from "@/components/ProductCard/ListProductCard";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ListProductCard />
    </div>
  );
}
```

---

### Example 2: Custom Filter Implementation

```typescript
import { CategoryFilterMenuBar } from "@/components/CategoryFilter/CategoryFilterMenuBar";
import { useState } from "react";

export default function FilteredProducts() {
  const [filters, setFilters] = useState({
    brands: [],
    flavors: [],
    strength: [],
  });

  const handleFilterChange = (newFilters: {
    brands: string[];
    flavors: string[];
    strength: string[];
  }) => {
    setFilters(newFilters);
    // Apply filters to your product list
    console.log("Filters updated:", newFilters);
  };

  return (
    <div>
      <CategoryFilterMenuBar onFilterChange={handleFilterChange} />
      {/* Your filtered product list */}
    </div>
  );
}
```

---

### Example 3: Custom Product Card Usage

```typescript
import { SingleProductCard } from "@/components/ProductCard/SingleProductCard";

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      productImage: "/product1.png",
      productName: "Featured Product",
      originalPrice: "€ 9,99",
      shippingLabel: "Free shipping",
      stockStatus: "in_stock" as const,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {featuredProducts.map((product, index) => (
        <SingleProductCard
          key={index}
          {...product}
          onAddToBasket={() => {
            console.log("Added:", product.productName);
          }}
        />
      ))}
    </div>
  );
}
```

---

### Example 4: Using the Pagination Hook

```typescript
import { useProductPagination } from "@/components/ProductCard/useProductPagination";

export default function PaginatedList() {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const { page, setPage, totalPages, paginated } = useProductPagination(
    items,
    10 // 10 items per page
  );

  return (
    <div>
      <ul>
        {paginated.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
```

---

## 🎯 Key Functionalities

### 1. Filtering System

**How It Works**:

- Each filter category (Brand, Flavor, Strength) maintains its own selected values
- Filters use AND logic: products must match ALL selected categories
- Empty filter arrays mean "show all" for that category
- Filter changes trigger product list updates and reset pagination to page 1

**Implementation**:

```typescript
const filteredProducts = allProducts.filter(
  (product) =>
    (filters.brands.length === 0 || filters.brands.includes(product.brand)) &&
    (filters.flavors.length === 0 ||
      filters.flavors.includes(product.flavor)) &&
    (filters.strength.length === 0 ||
      filters.strength.includes(product.strength))
);
```

---

### 2. Pagination Logic

**How It Works**:

- Products are divided into pages (6 per page by default)
- Current page determines which slice of products to display
- Total pages calculated: `Math.ceil(products.length / perPage)`
- Page numbers intelligently displayed with ellipsis for large counts

**Smart Page Display**:

- Shows first 2 and last 2 pages always
- Shows ellipsis when gaps exist
- Displays current page ± 1 when in middle range

---

### 3. Price Calculation

**How It Works**:

- Extracts numeric value from price string (handles currency symbols, commas)
- Multiplies by selected quantity
- Formats result with 2 decimal places
- Preserves original currency symbol

**Example**:

```typescript
// Input: "€ 4,99" × 3
// Process: Extract 4.99, multiply by 3 = 14.97
// Output: "14.97 €"
```

---

### 4. Stock Status System

**How It Works**:

- Four states: `in_stock`, `low_stock`, `last_3`, `no_stock`
- Each state has associated color and label
- Visual indicator (colored dot) with glow effect
- Affects UI behavior (e.g., disable purchase when out of stock)

---

### 5. Responsive Design

**Breakpoints**:

- **Mobile**: < 640px (2 columns, stacked layout)
- **Tablet**: 640px - 1024px (2-3 columns)
- **Desktop**: > 1024px (3 columns, side-by-side layouts)

**Implementation**:

- Tailwind CSS responsive classes: `sm:`, `md:`, `lg:`
- Conditional rendering based on screen size
- Touch-friendly button sizes on mobile

---

## 🔑 Keywords

**Technologies**: Next.js, React, TypeScript, Tailwind CSS, App Router, Server Components

**Concepts**: Component Architecture, Reusable Components, Type Safety, Responsive Design, Accessibility

**Features**: E-commerce, Product Filtering, Pagination, Product Cards, Category Filters, Dynamic Pricing

**Development**: Frontend Development, UI Components, Design Systems, Figma to Code, Pixel-Perfect Design

**Learning**: Tutorial, Educational, Teaching Resource, Code Examples, Best Practices

---

## 📚 Conclusion

This project serves as a comprehensive learning resource for modern frontend development with Next.js. It demonstrates:

- **Component Reusability**: How to build modular, reusable components
- **Type Safety**: TypeScript best practices for maintainable code
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: React hooks and state patterns
- **Performance**: Optimizations for fast, efficient applications
- **Accessibility**: Building inclusive user interfaces
- **SEO**: Metadata and optimization strategies

Whether you're learning Next.js, building your own e-commerce site, or looking for production-ready components, this project provides a solid foundation.

The codebase is well-documented with comments explaining functionality, making it an excellent resource for understanding modern React and Next.js patterns.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊


