"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary-50 px-4 py-1.5 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight",
          align === "center" && "max-w-2xl mx-auto"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-medium-gray text-base sm:text-lg leading-relaxed",
            align === "center" && "max-w-xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div
        className={cn(
          "mt-6 flex items-center gap-2",
          align === "center" && "justify-center"
        )}
      >
        <span className="w-8 h-1 rounded-full bg-accent" />
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="w-8 h-1 rounded-full bg-accent" />
      </div>
    </div>
  );
}
