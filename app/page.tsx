import Link from 'next/link'
import { Heart, Search, Users, MessageCircle, Star, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect <span className="text-blue-600">Granite Contractor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with verified granite contractors using our dating-style matching system. 
              Swipe, match, and chat with professionals who are perfect for your project.
            </p>
            
            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/matches" 
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Heart className="w-6 h-6 mr-2" />
                Find Matches
              </Link>
              <Link 
                href="/contractors" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center"
              >
                <Search className="w-6 h-6 mr-2" />
                Browse Contractors
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">11</div>
                <div className="text-gray-600">Verified Contractors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-gray-600">Match Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24hrs</div>
                <div className="text-gray-600">Average Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our Dating-Style Matching Works
            </h2>
            <p className="text-xl text-gray-600">
              Finding the perfect contractor is now as easy as dating apps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
              <p className="text-gray-600">Create your profile and tell us about your project needs</p>
              <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center mt-2">
                Start Here <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Swipe & Match</h3>
              <p className="text-gray-600">Swipe through contractors and like the ones you want to work with</p>
              <Link href="/matches" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center mt-2">
                Try Matching <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Chat & Connect</h3>
              <p className="text-gray-600">Message matched contractors and discuss your project details</p>
              <Link href="/matches/liked" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center mt-2">
                View Matches <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Get Your Quote</h3>
              <p className="text-gray-600">Schedule consultations and receive personalized quotes</p>
              <Link href="/quote" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center mt-2">
                Get Quote <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Contractors */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Phoenix Contractors
            </h2>
            <p className="text-xl text-gray-600">
              New granite specialists ready to match with you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contractor 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
                  alt="Carlos Rivera"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">Carlos Rivera</h3>
                  <p className="text-sm text-gray-600">Desert Stone Works</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">4.9</span>
                <span className="ml-2 text-gray-600">(142 reviews)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Specializes in outdoor kitchens and heat-resistant granite solutions
              </p>
              <Link
                href="/matches"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-center block transition-colors"
              >
                Match Now
              </Link>
            </div>

            {/* Contractor 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face"
                  alt="Amanda Foster"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">Amanda Foster</h3>
                  <p className="text-sm text-gray-600">Scottsdale Granite & Marble</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">4.8</span>
                <span className="ml-2 text-gray-600">(96 reviews)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Luxury stone fabrication with Italian marble and exotic granite
              </p>
              <Link
                href="/matches"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-center block transition-colors"
              >
                Match Now
              </Link>
            </div>

            {/* Contractor 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face"
                  alt="Rachel Kim"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">Rachel Kim</h3>
                  <p className="text-sm text-gray-600">Phoenix Premier Surfaces</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">4.9</span>
                <span className="ml-2 text-gray-600">(134 reviews)</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Award-winning modern kitchen design and quartz installations
              </p>
              <Link
                href="/matches"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-center block transition-colors"
              >
                Match Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Contractor Match?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of homeowners who've found their ideal granite contractor through our matching system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Sign Up as Homeowner
            </Link>
            <Link
              href="/signup/contractor"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all"
            >
              Join as Contractor
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
