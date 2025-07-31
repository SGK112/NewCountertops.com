'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  name: string | null
  email: string | null
  userType: string
  createdAt: string
  contractor?: {
    businessName: string
    isVerified: boolean
  }
  customer?: {
    firstName: string
    lastName: string
  }
}

interface Quote {
  id: string
  projectType: string
  status: string
  budget: number
  createdAt: string
  customer: {
    firstName: string
    lastName: string
  }
  contractor: {
    businessName: string
  }
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (status === 'loading') return

    if (!session || session.user.userType !== 'ADMIN') {
      router.push('/signup')
      return
    }

    fetchData()
  }, [session, status, router])

  const fetchData = async () => {
    try {
      setLoading(true)
      
      // Fetch users
      const usersResponse = await fetch('/api/admin/users')
      if (usersResponse.ok) {
        const usersData = await usersResponse.json()
        setUsers(usersData)
      }

      // Fetch quotes
      const quotesResponse = await fetch('/api/admin/quotes')
      if (quotesResponse.ok) {
        const quotesData = await quotesResponse.json()
        setQuotes(quotesData)
      }
    } catch (error) {
      console.error('Error fetching admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateUserStatus = async (userId: string, action: string) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action })
      })

      if (response.ok) {
        fetchData() // Refresh data
      }
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  const updateQuoteStatus = async (quoteId: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/quotes/${quoteId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      })

      if (response.ok) {
        fetchData() // Refresh data
      }
    } catch (error) {
      console.error('Error updating quote:', error)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading admin dashboard...</div>
      </div>
    )
  }

  if (!session || session.user.userType !== 'ADMIN') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Super Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Complete control over NewCountertops.com
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Welcome, {session.user.name}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'users', name: 'Users' },
              { id: 'quotes', name: 'Quotes' },
              { id: 'system', name: 'System' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">{users.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Contractors</h3>
              <p className="text-3xl font-bold text-green-600">
                {users.filter(u => u.userType === 'CONTRACTOR').length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Customers</h3>
              <p className="text-3xl font-bold text-purple-600">
                {users.filter(u => u.userType === 'CUSTOMER').length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Total Quotes</h3>
              <p className="text-3xl font-bold text-orange-600">{quotes.length}</p>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {user.name || 'No name'}
                          </div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          user.userType === 'CONTRACTOR' 
                            ? 'bg-green-100 text-green-800'
                            : user.userType === 'CUSTOMER'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.userType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.userType === 'CONTRACTOR' && user.contractor ? (
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            user.contractor.isVerified 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {user.contractor.isVerified ? 'Verified' : 'Pending'}
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500">Active</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          {user.userType === 'CONTRACTOR' && user.contractor && !user.contractor.isVerified && (
                            <button
                              onClick={() => updateUserStatus(user.id, 'verify')}
                              className="text-green-600 hover:text-green-900"
                            >
                              Verify
                            </button>
                          )}
                          <button
                            onClick={() => updateUserStatus(user.id, 'suspend')}
                            className="text-red-600 hover:text-red-900"
                          >
                            Suspend
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quotes Tab */}
        {activeTab === 'quotes' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quote Management</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contractor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Budget
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {quotes.map((quote) => (
                    <tr key={quote.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {quote.projectType}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {quote.customer.firstName} {quote.customer.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {quote.contractor.businessName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ${quote.budget.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          quote.status === 'ACCEPTED' 
                            ? 'bg-green-100 text-green-800'
                            : quote.status === 'DECLINED'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {quote.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          {quote.status === 'PENDING' && (
                            <>
                              <button
                                onClick={() => updateQuoteStatus(quote.id, 'ACCEPTED')}
                                className="text-green-600 hover:text-green-900"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() => updateQuoteStatus(quote.id, 'DECLINED')}
                                className="text-red-600 hover:text-red-900"
                              >
                                Decline
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* System Tab */}
        {activeTab === 'system' && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Administration</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Super Admin Powers:</strong>
                    </p>
                    <ul className="mt-2 text-sm text-yellow-700 list-disc list-inside">
                      <li>Override any user verification status</li>
                      <li>Accept or decline any quote regardless of parties involved</li>
                      <li>Suspend or activate any user account</li>
                      <li>View all system data and analytics</li>
                      <li>Access all API endpoints with elevated privileges</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-400 bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      <strong>Security Notice:</strong> This admin account has complete control over the platform. 
                      Ensure strong password security and limit access to trusted individuals only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
