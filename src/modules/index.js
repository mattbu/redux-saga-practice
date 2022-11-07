import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects'
import loadingState from './loadingState';

import apiGetPostListResp, { apiGetPostsSaga } from './saga/getPostsSaga';

const rootReducer = combineReducers({
  loadingState,
  apiGetPostListResp
})

export function* rootSaga() {
  yield all([
    // apiGetPostsSaga()
    call(apiGetPostsSaga)
  ])
}

export default rootReducer