import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/Accommodation.json`)

    if (!response.ok) {
      throw new Error('Failed to fetch accommodation data')
    }

    const data = await response.json()
    const accommodations = data.accommodationInfo

    if (!Array.isArray(accommodations)) {
      throw new Error('Invalid accommodation data format')
    }

    const accommodationList = accommodations.map(accommodation => ({
      accommodationId: accommodation.accommodationId,
      accommodationName: accommodation.accommodationName,
      imageUrl: accommodation.imageUrl[0],
    }))

    return NextResponse.json(
      { accommodationInfo: accommodationList },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching accommodations:', error)
    return NextResponse.json({ error: 'Failed to fetch accommodation data' }, { status: 500 })
  }
}
