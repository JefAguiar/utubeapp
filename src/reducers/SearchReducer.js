import { SET_SEARCHBAR_TERM } from '../actions/types';

const INITIAL_STATE = {
  term: ''
}; 

export default (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
      case SET_SEARCHBAR_TERM:
      {
        return {
          ...state, ...action.payload
        };
      }
      default: 
        return state;
      
    }
};