import {SET_CURRENT_USER, GET_ERRORS} from  './typs';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//Register user action

export const registerUser = (userData,history) => 
  dispatch => {
     axios
         .post('/api/users/register', userData)
         .then(res => history.push('/login'))
         .catch(err =>
             dispatch({
               type: GET_ERRORS,
               payload: err.response.data 
             })
          );
  }
  //login get user token action
  export const loginUser = userData => dispatch =>{
    axios
        .post("/api/users/login", userData)
        .then(res => {
          //save token to localstorage
         //set token to axios auth header
          const {token} = res.data;
          setAuthToken(token);
          //decode the token to get the user data
          const decoded = jwt_decode(token);
          //dispatch call to set-current-user
          dispatch({
            type:SET_CURRENT_USER,
            payload:decoded
          })


        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data 
          }));
  }
