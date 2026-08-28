import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the complete range of MFP Food Product powders, flours, and puttu flour. Order via WhatsApp.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
