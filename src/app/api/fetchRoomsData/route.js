/* eslint-disable import/prefer-default-export */

import { NextResponse } from 'next/server'

export async function GET(request) {
  // 1 숙소 조회의 기준이 되는 id를 가져온다.
  const url = new URL(request.url)
  // console.log('----------------------url: ', url)

  const { searchParams } = url
  // console.log('----------------------searchParams: ', searchParams)
  const id = Number(searchParams.get('id'))
  // console.log('----------------------id: ', id)

  try {
    if (!id) {
      throw new Error('accommodationId is missing')
    }

    // 2 데이베이스 역할의 JSON 파일을 fetch로 가져온다.
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/Accommodation.json`)
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/Accommodation.json`, {
    //   cache: 'no-store',
    // })
    // console.log('----------------------response: ', response)

    if (!response.ok) {
      throw new Error('Failed to fetch rooms data')
    }

    const data = await response.json()
    // console.log('----------------------data: ', data)

    if (!data) {
      throw new Error('Failed to parse response')
    }

    const accommodations = data.accommodationInfo
    // console.log('----------------------accommodations: ', accommodations)

    if (!Array.isArray(accommodations)) {
      throw new Error('accommodations is not an array')
    }

    // 3 데이터베이스 연산 작업을 모의로 수행한다.
    /*
    SELECT
            ...fields
    FROM
            accommodation_info 
    WHERE
            accommodationId = id;
    */

    const accommodation = accommodations.find(accommodation => accommodation.accommodationId === id)

    if (!accommodation) {
      throw new Error('no accommodation found with the given id')
    }

    searchParams.delete('id')

    const fields = Array.from(searchParams.keys())
    // console.log('----------------------fields: ', fields)

    if (!fields.length) {
      throw new Error('fields are missing')
    }

    const record = {}

    for (const field of fields) {
      record[field] = accommodation[field]
    }
    // console.log('----------------------record: ', record)

    if (!Object.keys(record).length) {
      throw new Error('no fields found')
    }

    // 4 클라이언트에게 JSON 형식으로 응답한다.
    return NextResponse.json(record, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // 5 에러가 발생하면 클라이언트에게 에러 메시지를 응답한다.
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch accommodation data' }, { status: 500 })
  }
}
