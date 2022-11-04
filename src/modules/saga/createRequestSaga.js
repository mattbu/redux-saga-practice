import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading, initLoading } from '../loadingState';

const createRequestSaga = (type, request) => {
  // 성공 및 실패 액션 타입을 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // 파라미터로 action을 받아 오면 액션의 정보를 조회할 수 있다.
  return function* (action) {
    // 로딩 시작
    yield put(startLoading(type));
    // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있다.
    // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
    const response = yield call(request, action.payload);

    yield put({
      type: SUCCESS,
      payload: response.data,
      headers: response.headers,
    });
    // 로딩 끝
    yield put(finishLoading(type));
  };
};

export default createRequestSaga;
