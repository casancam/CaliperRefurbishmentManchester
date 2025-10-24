"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  // Array of background images
  const backgroundImages = [
    '/assets/caliper1.jpg',
    '/assets/caliper2.jpg',
    '/assets/caliper3.jpg',
    '/assets/caliper4.jpg',
    '/assets/caliper5.jpg',
    '/assets/caliper6.jpg'
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to cycle through images every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 2500); // 2.5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-48">
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
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-3 py-2 mb-6 sm:mb-8">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 fill-current" />
            <span className="text-red-400 text-xs sm:text-sm font-medium">Manchester's Premier Caliper Specialists</span>
          </div>

          {/* Main Headline - H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Professional
            <span className="block text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">
              Caliper Painting
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-1 sm:mt-2">
              Services
            </span>
          </h1>

          {/* Subtitle - H2 */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 sm:mb-8 font-light leading-relaxed px-4 sm:px-0">
            Transform your brake calipers with high-temperature, 
            <span className="text-white font-medium"> premium quality paints</span> and 
            professional painting services in Manchester
          </h2>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 px-2">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">High-Temperature Paint</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">While Mounted Service</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">Custom Color Matching</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Link
              href="/contact"
              className="group bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Get Free Quote
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
            </Link>
            
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <Link
                href="tel:+441615492993"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/40 flex-1 sm:flex-initial"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Call Now</span>
              </Link>
              
              <a
                href="https://api.whatsapp.com/send?phone=441615492993&text=Hi, I'm interested in caliper painting services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex-1 sm:flex-initial"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0 sm:pb-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500 mb-1 sm:mb-2">500+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Calipers Painted</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500 mb-1 sm:mb-2">5★</div>
              <div className="text-gray-300 text-xs sm:text-sm">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500 mb-1 sm:mb-2">24hr</div>
              <div className="text-gray-300 text-xs sm:text-sm">Quick Turnaround</div>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center gap-3 mt-4">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                  index === currentImageIndex
                    ? 'bg-red-500/20'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentImageIndex ? 'true' : 'false'}
              >
                <span className={`block rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-red-500 w-6 h-3'
                    : 'bg-white/50 w-3 h-3'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl hidden lg:block"></div>
    </section>
  );
};

export default Hero;