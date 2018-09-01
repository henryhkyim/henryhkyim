export function toTwoDecimal(num) {
  return Math.round(num * 100) / 100
}

export function randomNumber(from=1, to=10) {
	return Math.max(Math.floor(10000 * Math.random()) % to, from)
}
