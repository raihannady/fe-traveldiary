import { takeLatest, call, put } from 'redux-saga/effects';

import { showPopup, setLoading } from '@containers/App/actions';
import { getPost } from '@domain/api';
import { setPost } from './actions';
import { GET_POST } from './constants';

function* doGetPost() {
  yield put(setLoading(true));
  try {
    const response = yield call(getPost);
    yield put(setPost(response.data));
    console.log(response.data, '<<< res');
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_POST, doGetPost);
}
