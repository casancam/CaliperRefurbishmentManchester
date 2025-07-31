"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Caliper Painting", href: "/caliper-painting" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
  ];

  // Close navbar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2"
          : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left: Logo + Contact Info */}
          <div className="flex items-center gap-6">
            {/* Logo/Brand */}
            <Link href="/" className={`pl-4 flex-shrink-0 ${scrolled ? "rotate-90 transition-all duration-300" : ""}`}>
              <Image
                src={"/assets/logo.png"}
                width={100}
                height={100}
                alt="brake-caliper-manchester-logo"
              />
            </Link>

            {/* Contact Buttons - Desktop */}
            <div className="pl-12 hidden lg:flex lg:flex-col items-center gap-3">
              <a
                href="tel:+441612345678"
                className="flex items-center justify-start gap-2 w-32 h-10 px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <MdCall className="text-white text-base group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">
                  Call Now
                </span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=441612345678&text=Hi, I'm interested in caliper painting services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start gap-2 w-32 h-10 px-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <FaWhatsapp className="text-white text-base group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">
                  WhatsApp
                </span>
              </a>

              <a
                href="mailto:info@caliperrefurbishmentmanchester.co.uk"
                className="flex items-center justify-start gap-2 w-32 h-10 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                  <MdEmail className="text-white text-base group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* Right: Navigation Links + CTA */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-red-600 text-white shadow-md"
                      : "text-white bg-gray-700/50 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:block ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Quote
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden ml-4 w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="bg-slate-800/95 backdrop-blur-md mx-4 mt-2 rounded-xl shadow-xl border border-slate-700 overflow-hidden">
            {/* Mobile Contact Buttons */}
            <div className="grid grid-cols-3 gap-2 p-4 border-b border-slate-700">
              <a
                href="tel:+441612345678"
                className="flex flex-col items-center gap-1 px-3 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                <MdCall className="text-xl" />
                <span className="text-xs font-medium">Call</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=441612345678&text=Hi, I'm interested in caliper painting services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 px-3 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                <FaWhatsapp className="text-xl" />
                <span className="text-xs font-medium">WhatsApp</span>
              </a>

              <a
                href="mailto:info@caliperrefurbishmentmanchester.co.uk"
                className="flex flex-col items-center gap-1 px-3 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                <MdEmail className="text-xl" />
                <span className="text-xs font-medium">Email</span>
              </a>
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-red-600 text-white"
                      : "text-gray-300 hover:bg-slate-700 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 mt-4 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
