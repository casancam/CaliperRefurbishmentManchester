import Hero from "@/src/sections/Home/Hero";
import LandingContent from "@/src/sections/Home/LandingContent";

export const metadata = {
  title: "Caliper Refurbishment Manchester | Expert Bodyshop & Auto Body Shop",
  description:
    "Bodyshop Manchester is your trusted car body shop in Manchester, specialising in expert car body repair. Reliable auto body shop services you can count on.",
  keywords:
    "Bodyshop Manchester, car body repair Manchester, car body shop Manchester, Auto body shop Manchester, body restoration, car body work, vehicle repair services, bodyshop near me",
};

export default function HomePage() {
  return (
    <div className='max-w-screen overflow-hidden'>
      <Hero />
      <LandingContent />
    </div>
  )
}
