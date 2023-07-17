import { put, takeEvery } from 'redux-saga/effects';

// Redux action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

// Redux action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const incrementAsync = () => ({ type: INCREMENT_ASYNC });

// Redux Saga worker function
function* incrementAsyncSaga() {
  yield new Promise(resolve => setTimeout(resolve, 1000)); // Simulating an async operation
  yield put(increment());
}

// Redux Saga watcher function
function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
}

export { increment, decrement, incrementAsync, watchIncrementAsync };
