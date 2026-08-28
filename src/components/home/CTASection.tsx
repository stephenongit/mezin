"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-primary-800 via-primary to-primary-dark rounded-3xl p-10 md:p-16 overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 organic-blob float-animation" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 organic-blob-2 float-reverse-animation" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary-300/10 rounded-full pulse-glow" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6">
              Get Started Today
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Ready to Taste the{" "}
              <span className="text-accent">Difference</span>?
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10">
              Browse our complete range of premium food products and place your
              order directly through WhatsApp. Fast, easy, and personal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="btn-ripple inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-8 py-4 rounded-2xl text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Browse Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
