import { GET_DETAIL_POST, SET_DETAIL_POST } from './constants';

export const getDetailPost = () => ({
  type: GET_DETAIL_POST,
});

export const setDetailPost = (detailpost) => ({
  type: SET_DETAIL_POST,
  detailpost,
});
