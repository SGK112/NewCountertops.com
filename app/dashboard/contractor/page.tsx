'use client'

import { useState } from 'react'
import { Calendar, Star, TrendingUp, Users, MessageSquare, Settings, Edit, Eye, Plus } from 'lucide-react'

interface DashboardStats {
  totalViews: number
  totalQuotes: number
  averageRating: number
  totalReviews: number
  completedProjects: number
  monthlyRevenue: number
}

interface QuoteRequest {
  id: string
  customerName: string
  projectType: string
  budget: string
  timeline: string
  location: string
  status: 'pending' | 'responded' | 'accepted' | 'declined'
  submittedAt: string
  description: string
}

const MOCK_STATS: DashboardStats = {
  totalViews: 1247,
  totalQuotes: 89,
  averageRating: 4.9,
  totalReviews: 127,
  completedProjects: 156,
  monthlyRevenue: 45600
}

const MOCK_QUOTES: QuoteRequest[] = [
  {
    id: '1',
    customerName: 'Sarah Johnson',
    projectType: 'Kitchen Remodel',
    budget: '$15,000 - $30,000',
    timeline: 'Within 1 month',
    location: 'Austin, TX',
    status: 'pending',
    submittedAt: '2024-01-20T10:30:00Z',
    description: 'Looking to replace existing laminate countertops with granite. Kitchen is approximately 45 sq ft.'
  },
  {
    id: '2',
    customerName: 'Michael Chen',
    projectType: 'Bathroom Remodel',
    budget: '$5,000 - $15,000',
    timeline: '1-3 months',
    location: 'Round Rock, TX',
    status: 'responded',
    submittedAt: '2024-01-19T14:20:00Z',
    description: 'Master bathroom vanity countertop replacement. Interested in quartz options.'
  },
  {
    id: '3',
    customerName: 'Jennifer Martinez',
    projectType: 'Kitchen Countertops',
    budget: '$30,000 - $50,000',
    timeline: 'ASAP',
    location: 'Cedar Park, TX',
    status: 'accepted',
    submittedAt: '2024-01-18T09:15:00Z',
    description: 'Complete kitchen countertop installation for new construction home.'
  }
]

export default function ContractorDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'responded':
        return 'bg-blue-100 text-blue-800'
      case 'accepted':
        return 'bg-green-100 text-green-800'
      case 'declined':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contractor Dashboard</h1>
              <p className="text-gray-600">Welcome back, Rodriguez Granite Works</p>
            </div>
            <div className="flex space-x-4">
              <button className="btn-outline flex items-center space-x-2">
                <Eye size={18} />
                <span>View Profile</span>
              </button>
              <button className="btn-primary flex items-center space-x-2">
                <Edit size={18} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalViews.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-primary-100 rounded-full">
                <Eye className="text-primary-600" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="text-green-500 mr-1" size={16} />
              <span className="text-green-600">+12% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Quote Requests</p>
                <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.totalQuotes}</p>
              </div>
              <div className="p-3 bg-secondary-100 rounded-full">
                <MessageSquare className="text-secondary-600" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="text-green-500 mr-1" size={16} />
              <span className="text-green-600">+8% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">{MOCK_STATS.averageRating}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="text-yellow-600" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-600">{MOCK_STATS.totalReviews} total reviews</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${MOCK_STATS.monthlyRevenue.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="text-green-600" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="text-green-500 mr-1" size={16} />
              <span className="text-green-600">+25% from last month</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'quotes', label: 'Quote Requests' },
                { id: 'projects', label: 'Projects' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'settings', label: 'Settings' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Quote Requests */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900">Recent Quote Requests</h3>
                      <button 
                        onClick={() => setActiveTab('quotes')}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-3">
                      {MOCK_QUOTES.slice(0, 3).map(quote => (
                        <div key={quote.id} className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{quote.customerName}</h4>
                            <span className={`badge ${getStatusColor(quote.status)}`}>
                              {quote.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{quote.projectType}</p>
                          <p className="text-xs text-gray-500">{formatDate(quote.submittedAt)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Chart Placeholder */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Performance</h3>
                    <div className="h-48 bg-white rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Chart placeholder - Views, Quotes, Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'quotes' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Quote Requests</h2>
                  <div className="flex space-x-4">
                    <select className="input-field">
                      <option>All Status</option>
                      <option>Pending</option>
                      <option>Responded</option>
                      <option>Accepted</option>
                      <option>Declined</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {MOCK_QUOTES.map(quote => (
                    <div key={quote.id} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{quote.customerName}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{quote.projectType}</span>
                            <span>•</span>
                            <span>{quote.location}</span>
                            <span>•</span>
                            <span>{formatDate(quote.submittedAt)}</span>
                          </div>
                        </div>
                        <span className={`badge ${getStatusColor(quote.status)}`}>
                          {quote.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-500">Budget</span>
                          <p className="text-gray-900">{quote.budget}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Timeline</span>
                          <p className="text-gray-900">{quote.timeline}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Status</span>
                          <p className="text-gray-900 capitalize">{quote.status}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500">Project Description</span>
                        <p className="text-gray-700 mt-1">{quote.description}</p>
                      </div>

                      <div className="flex space-x-3">
                        {quote.status === 'pending' && (
                          <>
                            <button className="btn-primary btn-sm">Respond to Quote</button>
                            <button className="btn-outline-gray btn-sm">Decline</button>
                          </>
                        )}
                        {quote.status === 'responded' && (
                          <button className="btn-outline btn-sm">View Response</button>
                        )}
                        {quote.status === 'accepted' && (
                          <button className="btn-secondary btn-sm">Manage Project</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus size={18} />
                    <span>Add Project</span>
                  </button>
                </div>
                <div className="text-center py-12">
                  <Users size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Project management coming soon</h3>
                  <p className="text-gray-600">Track your active and completed projects all in one place.</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Customer Reviews</h2>
                <div className="text-center py-12">
                  <Star size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Review management coming soon</h3>
                  <p className="text-gray-600">Respond to customer reviews and manage your online reputation.</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
                <div className="text-center py-12">
                  <Settings size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Settings coming soon</h3>
                  <p className="text-gray-600">Manage your profile, notifications, and account preferences.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
