import { SET_SEARCHBAR_TERM } from './types';

export const setTerm = (term) => {
  return {
      type: SET_SEARCHBAR_TERM,
      payload: {
          term
      }
  }
};