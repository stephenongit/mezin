import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppUrl(productName?: string): string {
  const phone = "919876543210"; // Replace with actual WhatsApp number
  const baseUrl = `https://wa.me/${phone}`;

  if (productName) {
    const message = encodeURIComponent(
      `Hi! I'm interested in "${productName}" from MFP Food Product. Could you share more details?`
    );
    return `${baseUrl}?text=${message}`;
  }

  const defaultMessage = encodeURIComponent(
    "Hi! I'd like to know more about MFP Food Product. Could you help me?"
  );
  return `${baseUrl}?text=${defaultMessage}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(price);
}
