import { LOGIN } from './constants';

export const login = (dataUser) => ({
  type: LOGIN,
  dataUser,
});
