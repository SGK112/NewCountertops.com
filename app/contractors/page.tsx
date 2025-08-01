'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { Search, MapPin, Star, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useLocation } from '@/components/providers/LocationProvider'
import LocationRequest from '@/components/ui/LocationRequest'
import { LocationRequestCompact } from '@/components/ui/LocationRequest'
import ImageService from '@/lib/imageService'

interface Contractor {
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
  verified: boolean
  phone: string
  website?: string
  priceRange: string
}

const MOCK_CONTRACTORS: Contractor[] = [
  {
    id: '1',
    name: 'Michael Rodriguez',
    businessName: 'Rodriguez Granite Works',
    rating: 4.9,
    reviewCount: 127,
    location: 'Austin, TX',
    distance: '2.3 miles',
    specialties: ['Kitchen Remodeling', 'Bathroom Renovation', 'Countertop Installation'],
    yearsExperience: 15,
    profileImage: '/api/placeholder/150/150',
    portfolioImages: [
      '/api/placeholder/300/200',
      '/api/placeholder/300/200'
    ],
    description: 'Specializing in premium kitchen and bathroom remodeling with over 15 years of experience. Family-owned business committed to quality craftsmanship.',
    verified: true,
    phone: '(512) 555-0123',
    website: 'rodriguezgranite.com',
    priceRange: '$$$'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    businessName: 'Precision Stone Solutions',
    rating: 4.8,
    reviewCount: 89,
    location: 'Austin, TX',
    distance: '3.7 miles',
    specialties: ['Bathroom Remodeling', 'Custom Fabrication', 'Natural Stone'],
    yearsExperience: 12,
    profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b367?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=200&fit=crop'
    ],
    description: 'Award-winning stone fabrication and installation. Specialized in luxury bathroom and kitchen projects with precise attention to detail.',
    verified: true,
    phone: '(512) 555-0456',
    priceRange: '$$$$'
  },
  {
    id: '3',
    name: 'David Thompson',
    businessName: 'Hill Country Granite',
    rating: 4.7,
    reviewCount: 156,
    location: 'Cedar Park, TX',
    distance: '8.1 miles',
    specialties: ['Kitchen Remodeling', 'Granite Installation', 'Marble Work'],
    yearsExperience: 20,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909114-4e4fa72bb41c?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909011-7309f48f79b6?w=300&h=200&fit=crop'
    ],
    description: 'Two decades of experience in premium stone installation. Serving the greater Austin area with exceptional craftsmanship and reliability.',
    verified: true,
    phone: '(512) 555-0789',
    website: 'hillcountrygranite.com',
    priceRange: '$$$'
  },
  {
    id: '4',
    name: 'Jennifer Martinez',
    businessName: 'Elite Kitchen & Bath',
    rating: 4.9,
    reviewCount: 203,
    location: 'Round Rock, TX',
    distance: '12.4 miles',
    specialties: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Quartz Countertops', 'Interior Design'],
    yearsExperience: 18,
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909114-355b4e88f73b?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909114-2e6c4fb81ef3?w=300&h=200&fit=crop'
    ],
    description: 'Full-service kitchen and bathroom remodeling with integrated design services. Specializing in modern and contemporary stone installations.',
    verified: true,
    phone: '(512) 555-0321',
    website: 'elitekitchenbath.com',
    priceRange: '$$$$'
  },
  {
    id: '5',
    name: 'Robert Johnson',
    businessName: 'Johnson Stone Craftsmen',
    rating: 4.6,
    reviewCount: 94,
    location: 'Georgetown, TX',
    distance: '15.2 miles',
    specialties: ['Granite Installation', 'Custom Fabrication', 'Outdoor Kitchens'],
    yearsExperience: 14,
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909182-3c5fe4bb8d83?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909114-ec3ad4b1a8ec?w=300&h=200&fit=crop'
    ],
    description: 'Master craftsmen specializing in unique stone installations including outdoor kitchens and custom commercial projects.',
    verified: false,
    phone: '(512) 555-0654',
    priceRange: '$$'
  },
  {
    id: '6',
    name: 'Lisa Williams',
    businessName: 'Austin Marble & Granite',
    rating: 4.8,
    reviewCount: 167,
    location: 'Austin, TX',
    distance: '5.8 miles',
    specialties: ['Marble Work', 'Granite Installation', 'Restoration Services'],
    yearsExperience: 22,
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909114-355a1e6a9129?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909182-11c1b3d0af01?w=300&h=200&fit=crop'
    ],
    description: 'Established Austin business with over two decades of experience in marble and granite installation, repair, and restoration services.',
    verified: true,
    phone: '(512) 555-0987',
    website: 'austinmarbleandgranite.com',
    priceRange: '$$$'
  },
  // Phoenix, AZ Contractors
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
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909114-4e4fa72bb41c?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909011-7309f48f79b6?w=300&h=200&fit=crop'
    ],
    description: 'Phoenix premier granite contractor specializing in desert-inspired designs and outdoor kitchen installations. Expert in heat-resistant stone solutions.',
    verified: true,
    phone: '(602) 555-0123',
    website: 'desertstoneworks.com',
    priceRange: '$$$'
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
    profileImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=200&fit=crop'
    ],
    description: 'Luxury stone fabrication serving Scottsdale and Phoenix. Specializes in high-end residential projects with Italian marble and exotic granite.',
    verified: true,
    phone: '(480) 555-0456',
    website: 'scottsdalegranite.com',
    priceRange: '$$$$'
  },
  {
    id: '9',
    name: 'Miguel Santos',
    businessName: 'Valley Stone Solutions',
    rating: 4.7,
    reviewCount: 78,
    location: 'Tempe, AZ',
    distance: '12.1 miles',
    specialties: ['Kitchen Remodeling', 'Quartz Countertops', 'Bathroom Remodeling'],
    yearsExperience: 11,
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909114-355a1e6a9129?w=300&h=200&fit=crop'
    ],
    description: 'Family-owned business serving the Phoenix Valley with reliable quartz and granite installations. Known for competitive pricing and quality work.',
    verified: true,
    phone: '(480) 555-0789',
    priceRange: '$$'
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
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909182-11c1b3d0af01?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909114-4f678e4ced90?w=300&h=200&fit=crop'
    ],
    description: 'Award-winning designer and fabricator specializing in modern, sleek kitchen designs. Expert in contemporary quartz installations and minimalist aesthetics.',
    verified: true,
    phone: '(602) 555-0987',
    website: 'phoenixpremier.com',
    priceRange: '$$$'
  },
  {
    id: '11',
    name: 'James Wilson',
    businessName: 'Camelback Stone & Tile',
    rating: 4.6,
    reviewCount: 67,
    location: 'Phoenix, AZ',
    distance: '7.8 miles',
    specialties: ['Granite Installation', 'Tile Work', 'Restoration Services'],
    yearsExperience: 19,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    portfolioImages: [
      'https://images.unsplash.com/photo-1556909011-7309f48f79b6?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f3bda3dd4b3f?w=300&h=200&fit=crop'
    ],
    description: 'Nearly two decades of experience in granite and tile installation throughout Phoenix. Specializes in both residential and commercial projects.',
    verified: true,
    phone: '(602) 555-1234',
    website: 'camelbackstone.com',
    priceRange: '$$$'
  }
]

