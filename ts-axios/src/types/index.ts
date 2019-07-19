
//  方法的声明 可以使用 字符串字面量类型用来约束取值只能是某几个字符串中的一个
export type Method = 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'post' | 'POST'
  | 'options' | 'OPTIONS'
  | 'put' | 'PUT'
  | 'head' | 'HEAD'
  | 'patch' | 'PATCH';

export interface AxiosRequestConfig {
  url: string,
  method?: Method,
  data?: any,
  params?: any
}



