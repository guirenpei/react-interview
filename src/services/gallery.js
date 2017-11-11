import "babel-polyfill";
import axios from 'axios';

import { backend } from '../../config/config';

axios.defaults.baseURL = backend;

export async function all() {
  return await axios({
    url: '/image/all',
    method: 'get',
  }).then((res) => res.data);
}

export async function loadmore(current) {
  return await axios({
    url: `/image/loadmore?current=${current}`,
    method: 'get',
  }).then((res) => res.data);
}