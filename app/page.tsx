import Link from 'next/link'
import { Search, Users, MessageCircle, Star, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Professional Stone-Inspired Hero Section */}
      <div className="stone-texture bg-gradient-to-br from-stone-50 via-stone-100 to-neutral-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden" style={{
        background: 'var(--gradient-hero)'
      }}>
        {/* Enhanced natural stone pattern background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stone-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="var(--stone-accent-copper)" />
                <circle cx="20" cy="20" r="1.5" fill="var(--stone-marble-gold)" opacity="0.6" />
                <circle cx="60" cy="60" r="1.5" fill="var(--stone-accent-bronze)" opacity="0.6" />
                <circle cx="20" cy="60" r="1" fill="var(--stone-granite-medium)" opacity="0.4" />
                <circle cx="60" cy="20" r="1" fill="var(--stone-accent-copper)" opacity="0.4" />
                <circle cx="10" cy="40" r="0.8" fill="var(--stone-marble-gold)" opacity="0.3" />
                <circle cx="70" cy="40" r="0.8" fill="var(--stone-accent-gold)" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stone-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Mobile-optimized headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Premium <span className="text-gradient">Stone & Surface</span>
              <br />
              <span className="text-stone-600 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Contractors</span>
            </h1>

            {/* Mobile-first description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
              Connect with certified professionals specializing in granite, quartz, marble, and premium countertop installations.
              <span className="block mt-2 font-medium text-stone-700">Expert craftsmanship meets natural beauty.</span>
            </p>

            {/* Mobile-optimized CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
              <Link
                href="/quote"
                className="btn-primary text-base sm:text-lg flex items-center justify-center order-1 sm:order-none"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                Get Free Quotes
              </Link>
              <Link
                href="/contractors"
                className="btn-stone text-base sm:text-lg flex items-center justify-center"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                <span>Browse Contractors</span>
              </Link>
            </div>

            {/* Professional Stats with Enhanced Stone Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center card card-hover" style={{
                background: 'linear-gradient(135deg, var(--stone-quartz-white) 0%, var(--stone-quartz-pearl) 50%, var(--stone-marble-beige) 100%)',
                borderColor: 'rgba(212, 175, 55, 0.25)'
              }}>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="font-semibold text-sm sm:text-base" style={{ color: 'var(--stone-granite-dark)' }}>Certified Fabricators</div>
                <div className="text-xs sm:text-sm mt-1" style={{ color: 'var(--stone-granite-medium)' }}>Premium stone specialists</div>
              </div>
              <div className="text-center card card-hover" style={{
                background: 'linear-gradient(135deg, var(--stone-quartz-white) 0%, #f0fdf4 50%, #dcfce7 100%)',
                borderColor: 'rgba(34, 197, 94, 0.25)'
              }}>
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--stone-granite-brown)' }}>98%</div>
                <div className="font-semibold text-sm sm:text-base" style={{ color: 'var(--stone-granite-dark)' }}>Client Satisfaction</div>
                <div className="text-xs sm:text-sm mt-1" style={{ color: 'var(--stone-granite-medium)' }}>Quality guaranteed</div>
              </div>
              <div className="text-center card card-hover sm:col-span-1 col-span-1" style={{
                background: 'linear-gradient(135deg, var(--stone-quartz-white) 0%, #fffbeb 50%, #fef3c7 100%)',
                borderColor: 'rgba(205, 127, 50, 0.25)'
              }}>
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--stone-accent-copper)' }}>$5M+</div>
                <div className="font-semibold text-sm sm:text-base" style={{ color: 'var(--stone-granite-dark)' }}>Projects Delivered</div>
                <div className="text-xs sm:text-sm mt-1" style={{ color: 'var(--stone-granite-medium)' }}>Professional installations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Stone Brands Section */}
      <div className="py-12 sm:py-16 lg:py-20 border-t" style={{
        background: 'linear-gradient(to bottom, var(--stone-quartz-pearl), var(--stone-marble-beige))',
        borderColor: 'rgba(212, 175, 55, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--stone-granite-dark)' }}>
              Premium Stone & Surface Partners
            </h2>
            <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--stone-granite-medium)' }}>
              Our certified contractors are authorized dealers for the world's finest stone brands,
              <span className="block mt-1 font-medium" style={{ color: 'var(--stone-granite-dark)' }}>ensuring authenticity and expert installation</span>
            </p>
          </div>

          {/* Placeholder for brand logos - to be added later */}
          <div className="text-center py-8">
            <p className="text-lg font-medium text-stone-600 mb-6">Trusted by Leading Surface Manufacturers</p>
            <div className="flex flex-wrap justify-center gap-3 text-white font-medium">
              {/* Premium Quartz Brands */}
              <Link href="/manufacturers/silestone" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Silestone by Cosentino</Link>
              <Link href="/manufacturers/caesarstone" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Caesarstone</Link>
              <Link href="/manufacturers/cambria" className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Cambria</Link>
              <Link href="/manufacturers/quartz-master" className="px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Quartz Master</Link>
              <Link href="/manufacturers/msi-stone" className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">MSI Stone</Link>
              <Link href="/manufacturers/hanstone" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">HanStone Quartz</Link>
              <a href="https://www.lgviatera.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">LG Viatera</a>
              <a href="https://www.wilsonart.com/quartz" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Wilsonart Quartz</a>
              <a href="https://www.samsung.com/us/home-appliances/kitchen-appliances/radianz" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Samsung Radianz</a>

              {/* Ultra-Compact Surfaces */}
              <a href="https://www.dekton.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Dekton by Cosentino</a>
              <a href="https://www.neolith.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Neolith</a>
              <a href="https://www.lapitec.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Lapitec</a>

              {/* Solid Surface */}
              <a href="https://www.himacs.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">HI-MACS</a>
              <Link href="/manufacturers/corian" className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Corian</Link>
              <a href="https://www.avonite.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Avonite</a>
              <a href="https://www.staron.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-rose-600 to-rose-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Staron</a>

              {/* Laminate Surfaces */}
              <Link href="/manufacturers/formica" className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Formica</Link>
              <a href="https://www.wilsonart.com/laminate" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-lime-600 to-lime-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Wilsonart Laminate</a>
              <a href="https://www.pionite.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-sky-600 to-sky-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Pionite</a>
              <a href="https://www.arborite.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Arborite</a>

              {/* Additional Premium Brands */}
              <a href="https://www.quartzforms.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-stone-600 to-stone-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Quartzforms</a>
              <a href="https://www.vicostone.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Vicostone</a>
              <a href="https://www.compac.es" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-neutral-600 to-neutral-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Compac</a>
              <a href="https://www.polarstone.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">Polarstone</a>
            </div>
          </div>          {/* Professional Benefits */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center card p-6 bg-gradient-to-br from-white to-stone-50">
              <div className="w-12 h-12 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6" style={{ color: 'var(--stone-accent-copper)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Certified Fabricators</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Factory-trained professionals with direct brand authorization and authentic material access</p>
            </div>
            <div className="text-center card p-6 bg-gradient-to-br from-white to-emerald-50">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Full Warranties</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Complete manufacturer warranties on materials plus professional installation guarantees</p>
            </div>
            <div className="text-center card p-6 bg-gradient-to-br from-white to-amber-50 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6" style={{ color: 'var(--stone-granite-brown)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Premium Quality</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Only the finest grade materials from world-renowned stone manufacturers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Process Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Professional Stone Installation Process
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certified fabricators follow industry best practices for flawless results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group h-full">
              <div className="relative mb-6 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Project Consultation</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">Share your vision, material preferences, budget, and timeline with certified fabricators</p>
                <Link href="/signup" className="btn-primary text-sm inline-flex items-center justify-center mt-auto">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group h-full">
              <div className="relative mb-6 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl font-bold text-slate-700">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                  <Users className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Expert Matching</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">Our algorithm connects you with specialized stone contractors in your area</p>
                <Link href="/matches" className="btn-secondary text-sm inline-flex items-center justify-center mt-auto">
                  View Matches <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group h-full">
              <div className="relative mb-6 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Compare Proposals</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">Review portfolios, get detailed quotes, and chat directly with fabricators</p>
                <Link href="/quote" className="btn-primary text-sm inline-flex items-center justify-center mt-auto">
                  Get Quotes <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group h-full">
              <div className="relative mb-6 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl font-bold text-slate-700">4</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Professional Installation</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">Book your project and enjoy expert fabrication and flawless installation</p>
                <Link href="/contractors" className="btn-secondary text-sm inline-flex items-center justify-center mt-auto">
                  Find Contractors <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Contractors */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Certified Contractors
            </h2>
            <p className="text-xl text-gray-600">
              Premium stone specialists with verified credentials and outstanding portfolios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contractor 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
                  alt="Carlos Rivera"
                  className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Carlos Rivera</h3>
                  <p className="text-sm text-blue-600 font-medium">Desert Stone Works</p>
                  <p className="text-xs text-gray-500">Licensed • Insured • 15+ Years</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold text-gray-900">4.9</span>
                  <span className="ml-2 text-gray-600 text-sm">(142 reviews)</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Granite</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Outdoor Kitchens</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">Commercial</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Master craftsman specializing in heat-resistant granite solutions and luxury outdoor kitchen installations. Arizona's premier stone contractor.
                </p>
              </div>
              <Link
                href="/contractors/1"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg text-center block transition-all duration-200 font-medium"
              >
                View Profile & Match
              </Link>
            </div>

            {/* Contractor 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face"
                  alt="Amanda Foster"
                  className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Amanda Foster</h3>
                  <p className="text-sm text-blue-600 font-medium">Scottsdale Granite & Marble</p>
                  <p className="text-xs text-gray-500">Licensed • Insured • 12+ Years</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold text-gray-900">4.8</span>
                  <span className="ml-2 text-gray-600 text-sm">(96 reviews)</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-1 rounded-full">Marble</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">Luxury Design</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Custom Work</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Award-winning luxury stone fabrication specialist. Expert in Italian marble, exotic granite, and bespoke countertop designs for high-end homes.
                </p>
              </div>
              <Link
                href="/contractors/2"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg text-center block transition-all duration-200 font-medium"
              >
                View Profile & Match
              </Link>
            </div>

            {/* Contractor 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face"
                  alt="Rachel Kim"
                  className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Rachel Kim</h3>
                  <p className="text-sm text-blue-600 font-medium">Phoenix Premier Surfaces</p>
                  <p className="text-xs text-gray-500">Licensed • Insured • 18+ Years</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold text-gray-900">4.9</span>
                  <span className="ml-2 text-gray-600 text-sm">(134 reviews)</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">Quartz</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded-full">Modern Design</span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">Eco-Friendly</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Innovative modern kitchen specialist focusing on sustainable quartz installations and cutting-edge design solutions. Multiple industry awards winner.
                </p>
              </div>
              <Link
                href="/contractors/3"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg text-center block transition-all duration-200 font-medium"
              >
                View Profile & Match
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Space with
            <span className="block text-blue-400">Premium Stone Surfaces?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of homeowners who've found their ideal stone contractor through our professional matching platform.
            Get connected with certified experts who deliver exceptional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Project Today
            </Link>
            <Link
              href="/signup/contractor"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Join as Professional Contractor
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-blue-400">
              <div className="text-2xl font-bold">Licensed</div>
              <div className="text-sm text-slate-400">Verified Professionals</div>
            </div>
            <div className="text-green-400">
              <div className="text-2xl font-bold">Insured</div>
              <div className="text-sm text-slate-400">Full Coverage Protection</div>
            </div>
            <div className="text-purple-400">
              <div className="text-2xl font-bold">Bonded</div>
              <div className="text-sm text-slate-400">Quality Guaranteed</div>
            </div>
            <div className="text-yellow-400">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-slate-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
