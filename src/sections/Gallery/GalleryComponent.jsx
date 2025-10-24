"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  X,
  Play,
  Camera,
  Home,
  Palette,
  Eye,
  ZoomIn,
  Grid3X3,
  Filter,
  Star,
  MessageCircle,
} from 'lucide-react';

const GalleryComponent = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all');
  const [layoutView, setLayoutView] = useState('grid');

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: '/assets/caliper2.jpg',
      title: 'Ferrari Red Transformation',
      description: 'BMW M3 brake calipers painted in signature Ferrari red',
      category: 'ferrari-red',
      featured: true
    },
    {
      id: 2,
      type: 'image',
      src: '/assets/caliper1.jpg',
      title: 'Performance Yellow Finish',
      description: 'Audi RS6 calipers with custom performance blue coating',
      category: 'yellow',
      featured: false
    },
    {
      id: 3,
      type: 'image',
      src: '/assets/caliper3.jpg',
      title: 'Brembo Yellow Classic',
      description: 'Porsche 911 calipers in authentic Brembo yellow',
      category: 'ferrari-red',
      featured: true
    },
    {
      id: 4,
      type: 'video',
      src: '/videos/video1.mp4',
      poster: '/assets/caliper4.jpg',
      title: 'Professional Painting Process',
      description: 'Watch our expert technique in action',
      category: 'process',
      featured: true
    },
    {
      id: 5,
      type: 'image',
      src: '/assets/caliper5.jpg',
      title: 'Professional paint protection',
      description: 'Mercedes AMG calipers with paint protection',
      category: 'process',
      featured: false
    },
    {
      id: 6,
      type: 'image',
      src: '/assets/caliper6.jpg',
      title: 'Racing Green Heritage',
      description: 'Jaguar F-Type calipers in classic ferrari red',
      category: 'ferrari-red',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: galleryItems.length },
    { id: 'ferrari-red', name: 'Ferrari Red', count: galleryItems.filter(item => item.category === 'ferrari-red').length },
    { id: 'yellow', name: 'Yellow', count: galleryItems.filter(item => item.category === 'yellow').length },
    { id: 'blue', name: 'Blue', count: galleryItems.filter(item => item.category === 'blue').length },
    { id: 'black', name: 'Black', count: galleryItems.filter(item => item.category === 'black').length },
    { id: 'green', name: 'Green', count: galleryItems.filter(item => item.category === 'green').length },
    { id: 'process', name: 'Process', count: galleryItems.filter(item => item.category === 'process').length }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedMedia) return;
      
      if (e.key === 'Escape') {
        setSelectedMedia(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedMedia(filteredItems[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id);
        const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
        setSelectedMedia(filteredItems[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedMedia, filteredItems]);

  const openLightbox = (item) => {
    setSelectedMedia(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedMedia(filteredItems[newIndex]);
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
            <span className="text-red-600 font-medium">Gallery</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-8">
            <Camera className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Our Work Portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Caliper Painting
            <span className="block text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of professionally painted brake calipers. 
            From Ferrari red to custom colors, see the transformation we can achieve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/caliper-painting"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              <Palette className="w-5 h-5" />
              Our Process
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
            >
              Get Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLayoutView('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    layoutView === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setLayoutView('masonry')}
                  className={`p-2 rounded-lg transition-colors ${
                    layoutView === 'masonry' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>
              
              <span className="text-gray-600 text-sm">
                {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-6 ${
            layoutView === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'columns-1 md:columns-2 lg:columns-3'
          }`}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  item.featured ? 'ring-2 ring-red-500 ring-opacity-50' : ''
                } ${layoutView === 'masonry' ? 'break-inside-avoid mb-6' : ''}`}
                onClick={() => openLightbox(item)}
              >
                {item.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                <div className="relative overflow-hidden">
                  {item.type === 'video' ? (
                    <div className="relative aspect-video">
                      <img
                        src={item.poster}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                          VIDEO
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-square md:aspect-video">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 p-2 rounded-full">
                          <ZoomIn className="w-4 h-4 text-gray-700" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        item.category === 'ferrari-red' ? 'bg-red-600' :
                        item.category === 'blue' ? 'bg-blue-600' :
                        item.category === 'yellow' ? 'bg-yellow-400' :
                        item.category === 'black' ? 'bg-gray-800' :
                        item.category === 'green' ? 'bg-green-600' :
                        'bg-gray-400'
                      }`}></div>
                      <span className="text-xs text-gray-500 capitalize">
                        {item.category.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Calipers Painted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Color Options</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Your Caliper Transformation?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied customers who've transformed their vehicles 
            with our professional caliper painting service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Quote
            </Link>
            
            <Link
              href="/caliper-painting"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center"
            >
              <Palette className="w-5 h-5 mr-2" />
              Learn About Process
            </Link>
          </div>

          <div className="flex justify-center gap-6 text-red-100">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQs
            </Link>
            <span>•</span>
            <a href="tel:+441615492993" className="hover:text-white transition-colors">
            0161 549 2993
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox('prev')}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-4 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateLightbox('next')}
              aria-label="Next image"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-4 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-4 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Content */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              {selectedMedia.type === 'video' ? (
                <div className="relative">
                  <video
                    controls
                    autoPlay
                    className="w-full max-h-[70vh] object-contain"
                    poster={selectedMedia.poster}
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full max-h-[70vh] object-contain"
                />
              )}
              
              {/* Media Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedMedia.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${
                      selectedMedia.category === 'ferrari-red' ? 'bg-red-600' :
                      selectedMedia.category === 'blue' ? 'bg-blue-600' :
                      selectedMedia.category === 'yellow' ? 'bg-yellow-400' :
                      selectedMedia.category === 'black' ? 'bg-gray-800' :
                      selectedMedia.category === 'green' ? 'bg-green-600' :
                      'bg-gray-400'
                    }`}></div>
                    <span className="text-sm text-gray-500 capitalize">
                      {selectedMedia.category.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {filteredItems.findIndex(item => item.id === selectedMedia.id) + 1} of {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;