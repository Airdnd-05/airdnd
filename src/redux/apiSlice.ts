import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Filters } from '@/types/Filters'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/apis' }),
  endpoints: builder => ({
    getRoomsCount: builder.query<{ count: number }, Partial<Filters>>({
      query: filters => {
        const queryString = new URLSearchParams(
          Object.entries(filters).reduce(
            (acc, [key, value]) => {
              if (Array.isArray(value)) {
                acc[key] = value.join(',')
              } else if (value !== null && value !== '') {
                acc[key] = value.toString()
              }
              return acc
            },
            {} as Record<string, string>,
          ),
        ).toString()
        return `/fetchFilterData?${queryString}`
      },
    }),
  }),
})

export const { useGetRoomsCountQuery } = apiSlice

/*
  apiSlice는 FilterComponent에서 비동기적으로 필터링된 숙소의 개수를 업데이트하기 위해  RTK Query를 사용하는 파일입니다.

  1. store에 등록할 Slice의 이름을 reducerPath에 설정합니다.
  2. API를 요청할 기본 URL을 설정합니다.
  3. RTK Query의 엔드포인트를 정의합니다.
  4. 엔드포인트에서 요청할 query 또는 mutation의 요청을 정의합니다.
  5. useGetRoomsCountQuery 훅은 baseUrl에 설정된 URL과 query에서 반환된 쿼리스트링을 합쳐서 최종적인 URL을 반환합니다.
  6. 보내진 쿼리스트링은 /apis/fetchFiltersData/routes.ts의 GET 엔드포인트로 전달되어 파싱될 예정입니다.
  
*/
