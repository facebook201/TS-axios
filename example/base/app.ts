import axios from '../../src/index';

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res);
});

// 设置content-type
axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res);
});


// 传URLSearchParams
const paramsString = "q=URLUtils.searchParams&topic=api"
const searchParams = new URLSearchParams(paramsString);

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
});
