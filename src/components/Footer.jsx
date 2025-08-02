"use client";

import React from "react";
import {
  FaMapMarker,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdCall, MdAccessTime } from "react-icons/md";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";

const center = {
    lat: 53.50299072265625,
    lng: -2.2895514965057373,
  };

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black relative z-20">
      {/* Main Footer Content */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white relative inline-block pb-2">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-red-600"></span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mt-1">
                    <FaMapMarker className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Visit Our Workshop
                    </h4>
                    <p className="text-gray-300 mt-1">
                      Manchester, UK
                      <br /> Professional Caliper Services
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <MdCall className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Call Us</h4>
                    <a
                      href="tel:+441615492993"
                      className="text-gray-300 hover:text-white transition-colors mt-1 block"
                    >
                      0161 549 2993
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <MdEmail className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <a
                      href="mailto:info@caliperrefurbmanchester.co.uk"
                      className="text-gray-300 hover:text-white transition-colors mt-1 block break-all"
                    >
                      info@caliperrefurbmanchester.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <MdAccessTime className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Business Hours</h4>
                    <p className="text-gray-300 mt-1">
                      Monday - Friday: 8AM - 6PM
                      <br />
                      Saturday: 9AM - 4PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Quick Links */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white relative inline-block pb-2">
                Our Services
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-red-600"></span>
              </h3>
              <div className="pt-4">
                <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Home
                  </Link>
                  <Link
                    href="/gallery"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Gallery
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    FAQ
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-xl font-bold text-white mb-4">
                  Connect With Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:shadow-lg hover:shadow-pink-600/20 transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-white" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=441615492993&text=Hi, I'm interested in caliper painting services"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center hover:shadow-lg hover:shadow-green-500/20 transition-all"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white relative inline-block pb-2">
                Find Us
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-red-600"></span>
              </h3>

              <div className="rounded-xl overflow-hidden shadow-lg shadow-red-900/20 border border-slate-800">
                <GoogleMapsEmbed
                  apiKey="AIzaSyA_Y5ZLrUV5xh6j5rox6xJS3qG3opdIcLI"
                  height={250}
                  width="100%"
                  mode="place"
                  zoom="15"
                  center={`${center.lat},${center.lng}`}
                  q="Langley+Road+298+South,Salford,UK"
                />
              </div>

              <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 p-4 rounded-xl">
                <p className="text-gray-300 text-sm">
                  Serving Manchester and surrounding areas with professional 
                  brake caliper painting services. We specialize in high-quality 
                  finishes that can withstand extreme temperatures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Caliper Refurbishment Manchester. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;