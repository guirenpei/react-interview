'use strict';
const prod = true;
const local = false;

if (prod) {
  console.log('running in aliyun');
  module.exports = {
    backend: '*' // 云服务器上的api地址
  }
} else {
  console.log('running in local');
  module.exports = {
    backend: '*', // 本地api地址
  }
}