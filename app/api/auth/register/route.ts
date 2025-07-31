import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, userType, businessName, serviceArea, specialties, yearsExperience } = await request.json()

    // Check if user already exists
    const exists = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (exists) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        userType: userType || 'CUSTOMER'
      }
    })

    // Create role-specific profile
    if (userType === 'CONTRACTOR') {
      await prisma.contractor.create({
        data: {
          userId: user.id,
          businessName: businessName || `${name} Contracting`,
          serviceArea: JSON.stringify(serviceArea || ['Austin, TX']),
          specialties: JSON.stringify(specialties || ['General Contracting']),
          yearsExperience: yearsExperience || 1,
          phone: '555-0000', // Default phone
          address: '123 Business St', // Default values for required fields
          city: 'Austin',
          state: 'TX',
          zipCode: '78701'
        }
      })
    } else {
      await prisma.customer.create({
        data: {
          userId: user.id,
          firstName: name?.split(' ')[0] || 'Customer',
          lastName: name?.split(' ')[1] || 'User'
        }
      })
    }

    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.userType
      }
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
