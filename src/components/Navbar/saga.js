import { takeLatest, call, put } from 'redux-saga/effects';
import { showPopup, setLoading } from '@containers/App/actions';
import { logout } from '@domain/api';
// import { setPost } from './actions';
import { LOGOUT } from './constants';
import { setLogin } from '@containers/Client/actions';

// function* doFetchPost() {
//   yield put(setLoading(true));
//   try {
//     const response = yield call(fetchPost);
//     yield put(setPost(response));
//   } catch (error) {
//     console.log(error);
//   }
//   yield put(setLoading(false));
// }

function* doLogout() {
  yield put(setLoading(true));
  try {
    // const { data } = yield call(login, dataUser);
    yield put(setLogin({ login: false, token: null }));
  } catch (error) {
    console.log(error);
  }
}

export default function* logoutSaga() {
  // yield takeLatest(SET_POST, doFetchPost);
  yield takeLatest(LOGOUT, doLogout);
}
