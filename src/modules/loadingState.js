import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';
const INIT_LOADING = 'loading/INIT_LOADING';

export const startLoading = createAction(
  START_LOADING,
  requestType => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  requestType => requestType
);

export const initLoading = createAction(INIT_LOADING);

const initialState = {};

const loadingState = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false
    }),
    [INIT_LOADING]: (state) => ({}),
  },
  initialState
);

export default loadingState;