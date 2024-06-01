import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'

async function fetchAccommodations() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/accommodations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })
    // console.log('----------------------Accommodations response: ', response)

    if (!response.ok) {
      throw new Error('Failed to fetch accommodation data')
    }

    const records = await response.json()
    // console.log('----------------------Accommodations records: ', records)

    if (!records) {
      throw new Error('Failed to parse response')
    }

    return records
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error
    }
    throw new Error(error)
  }
}

export default fetchAccommodations
