import axios, { AxiosError } from '../../src/index';

// 请求404catch到错误
axios({
  method: 'get',
  url: '/error/get1'
}).then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
});

// 随机
axios({
  method: 'get',
  url: '/error/get'
}).then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
});

// 超时
axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res => {
  console.log(res);
}).catch((e: AxiosError) => {
  console.log(e.message);
  console.log(e.request);
  console.log(e.response);
});
