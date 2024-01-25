import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetailState = (state) => state.detailpost || initialState;

export const selectDetailPost = createSelector(selectDetailState, (state) => state.detailpost);
