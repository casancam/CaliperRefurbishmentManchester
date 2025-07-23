import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Professional Caliper Painting Manchester | Brake Caliper Refurbishment Services",
  description: "Expert brake caliper painting services in Manchester. High-temperature Ferrari red paint, custom colors, professional installation. 3-year warranty. Call 0161 234 5678 for free quote.",
  keywords: "caliper painting Manchester, brake caliper refurbishment, Ferrari red caliper paint, high temperature brake paint, professional caliper painting, Manchester automotive services, brake caliper installation, custom caliper colors, performance brake calipers, automotive refurbishment Manchester",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
