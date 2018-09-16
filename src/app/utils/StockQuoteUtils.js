import { toTwoDecimal } from './NumberUtils.js'

const QUOTE_DATA = new Map()
QUOTE_DATA.set("00005.HK", {desc: "HSBC HOLDINGS", price: 74.55, prev_close: 74.6})
QUOTE_DATA.set("00006.HK", {desc: "POWER ASSETS", price: 55.4, prev_close: 55.95})
QUOTE_DATA.set("00700.HK", {desc: "TENCENT", price: 356.4, prev_close: 367.2})
QUOTE_DATA.set("07336.HK", {desc: "FI MR HS", price: 5.73, prev_close: 5.71})

export function isStockAvailable(symbol) {
	return QUOTE_DATA.get(symbol) != null
}

export function getStockPrice(symbol) {
	// console.log(`getStockPrice symbol: ${symbol}`)
	let currentPriceChange = toTwoDecimal(Math.random())
	return QUOTE_DATA.get(symbol).price + currentPriceChange
}

export function getPrevClosePrice(symbol) {
	return QUOTE_DATA.get(symbol).prev_close
}

export function getStockDesc(symbol) {
	return QUOTE_DATA.get(symbol).desc
}