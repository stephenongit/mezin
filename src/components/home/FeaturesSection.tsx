"use client";

import { motion } from "framer-motion";
import { Award, Leaf, ShieldCheck, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Handpicked ingredients sourced from trusted farms ensuring superior taste and purity.",
    color: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Leaf,
    title: "Fresh Products",
    description: "Farm-to-pack freshness with no artificial preservatives. Just pure, natural goodness.",
    color: "from-green-500/10 to-green-600/5",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Hygienically Packed",
    description: "State-of-the-art packaging that locks in freshness and meets FSSAI safety standards.",
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "Fast WhatsApp Support",
    description: "Get instant replies for orders and queries. Just a message away, always.",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-beige relative overflow-hidden" aria-label="Our features">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 organic-blob" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 organic-blob-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="Why Choose Us"
            title="What Makes Us Different"
            subtitle="We combine tradition with modern standards to bring you food products you can trust."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group relative bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                <h3 className="font-heading text-lg font-bold text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-medium-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
