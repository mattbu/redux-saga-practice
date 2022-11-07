import { createAction, handleActions } from 'redux-actions';
import { all, takeLatest } from 'redux-saga/effects';

import * as myApi from '../api/index';
import createRequestSaga from './createRequestSaga';

/***** 액션 타입 선언 *****/

// 0. Response 초기화
const INIT_POSTS_RESP = 'init/INIT_POSTS_RESP'
const INIT_RESP = 'init/INIT_RESP'
const GET_POSTS = 'posts/GET_POSTS'
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE';

export const initResp = createAction(INIT_RESP);

export const getPostList = createAction(GET_POSTS);


export const initPostListResp = createAction(INIT_POSTS_RESP);

console.log(myApi.getPosts);
const getPostListSaga = createRequestSaga(GET_POSTS, myApi.getPosts)

export function* apiGetPostsSaga() {
  yield takeLatest(GET_POSTS, getPostListSaga)
}

const initialState = {
  getPostListResp: null
}

const apiGetPostListResp = handleActions({
  [INIT_RESP]: (state, action) => ({
    getPostListResp: null
  }),
  [INIT_POSTS_RESP]: (state, action) => ({
    ...state,
    getPostListResp: null,
  }),
  [GET_POSTS_SUCCESS]: (state, action) => {
    console.log(state, action);
    return {
      ...state,
      getPostListResp: action.payload
    }
  },
  [GET_POSTS_FAILURE]: (state, action) => {
    console.log(state, action);
    return {
      ...state,
      getPostListResp: '하하하'
    }
  }
}, initialState)

export default apiGetPostListResp