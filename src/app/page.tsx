import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import LocationMap from "@/components/home/LocationMap";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <CTASection />
      <LocationMap />
    </>
  );
}
