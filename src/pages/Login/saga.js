import { takeLatest, call, put } from 'redux-saga/effects';
import { showPopup, setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { LOGIN } from './constants';
import { setLogin } from '@containers/Client/actions';
import { setToken } from '@containers/Client/actions';

function* doLogin({ dataUser }) {
  yield put(setLoading(true));
  try {
    const { data } = yield call(login, dataUser);
    yield put(setLogin(true));
    yield put(setToken(data.token));
  } catch (error) {
    console.log(error);
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, doLogin);
}
