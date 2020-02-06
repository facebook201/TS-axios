const toString = Object.prototype.toString

// val is Type

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
// 普通对象 区分typeof 的 formData
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

// 是否是formData
export function isFormData(val: any): boolean {
  return toString.call(val) === '[object FormData]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
