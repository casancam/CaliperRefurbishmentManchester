import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Palette, 
  Camera, 
  HelpCircle, 
  MessageSquare, 
  Play,
  CheckCircle,
  Clock,
  Shield,
  Wrench,
  Droplets,
  Thermometer,
  Eye
} from 'lucide-react';

const LandingContent = () => {
  return (
    <div className="bg-gray-50">
      {/* Services Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Caliper Services in Manchester
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert caliper painting while mounted on your vehicle, using premium materials 
              and professional craftsmanship for a perfect finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Home Page Context */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Services</h3>
              <p className="text-gray-600 mb-4">
                Discover our complete range of brake caliper services, from painting to maintenance.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Caliper Painting Page Context */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Caliper Painting</h3>
              <p className="text-gray-600 mb-4">
                Premium high-temperature paints, custom color matching, and professional application techniques.
              </p>
              <Link 
                href="/caliper-painting"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                View Process <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Gallery Page Context */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Work</h3>
              <p className="text-gray-600 mb-4">
                Browse our portfolio of completed projects showcasing various caliper transformations and color options.
              </p>
              <Link 
                href="/gallery"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                View Gallery <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* FAQ Page Context */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Questions</h3>
              <p className="text-gray-600 mb-4">
                Find answers to frequently asked questions about our services, pricing, and maintenance requirements.
              </p>
              <Link 
                href="/faq"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                Get Answers <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Watch Our Professional Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See how we transform brake calipers using premium high-temperature paints and 
                professional techniques. Our meticulous process ensures a durable, showroom-quality finish.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Precision Preparation</h3>
                    <p className="text-gray-600">Thorough cleaning and surface preparation for optimal paint adhesion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Materials</h3>
                    <p className="text-gray-600">High-temperature resistant paints designed for brake system environments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Application</h3>
                    <p className="text-gray-600">Professional spray techniques for even coverage and smooth finish</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/caliper-painting"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Learn More About Our Process <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <video
                  controls
                  poster="/assets/caliper1.jpg"
                  className="w-full h-auto"
                  preload="none"
                  loading="lazy"
                >
                  <source src="/videos/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                
                {/* Play Button Overlay (for styling) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Video Caption */}
              <p className="text-center text-gray-600 mt-4 text-sm">
                Watch our expert technician apply premium caliper paint with precision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every caliper painting project follows our proven 6-step process to ensure 
              exceptional results and long-lasting durability - all while your calipers remain mounted.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Initial Assessment & Preparation</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  We carefully assess your calipers' condition while mounted on your vehicle. 
                  Our technicians inspect for any damage or wear and prepare the work area for painting.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Clock className="w-8 h-8 text-red-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-2">Time Required: 30-45 minutes</p>
                  <p className="text-gray-600">Professional assessment and work area preparation</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Deep Cleaning & Preparation</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Thorough degreasing and cleaning removes all brake dust, oil, and contaminants. 
                  We then sand and prepare the surface for optimal paint adhesion.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Droplets className="w-8 h-8 text-red-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-2">Professional Cleaning</p>
                  <p className="text-gray-600">Industrial-grade degreasing and surface preparation</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Primer Application</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  High-temperature primer is applied to ensure maximum paint adhesion and longevity. 
                  This crucial step prevents peeling and ensures a professional finish.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Shield className="w-8 h-8 text-red-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-2">Heat-Resistant Primer</p>
                  <p className="text-gray-600">Specialized primer for extreme temperature resistance</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Color Application</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Multiple thin coats of premium high-temperature paint are applied using professional 
                  spray equipment. We ensure even coverage and smooth, consistent color.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Palette className="w-8 h-8 text-red-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-2">Premium Paint System</p>
                  <p className="text-gray-600">Ferrari red and custom color options available</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Curing & Quality Check</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Calipers are properly cured to achieve maximum hardness and temperature resistance. 
                  We perform thorough quality checks before proceeding to final inspection.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Thermometer className="w-8 h-8 text-red-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-2">Heat Curing Process</p>
                  <p className="text-gray-600">Controlled curing for maximum durability</p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Final Inspection & Cleanup</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  We perform a thorough final inspection of the painted calipers and clean up the work area. 
                  Final quality checks ensure everything meets our high standards before completion.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Eye className="w-8 h-8 text-red-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-2">Quality Assurance</p>
                  <p className="text-gray-600">Final inspection and professional cleanup</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/caliper-painting"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Calipers?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Get in touch with our team for a free quote and consultation.
            We'll discuss your requirements and provide expert recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Free Quote
            </Link>
            
            <Link 
              href="/faq"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingContent;