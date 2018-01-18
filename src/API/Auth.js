import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from '../Modules/Auth';
import { API_HOST } from './config';
import setAuthorizationToken from '../Utils/setAuthorizationToken'


export function login(data){
  return dispatch =>{
  	return axios.post(API_HOST+'/client/login',data).then(res => {
		// const token = res.data.token;
		// localStorage.setItem('jwtToken',token);
		// setAuthorizationToken(token);
		// dispatch(SET_CURRENT_USER(jwtDecode));
		console.log("In Auth API")
		console.log(res.data.user);
		localStorage.setItem("user",res.data.user)
		dispatch(setCurrentUser(res.data.user));
		return res.data.user
	})
  }
	
}

export function logout(data){
	return dispatch =>{
		// localStorage.removeItem('jwtToken');
		// setAuthorizationToken(false);
		localStorage.removeItem('user');
		dispatch(setCurrentUser({}));
		return {success : 200};
	}
	
}