const SPECIALTIES = [
  'Kitchen Remodeling',
  'Bathroom Remodeling', 
  'Granite Installation',
  'Quartz Countertops',
  'Marble Work',
  'Custom Fabrication',
  'Interior Design',
  'Outdoor Kitchens',
  'Restoration Services'
]

function ContractorsPageContent() {
  const searchParams = useSearchParams()
  // Temporarily disable location provider to fix search issues
  // const { currentLocation, searchLocation, calculateDistance } = useLocation()
  const currentLocation = null
  const searchLocation = async () => {}
  const calculateDistance = () => 0
  
  const [searchTerm, setSearchTerm] = useState('')
  const [locationQuery, setLocationQuery] = useState(searchParams?.get('location') || '')
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState('')
  const [rating, setRating] = useState(0)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [showLocationRequest, setShowLocationRequest] = useState(true)
  
  // State for real vs mock data
  const [contractors, setContractors] = useState<Contractor[]>([])
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState<'mock' | 'database'>('mock')

  // Load real contractors from database
  const loadRealContractors = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/contractors?page=1&limit=50')
      if (response.ok) {
        const data = await response.json()
        
        // Transform database data to match frontend interface
        const transformedContractors = data.contractors.map((contractor: any) => ({
          id: contractor.id,
          name: contractor.user.name,
          businessName: contractor.businessName,
          rating: contractor.rating || 4.5,
          reviewCount: contractor.reviewCount || 0,
          location: `${contractor.city}, ${contractor.state}`,
          distance: '0 miles', // Calculate based on user location
          specialties: JSON.parse(contractor.specialties || '[]'),
          yearsExperience: contractor.yearsExperience || 5,
          profileImage: contractor.user.image || ImageService.getRandomProfileImage(),
          portfolioImages: JSON.parse(contractor.portfolioImages || '[]').length > 0 
            ? JSON.parse(contractor.portfolioImages || '[]')
            : ImageService.getRandomProjectImages(3),
          description: contractor.description || 'Professional contractor services',
          verified: contractor.isVerified,
          phone: contractor.phone,
          website: contractor.website,
          priceRange: '$$' // Default, could be calculated
        }))
        
        setContractors(transformedContractors)
        setDataSource('database')
        console.log(`✅ Loaded ${transformedContractors.length} contractors from database`)
      } else {
        throw new Error('Failed to load contractors')
      }
    } catch (error) {
      console.error('Error loading contractors:', error)
      // Fall back to mock data
      setContractors(MOCK_CONTRACTORS)
      setDataSource('mock')
    } finally {
      setLoading(false)
    }
  }

  // Load data on component mount
  useEffect(() => {
    loadRealContractors()
  }, [])

  // Calculate distances and sort contractors based on user location
  const contractorsWithDistance = useMemo(() => {
    return contractors.map(contractor => {
      let distance = contractor.distance // fallback to mock distance
      let distanceValue = parseFloat(contractor.distance)
      
      if (currentLocation) {
        // Mock coordinates for contractors (in production, these would come from your database)
        const contractorCoords = {
          'Austin, TX': { lat: 30.2672, lng: -97.7431 },
          'Cedar Park, TX': { lat: 30.5052, lng: -97.8203 },
          'Round Rock, TX': { lat: 30.5083, lng: -97.6789 },
          'Pflugerville, TX': { lat: 30.4394, lng: -97.6200 },
          'Georgetown, TX': { lat: 30.6327, lng: -97.6779 }
        }
        
        const coords = contractorCoords[contractor.location as keyof typeof contractorCoords]
        if (coords) {
          distanceValue = calculateDistance(coords.lat, coords.lng)
          distance = `${distanceValue.toFixed(1)} miles`
        }
      }
      
      return {
        ...contractor,
        distance,
        distanceValue
      }
    }).sort((a, b) => a.distanceValue - b.distanceValue)
  }, [currentLocation, calculateDistance])

  // Filter contractors based on search criteria
  const filteredContractors = useMemo(() => {
    return contractorsWithDistance.filter(contractor => {
      const matchesSearch = contractor.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           contractor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesLocation = !locationQuery || 
                             contractor.location.toLowerCase().includes(locationQuery.toLowerCase())
      
      const matchesSpecialties = selectedSpecialties.length === 0 || 
                                selectedSpecialties.some(specialty => contractor.specialties.includes(specialty))
      
      const matchesPriceRange = !priceRange || contractor.priceRange === priceRange
      
      const matchesRating = contractor.rating >= rating

      return matchesSearch && matchesLocation && matchesSpecialties && matchesPriceRange && matchesRating
    })
  }, [contractorsWithDistance, searchTerm, locationQuery, selectedSpecialties, priceRange, rating])

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    )
  }

  const handleLocationSearch = async (query: string) => {
    setLocationQuery(query)
    try {
      await searchLocation(query)
    } catch (error) {
      console.error('Failed to search location:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Data Source Indicator */}
      {!loading && (
        <div className={`${dataSource === 'database' ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'} border-b`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {dataSource === 'database' ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700 font-medium">
                      ✅ Live Data - {contractors.length} contractors from database
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-yellow-700 font-medium">
                      🎭 Demo Data - Using sample contractors for demonstration
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={loadRealContractors}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  🔄 Refresh Data
                </button>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setLocationQuery('')
                    setSelectedSpecialties([])
                    setPriceRange('')
                    setRating(0)
                  }}
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 font-medium"
                >
                  🗑️ Clear Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Expert Home Remodeling Contractors Near You
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with verified, experienced contractors and fabricators{' '}
              {currentLocation ? `in ${currentLocation.city}` : 'in your area'}
            </p>
          </div>

          {/* Location Request - Temporarily disabled to fix search display */}
          {false && showLocationRequest && !currentLocation && (
            <div className="max-w-2xl mx-auto mb-6">
              <LocationRequest 
                onLocationReceived={() => setShowLocationRequest(false)}
                onDismiss={() => setShowLocationRequest(false)}
              />
            </div>
          )}

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by business name or specialty..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative md:w-64">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter city, state or zip"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={locationQuery}
                    onChange={(e) => handleLocationSearch(e.target.value)}
                  />
                </div>
                {/* Temporarily disabled LocationRequestCompact */}
                {false && !currentLocation && (
                  <LocationRequestCompact 
                    onLocationReceived={() => {}}
                    className="whitespace-nowrap"
                  />
                )}
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Filter size={20} />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Specialties */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Specialties</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {SPECIALTIES.map(specialty => (
                    <label key={specialty} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedSpecialties.includes(specialty)}
                        onChange={() => toggleSpecialty(specialty)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{specialty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {['$', '$$', '$$$', '$$$$'].map(price => (
                    <label key={price} className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value={price}
                        checked={priceRange === price}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Minimum Rating */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map(ratingValue => (
                    <label key={ratingValue} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        checked={rating === ratingValue}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 flex items-center">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="ml-1 text-sm text-gray-700">{ratingValue}+</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedSpecialties([])
                  setPriceRange('')
                  setRating(0)
                }}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {filteredContractors.length} Contractors Found
                </h2>
                <p className="text-gray-600">
                  {currentLocation ? `in ${currentLocation.formattedAddress}` : 
                   locationQuery ? `in ${locationQuery}` : 'in your area'}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Best Match</option>
                  <option>Highest Rated</option>
                  <option>Most Reviews</option>
                  <option>Nearest</option>
                </select>
                
                <div className="flex border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Contractor Grid/List */}
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading contractors...</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
                {filteredContractors.map(contractor => (
                  <ContractorCard key={contractor.id} contractor={contractor} viewMode={viewMode} />
                ))}
              </div>
            )}

            {!loading && filteredContractors.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No contractors found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedSpecialties([])
                    setPriceRange('')
                    setRating(0)
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ContractorCard({ contractor, viewMode }: { contractor: Contractor, viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={contractor.profileImage}
              alt={contractor.name}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-xl font-semibold text-gray-900">{contractor.businessName}</h3>
                  {contractor.verified && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-2">{contractor.name}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span>{contractor.location}</span>
                  <span>{contractor.distance}</span>
                  <span>{contractor.yearsExperience} years experience</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-1 mb-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="font-semibold">{contractor.rating}</span>
                  <span className="text-gray-500">({contractor.reviewCount})</span>
                </div>
                <div className="text-sm text-gray-500">{contractor.priceRange}</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{contractor.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {contractor.specialties.map(specialty => (
                <span
                  key={specialty}
                  className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {contractor.portfolioImages.slice(0, 3).map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt="Portfolio"
                    className="w-16 h-16 rounded object-cover"
                  />
                ))}
              </div>
              
              <div className="flex space-x-3">
                <Link href={`/contractors/${contractor.id}`} className="btn-outline">
                  View Profile
                </Link>
                <button className="btn-primary">Get Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative">
        <img
          src={contractor.portfolioImages[0]}
          alt="Portfolio"
          className="w-full h-48 object-cover"
        />
        {contractor.verified && (
          <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            Verified
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={contractor.profileImage}
            alt={contractor.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{contractor.businessName}</h3>
            <p className="text-sm text-gray-600">{contractor.name}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="font-semibold">{contractor.rating}</span>
            <span className="text-gray-500 text-sm">({contractor.reviewCount})</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{contractor.priceRange}</span>
        </div>
        
        <div className="text-sm text-gray-500 mb-3">
          <div>{contractor.location} • {contractor.distance}</div>
          <div>{contractor.yearsExperience} years experience</div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{contractor.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {contractor.specialties.slice(0, 2).map(specialty => (
            <span
              key={specialty}
              className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full"
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
        
        <div className="flex space-x-2">
          <Link 
            href={`/contractors/${contractor.id}`}
            className="flex-1 text-center btn-outline text-sm py-2"
          >
            View Profile
          </Link>
          <button className="flex-1 btn-primary text-sm py-2">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ContractorsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contractors...</p>
        </div>
      </div>
    }>
      <ContractorsPageContent />
    </Suspense>
  )
}
