"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Home,
  ArrowRight,
  Shield,
  Award,
  Palette,
  Camera,
  HelpCircle,
  MessageSquare
} from 'lucide-react';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    color: '',
    message: '',
    preferred_contact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM', open: true },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM', open: true },
    { day: 'Sunday', hours: 'Closed', open: false }
  ];

  const serviceOptions = [
    'Standard Caliper Painting (£299)',
    'Premium Caliper Painting (£449)',
    'Performance Caliper Painting (£699)',
    'Custom Color Matching',
    'Consultation Only',
    'Other'
  ];

  const colorOptions = [
    'Ferrari Red',
    'Brembo Yellow',
    'Performance Blue',
    'Matte Black',
    'Racing Green',
    'Custom Color Match',
    'Need Advice'
  ];

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-48">
      {/* Breadcrumb Navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-red-600 font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-8">
            <MessageCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Get In Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Contact
            <span className="block text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Our Experts
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your brake calipers? Get in touch for a free consultation 
            and personalized quote for your vehicle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+441612345678"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: 0161 234 5678
            </a>
            
            <a
              href="https://api.whatsapp.com/send?phone=441612345678&text=Hi, I'm interested in caliper painting services"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with a 
                    personalized quote for your caliper painting project.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="0161 234 5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Make & Model
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="e.g., BMW M3, Audi RS6"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Color
                      </label>
                      <select
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      >
                        <option value="">Select a color</option>
                        {colorOptions.map((color, index) => (
                          <option key={index} value={color}>{color}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferred_contact" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="email"
                          checked={formData.preferred_contact === 'email'}
                          onChange={handleInputChange}
                          className="mr-2 text-red-600 focus:ring-red-500"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="phone"
                          checked={formData.preferred_contact === 'phone'}
                          onChange={handleInputChange}
                          className="mr-2 text-red-600 focus:ring-red-500"
                        />
                        Phone
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="whatsapp"
                          checked={formData.preferred_contact === 'whatsapp'}
                          onChange={handleInputChange}
                          className="mr-2 text-red-600 focus:ring-red-500"
                        />
                        WhatsApp
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Tell us about your specific requirements, timeline, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                      <a
                        href="tel:+441612345678"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                      >
                        0161 234 5678
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Speak directly with our experts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <a
                        href="mailto:info@caliperrefurbishmentmanchester.co.uk"
                        className="text-gray-600 hover:text-red-600 transition-colors text-sm break-all"
                      >
                        info@caliperrefurbishmentmanchester.co.uk
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        24-hour response guarantee
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Visit Our Workshop</h4>
                      <p className="text-gray-600">
                        Langley Road 298 South<br />
                        Salford, Manchester<br />
                        United Kingdom
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Professional workshop facility
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                      <a
                        href="https://api.whatsapp.com/send?phone=441612345678&text=Hi, I'm interested in caliper painting services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                      >
                        +44 161 234 5678
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Instant messaging support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-red-600" />
                  Business Hours
                </h3>
                
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className={`${schedule.open ? 'text-green-600' : 'text-red-600'} font-medium`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Emergency Service:</strong> Available outside business hours 
                    for urgent requirements (additional charges apply).
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
                
                <div className="space-y-4">
                  <Link
                    href="/caliper-painting"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-red-50 hover:border-red-200 border border-transparent transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <Palette className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-gray-900">Our Process</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </Link>

                  <Link
                    href="/gallery"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-red-50 hover:border-red-200 border border-transparent transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <Camera className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-gray-900">View Gallery</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </Link>

                  <Link
                    href="/faq"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-red-50 hover:border-red-200 border border-transparent transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-gray-900">FAQ</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Our Workshop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Manchester, our professional workshop is easily 
              accessible and equipped with state-of-the-art facilities.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-96">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.123456789!2d-2.2895514965057373!3d53.50299072265625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDMwJzEwLjgiTiAywrAxNyczMi40Ilc!5e0!3m2!1sen!2suk!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Caliper Refurbishment Manchester Location"
              ></iframe>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy to Find</h3>
              <p className="text-gray-600 text-sm">
                Conveniently located with easy access and parking available
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Facility</h3>
              <p className="text-gray-600 text-sm">
                Professional workshop with secure vehicle storage
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Service</h3>
              <p className="text-gray-600 text-sm">
                Expert technicians with years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who trust us with their vehicles
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-red-100">Calipers Painted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5★</div>
              <div className="text-red-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24hr</div>
              <div className="text-red-100">Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;