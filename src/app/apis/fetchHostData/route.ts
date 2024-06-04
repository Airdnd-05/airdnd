import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

interface HostProfile {
  hostId: number
  hostName: string
  hostReviewCount: number
  hostRate: number
  hostExperience: number
  hostLanguage: string
  hostLocation: string
  isSuperHost: boolean
  hostImageUrl: string
}

interface HostContact {
  hostResponseRate: number
  hostResponseTime: number
}

interface Host {
  hostProfile: HostProfile
  hostContact: HostContact
  hostDescription: string
}

type HostValue = string | number | boolean

/**
 * request 객체에서 호스트 ID를 추출합니다.
 * @param request
 * @returns 호스트 ID와 나머지 필드가 담긴 searchParams
 */
function getHostId(request: NextRequest): {
  hostId: number
  searchParams: URLSearchParams
} {
  const url = new URL(request.url)
  const { searchParams } = url

  const hostId = Number(searchParams.get('hostId'))

  if (!hostId) {
    throw new Error('호스트 ID가 유효하지 않습니다.')
  }

  searchParams.delete('hostId')

  return { hostId, searchParams }
}

/**
 * 호스트 JSON 파일을 읽어옵니다.
 * @returns 호스트 JSON 데이터
 */
async function readHostJson(): Promise<{ hostInfo: Host[] }> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'Host.json')

  try {
    await fs.access(filePath)
  } catch (error) {
    throw new Error('Host.json 파일을 찾을 수 없습니다.')
  }

  const fileContents = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(fileContents)
}

/**
 * 호스트 ID로 호스트 정보를 찾습니다.
 * @param hosts 호스트 배열
 * @param hostId 호스트 ID
 * @returns 호스트 정보
 */
function findHostById(hosts: Host[], hostId: number): Host {
  const host = hosts.find(host => host.hostProfile.hostId === hostId)

  if (!host) {
    throw new Error('호스트 ID와 일치하는 호스트를 찾을 수 없습니다.')
  }

  return host
}

/**
 * searchParams를 기반으로 필요한 필드를 추출합니다.
 * @param host 호스트 정보
 * @param searchParams 검색 파라미터
 * @returns 필요한 필드가 담긴 객체
 */
function extractFields(host: Host, searchParams: URLSearchParams): { [key: string]: HostValue } {
  const combinedHostInfo = {
    ...host,
    ...host.hostProfile,
    ...host.hostContact,
  }

  const fields = Array.from(searchParams.keys())

  if (!fields.length) {
    throw new Error('조회할 필드가 없습니다.')
  }

  const record: { [key: string]: HostValue } = {}

  for (const field of fields) {
    if (field in combinedHostInfo) {
      record[field] = combinedHostInfo[field]
    }
  }

  if (Object.keys(record).length === 0) {
    throw new Error('검색된 필드가 없습니다.')
  }

  return record
}

export async function GET(request: NextRequest) {
  try {
    const { hostId, searchParams } = getHostId(request)
    const data = await readHostJson()
    const hosts = data.hostInfo
    const host = findHostById(hosts, hostId)
    const record = extractFields(host, searchParams)

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
