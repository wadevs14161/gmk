import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Parse and validate data as needed
    const topicsValue = Array.isArray(data.topics)
      ? data.topics.join(',')
      : (typeof data.topics === 'string' ? data.topics : '');
    const submission = await prisma.consultingFormSubmission.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        topics: topicsValue,
        lineAccount: data.lineAccount || null,
        occupation: data.occupation,
        howDidYouKnow: data.howDidYouKnow,
        date1: new Date(data.date1),
        time1: data.time1,
        date2: new Date(data.date2),
        time2: data.time2,
        date3: new Date(data.date3),
        time3: data.time3,
        details: data.details,
      },
    });
    return NextResponse.json({ success: true, submission });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}
