import { GET_POST, SET_POST } from './constants';

export const getPost = () => ({
  type: GET_POST,
});

export const setPost = (post) => ({
  type: SET_POST,
  post,
});
