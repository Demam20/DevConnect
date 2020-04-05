import {SET_CURRENT_USER} from  './typs';

//Register user action

export const registerUser = (userData) => {
  return{
    type : SET_CURRENT_USER,
    payload : userData
  }
}