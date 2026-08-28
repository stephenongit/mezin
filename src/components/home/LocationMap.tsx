"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";

const mapLink = "https://maps.app.goo.gl/HtVVzfv27TngZUmM7";
const mapEmbedUrl = "https://www.google.com/maps?q=11.0608116,76.9977193&z=16&output=embed";

export default function LocationMap() {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-label="Store location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card-hover)] bg-white"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 bg-beige-light border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-dark">Find Us on the Map</p>
                <p className="text-sm text-medium-gray">Mount Carmel Mission Church area</p>
              </div>
            </div>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <iframe
            title="MFP Food Product location map"
            src={mapEmbedUrl}
            className="block w-full h-[360px] md:h-[440px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
