function formatWithComma(number: number): string {
  // 3자리 마다 ,를 붙입니다. 1000 => ₩1,000
  return `₩${number.toLocaleString()}`
}

function priceWithDays(price: number, days: number) {
  // 가격 X n박 를 표시합니다
  return `${formatWithComma(price)} x ${days}박`
}

function totalPrice(price: number, days: number) {
  // 가격과 날을 곱한 총 합계를 표시합니다
  return `${formatWithComma(price * days)}`
}

export { formatWithComma, totalPrice, priceWithDays }
