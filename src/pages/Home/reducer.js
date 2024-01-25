import { produce } from 'immer';

import { SET_POST } from './constants';

export const initialState = {
  post: {},
};

export const storedKey = ['post'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_POST:
        console.log(action, '<<<< REDUCER');
        draft.post = action.post;
        break;
    }
  });

export default homeReducer;
