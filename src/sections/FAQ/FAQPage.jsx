"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Home,
  Clock,
  Shield,
  Palette,
  Wrench,
  MessageCircle,
  Phone,
  ArrowRight,
  Info,
  Star,
  Camera,
  Tag,
  Book
} from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqData = [
    // Pricing & Packages
    {
      id: 1,
      category: 'pricing',
      question: "How much does caliper painting cost?",
      answer: "Our caliper painting services start from £299 for our Standard Package. We offer three tiers: Standard (£299), Premium (£449), and Performance (£699). Each package includes professional painting while your calipers remain mounted on your vehicle. The price varies based on your vehicle type, chosen color, and any custom requirements.",
      popular: true,
      tags: ['cost', 'price', 'packages']
    },
    {
      id: 2,
      category: 'pricing',
      question: "What's included in each pricing package?",
      answer: "Standard Package (£299): Professional cleaning, surface preparation, high-temp primer and paint, standard colors, while-mounted service, and 1-year warranty. Premium Package (£449): All Standard features plus custom color matching, premium paint system, detailed finishing, brake inspection, and 3-year warranty. Performance Package (£699): All Premium features plus racing-grade paint, multiple colors, logo application, complete brake service inspection, and lifetime warranty.",
      popular: false,
      tags: ['packages', 'warranty', 'included']
    },
    {
      id: 3,
      category: 'pricing',
      question: "Are there any additional costs I should know about?",
      answer: "All our quoted prices include VAT and standard service. Additional charges may apply for: heavily corroded calipers requiring extra preparation work (£50-100), custom logo or text application (£75), emergency or same-day service (25% surcharge), or if brake components need attention during inspection. We'll always discuss any additional costs before proceeding with work.",
      popular: false,
      tags: ['additional', 'extra', 'hidden', 'vat']
    },
    
    // Process & Timing
    {
      id: 4,
      category: 'process',
      question: "How long does the caliper painting process take?",
      answer: "The complete process typically takes 1 working day (6-8 hours). This includes vehicle setup on our professional ramp, cleaning, surface preparation, primer application, color application, and curing time. We allow proper curing time between coats to ensure maximum durability. Rush service is available for an additional 25% charge, completing work in same day.",
      popular: true,
      tags: ['time', 'duration', 'process', 'days']
    },
    {
      id: 5,
      category: 'process',
      question: "Do I need to remove the wheels myself?",
      answer: "No, we handle everything! Our service includes positioning your vehicle on our professional ramp system and wheel removal for full caliper access. You simply drop off your vehicle and collect it when ready. We use professional equipment and follow manufacturer specifications for all components.",
      popular: true,
      tags: ['wheels', 'removal', 'service', 'included']
    },
    {
      id: 6,
      category: 'process',
      question: "Do you remove the brake calipers from the vehicle?",
      answer: "No, we paint your calipers while they remain mounted on your vehicle. We use a professional ramp system for optimal access and only remove the wheels for full caliper exposure. This approach is safer, faster, and maintains the integrity of your brake system while achieving professional results.",
      popular: false,
      tags: ['removal', 'mounted', 'ramp', 'system']
    },
    
    // Paint & Durability
    {
      id: 7,
      category: 'paint',
      question: "Will the paint withstand the heat from braking?",
      answer: "Absolutely! We use specialized high-temperature paints rated for 1200°F (649°C), which is well above the temperatures generated during normal and even aggressive braking. Our paints are specifically formulated for brake system applications and won't fade, peel, or discolor under normal use. We've tested these paints on track cars and performance vehicles with excellent results.",
      popular: true,
      tags: ['heat', 'temperature', 'durability', 'performance']
    },
    {
      id: 8,
      category: 'paint',
      question: "What colors are available?",
      answer: "We offer a wide range of colors: Ferrari Red (our signature), Brembo Yellow, Performance Blue, Matte Black, Racing Green, plus custom color matching. We can match virtually any color using paint codes or samples you provide. Popular custom colors include manufacturer-specific shades like BMW Blue, Mercedes Silver, or Audi Red.",
      popular: true,
      tags: ['colors', 'options', 'custom', 'matching']
    },
    {
      id: 9,
      category: 'paint',
      question: "How long will the paint last?",
      answer: "With proper care, our paint jobs last 5-10 years or more. We offer warranties ranging from 1-3 years to lifetime depending on the package. Factors affecting longevity include driving conditions, brake pad changes, and maintenance. The paint is designed to withstand brake dust, road salt, and washing. We recommend avoiding aggressive wheel cleaners and harsh chemicals.",
      popular: true,
      tags: ['durability', 'lifespan', 'warranty', 'maintenance']
    },
    
    // Vehicle Compatibility
    {
      id: 10,
      category: 'compatibility',
      question: "What vehicles do you work on?",
      answer: "We work on all vehicle types: cars, motorcycles, light commercial vehicles, and classic cars. From everyday vehicles like Ford Focus to supercars like Ferrari and Lamborghini. We have experience with all brake systems including Brembo, AP Racing, Alcon, and OEM calipers. Special consideration is given to vintage and rare vehicles.",
      popular: false,
      tags: ['vehicles', 'compatibility', 'types', 'brands']
    },
    {
      id: 11,
      category: 'compatibility',
      question: "Do you work on performance and racing calipers?",
      answer: "Yes! We specialize in high-performance calipers including Brembo, AP Racing, Alcon, Wilwood, and other racing brands. We understand the specific requirements of track vehicles and use racing-grade paints that can withstand extreme conditions. Many of our customers are track day enthusiasts and professional racing teams.",
      popular: false,
      tags: ['performance', 'racing', 'track', 'brembo']
    },
    
    // Maintenance
    {
      id: 12,
      category: 'maintenance',
      question: "How do I maintain the painted calipers?",
      answer: "Maintenance is simple: Regular washing with mild soap and water, avoid aggressive wheel cleaners or acid-based products, use soft brushes or cloths when cleaning, rinse thoroughly after washing. For best results, clean brake dust weekly and apply a coat of quality car wax every few months. Avoid high-pressure washers directly on calipers.",
      popular: false,
      tags: ['maintenance', 'care', 'cleaning', 'washing']
    },
    {
      id: 13,
      category: 'maintenance',
      question: "What happens when I need to change brake pads?",
      answer: "Brake pad changes won't damage the paint when done properly. We recommend informing your mechanic about the painted calipers and asking them to be careful with tools. The paint is durable enough to handle normal brake servicing. If any touch-ups are needed after pad changes, we offer discounted touch-up services for existing customers.",
      popular: false,
      tags: ['brake pads', 'servicing', 'damage', 'touch-up']
    },
    
    // Booking & Service
    {
      id: 14,
      category: 'booking',
      question: "How do I book an appointment?",
      answer: "Booking is easy! Contact us via phone (0161 549 2993), WhatsApp, or our online contact form. We'll discuss your requirements, provide a quote, and schedule your appointment. We typically book 1-2 weeks in advance, but rush appointments are available. We'll send confirmation details and preparation instructions.",
      popular: true,
      tags: ['booking', 'appointment', 'schedule', 'contact']
    },
    {
      id: 15,
      category: 'booking',
      question: "Do you offer mobile services?",
      answer: "Currently, we operate from our Manchester workshop to ensure the highest quality results. Our controlled environment and professional ramp system allow proper access and professional finishing. However, we do offer collection and delivery services within 25 miles of Manchester for an additional £50. This ensures your vehicle is handled safely and professionally.",
      popular: false,
      tags: ['mobile', 'collection', 'delivery', 'manchester']
    },
    
    // Technical Questions
    {
      id: 16,
      category: 'technical',
      question: "Will painting affect my brake performance?",
      answer: "No, our painting process does not affect brake performance in any way. We never paint friction surfaces, internal components, or any parts that affect braking function. Only the external caliper housing is painted. The paint adds minimal thickness (less than 0.1mm) and doesn't interfere with heat dissipation or brake operation.",
      popular: true,
      tags: ['performance', 'safety', 'braking', 'function']
    },
    {
      id: 17,
      category: 'technical',
      question: "Do you paint brake discs or drums?",
      answer: "No, we never paint brake discs (rotors) or drums as this would be dangerous and affect braking performance. We only paint the external surfaces of brake calipers. If you're looking to improve the appearance of your brake discs, we can recommend high-temperature disc coatings from specialist providers, but this is not a service we offer.",
      popular: false,
      tags: ['discs', 'drums', 'safety', 'rotors']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: Book, count: faqData.length },
    { id: 'pricing', name: 'Pricing & Packages', icon: Tag, count: faqData.filter(item => item.category === 'pricing').length },
    { id: 'process', name: 'Process & Timing', icon: Clock, count: faqData.filter(item => item.category === 'process').length },
    { id: 'paint', name: 'Paint & Durability', icon: Palette, count: faqData.filter(item => item.category === 'paint').length },
    { id: 'compatibility', name: 'Vehicle Compatibility', icon: Wrench, count: faqData.filter(item => item.category === 'compatibility').length },
    { id: 'maintenance', name: 'Maintenance', icon: Shield, count: faqData.filter(item => item.category === 'maintenance').length },
    { id: 'booking', name: 'Booking & Service', icon: MessageCircle, count: faqData.filter(item => item.category === 'booking').length },
    { id: 'technical', name: 'Technical', icon: Info, count: faqData.filter(item => item.category === 'technical').length }
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Popular questions
  const popularFAQs = faqData.filter(faq => faq.popular);

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const expandAll = () => {
    setExpandedItems(new Set(filteredFAQs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-48">
      {/* Breadcrumb Navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-red-600 font-medium">FAQ</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-8">
            <HelpCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Got Questions About
            <span className="block text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Caliper Painting?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our professional caliper painting services, 
            process, pricing, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative bg-white">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions Quick Access */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Most Popular Questions</h2>
            <p className="text-gray-600">Quick answers to our most frequently asked questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularFAQs.slice(0, 6).map((faq) => (
              <div
                key={faq.id}
                onClick={() => {
                  setSelectedCategory(faq.category);
                  toggleExpanded(faq.id);
                  document.getElementById(`faq-${faq.id}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-red-50 hover:border-red-200 border-2 border-transparent cursor-pointer transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                    <Star className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {faq.answer.substring(0, 120)}...
                    </p>
                    <div className="text-red-600 text-sm font-medium mt-2 group-hover:underline">
                      Read full answer →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                
                <div className="space-y-2 mb-6">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-red-600 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1 text-sm">{category.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedCategory === category.id
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={expandAll}
                    className="flex-1 text-xs text-red-600 hover:text-red-700 font-medium"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={collapseAll}
                    className="flex-1 text-xs text-gray-600 hover:text-gray-700 font-medium"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selectedCategory === 'all' 
                      ? `All Questions (${filteredFAQs.length})` 
                      : `${categories.find(cat => cat.id === selectedCategory)?.name} (${filteredFAQs.length})`
                    }
                  </h3>
                  
                  {searchTerm && (
                    <div className="text-sm text-gray-600">
                      Showing results for "{searchTerm}"
                    </div>
                  )}
                </div>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No questions found</h4>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your search terms or browse different categories.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      Clear filters and show all questions
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <div
                        key={faq.id}
                        id={`faq-${faq.id}`}
                        className="border border-gray-200 rounded-lg hover:border-red-200 transition-colors duration-200"
                      >
                        <button
                          onClick={() => toggleExpanded(faq.id)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex items-start gap-3 flex-1">
                            {faq.popular && (
                              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Star className="w-3 h-3 text-red-600" />
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {faq.question}
                              </h4>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
                                  {faq.category.replace('-', ' ')}
                                </span>
                                {faq.popular && (
                                  <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                                    Popular
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {expandedItems.has(faq.id) ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>
                        
                        {expandedItems.has(faq.id) && (
                          <div className="px-4 pb-4">
                            <div className="pl-9 border-l-2 border-red-100">
                              <div className="pl-4">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                  {faq.answer}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                  {faq.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded cursor-pointer hover:bg-red-100 hover:text-red-700 transition-colors"
                                      onClick={() => setSearchTerm(tag)}
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us Directly</h3>
              <p className="text-gray-600 mb-4">
                Speak with our experts for immediate answers to your questions.
              </p>
              <a
                href="tel:+441615492993"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                0161 549 2993
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get a Quote</h3>
              <p className="text-gray-600 mb-4">
                Contact us for a personalized quote and consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                Contact Form
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">See Our Work</h3>
              <p className="text-gray-600 mb-4">
                Browse our gallery to see examples of our caliper painting.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                View Gallery
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Our experts are here to help! Get in touch for personalized advice
            and a free consultation about your caliper painting needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            
            <Link
              href="/caliper-painting"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center"
            >
              <Palette className="w-5 h-5 mr-2" />
              Learn About Our Process
            </Link>
          </div>

          <div className="flex justify-center gap-6 text-white">
            <Link href="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
            <span>•</span>
            <Link href="/gallery" className="hover:text-gray-200 transition-colors">
              Gallery
            </Link>
            <span>•</span>
            <a href="tel:+4401615492993" className="hover:text-gray-200 transition-colors">
            0161 549 2993
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;