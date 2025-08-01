import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Search, Users, MessageCircle, Star, ArrowRight, Sparkles, Home, Wrench } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Blueprint-Style Hero Section with Enhanced Animations */}
      <div className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Enhanced geometric shapes with better animations */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-16 w-16 h-16 border-2 border-blue-400/20 rotate-12 blueprint-float opacity-0 animate-scale-in delay-300"></div>
          <div className="absolute top-40 right-24 w-12 h-12 border border-blue-300/25 blueprint-float opacity-0 animate-bounce-in delay-500"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-blue-400/15 rotate-45 blueprint-float opacity-0 animate-scale-in delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-blue-400/20 blueprint-float opacity-0 animate-bounce-in delay-400"></div>
          <div className="absolute top-16 right-1/2 w-8 h-8 border border-blue-200/30 rounded-full blueprint-float opacity-0 animate-scale-in delay-600"></div>
          <div className="absolute bottom-20 right-20 w-14 h-14 border-2 border-blue-300/25 rotate-12 blueprint-float opacity-0 animate-bounce-in delay-800"></div>
        </div>

        {/* Blueprint grid background with subtle animation */}
        <div className="absolute inset-0 opacity-5 animate-pulse-slow">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1" fill="#3b82f6" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content with Staggered Animations */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-blue-200/20 rounded-full mb-6 opacity-0 animate-slide-in-left delay-100">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
                <span className="text-sm font-medium text-slate-700">AI-Powered Contractor Matching</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight opacity-0 animate-slide-in-left delay-200">
                <span className="text-blue-600 animate-glow-pulse">AI-Powered</span> Contractor
                <br />
                <span className="opacity-0 animate-slide-in-left delay-400">Matching</span> <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent opacity-0 animate-slide-in-left delay-500">Made Simple</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed opacity-0 animate-slide-in-left delay-600">
                REMODELY.AI connects homeowners with pre-vetted contractors using advanced AI matching algorithms. 
                Get matched with the perfect contractor for your remodeling project in minutes, not weeks.
              </p>

              {/* CTA Buttons with Enhanced Animations */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-in-bottom delay-700">
                <Link
                  href="/matches"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20 animate-glow-pulse"
                >
                  <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
                  Get AI Match
                </Link>
                <Link
                  href="/contractors"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-blue-200 hover:border-blue-300"
                >
                  <Search className="w-6 h-6 mr-3" />
                  Browse Contractors
                </Link>
              </div>
            </div>

            {/* Right Content - Professional Kitchen with Enhanced Animation */}
            <div className="relative opacity-0 animate-slide-in-right delay-300">
              <div className="relative bg-white/5 backdrop-blur-sm border border-blue-200/20 rounded-2xl overflow-hidden shadow-2xl animate-glow-pulse">
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10 opacity-0 animate-scale-in delay-500">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
                
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 animate-slide-in-left delay-600">
                  <span className="text-xs font-medium text-slate-700">Premium Remodeling</span>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/kitchen-white-modern.jpg"
                    alt="Beautiful modern kitchen with white cabinets, marble countertops and professional lighting - the quality of work REMODELY.AI contractors deliver"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 opacity-0 animate-slide-in-bottom delay-800">
                  <div className="text-white">
                    <h3 className="text-lg font-semibold mb-1">Premium Kitchen Transformation</h3>
                    <p className="text-sm text-white/90">AI-matched contractors deliver exceptional results</p>
                  </div>
                </div>
              </div>
              
              {/* Additional floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full backdrop-blur-sm opacity-0 animate-bounce-in delay-700"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-blue-400/30 rounded-full opacity-0 animate-scale-in delay-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Brands Section */}
      <div className="py-20 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Contractors & Homeowners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform connects homeowners with verified contractors across all remodeling specialties
            </p>
          </div>

          {/* Brand Logos Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <div className="flex justify-center group">
                <Image 
                  src="/caesarstone-logo.png" 
                  alt="Caesarstone - Premium Quartz Surfaces" 
                  width={120} 
                  height={60} 
                  className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" 
                />
              </div>
              <div className="flex justify-center group">
                <Image 
                  src="/cambria-logo.png" 
                  alt="Cambria - Natural Quartz Surfaces" 
                  width={120} 
                  height={60} 
                  className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" 
                />
              </div>
              <div className="flex justify-center group">
                <Image 
                  src="/silestone-logo.jpg" 
                  alt="Silestone - Engineered Stone" 
                  width={120} 
                  height={60} 
                  className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" 
                />
              </div>
              <div className="flex justify-center group">
                <Image 
                  src="/quartz-master-logo.png" 
                  alt="Quartz Master - Premium Stone Solutions" 
                  width={120} 
                  height={60} 
                  className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" 
                />
              </div>
              <div className="flex justify-center group">
                <div className="text-slate-400 group-hover:text-slate-600 font-semibold text-lg transition-colors duration-300 opacity-70 group-hover:opacity-100">MSI Stone</div>
              </div>
              <div className="flex justify-center group">
                <div className="text-slate-400 group-hover:text-slate-600 font-semibold text-lg transition-colors duration-300 opacity-70 group-hover:opacity-100">Hanstone</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Verified Contractors</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
              <div className="text-4xl font-bold text-slate-600 mb-2">100K+</div>
              <div className="text-gray-600 font-medium">Successful Matches</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Match Satisfaction</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
              <div className="text-4xl font-bold text-purple-600 mb-2">24hrs</div>
              <div className="text-gray-600 font-medium">Average Match Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How REMODELY.AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered matching system finds the perfect contractor for your specific project needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:bg-slate-50 p-8 rounded-2xl transition-all border border-transparent hover:border-blue-100">
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tell Our AI Your Needs</h3>
              <p className="text-gray-600">
                Share your project details, budget, timeline, and preferences. Our AI analyzes your requirements and matches you with ideal contractors.
              </p>
              <div className="mt-4 text-sm text-blue-600 font-medium">Smart Analysis in Seconds</div>
            </div>

            <div className="text-center group hover:bg-slate-50 p-8 rounded-2xl transition-all border border-transparent hover:border-green-100">
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Smart Matches</h3>
              <p className="text-gray-600">
                Receive 3-5 AI-selected contractor matches based on your specific needs, location, and project requirements. All contractors are pre-vetted.
              </p>
              <div className="mt-4 text-sm text-green-600 font-medium">Verified Professionals Only</div>
            </div>

            <div className="text-center group hover:bg-slate-50 p-8 rounded-2xl transition-all border border-transparent hover:border-purple-100">
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect & Complete</h3>
              <p className="text-gray-600">
                Review contractor profiles, read verified reviews, and connect directly. Our platform tracks your project from start to finish.
              </p>
              <div className="mt-4 text-sm text-purple-600 font-medium">End-to-End Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Materials Gallery Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Remodeling Services We Cover
            </h2>
            <p className="text-xl text-gray-600">
              From kitchens to bathrooms, our AI matches you with specialists in every remodeling category
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kitchen Remodeling */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group opacity-0 animate-slide-in-bottom delay-200">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/kitchen-luxury.jpg"
                  alt="Luxury kitchen remodeling with marble countertops, white cabinets, and pendant lighting"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-slate-700">Premium Kitchens</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kitchen Remodeling</h3>
                <p className="text-gray-600 mb-4">Complete kitchen renovations, countertops, cabinets, and appliance installation.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>AI-Matched Specialists</span>
                </div>
              </div>
            </div>

            {/* Bathroom Remodeling */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group opacity-0 animate-slide-in-bottom delay-400">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/bathroom-modern.jpg"
                  alt="Modern bathroom remodeling with elegant tiles, fixtures, and lighting"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-slate-700">Spa Bathrooms</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bathroom Remodeling</h3>
                <p className="text-gray-600 mb-4">Full bathroom renovations, tile work, plumbing, and fixture installations.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Certified Professionals</span>
                </div>
              </div>
            </div>

            {/* Living Room Renovation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group opacity-0 animate-slide-in-bottom delay-600">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/living-room-modern.jpg"
                  alt="Modern living room renovation with contemporary furniture and elegant design"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-slate-700">Living Spaces</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Living Room Renovation</h3>
                <p className="text-gray-600 mb-4">Complete living space transformations, flooring, lighting, and design services.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Design Excellence</span>
                </div>
              </div>
            </div>

            {/* Roofing */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group opacity-0 animate-slide-in-bottom delay-300">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/roofing-professional.jpg"
                  alt="Professional roofing and exterior work showing quality craftsmanship and materials"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-slate-700">Expert Roofing</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Roofing & Exteriors</h3>
                <p className="text-gray-600 mb-4">Roof replacement, repair, siding, and exterior home improvements.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>

            {/* HVAC */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group opacity-0 animate-slide-in-bottom delay-500">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/hvac-electrical.jpg"
                  alt="Professional HVAC and electrical installation work showing technical expertise"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-slate-700">HVAC & Electrical</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">HVAC & Electrical</h3>
                <p className="text-gray-600 mb-4">Heating, cooling, electrical work, and smart home installations.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Expert Technicians</span>
                </div>
              </div>
            </div>

            {/* General Contracting */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group opacity-0 animate-slide-in-bottom delay-700">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/general-contracting.jpg"
                  alt="Professional general contracting and construction work showing comprehensive building expertise"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-slate-700">Full Service</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">General Contracting</h3>
                <p className="text-gray-600 mb-4">Full home renovations, additions, and custom construction projects.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Project Management</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contractors"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Find Specialists for Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Success Stories Section - Inspired by Houzz */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hear From the People Behind the Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from contractors and homeowners who found success through REMODELY.AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contractor Success Story */}
                        {/* Contractor Success Story */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MG
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "REMODELY.AI connects us with homeowners who value quality stone fabrication. We've maintained our 5.0 rating with 549+ reviews!"
              </blockquote>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Mirage Marble & Granite</div>
                <div>Stone Fabrication Specialists, Peoria, AZ</div>
                <div className="text-blue-600 mt-2">Family Business Since 2008</div>
              </div>
            </div>

            {/* Homeowner Success Story */}
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MM
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "Mirage Marble & Granite transformed our kitchen beyond expectations! Perfect 5-star rating and incredible craftsmanship."
              </blockquote>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Maria Martinez</div>
                <div>Homeowner, Peoria, AZ</div>
                <div className="text-green-600 mt-2">Kitchen Remodel Completed</div>
              </div>
            </div>

            {/* Business Growth Story */}
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  RL
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "We've grown from $500K to $2M in revenue using REMODELY.AI. The platform brings us exactly the right clients."
              </blockquote>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Robert Lee</div>
                <div>Premier Construction Group</div>
                <div className="text-purple-600 mt-2">150+ Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">24hr</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Verified Reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">$10M+</div>
              <div className="text-sm text-gray-600">Projects Facilitated</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Contractor?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of homeowners who found their ideal contractor through REMODELY.AI. 
            Let our AI match you with pre-vetted professionals in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/matches"
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-6 h-6 mr-2 text-blue-500" />
              Get AI Match Now
            </Link>
            <Link
              href="/contractors"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Browse All Contractors
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">AI-Powered</div>
              <div className="text-blue-200">Smart matching algorithms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Pre-Vetted</div>
              <div className="text-blue-200">All contractors verified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Fast Results</div>
              <div className="text-blue-200">Matches in under 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
