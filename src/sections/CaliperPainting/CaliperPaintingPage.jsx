"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Thermometer,
  Palette,
  Wrench,
  Star,
  Play,
  Camera,
  MessageCircle,
  Phone,
  Home,
  ArrowLeft,
  Droplets,
  Award,
  Zap,
  Eye
} from 'lucide-react';

const CaliperPaintingPage = () => {
  // Cycling background images for hero
  const backgroundImages = [
    '/assets/caliper1.jpg',
    '/assets/caliper2.jpg',
    '/assets/caliper3.jpg',
    '/assets/caliper4.jpg',
    '/assets/caliper5.jpg',
    '/assets/caliper6.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="bg-white pt-48">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-red-600 font-medium">Caliper Painting</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Cycling Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-8">
              <Palette className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Premium Caliper Painting Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional
              <span className="block text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Caliper Painting
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your brake calipers with high-temperature, fade-resistant paints. 
              Professional application, custom colors, and guaranteed durability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                <Camera className="w-5 h-5" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Professional Caliper Painting?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your brake calipers are constantly exposed to extreme heat, brake dust, and harsh conditions. 
                Our premium painting service not only enhances your vehicle's appearance but also provides 
                long-lasting protection against corrosion and wear.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Heat Resistant</h4>
                    <p className="text-gray-600 text-sm">Withstands temperatures up to 1200°F</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Corrosion Protection</h4>
                    <p className="text-gray-600 text-sm">Prevents rust and brake dust buildup</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Enhanced Appearance</h4>
                    <p className="text-gray-600 text-sm">Transforms your vehicle's wheel wells</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Long-Lasting</h4>
                    <p className="text-gray-600 text-sm">3-year warranty on workmanship</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/faq"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                Have questions? Check our FAQ <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <video 
                  controls 
                  poster="/assets/caliper1.jpg"
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src="/videos/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Watch our expert application process in action
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paint Options */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium Paint Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use only the highest quality, high-temperature resistant paints specifically 
              designed for brake system applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ferrari Red */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full mb-4 border-4 border-gray-200"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ferrari Red</h3>
              <p className="text-gray-600 mb-4">
                Our signature color - the classic Ferrari red that makes your calipers stand out 
                with authentic racing heritage.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Temperature Rating:</span> 1200°F<br/>
                <span className="font-medium">Finish:</span> Gloss
              </div>
            </div>

            {/* Brembo Yellow */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full mb-4 border-4 border-gray-200"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brembo Yellow</h3>
              <p className="text-gray-600 mb-4">
                Professional yellow finish identical to OEM Brembo calipers, perfect for 
                performance vehicles and racing applications.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Temperature Rating:</span> 1200°F<br/>
                <span className="font-medium">Finish:</span> Gloss
              </div>
            </div>

            {/* Matte Black */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 border-4 border-gray-200"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Matte Black</h3>
              <p className="text-gray-600 mb-4">
                Sophisticated matte black finish that complements any vehicle color while 
                maintaining a subtle, professional appearance.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Temperature Rating:</span> 1200°F<br/>
                <span className="font-medium">Finish:</span> Matte
              </div>
            </div>

            {/* Blue */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full mb-4 border-4 border-gray-200"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Blue</h3>
              <p className="text-gray-600 mb-4">
                Vibrant blue finish popular with BMW and performance car enthusiasts. 
                Creates a striking contrast against most wheel designs.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Temperature Rating:</span> 1200°F<br/>
                <span className="font-medium">Finish:</span> Gloss
              </div>
            </div>

            {/* Green */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full mb-4 border-4 border-gray-200"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Racing Green</h3>
              <p className="text-gray-600 mb-4">
                Classic British racing green that pairs beautifully with luxury vehicles 
                and vintage car restorations.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Temperature Rating:</span> 1200°F<br/>
                <span className="font-medium">Finish:</span> Gloss
              </div>
            </div>

            {/* Custom Colors */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-red-200">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full mb-4 border-4 border-gray-200"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Color Matching</h3>
              <p className="text-gray-600 mb-4">
                We can match virtually any color to complement your vehicle's paint scheme. 
                Perfect for unique builds and custom projects.
              </p>
              <div className="text-sm text-red-600 font-medium">
                Contact us for custom color consultation
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/gallery"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              <Camera className="w-5 h-5 mr-2" />
              See Color Examples in Our Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven 6-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every caliper painting project follows our meticulous process developed over years 
              of experience to ensure perfect results every time.
            </p>
          </div>

          <div className="space-y-12">
            {/* Process Steps */}
            {[
              {
                step: 1,
                title: "Removal & Initial Assessment",
                time: "45-60 minutes",
                description: "Safe removal of brake calipers using proper techniques and torque specifications. Complete inspection for wear, damage, or maintenance issues that need addressing.",
                details: [
                  "Proper vehicle lifting and wheel removal",
                  "Brake fluid line disconnection and sealing", 
                  "Caliper bolt removal with correct tools",
                  "Visual inspection and documentation"
                ],
                icon: Wrench
              },
              {
                step: 2,
                title: "Professional Cleaning & Degreasing",
                time: "30-45 minutes",
                description: "Industrial-strength cleaning removes all brake dust, road grime, grease, and contaminants. This critical step ensures optimal paint adhesion.",
                details: [
                  "High-pressure steam cleaning",
                  "Chemical degreasing treatment",
                  "Brake dust removal from all surfaces",
                  "Final inspection for cleanliness"
                ],
                icon: Droplets
              },
              {
                step: 3,
                title: "Surface Preparation & Sanding",
                time: "60-90 minutes",
                description: "Careful sanding creates the perfect surface texture for paint adhesion while removing any existing coatings or oxidation.",
                details: [
                  "Fine-grit sanding of all surfaces",
                  "Removal of existing paint or coatings",
                  "Surface texture optimization",
                  "Dust removal and final cleaning"
                ],
                icon: Zap
              },
              {
                step: 4,
                title: "High-Temperature Primer Application",
                time: "45 minutes + cure time",
                description: "Specialized high-temperature primer is applied to ensure maximum paint adhesion and provide the foundation for a durable finish.",
                details: [
                  "Heat-resistant primer selection",
                  "Even spray application technique",
                  "Multiple thin coats for best coverage",
                  "Proper flash time between coats"
                ],
                icon: Shield
              },
              {
                step: 5,
                title: "Color Coat Application",
                time: "60-90 minutes + cure time",
                description: "Your chosen color is applied using professional spray equipment and techniques. Multiple thin coats ensure even coverage and deep color saturation.",
                details: [
                  "Professional spray booth environment",
                  "Temperature and humidity control",
                  "Multiple thin coats for durability",
                  "Color matching verification"
                ],
                icon: Palette
              },
              {
                step: 6,
                title: "Curing & Professional Reinstallation",
                time: "2-4 hours + installation time",
                description: "Proper heat curing ensures maximum durability. Calipers are then professionally reinstalled with new hardware and proper brake bleeding.",
                details: [
                  "Controlled heat curing process",
                  "Quality control inspection",
                  "Professional reinstallation",
                  "Brake system bleeding and testing"
                ],
                icon: Clock
              }
            ].map((process, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                      <p className="text-red-600 font-medium">{process.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{process.description}</p>
                  <ul className="space-y-2">
                    {process.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <process.icon className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Step {process.step}</h4>
                    <p className="text-gray-600 text-sm">{process.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our caliper painting service
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does the caliper painting process take?",
                answer: "The complete process typically takes 1-2 days, depending on the package selected and current workload. This includes removal, preparation, painting, curing, and reinstallation."
              },
              {
                question: "Will the paint withstand the heat from braking?",
                answer: "Absolutely. We use specialized high-temperature paints rated for 1200°F, which is well above the temperatures generated during normal and even aggressive braking."
              },
              {
                question: "Do you need to remove the entire brake system?",
                answer: "We only remove the brake calipers themselves. The brake discs, pads, and most of the brake lines remain in place. We use proper bleeding techniques during reinstallation."
              },
              {
                question: "What's included in the warranty?",
                answer: "Our warranty covers paint adhesion, color fading, and workmanship. It does not cover damage from accidents, modifications, or normal wear from brake pad changes."
              },
              {
                question: "Can you match my car's paint color exactly?",
                answer: "Yes, we offer custom color matching services. We can match virtually any color using paint codes or color samples you provide."
              },
              {
                question: "Will this affect my brake performance?",
                answer: "No, our painting process does not affect brake performance in any way. We never paint contact surfaces or internal components that affect braking function."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/faq"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-lg"
            >
              View All FAQs <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Calipers?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Book your caliper painting service today and give your vehicle the professional 
            finish it deserves. Free consultation and quote available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Quote
            </Link>
            
            <a
              href="tel:+441615492993"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0161 549 2993
            </a>
          </div>

          <div className="flex justify-center gap-6 text-red-100">
            <Link href="/gallery" className="hover:text-white transition-colors">
              View Gallery
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-white transition-colors">
              All Services
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaliperPaintingPage;