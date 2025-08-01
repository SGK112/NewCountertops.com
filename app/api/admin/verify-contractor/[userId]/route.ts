import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id || session.user.userType !== 'ADMIN') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    const { userId } = params

    // Find and verify the contractor
    const contractor = await prisma.contractor.findFirst({
      where: { userId: userId }
    })

    if (!contractor) {
      return NextResponse.json({ error: 'Contractor not found' }, { status: 404 })
    }

    // Update verification status
    const updatedContractor = await prisma.contractor.update({
      where: { id: contractor.id },
      data: { 
        isVerified: true
      }
    })

    return NextResponse.json({ 
      message: 'Contractor verified successfully',
      contractor: updatedContractor
    })
  } catch (error) {
    console.error('Failed to verify contractor:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
