import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';


export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.FORM_SUBMITTED: {
      return {
        ...state,
        ...action
      };
    }
  }
  return state
}
