import { NextResponse } from 'next/server'

export async function GET(request) {
  // 1 호스트 조회의 기준이 되는 hostId를 가져온다.
  const url = new URL(request.url)

  const { searchParams } = url

  try {
    const hostId = Number(searchParams.get('hostId'))

    if (!hostId) {
      throw new Error('hostId is missing')
    }

    // 2 데이베이스 역할의 JSON 파일을 fetch로 가져온다.
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/Host.json`)

    if (!response.ok) {
      throw new Error('Failed to fetch rooms data')
    }

    const data = await response.json()

    if (!data) {
      throw new Error('Failed to parse response')
    }

    const hosts = data.hostInfo

    if (!Array.isArray(hosts)) {
      throw new Error('hosts is not an array')
    }

    // 3 데이터베이스 연산 작업을 모의로 수행한다.
    /*
    SELECT
            ...fields
    FROM
            host_info
    WHERE
            host_id = hostId;
    */

    const host = hosts.find(host => host.hostProfile.hostId === hostId)

    if (!host) {
      throw new Error('no host found with the given hostId')
    }

    searchParams.delete('hostId')

    const fields = Array.from(searchParams.keys())

    if (!fields.length) {
      throw new Error('fields are missing')
    }

    const record = {}

    for (const field of fields) {
      record[field] = host[field]
    }

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

export function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
