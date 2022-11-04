import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'
import loadingState from './loadingState';

import apiGetPostListResp, { apiGetPostsSaga } from './saga/getPostsSaga';

const rootReducer = combineReducers({ loadingState, apiGetPostListResp })

export function* rootSaga() {
  yield all([
    apiGetPostsSaga()
  ])
}

export default rootReducer