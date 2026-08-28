"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Chennai",
    text: "The turmeric and garam masala from Mezin are absolutely top-notch. You can literally smell the quality difference. My cooking has improved so much since I switched!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    location: "Madurai",
    text: "I've been ordering their pickles for the past year. The mango pickle tastes exactly like my grandmother used to make. Pure, homestyle goodness — highly recommended.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Anjali Menon",
    location: "Coimbatore",
    text: "What I love most is their WhatsApp support. I can order anytime, and they deliver fresh products right to my door. The coconut oil is incredible for South Indian cooking.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Mohammed Farooq",
    location: "Coimbatore",
    text: "Mezin Food Products has the best quality spices in town. Their pricing is very fair for the premium quality they offer. My whole family trusts their products.",
    rating: 5,
    avatar: "MF",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 bg-beige relative overflow-hidden" aria-label="Customer testimonials">
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/5 organic-blob -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 organic-blob-2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="Testimonials"
            title="What Our Customers Say"
            subtitle="Real reviews from real families who trust Mezin."
          />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)] relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary-100 absolute top-6 right-8" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  )
                )}
              </div>

              {/* Quote Text */}
              <p className="text-dark text-lg md:text-xl leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-dark">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-medium-gray">
                    {testimonials[current].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-border hover:border-primary hover:bg-primary-50 flex items-center justify-center transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-border hover:border-primary hover:bg-primary-50 flex items-center justify-center transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
