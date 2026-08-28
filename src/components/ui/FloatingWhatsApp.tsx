"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      {/* Ping animation */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping opacity-75" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-dark text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-lg">
        Chat with us!
      </span>
    </motion.a>
  );
}
