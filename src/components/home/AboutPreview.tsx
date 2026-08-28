"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const aboutPoints = [
  {
    icon: Leaf,
    title: "Our Story",
    description:
      "Founded with a passion for authentic Indian food, Mezin Food Products has been delivering premium quality food essentials to homes across India. Our journey started with one simple belief — real food deserves real quality.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Promise",
    description:
      "Every product is carefully sourced from trusted farms, processed in hygienic conditions, and packed to preserve freshness. We follow strict FSSAI guidelines to ensure you get nothing but the best.",
  },
  {
    icon: Heart,
    title: "Trusted by Families",
    description:
      "From spices that transform everyday meals to pickles that bring back childhood memories — our products are loved and trusted by hundreds of families who believe in pure, unadulterated food.",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white relative" aria-label="About us preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="About Us"
            title="Crafted with Love & Tradition"
            subtitle="We believe great food starts with great ingredients. That's why we go the extra mile to bring authentic flavors to your table."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {aboutPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={staggerItem}
              className="group relative bg-beige-light rounded-2xl p-8 hover:bg-white hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 border border-transparent hover:border-primary-50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary-50 group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-5 transition-all duration-500">
                <point.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="font-heading text-xl font-bold text-dark mb-3">
                {point.title}
              </h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
