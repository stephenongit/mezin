"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[var(--shadow-navbar)] py-2"
            : "bg-transparent py-4"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="MFP Food Product - Home"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-beige shadow-sm ring-1 ring-primary/10 transform group-hover:scale-105 transition-transform duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mfp-logo.png" alt="MFP Food Product" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-dark leading-tight tracking-tight">
                  MFP
                </span>
                <span className="text-[10px] text-medium-gray font-medium uppercase tracking-widest leading-none">
                  Food Products
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300",
                    pathname === link.href
                      ? "text-primary"
                      : "text-dark-gray hover:text-primary hover:bg-primary-50/50"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:block"><ThemeToggle /></div>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-6 h-6 text-dark" /> : <Menu className="w-6 h-6 text-dark" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-beige ring-1 ring-primary/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/mfp-logo.png" alt="MFP Food Product" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-heading font-bold text-dark">MFP Food Product</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                      onClick={() => setIsMobileOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5 text-dark" />
                    </button>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 py-6 px-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 mb-1",
                          pathname === link.href
                            ? "bg-primary-50 text-primary"
                            : "text-dark-gray hover:bg-gray-50"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile WhatsApp CTA */}
                <div className="p-5 border-t border-border">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ripple flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold shadow-[var(--shadow-button)] transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
