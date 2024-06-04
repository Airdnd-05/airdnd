function formatYearMonthDay(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}년 ${month}월 ${day}일`
}

function getDayBetween(date1: Date, date2: Date) {
  let diff = Math.abs(date1.getTime() - date2.getTime())
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return diff
}

export { formatYearMonthDay, getDayBetween }
