/**
 * 配置接口 method选项的约束 字符串变量
 */
export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS';

/**
 * 导出 Axios构造函数的默认配置接口
 */
export interface AxiosRequestConfig {
  url: string, // 请求URl
  method?: Method // 请求方法 可不传 默认get
  data?: any,
  params?: any,
}
