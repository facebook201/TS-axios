import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  // 规避 formData这些类型
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
}
