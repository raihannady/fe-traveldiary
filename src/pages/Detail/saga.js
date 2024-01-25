import { takeLatest, call, put } from 'redux-saga/effects';

import { showPopup, setLoading } from '@containers/App/actions';
import { getDetailPost } from '@domain/api';
import { setDetailPost } from './actions';
import { GET_DETAIL_POST } from './constants';

function* doGetDetailPost() {
  yield put(setLoading(true));
  try {
    const response = yield call(getDetailPost);
    yield put(setDetailPost(response.data));
    console.log(response.data, '<<< res');
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* detailSaga() {
  yield takeLatest(GET_DETAIL_POST, doGetDetailPost);
}
