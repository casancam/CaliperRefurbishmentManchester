import Hero from "@/src/sections/Home/Hero";
import LandingContent from "@/src/sections/Home/LandingContent";

export const metadata = {
  title: "Professional Brake Caliper Painting & Refurbishment Manchester | Expert Automotive Services",
  description: "Manchester's premier brake caliper painting and refurbishment specialists. Ferrari red, custom colors, high-temperature paint, professional installation. 3-year warranty. Call 0161 549 2993.",
  keywords: "brake caliper painting Manchester, caliper refurbishment Manchester, automotive services Manchester, Ferrari red calipers, high temperature brake paint, professional car services, brake caliper specialists, custom automotive painting, performance brake services, Manchester car modification",
};

export default function HomePage() {
  return (
    <div className='max-w-screen overflow-hidden'>
      <Hero />
      <LandingContent />
    </div>
  )
}
