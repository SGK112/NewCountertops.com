import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Star, Shield, Award } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Footer Logo */}
              <div className="w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="12" width="24" height="4" rx="1" fill="#3b82f6"/>
                  <rect x="4" y="16" width="24" height="3" rx="0.5" fill="#1e3a8a" opacity="0.7"/>
                  <circle cx="24" cy="13.5" r="1.5" fill="#f59e0b" opacity="0.8"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">NewCountertops</span>
                <span className="text-lg font-semibold text-orange-400">.com</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Connecting homeowners with trusted granite contractors and fabricators 
              across the country. Get quality work done by verified professionals.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center text-blue-400 mb-1">
                  <Star className="w-5 h-5 mr-1" />
                  <span className="font-bold">4.9</span>
                </div>
                <div className="text-xs text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-green-400 mb-1">
                  <Shield className="w-5 h-5 mr-1" />
                  <span className="font-bold">500+</span>
                </div>
                <div className="text-xs text-gray-400">Verified Contractors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-orange-400 mb-1">
                  <Award className="w-5 h-5 mr-1" />
                  <span className="font-bold">10K+</span>
                </div>
                <div className="text-xs text-gray-400">Projects Completed</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contractors" className="text-gray-300 hover:text-white transition-colors">
                  Find Contractors
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/for-contractors" className="text-gray-300 hover:text-white transition-colors">
                  For Contractors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">1-800-GRANITE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">hello@newcountertops.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">Nationwide Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Locations */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Popular Locations</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
            {[
              'Austin, TX', 'Dallas, TX', 'Houston, TX', 'San Antonio, TX',
              'Phoenix, AZ', 'Scottsdale, AZ', 'Denver, CO', 'Colorado Springs, CO',
              'Atlanta, GA', 'Miami, FL', 'Orlando, FL', 'Tampa, FL',
              'Las Vegas, NV', 'Reno, NV', 'Los Angeles, CA', 'San Diego, CA',
              'Chicago, IL', 'Nashville, TN', 'Charlotte, NC', 'Raleigh, NC',
              'Seattle, WA', 'Portland, OR', 'Salt Lake City, UT', 'Boise, ID'
            ].map((location) => (
              <Link
                key={location}
                href={`/contractors?location=${encodeURIComponent(location)}`}
                className="text-gray-400 hover:text-blue-400 transition-colors py-1"
              >
                {location}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 NewCountertops.com. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
