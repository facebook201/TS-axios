import axios from '../../src/index';

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
});
