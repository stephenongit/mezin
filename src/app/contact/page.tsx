"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  ExternalLink,
  Building2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["3rd North, Vinayagapuram", "Coimbatore – 641035", "Tamil Nadu, India"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: 10:00 AM – 2:00 PM"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@mezinfoods.com"],
  },
];

const faqs = [
  {
    q: "How do I place an order?",
    a: "Simply browse our products, click the 'Enquire on WhatsApp' button on any product, and our team will assist you with pricing, availability, and delivery. It's that easy!",
  },
  {
    q: "Do you deliver outside your city?",
    a: "Yes! We ship across Tamil Nadu and select cities in India. Contact us on WhatsApp to check delivery availability for your location.",
  },
  {
    q: "What is your return / refund policy?",
    a: "If you receive a damaged or incorrect product, reach out to us within 24 hours on WhatsApp with a photo. We'll arrange a replacement or refund promptly.",
  },
  {
    q: "Are your products FSSAI certified?",
    a: "Absolutely. All Mezin Food Products are manufactured and packed in FSSAI-certified facilities following strict food safety guidelines.",
  },
  {
    q: "Do you offer bulk or wholesale pricing?",
    a: "Yes, we offer special pricing for bulk and wholesale orders. Please contact us on WhatsApp or call us to discuss your requirements.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfer, and cash on delivery (for select locations). Payment details are shared when you place your order via WhatsApp.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-dark text-[15px] pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-sm text-medium-gray leading-relaxed">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              Have questions or ready to order? We&apos;re just a WhatsApp message
              away. Reach out and we&apos;ll get back to you in minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards + WhatsApp CTA */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Contact information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex flex-col items-center bg-gradient-to-br from-primary-50 to-beige rounded-3xl p-10 md:p-14 shadow-[var(--shadow-card)] max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-[#25D366] flex items-center justify-center mb-6 shadow-lg">
                <MessageCircle className="w-9 h-9 text-white" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-3">
                Chat with Us on WhatsApp
              </h2>
              <p className="text-medium-gray text-sm leading-relaxed mb-8 max-w-sm">
                The fastest way to reach us. Get instant replies for product
                enquiries, orders, and support.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5B] text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6" />
                Start Chat
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>
              <p className="text-xs text-light-gray mt-4">
                Available Mon–Sat, 9 AM – 7 PM
              </p>
            </div>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={staggerItem}
                className="group bg-beige-light rounded-2xl p-6 hover:bg-white hover:shadow-[var(--shadow-card)] transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary mx-auto flex items-center justify-center mb-4 transition-colors duration-500">
                  <info.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-bold text-dark mb-2">
                  {info.title}
                </h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-sm text-medium-gray">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Card (vCard-style) */}
      <section className="py-16 bg-beige" aria-label="Business contact card">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-card-hover)]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-800 to-primary p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                Mezin Food Products
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Premium Quality Food Essentials
              </p>
            </div>
            {/* Details */}
            <div className="p-8 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-dark text-sm">Address</p>
                  <p className="text-medium-gray text-sm">
                    3rd North, Vinayagapuram, Coimbatore – 641035, Tamil Nadu
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-dark text-sm">Phone</p>
                  <p className="text-medium-gray text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-dark text-sm">Email</p>
                  <p className="text-medium-gray text-sm">hello@mezinfoods.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-dark text-sm">Working Hours</p>
                  <p className="text-medium-gray text-sm">
                    Mon–Sat: 9 AM – 7 PM · Sun: 10 AM – 2 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Store location */}
      <section className="py-20 bg-white" aria-label="Location map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="Location"
              title="Find Us Here"
              subtitle="Visit our store or production facility."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] bg-gradient-to-br from-primary-50 via-beige to-white min-h-[320px] flex items-center justify-center border border-border"
          >
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="font-heading font-bold text-dark mb-1">
                Find MFP Food Product
              </p>
              <p className="text-sm text-medium-gray mb-4">
                Open our exact store location in Google Maps.
              </p>
              <a
                href="https://maps.app.goo.gl/HtVVzfv27TngZUmM7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-beige" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Quick answers to common questions about our products and services."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={staggerItem}>
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
