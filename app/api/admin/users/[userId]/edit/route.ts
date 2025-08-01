import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { sendEmail, emailTemplates } from '@/lib/email'
import { TwilioService } from '@/lib/twilio'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    // Verify admin access
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    
    if (!token || token.userType !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      )
    }

    const { userId } = params
    const body = await request.json()
    const { action, ...updateData } = body

    // Handle different actions
    if (action === 'update-profile') {
      const { name, email, userType, password, ...profileData } = updateData

      // Prepare user update data
      const userUpdate: any = {}
      if (name) userUpdate.name = name
      if (email) userUpdate.email = email.toLowerCase()
      if (userType && ['CUSTOMER', 'CONTRACTOR', 'ADMIN'].includes(userType)) {
        userUpdate.userType = userType
      }
      if (password) {
        userUpdate.password = await hash(password, 12)
      }

      // Update user
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: userUpdate,
        include: {
          contractor: true,
          customer: true
        }
      })

      // Update profile data if provided
      if (userType === 'CONTRACTOR' && profileData.businessName) {
        await prisma.contractor.upsert({
          where: { userId },
          update: {
            businessName: profileData.businessName,
            description: profileData.description || null,
            phone: profileData.phone || null,
            address: profileData.address || null,
            city: profileData.city || null,
            state: profileData.state || null,
            zipCode: profileData.zipCode || null,
            licenseNumber: profileData.licenseNumber || null,
            yearsExperience: profileData.yearsExperience || null,
            serviceArea: profileData.serviceArea ? JSON.stringify(profileData.serviceArea) : JSON.stringify([]),
            specialties: profileData.specialties ? JSON.stringify(profileData.specialties) : JSON.stringify([])
          },
          create: {
            userId,
            businessName: profileData.businessName,
            description: profileData.description || '',
            serviceArea: profileData.serviceArea ? JSON.stringify(profileData.serviceArea) : JSON.stringify([]),
            specialties: profileData.specialties ? JSON.stringify(profileData.specialties) : JSON.stringify([]),
            portfolioImages: JSON.stringify([])
          }
        })
      } else if (userType === 'CUSTOMER' && (profileData.firstName || profileData.lastName)) {
        await prisma.customer.upsert({
          where: { userId },
          update: {
            firstName: profileData.firstName || updatedUser.name?.split(' ')[0] || 'Customer',
            lastName: profileData.lastName || updatedUser.name?.split(' ')[1] || 'User',
            phone: profileData.phone || null,
            address: profileData.address || null,
            city: profileData.city || null,
            state: profileData.state || null,
            zipCode: profileData.zipCode || null
          },
          create: {
            userId,
            firstName: profileData.firstName || updatedUser.name?.split(' ')[0] || 'Customer',
            lastName: profileData.lastName || updatedUser.name?.split(' ')[1] || 'User'
          }
        })
      }

      return NextResponse.json({ 
        message: 'User updated successfully',
        user: updatedUser
      })

    } else if (action === 'send-reset-password') {
      // Send password reset email
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true, name: true }
      })

      if (!user || !user.email) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
      }

      // Generate reset token
      const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      
      // Send password reset email
      const emailResult = await sendEmail({
        to: user.email,
        ...emailTemplates.adminPasswordReset(resetToken, user.name || 'User', user.email)
      })

      if (!emailResult.success) {
        console.error('Failed to send admin password reset email:', emailResult.error)
      }

      return NextResponse.json({ 
        message: 'Password reset email sent',
        emailSent: emailResult.success
      })

    } else if (action === 'send-phone-verification') {
      // Send phone verification code
      const { phoneNumber } = updateData
      
      if (!phoneNumber) {
        return NextResponse.json({ error: 'Phone number is required' }, { status: 400 })
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true, name: true, userType: true }
      })

      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
      }

      const result = await TwilioService.sendVerificationCode(phoneNumber, 'sms')
      
      if (result.success) {
        return NextResponse.json({ 
          message: 'Phone verification code sent',
          sid: result.sid
        })
      } else {
        return NextResponse.json({ error: result.error }, { status: 400 })
      }

    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get single user details
export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    // Verify admin access
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    
    if (!token || token.userType !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      )
    }

    const { userId } = params

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        contractor: true,
        customer: true
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)

  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
