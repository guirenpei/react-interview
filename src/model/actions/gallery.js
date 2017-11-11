import "babel-polyfill";

import { all, loadmore } from '../../services/gallery';

export function imageAll(data) {
  return {
    type: 'IMAGE_ALL',
    data: data
  }
}

export function images(dispatch) {
  return async function (dispatch) {
    const data = await all();
    dispatch(imageAll(data));
  }
}

export function load(data) {
  return {
    type: 'IMAGE_MORE',
    data
  }
}

export function loadMore(params) {
  return async function (dispatch) {
    const current = params.current;
    const data = await loadmore(current);
    dispatch(load(data));
  }
}