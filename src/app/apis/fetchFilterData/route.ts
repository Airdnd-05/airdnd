import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { Room } from '@/types/Filters'

// Rooms 데이터를 읽어오는 함수입니다.
async function readRooms(): Promise<Room[]> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'Rooms.json')

  try {
    await fs.access(filePath)
  } catch (error) {
    throw new Error('Rooms.json 파일을 찾을 수 없습니다.')
  }

  const fileContents = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(fileContents)
}

// GET 요청을 처리하는 함수입니다.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const filters = {
    priceMin: searchParams.get('priceMin')
      ? parseInt(searchParams.get('priceMin') as string, 10)
      : null,
    priceMax: searchParams.get('priceMax')
      ? parseInt(searchParams.get('priceMax') as string, 10)
      : null,
    roomType: searchParams.get('roomType') || '',
    bedRooms: searchParams.get('bedRooms')
      ? parseInt(searchParams.get('bedRooms') as string, 10)
      : null,
    beds: searchParams.get('beds') ? parseInt(searchParams.get('beds') as string, 10) : null,
    bathRooms: searchParams.get('bathRooms')
      ? parseInt(searchParams.get('bathRooms') as string, 10)
      : null,
    amenities: searchParams.get('amenities') ? searchParams.get('amenities')?.split(',') : [],
    bookingOptions: searchParams.get('bookingOptions')
      ? searchParams.get('bookingOptions')?.split(',')
      : [],
    guestFavorite: searchParams.get('guestFavorite') === 'true',
    buildingTypes: searchParams.get('buildingTypes')
      ? searchParams.get('buildingTypes')?.split(',')
      : [],
    name: searchParams.get('name') || '',
    age: searchParams.get('age') ? parseInt(searchParams.get('age') as string, 10) : null,
    city: searchParams.get('city') || '',
  }

  const data = await readRooms()

  const filteredRooms = data.filter((item: Room) => {
    const itemAmenities = new Set(item.amenities)
    const itemBookingOptions = new Set(item.bookingOptions)

    return (
      (filters.priceMin === null || item.pricePerDay >= filters.priceMin) &&
      (filters.priceMax === null || item.pricePerDay <= filters.priceMax) &&
      (filters.roomType === '' || item.roomType === filters.roomType) &&
      (filters.bedRooms === null || item.bedRooms === filters.bedRooms) &&
      (filters.beds === null || item.beds === filters.beds) &&
      (filters.bathRooms === null || item.bathRooms === filters.bathRooms) &&
      (filters.amenities.length === 0 ||
        filters.amenities.every(amenity => itemAmenities.has(amenity))) &&
      (filters.bookingOptions.length === 0 ||
        filters.bookingOptions.every(option => itemBookingOptions.has(option))) &&
      (filters.buildingTypes.length === 0 ||
        filters.buildingTypes.some(type => type === item.buildingType)) &&
      (filters.name === '' || item.name.includes(filters.name)) &&
      (filters.age === null || item.age === filters.age) &&
      (filters.city === '' || item.city.includes(filters.city)) &&
      (!filters.guestFavorite || item.guestFavorite === filters.guestFavorite)
    )
  })

  return NextResponse.json({ count: filteredRooms.length, rooms: filteredRooms })
}

// POST 요청을 처리하는 함수입니다.
export async function POST(req: NextRequest) {
  const body: Room = await req.json()

  const data = await readRooms()
  data.push(body)

  // 파일에 저장하는 로직 추가
  const filePath = path.join(process.cwd(), 'public', 'data', 'Rooms.json')
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')

  return NextResponse.json({ message: 'Success' })
}
