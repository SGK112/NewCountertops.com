import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.userType !== 'CONTRACTOR') {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const contractor = await prisma.contractor.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!contractor) {
      return NextResponse.json({ error: 'Contractor profile not found' }, { status: 404 });
    }

    // Parse JSON fields for SQLite compatibility
    const contractorData = {
      ...contractor,
      serviceArea: JSON.parse(contractor.serviceArea || '[]'),
      specialties: JSON.parse(contractor.specialties || '[]'),
    };

    return NextResponse.json({ contractor: contractorData });
  } catch (error) {
    console.error('Error fetching contractor profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
