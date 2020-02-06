import { isPlainObject } from './utils'

function normalizeHeaderName(headers: any, normalizeName: string): void {
  // 如果没传就返回
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    // 如果不相等 但是大写的都相等 就统一格式化一下
    if (name !== normalizeName && name.toLowerCase() === normalizeName.toLowerCase()) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    // Content-Type 可能这样传 content-type 所以我们要用一个函数来规范化传进来的参数
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json; charset=utf-8'
    }
  }
  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  // 把headers的字符串拆分成一个对象返回
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
