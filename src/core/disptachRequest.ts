import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'
import xhr from './xhr'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

// 发生请求之前 处理config
function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromURL(config)
  config.headers = transformHeaders(config)
  config.data = transfromRequestData(config)
}

function transfromURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transfromRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

// 处理headers
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
