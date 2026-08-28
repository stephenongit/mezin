"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16"
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mfp-logo.png" alt="MFP Food Product" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold leading-tight block">
                  MFP
                </span>
                <span className="text-[10px] text-white/60 uppercase tracking-widest">
                  Food Products
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Healthy and tasty food products made with trust, freshness, and
              authentic taste for every kitchen.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white/80" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-1 group transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-accent">
              Business Hours
            </h3>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                <div>
                  <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p>Sunday: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-accent">
              Get in Touch
            </h3>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                <p>
                  3rd North, Vinayagapuram,<br />
                  Coimbatore – 641035,<br />
                  Tamil Nadu, India
                </p>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs flex items-center gap-1">
            © {new Date().getFullYear()} MFP Food Product. Made with
            <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in India.
          </p>
          <p className="text-white/30 text-xs">
            Quality food, trusted by families.
          </p>
        </div>
      </div>
    </footer>
  );
}
