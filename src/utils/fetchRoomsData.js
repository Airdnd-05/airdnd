import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'

async function fetchRoomsData(id, fields) {
  try {
    const queryParams = fields.map(field => `${field}=`).join('&')
    console.log('----------------------Rooms queryParams: ', queryParams)

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchRoomsData?id=${id}&${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })
    // console.log('----------------------Rooms response: ', response)

    if (!response.ok) {
      throw new Error('Failed to fetch rooms data')
    }

    const record = await response.json()
    // console.log('----------------------Rooms record: ', record)

    if (!record) {
      throw new Error('Failed to parse response')
    }

    return record
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error
    }
    throw new Error(error)
  }
}

export default fetchRoomsData
