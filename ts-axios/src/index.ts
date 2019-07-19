import { AxiosRequestConfig } from './types';
import xhr from './xhr';
import { buildURL } from './helpers/url';

function axios(config: AxiosRequestConfig) {
  // TODO
  // 处理config
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
}

// 处理url
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

export default axios;
