import { combineReducers } from 'redux';
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  STORY_ALL,
  IMAGE_ALL,
  IMAGE_MORE
} from '../actions';

export let initialState = {
  entities: {
    loginUser: null
  },
  loginPageData: {
    loading: false,
    error: null
  },
  stories: {
    loading: false,
    books: null
  },
  images: {
    loading: false,
    images: null
  }
};

let reducers = combineReducers({
  entities: function (state = {}, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return { ...state, loginUser: action.payload };
      default:
        return state;
    }
  },
  loginPageData: function (state = {}, action) {
    switch (action.type) {
      case LOGIN_LOADING:
        return { ...state, loading: action.payload };
      case LOGIN_FAILURE:
        return { ...state, error: action.payload };
      case LOGIN_SUCCESS:
        return { ...state, error: null };
      default:
        return state;
    }
  },
  stories: function (state = {}, action) {
    switch (action.type) {
      case STORY_ALL:
        const stories = action.data.stories || [];
        const success= action.data.success;
        return { ...state, loading: success, books: stories };
        break;
      default:
        return state;
    }
  },
  images: function(state = {}, action) {
    switch (action.type) {
      case IMAGE_ALL:
        const images = action.data.images || [];
        const success = action.data.success;
        return { ...state, loading: success, pics: images };
        break;
      case IMAGE_MORE:
        const more = action.data.images || [];
        const loading = action.data.success;
        return { ...state, loading: success, pics: more };
        break;
      default:
        return state;
    }
  }
});

export default reducers;
