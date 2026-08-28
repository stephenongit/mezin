"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Leaf,
  Award,
  ShieldCheck,
  Users,
  Heart,
  Truck,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { Metadata } from "next";

const timeline = [
  { year: "2018", title: "The Beginning", description: "Started with a small kitchen and a big dream to deliver authentic food products." },
  { year: "2019", title: "FSSAI Certified", description: "Achieved FSSAI certification ensuring the highest food safety standards." },
  { year: "2020", title: "Product Range Expanded", description: "Launched pickles, ready mixes, and organic oils alongside our spice range." },
  { year: "2021", title: "Digital Presence", description: "Embraced WhatsApp ordering to serve customers with speed and convenience." },
  { year: "2022", title: "Growing Community", description: "Crossed 500+ happy families trusting Mezin for their daily kitchen essentials." },
  { year: "2024", title: "Premium Packaging", description: "Upgraded to modern, airtight packaging for longer freshness and premium appeal." },
];

const whyChooseUs = [
  { icon: Leaf, title: "100% Natural", description: "No artificial colors, flavors, or preservatives in any of our products." },
  { icon: Award, title: "Premium Quality", description: "Only the finest ingredients sourced directly from trusted farms." },
  { icon: ShieldCheck, title: "FSSAI Certified", description: "Compliant with all food safety standards and regulations." },
  { icon: Users, title: "Family Trusted", description: "Loved and recommended by hundreds of families across India." },
  { icon: Heart, title: "Made with Care", description: "Every product is crafted with attention to detail and genuine passion." },
  { icon: Truck, title: "Fast Delivery", description: "Quick and convenient ordering through WhatsApp with reliable delivery." },
];

const galleryImages = [
  { src: "https://placehold.co/600x400/2E7D32/FFFFFF?text=Spice+Processing", alt: "Spice processing facility" },
  { src: "https://placehold.co/600x400/F7F3E9/2E7D32?text=Quality+Check", alt: "Quality check station" },
  { src: "https://placehold.co/600x400/FFC107/1A1A1A?text=Packaging+Unit", alt: "Modern packaging unit" },
  { src: "https://placehold.co/600x400/E8F5E9/2E7D32?text=Fresh+Ingredients", alt: "Fresh ingredients sourcing" },
  { src: "https://placehold.co/600x400/1B5E20/FFFFFF?text=Product+Range", alt: "Complete product range" },
  { src: "https://placehold.co/600x400/FFA000/1A1A1A?text=Our+Team", alt: "Our dedicated team" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-900 via-primary-800 to-beige-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-56 h-56 bg-accent/10 organic-blob float-animation" />
          <div className="absolute bottom-0 left-20 w-44 h-44 bg-white/5 organic-blob-2 float-reverse-animation" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              About Mezin
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              A journey driven by passion for authentic food, quality, and the
              trust of families who believe in pure, wholesome nutrition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Company story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Our Story"
                title="From Kitchen to Community"
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-medium-gray leading-relaxed">
                <p>
                  Mezin Food Products was born from a simple kitchen experiment and a
                  deep love for authentic Indian food. What started as making
                  traditional spice blends and pickles for family and friends quickly
                  grew into something much bigger.
                </p>
                <p>
                  Our founder noticed that most store-bought food products lacked the
                  soul and purity of homemade recipes. That realization sparked a
                  mission: to create food products that are as pure and flavorful as
                  the ones made at home, but with the consistency and safety of
                  professional production.
                </p>
                <p>
                  Today, Mezin serves hundreds of families with a range of premium
                  spices, traditional pickles, healthy snacks, and essential kitchen
                  staples. Every product we make carries our promise of quality,
                  freshness, and authenticity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card-hover)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://placehold.co/700x500/F7F3E9/2E7D32?text=Our+Story"
                  alt="Mezin Food Products story"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating stat */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl px-6 py-4 shadow-lg"
              >
                <p className="font-heading text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-medium-gray">Happy Families</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-beige" aria-label="Mission and Vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)] group hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-50 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-500">
                <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">
                Our Mission
              </h3>
              <p className="text-medium-gray leading-relaxed">
                To provide every Indian household with access to premium quality,
                100% natural food products at fair prices. We aim to bring the
                trust and flavor of homemade food to packaged products — without
                compromising on quality, safety, or taste.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)] group hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 group-hover:bg-accent flex items-center justify-center mb-6 transition-colors duration-500">
                <Eye className="w-7 h-7 text-accent-dark group-hover:text-dark transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">
                Our Vision
              </h3>
              <p className="text-medium-gray leading-relaxed">
                To become India&apos;s most trusted name in premium food products —
                known for quality, transparency, and a deep connection with our
                customers. We envision a future where every kitchen pantry features
                Mezin products as their go-to choice for quality food essentials.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Why choose us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="Why Choose Us"
              title="The Mezin Difference"
              subtitle="Six reasons why families choose Mezin for their kitchen essentials."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group flex gap-4 bg-beige-light rounded-2xl p-6 hover:bg-white hover:shadow-[var(--shadow-card)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary flex-shrink-0 flex items-center justify-center transition-colors duration-500">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-medium-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-beige" aria-label="Our journey timeline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="Our Journey"
              title="Milestones"
              subtitle="Key moments that shaped Mezin Food Products."
            />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-100" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-primary-50 z-10 mt-1.5" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <span className="inline-block text-xs font-bold text-primary bg-primary-50 px-3 py-1 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-medium-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Photo gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="Gallery"
              title="Behind the Scenes"
              subtitle="A glimpse into our process, people, and products."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative group rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
