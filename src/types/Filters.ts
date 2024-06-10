export interface Filters {
  priceMin: number | null
  priceMax: number | null
  roomType: string
  bedRooms: number | null
  beds: number | null
  bathRooms: number | null
  amenities: string[]
  bookingOptions: string[]
  guestFavorite: boolean
  buildingTypes: string[]
  name: string
  age: number | null
  city: string
  checkInDate: string | null
  checkOutDate: string | null
  guests: number | null
  adults: number | null
  children: number | null
  infants: number | null
  pets: number | null
  isExpanded: boolean
}

export interface FilterKeyValue {
  key: string | null
  value: Filters | null
}

export interface Room {
  id: number
  name: string
  pricePerDay: number
  roomType: string
  bedRooms: number
  beds: number
  bathRooms: number
  amenities: string[]
  guestFavorite: boolean
  bookingOptions: string[]
  buildingTypes: string[]
  buildingType: string
  age: number
  city: string
}

export type TravelersType = '성인' | '어린이' | '유아' | '반려동물'
