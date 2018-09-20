import { toTwoDecimal } from './NumberUtils.js'

const QUOTE_DATA = new Map()
QUOTE_DATA.set("00002.HK", {desc: "CLP HOLDINGS", price: 95, prev_close: 94.9})
QUOTE_DATA.set("00005.HK", {desc: "HSBC HOLDINGS", price: 68.4, prev_close: 67.95})
QUOTE_DATA.set("00006.HK", {desc: "POWER ASSETS", price: 55.35, prev_close: 55.95})
QUOTE_DATA.set("00011.HK", {desc: "HANG SENG BANK", price: 207, prev_close: 206.8})
QUOTE_DATA.set("00066.HK", {desc: "MTR CORPORATION", price: 41.2, prev_close: 41.6})
QUOTE_DATA.set("00388.HK", {desc: "HKEX", price: 225, prev_close: 224.4})
QUOTE_DATA.set("00700.HK", {desc: "TENCENT", price: 323.0, prev_close: 321.6})
QUOTE_DATA.set("00823.HK", {desc: "LINK REIT", price: 75.6, prev_close: 76.2})
QUOTE_DATA.set("02318.HK", {desc: "PING AN", price: 77.85, prev_close: 77.15})
QUOTE_DATA.set("02800.HK", {desc: "TRACKER FUND", price: 28.3, prev_close: 28.25})
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