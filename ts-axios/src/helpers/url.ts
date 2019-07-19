import { isDate, isObject } from './utils';

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']');
}

export function buildURL(url: string, params: any): string {
  if (!params) {
    return url;
  }

  const parts: string[] = [];

  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value == null) {
      return;
    }
    let values = [];

    if (Array.isArray(value)) {
      values = value;
      key += '[]';
    } else {
      values = [value];
    }

    values.forEach((val) => {
      if (isDate(val)) {
        val = val.toISOString();
      } else if (isObject(val)) {
        val = JSON.stringify(val);
      }
      parts.push(`${encode(key)}=${encode(val)}`);
    });
  });

  let serializedParams = parts.join('&');
  if (serializedParams) {
    // 如果有# 就去掉#后面的字符串
    const markIndex = url.indexOf('#');
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}
