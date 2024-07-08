type NumberArray = {
  roomRatings: Array<number>
}

export default function getRatingCount({ roomRatings }: NumberArray) {
  const ratingArray = Array(5).fill(0)

  roomRatings.forEach(e => {
    switch (e) {
      case 1:
        ratingArray[0]++
        break
      case 2:
        ratingArray[1]++
        break
      case 3:
        ratingArray[2]++
        break
      case 4:
        ratingArray[3]++
        break
      case 5:
        ratingArray[4]++
        break
      default:
        throw new Error('잘못된 데이터입니다')
    }
  })

  return ratingArray
}
