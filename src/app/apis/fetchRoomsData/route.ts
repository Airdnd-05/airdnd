import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

interface Amenity {
  amenityName: string
  icon: string
}

interface Bed {
  bedType: string
  count: number
  icon: string
}

interface Room {
  roomId: number
  beds: Bed[]
}

interface Accommodation {
  accommodationId: number
  accommodationName: string
  locationName: string
  briefRoomInfo: string[]
  guestFavorite: boolean
  rating: string
  reviewCount: string
  hostId: number
  hostName: string
  hostSince: number
  pricePerDay: number
  imageUrl: string[]
  amenities: Amenity[]
  roomInfo: Room[]
  desc: string
}

type AccommodationValue = string | number | boolean | string[] | Amenity[] | Room[]

/**
 * request 객체에서 숙소 ID를 추출합니다.
 * @param request
 * @returns 숙소 ID와 나머지 필드가 담긴 searchParams
 */
function getAccommodationId(request: NextRequest): {
  id: number
  searchParams: URLSearchParams
} {
  const url = new URL(request.url)
  const { searchParams } = url

  const id = Number(searchParams.get('id'))

  if (!id) {
    throw new Error('숙소 ID가 유효하지 않습니다.')
  }

  searchParams.delete('id')

  return { id, searchParams }
}

/**
 * 숙소 JSON 파일을 읽어옵니다.
 * @returns 숙소 JSON 데이터
 */
async function readAccommodationJson(): Promise<{ accommodationInfo: Accommodation[] }> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'Accommodation.json')

  try {
    await fs.access(filePath)
  } catch (error) {
    throw new Error('Accommodation.json 파일을 찾을 수 없습니다.')
  }

  const fileContents = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(fileContents)
}

/**
 * 숙소 ID로 숙소 정보를 찾습니다.
 * @param accommodations 숙소 배열
 * @param id 숙소 ID
 * @returns 숙소 정보
 */
function findAccommodationById(accommodations: Accommodation[], id: number): Accommodation {
  const accommodation = accommodations.find(acc => acc.accommodationId === id)

  if (!accommodation) {
    throw new Error('숙소 ID와 일치하는 숙소를 찾을 수 없습니다.')
  }

  return accommodation
}

/**
 * searchParams를 기반으로 필요한 필드를 추출합니다.
 * @param accommodation 숙소 정보
 * @param searchParams 검색 파라미터
 * @returns 필요한 필드가 담긴 객체
 */
function extractFields(
  accommodation: Accommodation,
  searchParams: URLSearchParams,
): { [key: string]: AccommodationValue } {
  const fields = Array.from(searchParams.keys())

  if (!fields.length) {
    throw new Error('조회할 필드가 없습니다.')
  }

  const record: { [key: string]: AccommodationValue } = {}

  for (const field of fields) {
    if (field in accommodation) {
      record[field] = accommodation[field as keyof Accommodation]
    }
  }

  if (!Object.keys(record).length) {
    throw new Error('검색된 필드가 없습니다.')
  }

  return record
}

export async function GET(request: NextRequest) {
  try {
    const { id, searchParams } = getAccommodationId(request)
    const data = await readAccommodationJson()
    const accommodations = data.accommodationInfo
    const accommodation = findAccommodationById(accommodations, id)
    const record = extractFields(accommodation, searchParams)

    return NextResponse.json(record, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export function POST() {
  return NextResponse.json({ error: 'POST 메서드는 지원하지 않습니다.' }, { status: 405 })
}
