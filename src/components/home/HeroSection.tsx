"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-dark"
      aria-label="Hero"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating blobs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-accent/10 organic-blob float-animation" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary-300/10 organic-blob-2 float-reverse-animation" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/5 rounded-full pulse-glow" />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-accent/8 organic-blob float-animation" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-primary-200/8 organic-blob-2 float-reverse-animation" style={{ animationDelay: "1s" }} />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-900/40 to-transparent" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beige-light to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="pt-28 pb-12 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-xs font-medium px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Premium Quality Food Products
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Fresh &{" "}
              <span className="text-accent">Natural</span>
              <br />
              Food Products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              MFP Food Product brings you healthy and tasty essentials — from
              traditional powders to wholesome flours, made for your kitchen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/products"
                className="btn-ripple inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-7 py-4 rounded-2xl text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                View Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5B] text-white font-bold px-7 py-4 rounded-2xl text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 flex items-center gap-6 text-white/50 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                100% Natural
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                No Preservatives
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                FSSAI Certified
              </div>
            </motion.div>
          </div>

          {/* Right - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Glowing circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-primary-300/10 to-transparent pulse-glow" />

              {/* Main hero image placeholder */}
              <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mfp-logo.png"
                  alt="MFP Food Product — Healthy and Tasty"
                  className="w-full h-full object-contain rounded-full p-5"
                />
              </div>

              {/* Floating product tags */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-0 glass rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-sm font-semibold text-dark">🌿 100% Natural</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 -left-4 glass rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-sm font-semibold text-dark">⭐ Premium Quality</span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 10, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 glass rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-sm font-semibold text-dark">🛡️ FSSAI Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
