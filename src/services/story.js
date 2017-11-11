import "babel-polyfill";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:2366';

export async function all() {
  // console.log('service', 'all--');
  return await axios({
    url: '/story/all',
    method: 'get',
  }).then((res) => res.data);
}