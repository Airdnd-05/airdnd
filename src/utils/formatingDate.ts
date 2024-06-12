import { format } from 'date-fns'

function formatYearMonthDay(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일`
}

function formatymd(date: Date) {
  return format(date, 'yyyy.MM.dd')
}

function getDayDiff(start: string, end: string) {
  const date1 = new Date(start)
  const date2 = new Date(end)
  let diff = Math.abs(date1.getTime() - date2.getTime())
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return diff
}

function getDayBetween(start: string, end: string) {
  const date1 = formatYearMonthDay(new Date(start))
  const date2 = formatYearMonthDay(new Date(end))

  return `${date1} - ${date2}`
}

export { formatYearMonthDay, getDayDiff, formatymd, getDayBetween }
