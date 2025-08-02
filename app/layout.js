import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salford",
    postalCode: "M6 6ST",
    streetAddress: "Langley Road South 298",
  },
  name: "Caliper Refurb Manchester",
  openingHours: ["Mo-Sa 09:00-20:00"],
  telephone: "+441615492993",
  url: "https://www.caliperrefurbmanchester.co.uk",
  email: "info@caliperrefurbmanchester.co.uk",
  description:
    "Expert brake caliper painting services in Manchester. High-temperature Ferrari red paint, custom colors, professional installation. 3-year warranty. Call 0161 549 2993 for free quote.",
};

export const metadata = {
  title: "Caliper Refurb Manchester | Brake Caliper Refurbishment Services",
  description: "Expert brake caliper painting services in Manchester. High-temperature Ferrari red paint, custom colors, professional installation. 3-year warranty. Call 0161 549 2993 for free quote.",
  keywords: "caliper painting Manchester, brake caliper refurbishment, Ferrari red caliper paint, high temperature brake paint, professional caliper painting, Manchester automotive services, brake caliper installation, custom caliper colors, performance brake calipers, automotive refurbishment Manchester",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
