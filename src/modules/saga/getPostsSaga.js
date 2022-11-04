import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';

import api from '../api'

import createRequestSaga from './createRequestSaga';

const GET_POSTS = 'posts/GET_POSTS'
const INIT_POSTS_RESP = 'init/INIT_POSTS_RESP'
const INIT_RESP = 'init/INIT_RESP'

export const initResp = createAction(INIT_RESP);

export const getPostList = createAction(GET_POSTS, res => res);
export const initPostListResp = createAction(INIT_POSTS_RESP);

const getPostListSaga = createRequestSaga(GET_POSTS, api.getPosts)

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
  [GET_POSTS]: (state, action) => ({
    ...state,
    getPostListResp: action.payload
  })
}, initialState)

export default apiGetPostListResp