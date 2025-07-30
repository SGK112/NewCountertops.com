'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, User, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('Austin, TX')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/contractors?search=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}`)
    }
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              {/* Logo Icon */}
              <div className="w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#1e40af' }} />
                      <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="12" width="24" height="4" rx="1" fill="url(#navGradient)"/>
                  <rect x="4" y="16" width="24" height="3" rx="0.5" fill="#1e3a8a" opacity="0.7"/>
                  <circle cx="24" cy="13.5" r="1.5" fill="#f59e0b" opacity="0.8"/>
                </svg>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-lg font-bold text-blue-600 leading-tight">NewCountertops</span>
                <span className="text-xs font-semibold text-orange-500 -mt-1">.com</span>
              </div>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex bg-gray-50 rounded-lg overflow-hidden">
                <div className="flex items-center px-3 bg-gray-100 border-r border-gray-200">
                  <Search className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search contractors, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 bg-gray-50 focus:outline-none focus:bg-white transition-colors"
                />
                <div className="flex items-center px-3 border-l border-gray-200">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-24 bg-transparent focus:outline-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-medium transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/contractors" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Find Contractors
            </Link>
            <Link 
              href="/matches" 
              className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Find Matches
            </Link>
            <Link 
              href="/quote" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Quotes
            </Link>
            <div className="flex items-center space-x-3">
              <Link 
                href="/signup/contractor" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                For Contractors
              </Link>
              <Link 
                href="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
              >
                Sign Up
              </Link>
              <Link 
                href="/quote" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
              >
                Get Quotes
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-3 space-y-3 bg-white border-t">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="space-y-2">
              <div className="flex bg-gray-50 rounded-lg overflow-hidden">
                <div className="flex items-center px-3 bg-gray-100">
                  <Search className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search contractors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-50 focus:outline-none focus:bg-white text-sm"
                />
              </div>
              <div className="flex bg-gray-50 rounded-lg overflow-hidden">
                <div className="flex items-center px-3 bg-gray-100">
                  <MapPin className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-50 focus:outline-none focus:bg-white text-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-medium text-sm"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="border-t pt-3 space-y-1">
              <Link
                href="/contractors"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Find Contractors
              </Link>
              <Link
                href="/matches"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Find Matches
              </Link>
              <Link
                href="/quote"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Get Quotes
              </Link>
              <Link
                href="/signup/contractor"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Join as Contractor
              </Link>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
                <Link
                  href="/quote"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-orange-500 text-white hover:bg-orange-600 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quotes
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
