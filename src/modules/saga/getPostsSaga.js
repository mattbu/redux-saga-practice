import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';

import api from '../api'

import createRequestSaga from './createRequestSaga';

const GET_POSTS = 'posts/GET_POSTS'

export const getPostList = createAction(GET_POSTS);

const getPostListSaga = createRequestSaga(GET_POSTS, api.getPostList)

export function* apiGetPostsSaga() {
  yield takeLatest(GET_POSTS, getPostListSaga)
}

const initialState = {
  getPostListResp: null
}

const apiGetPostListResp = handleActions({
  [GET_POSTS]: (state, action) => ({
    ...state,
    getPostListResp: action.payload
  })
}, initialState)

export default apiGetPostListResp