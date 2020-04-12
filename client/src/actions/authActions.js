import {SET_CURRENT_USER, GET_ERRORS} from  './typs';
import axios from 'axios';

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
