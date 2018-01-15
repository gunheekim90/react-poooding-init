import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../Modules/Auth';
import { API_HOST } from './config';
import setAuthorizationToken from '../Utils/setAuthorizationToken'


export function login(data){
  return dispatch =>{
  	return axios.post(API_HOST+'/client/login',data).then(res => {
		// const token = res.data.token;
		// localStorage.setItem('jwtToken',token);
		// setAuthorizationToken(token);
		// dispatch(SET_CURRENT_USER(jwtDecode));
		console.log(res);
		dispatch(SET_CURRENT_USER(res.body.user));
	})
  }
	
}

export function logout(data){
	return dispatch =>{
		// localStorage.removeItem('jwtToken');
		setAuthorizationToken(false);
		dispatch(SET_CURRENT_USER({}));
	}
	
}