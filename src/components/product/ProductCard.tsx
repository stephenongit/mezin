"use client";

import { motion } from "framer-motion";
import { MessageCircle, Package } from "lucide-react";
import { Product } from "@/lib/data";
import { getWhatsAppUrl, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-beige">
        {/* Product Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 text-[11px] font-bold uppercase tracking-wider bg-accent text-dark px-3 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Product Image */}
        <div className="w-full h-full flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-700 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary/70 mb-1">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="font-heading text-lg font-bold text-dark leading-snug mb-1 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>

        {/* Pack Size */}
        <div className="flex items-center gap-1.5 text-xs text-light-gray mb-2">
          <Package className="w-3 h-3" />
          {product.packSize}
        </div>

        {/* Description */}
        <p className="text-sm text-medium-gray leading-relaxed mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price + CTA Row */}
        <div className="flex items-center justify-between gap-3 mt-auto">
          {product.price && (
            <span className="font-heading text-xl font-bold text-dark">
              {formatPrice(product.price)}
            </span>
          )}

          <a
            href={getWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ripple flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-[var(--shadow-button)] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ml-auto"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Enquire</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
