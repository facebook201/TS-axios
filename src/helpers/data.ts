import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  // 规避 formData这些类型
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // TODO
    }
  }
  return data
}
