import { produce } from 'immer';

import { SET_DETAIL_POST } from './constants';

export const initialState = {
  detailpost: {},
};

export const storedKey = ['detailpost'];

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_DETAIL_POST:
        console.log(action, '<<<< REDUCER');
        draft.detailpost = action.detailpost;
        break;
    }
  });

export default detailReducer;
