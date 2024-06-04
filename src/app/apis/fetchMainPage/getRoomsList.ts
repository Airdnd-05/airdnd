async function getRoomsList() {
  try {
    // 메인 페이지 렌더링에 필요한 정보 조회시 캐싱을 하지 않습니다.
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/apis/fetchMainPage`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(
        `메인 페이지 정보 조회 API에서 200 OK 응답을 받지 못했습니다. : ${response.statusText}`,
      )
    }

    // 메인 페이지 렌더링에 필요한 정보를 역직렬화합니다.
    const records = await response.json()

    if (!records) {
      throw new Error('숙소 정보 조회 API에서 응답을 역직렬화하는데 실패했습니다.', records)
    }

    return records
  } catch (error) {
    throw new Error(error.message)
  }
}

export default getRoomsList
