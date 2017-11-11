import "babel-polyfill";
import { all } from '../../services/story';

export function storyAll(data) {
  return {
    type: 'STORY_ALL',
    data: data
  }
}

export function getAll(dispatch) {
  return async function (dispatch) {
    const data = await all();
    dispatch(storyAll(data));
  }
}