'use client'

import { useState } from 'react'
import { Heart, Star, MapPin, MessageCircle, Phone, Mail, Calendar, ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface LikedContractor {
  id: string
  name: string
  businessName: string
  rating: number
  reviewCount: number
  location: string
  distance: string
  specialties: string[]
  profileImage: string
  priceRange: string
  availability: string
  responseTime: string
  matchScore: number
  matchedAt: string
  lastMessage?: string
  unreadMessages?: number
}

// Mock data - in real app this would come from user's matches
const LIKED_CONTRACTORS: LikedContractor[] = [
  {
    id: '7',
    name: 'Carlos Rivera',
    businessName: 'Desert Stone Works',
    rating: 4.9,
    reviewCount: 142,
    location: 'Phoenix, AZ',
    distance: '5.2 miles',
    specialties: ['Kitchen Remodeling', 'Granite Installation', 'Outdoor Kitchens'],
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    priceRange: '$$$',
    availability: 'Available in 2 weeks',
    responseTime: '< 2 hours',
    matchScore: 95,
    matchedAt: '2 hours ago',
    lastMessage: 'I\'d love to discuss your kitchen project!',
    unreadMessages: 2
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
    profileImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    priceRange: '$$$$',
    availability: 'Available now',
    responseTime: '< 1 hour',
    matchScore: 88,
    matchedAt: '1 day ago',
    lastMessage: 'Thanks for the match! When would you like to schedule a consultation?'
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
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    priceRange: '$$$',
    availability: 'Available in 1 week',
    responseTime: '< 30 minutes',
    matchScore: 92,
    matchedAt: '3 days ago'
  }
]

export default function LikedMatchesPage() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'unread'>('all')

  const filteredContractors = selectedTab === 'unread' 
    ? LIKED_CONTRACTORS.filter(contractor => contractor.unreadMessages && contractor.unreadMessages > 0)
    : LIKED_CONTRACTORS

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/matches" className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Your Matches</h1>
                <p className="text-sm text-gray-500">{LIKED_CONTRACTORS.length} contractors</p>
              </div>
            </div>
            <Link href="/matches" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Find More
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setSelectedTab('all')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'all'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All Matches ({LIKED_CONTRACTORS.length})
          </button>
          <button
            onClick={() => setSelectedTab('unread')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors relative ${
              selectedTab === 'unread'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            New Messages
            {LIKED_CONTRACTORS.filter(c => c.unreadMessages && c.unreadMessages > 0).length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {LIKED_CONTRACTORS.filter(c => c.unreadMessages && c.unreadMessages > 0).length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Matches List */}
      <div className="max-w-2xl mx-auto px-4 pb-6">
        {filteredContractors.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {selectedTab === 'unread' ? 'No new messages' : 'No matches yet'}
            </h3>
            <p className="text-gray-600 mb-4">
              {selectedTab === 'unread' 
                ? 'Check back later for new messages from your matches.'
                : 'Start swiping to find contractors you\'d like to work with!'
              }
            </p>
            <Link
              href="/matches"
              className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Heart className="w-5 h-5 mr-2" />
              Find Matches
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContractors.map((contractor) => (
              <div key={contractor.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-start space-x-4">
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={contractor.profileImage}
                        alt={contractor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 truncate">{contractor.name}</h3>
                          <p className="text-sm text-gray-600 truncate">{contractor.businessName}</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 ml-2">
                          <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                          {contractor.rating}
                        </div>
                      </div>

                      {/* Match Score & Distance */}
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {contractor.matchScore}% match
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {contractor.distance}
                        </span>
                        <span className="text-sm text-gray-500">{contractor.matchedAt}</span>
                      </div>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {contractor.specialties.slice(0, 2).map((specialty) => (
                          <span
                            key={specialty}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                        {contractor.specialties.length > 2 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{contractor.specialties.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* Last Message */}
                      {contractor.lastMessage && (
                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                          <p className="text-sm text-gray-700 line-clamp-2">
                            "{contractor.lastMessage}"
                          </p>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Link
                          href={`/chat/${contractor.id}`}
                          className="flex-1 bg-pink-500 hover:bg-pink-600 text-white text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors relative"
                        >
                          <MessageCircle className="w-4 h-4 inline mr-1" />
                          Message
                          {contractor.unreadMessages && contractor.unreadMessages > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {contractor.unreadMessages}
                            </span>
                          )}
                        </Link>
                        <Link
                          href={`/contractors/${contractor.id}`}
                          className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                        >
                          View Profile
                        </Link>
                        <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-3 rounded-lg transition-colors">
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Footer */}
                <div className="border-t border-gray-100 px-4 py-3">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {contractor.availability}
                    </div>
                    <div className="text-gray-600">
                      Responds in {contractor.responseTime}
                    </div>
                    <div className="text-gray-900 font-medium">
                      {contractor.priceRange}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      {filteredContractors.length > 0 && (
        <div className="bg-white border-t px-4 py-4 sticky bottom-0">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/matches"
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-center py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center"
            >
              <Heart className="w-5 h-5 mr-2" />
              Continue Matching
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
