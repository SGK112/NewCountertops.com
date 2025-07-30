'use client'

import { useState } from 'react'
import { Heart, X, Star, MapPin, Phone, Mail, Calendar, Users, CheckCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'

interface ContractorMatch {
  id: string
  name: string
  businessName: string
  rating: number
  reviewCount: number
  location: string
  distance: string
  specialties: string[]
  yearsExperience: number
  profileImage: string
  portfolioImages: string[]
  description: string
  priceRange: string
  availability: string
  responseTime: string
  matchScore: number
}

const CONTRACTOR_MATCHES: ContractorMatch[] = [
  {
    id: '7',
    name: 'Carlos Rivera',
    businessName: 'Desert Stone Works',
    rating: 4.9,
    reviewCount: 142,
    location: 'Phoenix, AZ',
    distance: '5.2 miles',
    specialties: ['Kitchen Remodeling', 'Granite Installation', 'Outdoor Kitchens'],
    yearsExperience: 14,
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909114-4e4fa72bb41c?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909011-7309f48f79b6?w=300&h=200&fit=crop'
    ],
    description: 'Phoenix premier granite contractor specializing in desert-inspired designs and outdoor kitchen installations. Expert in heat-resistant stone solutions.',
    priceRange: '$$$',
    availability: 'Available in 2 weeks',
    responseTime: '< 2 hours',
    matchScore: 95
  },
  {
    id: '8',
    name: 'Amanda Foster',
    businessName: 'Scottsdale Granite & Marble',
    rating: 4.8,
    reviewCount: 96,
    location: 'Scottsdale, AZ',
    distance: '8.7 miles',
    specialties: ['Luxury Kitchen Design', 'Marble Work', 'Custom Fabrication'],
    yearsExperience: 16,
    profileImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=200&fit=crop'
    ],
    description: 'Luxury stone fabrication serving Scottsdale and Phoenix. Specializes in high-end residential projects with Italian marble and exotic granite.',
    priceRange: '$$$$',
    availability: 'Available now',
    responseTime: '< 1 hour',
    matchScore: 88
  },
  {
    id: '10',
    name: 'Rachel Kim',
    businessName: 'Phoenix Premier Surfaces',
    rating: 4.9,
    reviewCount: 134,
    location: 'Phoenix, AZ',
    distance: '3.4 miles',
    specialties: ['Modern Kitchen Design', 'Quartz Countertops', 'Contemporary Styling'],
    yearsExperience: 13,
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909182-11c1b3d0af01?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909114-4f678e4ced90?w=300&h=200&fit=crop'
    ],
    description: 'Award-winning designer and fabricator specializing in modern, sleek kitchen designs. Expert in contemporary quartz installations and minimalist aesthetics.',
    priceRange: '$$$',
    availability: 'Available in 1 week',
    responseTime: '< 30 minutes',
    matchScore: 92
  }
]

export default function MatchesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedContractors, setLikedContractors] = useState<string[]>([])
  const [passedContractors, setPassedContractors] = useState<string[]>([])
  const [showMatch, setShowMatch] = useState(false)
  const [currentMatch, setCurrentMatch] = useState<ContractorMatch | null>(null)

  const currentContractor = CONTRACTOR_MATCHES[currentIndex]

  const handleLike = () => {
    if (currentContractor) {
      setLikedContractors(prev => [...prev, currentContractor.id])
      setCurrentMatch(currentContractor)
      setShowMatch(true)
      
      setTimeout(() => {
        setShowMatch(false)
        nextContractor()
      }, 2000)
    }
  }

  const handlePass = () => {
    if (currentContractor) {
      setPassedContractors(prev => [...prev, currentContractor.id])
      nextContractor()
    }
  }

  const nextContractor = () => {
    if (currentIndex < CONTRACTOR_MATCHES.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  if (!currentContractor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-10 h-10 text-pink-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No More Matches</h2>
          <p className="text-gray-600 mb-6">You've seen all available contractors in your area.</p>
          <div className="space-y-3">
            <Link
              href="/matches/liked"
              className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              View Your Matches ({likedContractors.length})
            </Link>
            <Link
              href="/contractors"
              className="block w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Browse All Contractors
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-pink-500">
              NewCountertops
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/matches/liked" className="relative">
                <Heart className="w-6 h-6 text-gray-600" />
                {likedContractors.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {likedContractors.length}
                  </span>
                )}
              </Link>
              <button className="text-gray-600">
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Match Score */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 mr-1 fill-current" />
            {currentContractor.matchScore}% Match
          </div>
        </div>

        {/* Contractor Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 relative">
          {/* Profile Image */}
          <div className="relative h-96">
            <img
              src={currentContractor.profileImage}
              alt={currentContractor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="text-2xl font-bold mb-1">{currentContractor.name}</h2>
              <p className="text-lg mb-2">{currentContractor.businessName}</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  {currentContractor.rating} ({currentContractor.reviewCount})
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {currentContractor.distance}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-4 space-y-4">
            {/* Specialties */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Specializes in:</h3>
              <div className="flex flex-wrap gap-2">
                {currentContractor.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-3 border-t border-b border-gray-100">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{currentContractor.yearsExperience}</div>
                <div className="text-xs text-gray-500">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{currentContractor.priceRange}</div>
                <div className="text-xs text-gray-500">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">
                  <CheckCircle className="w-5 h-5 mx-auto" />
                </div>
                <div className="text-xs text-gray-500">Verified</div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-green-800">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {currentContractor.availability}
                  </div>
                  <div className="text-xs text-green-600">
                    Responds in {currentContractor.responseTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {currentContractor.description}
              </p>
            </div>

            {/* Portfolio Preview */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Recent Work:</h3>
              <div className="flex space-x-2">
                {currentContractor.portfolioImages.slice(0, 2).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Portfolio"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                ))}
                <Link
                  href={`/contractors/${currentContractor.id}`}
                  className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500"
                >
                  <span className="text-xs">View All</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePass}
            className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:border-gray-400 transition-colors"
          >
            <X className="w-8 h-8 text-gray-500" />
          </button>
          
          <button
            onClick={handleLike}
            className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:from-pink-600 hover:to-red-600 transition-all transform hover:scale-105"
          >
            <Heart className="w-10 h-10 text-white fill-current" />
          </button>
        </div>

        {/* Instructions */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>❌ Pass • ❤️ Connect</p>
          <p className="mt-1">Swipe or tap to find your perfect contractor match!</p>
        </div>
      </div>

      {/* Match Modal */}
      {showMatch && currentMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-white fill-current" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">It's a Match!</h2>
            <p className="text-gray-600 mb-4">
              You and <strong>{currentMatch.name}</strong> are interested in working together!
            </p>
            <div className="space-y-2">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Send Message
              </button>
              <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
