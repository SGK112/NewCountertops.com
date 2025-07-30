'use client'

import { useState } from 'react'
import { Calendar, Clock, Home, Phone, Mail, User } from 'lucide-react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    projectType: '',
    timeline: '',
    budget: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    projectDescription: '',
    squareFootage: '',
    preferredContactMethod: 'phone',
    preferredContactTime: 'morning'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Quote request submitted:', formData)
    // In a real app, this would send data to an API
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your project and we'll connect you with up to 3 qualified contractors in your area
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="text-sm font-medium text-primary-600">Project Details</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm font-medium text-gray-500">Contact Info</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="text-sm font-medium text-gray-500">Get Quotes</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                <Home className="text-primary-600" size={24} />
                <span>Project Information</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select project type</option>
                    <option value="kitchen-remodel">Kitchen Remodel</option>
                    <option value="bathroom-remodel">Bathroom Remodel</option>
                    <option value="countertop-installation">Countertop Installation Only</option>
                    <option value="backsplash">Backsplash Installation</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="outdoor-kitchen">Outdoor Kitchen</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="within-month">Within 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                    <option value="just-browsing">Just browsing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Approximate Square Footage
                  </label>
                  <input
                    type="number"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleInputChange}
                    placeholder="e.g., 45"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please describe your project in detail. Include materials you're interested in, any specific requirements, or questions you have..."
                  className="input-field"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                <User className="text-primary-600" size={24} />
                <span>Contact Information</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(555) 123-4567"
                    className="input-field"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Street address"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select state</option>
                    <option value="TX">Texas</option>
                    <option value="CA">California</option>
                    <option value="FL">Florida</option>
                    <option value="NY">New York</option>
                    {/* Add more states as needed */}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>
            </div>

            {/* Contact Preferences */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                <Phone className="text-primary-600" size={24} />
                <span>Contact Preferences</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value="phone"
                        checked={formData.preferredContactMethod === 'phone'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Phone call</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value="email"
                        checked={formData.preferredContactMethod === 'email'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value="text"
                        checked={formData.preferredContactMethod === 'text'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Text message</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Best Time to Contact
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactTime"
                        value="morning"
                        checked={formData.preferredContactTime === 'morning'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Morning (8 AM - 12 PM)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactTime"
                        value="afternoon"
                        checked={formData.preferredContactTime === 'afternoon'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Afternoon (12 PM - 5 PM)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactTime"
                        value="evening"
                        checked={formData.preferredContactTime === 'evening'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Evening (5 PM - 8 PM)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContactTime"
                        value="anytime"
                        checked={formData.preferredContactTime === 'anytime'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Anytime</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="border-t pt-8">
              <div className="mb-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 text-primary-600 focus:ring-primary-500 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to receive quotes and communication from NewCountertops.com and its network of contractors. 
                    I understand that contractors may contact me via phone, email, or text message regarding my project.
                  </span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  className="btn-outline-gray"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="btn-primary btn-lg"
                >
                  Get Free Quotes
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <User className="text-primary-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vetted Contractors</h3>
            <p className="text-gray-600">All contractors are pre-screened, licensed, and insured for your peace of mind.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600">Receive quotes within 24 hours from contractors in your area.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-primary-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Service</h3>
            <p className="text-gray-600">Our quote service is completely free with no obligations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
