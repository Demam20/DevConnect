import {SET_CURRENT_USER} from '../actions/typs';
import isEmpty from '../validation/is-empty';
const initialState = {
      isAuthenticated:!isEmpty (action.payload),
      user :action.payload
};

export default function (state = initialState, action){
  switch(action.type){
    case SET_CURRENT_USER :
      return {
        ...state,
        user : action.payload 
      }
    default:
      return state;
  }
}