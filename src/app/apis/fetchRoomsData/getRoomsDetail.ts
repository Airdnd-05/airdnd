async function getRoomsDetail(id, fields) {
  try {
    if (!id || !Array.isArray(fields) || fields.length === 0) {
      throw new Error('조회를 위한 파라미터가 적절하지 않습니다.')
    }

    // 숙소 ID를 기준으로 해당 필드의 정보를 가져오기 위한 쿼리 스트링을 만듭니다.
    const queryParams = fields.map(field => `${field}=`).join('&')

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/apis/fetchRoomsData?id=${id}&${queryParams}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // cache: 'no-store',
      },
    )

    if (!response.ok) {
      throw new Error(
        `방 정보 조회 API에서 200 OK 응답을 받지 못했습니다. : ${response.statusText}`,
      )
    }

    // 숙소 정보를 역직렬화합니다.
    const record = await response.json()

    if (!record) {
      throw new Error('방 정보 조회 API에서 응답을 역직렬화하는데 실패했습니다.', record)
    }

    return record
  } catch (error) {
    throw new Error(error.message)
  }
}

export default getRoomsDetail
