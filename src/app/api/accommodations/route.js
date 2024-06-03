/* eslint-disable import/prefer-default-export */

import { NextResponse } from 'next/server'
import data from '@data/Accommodation.json'

export function GET() {
  try {
    // 1 데이베이스 역할의 JSON 파일을 가져온다.

    const accommodations = data.accommodationInfo
    // console.log('----------------------accommodations: ', accommodations)

    if (!Array.isArray(accommodations)) {
      throw new Error('accommodations is not an array')
    }

    // 2 데이터베이스 연산 작업을 모의로 수행한다.
    /*
    SELECT
            accommodationId, accommodationName, imageUrl
    FROM
            accommodation_info 
    */
    const records = accommodations.map(accommodation => ({
      accommodationId: accommodation.accommodationId,
      accommodationName: accommodation.accommodationName,
      imageUrl: accommodation.imageUrl,
      guestFavorite: accommodation.guestFavorite,
      rating: accommodation.rating,
      pricePerDay: accommodation.pricePerDay,
    }))

    // console.log('----------------------records: ', records)

    if (!records) {
      throw new Error('no records found')
    }

    // 3 클라이언트에게 JSON 형식으로 응답한다.
    return NextResponse.json(records, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // 4 에러가 발생하면 클라이언트에게 에러 메시지를 응답한다.
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch accommodation data' }, { status: 500 })
  }
}
