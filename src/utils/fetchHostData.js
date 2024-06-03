// import 'server-only'
// import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'

async function fetchHostData(hostId, fields) {
  try {
    const queryParams = fields.map(field => `${field}=`).join('&')
    // console.log('----------------------Host queryParams: ', queryParams)

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchHostData?hostId=${hostId}&${queryParams}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchHostData?hostId=${hostId}&${queryParams}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     cache: 'no-store',
    //   },
    // )
    // console.log('----------------------Host response: ', response)

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const record = await response.json()
    // console.log('----------------------Host record: ', record)

    if (!record) {
      throw new Error('Failed to parse response')
    }

    return record
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchHostData
