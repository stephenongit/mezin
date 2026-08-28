"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { products, categories, type Category } from "@/lib/data";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/animations";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [search, activeCategory]);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary-900 via-primary-800 to-beige-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-48 h-48 bg-accent/10 organic-blob float-animation" />
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-white/5 organic-blob-2 float-reverse-animation" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              Our Catalogue
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              Browse our complete range of premium food products. Click
              &ldquo;Enquire&rdquo; to order directly via WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="py-12 lg:py-16 bg-beige-light min-h-screen" aria-label="Product catalogue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 space-y-5"
          >
            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-gray" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-white rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all duration-300 shadow-sm"
                aria-label="Search products"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-light-gray hover:text-dark transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-light-gray mr-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                    activeCategory === cat
                      ? "bg-primary text-white shadow-[var(--shadow-button)]"
                      : "bg-white text-medium-gray hover:text-dark hover:bg-primary-50 border border-border"
                  )}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <p className="text-sm text-light-gray mb-6">
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-primary-50 flex items-center justify-center mb-5">
                <Search className="w-8 h-8 text-primary/40" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-2">
                No products found
              </h3>
              <p className="text-medium-gray text-sm">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 text-primary font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
