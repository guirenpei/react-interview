import "babel-polyfill";
import axios from 'axios';

import { backend } from '../../config/config';

axios.defaults.baseURL = backend;

export async function all() {
  // console.log('service', 'all--');
  return await axios({
    url: '/story/all',
    method: 'get',
  }).then((res) => res.data);
}