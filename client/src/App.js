import React,{Component} from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';


import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {SET_CURRENT_USER} from './actions/typs';


if (localStorage.jwtToken){
  //decode
  const decoded = jwt_decode(localStorage.jwtToken)  
  //set auth header
  setAuthToken(localStorage.jwtToken)  
  
  //dispatch call
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
});  
}
class App extends Component {

  render(){
  return(  
    <Provider store = {store}>
    <Router>
    <div className="App">
      <Navbar/>
      <Route exact path = "/" component ={Landing}/>
      <Route exact path = "/register" component ={Register}/>
      <Route exact path = "/login" component ={Login}/>
      <Footer/>
     
    </div>
    </Router>
    </Provider>
  );
 } 
   
}

export default App;
