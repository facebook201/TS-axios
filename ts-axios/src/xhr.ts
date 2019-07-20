import { AxiosRequestConfig, AxiosPromise } from './types'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve) => {
    const { data = null, url, method = 'get', headers, responseType } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType;
    }

    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      }
      const responseHeaders = request.getAllResponseHeaders();
      const responseData = responseType !== 'text' ? request.response : request.responseText;
    };

    Object.keys(headers).forEach(name => {
      // 没有data的时候 content-type 是没有意义的
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name];
      } else {
        request.setRequestHeader(name, headers[name]);
      }
    })
    request.send(data)
  });
}
