import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../Modules/Auth';
import { API_HOST, cert } from './config';
import setAuthorizationToken from '../Utils/setAuthorizationToken'

export function login(data){
  return dispatch =>{
  	return axios.post(API_HOST+'/client/login',data).then(async (res) => {

		console.log("[In Auth API]");
		// console.log(res)
		if(res.data.success){
			//로그인 성공
			let result;
			await jwt.verify(res.data.token,cert,(err,payload)=>{
				if(!err){
					// console.log(payload);
					localStorage.setItem("token",res.data.token);
					setAuthorizationToken(res.data.token);
					dispatch(setCurrentUser(payload));
					result = payload;
				}else{
					console.log(err);
					result = 'jwtError'
				}
			})
			return result;
		
		}else{
			//아이디 및 비밀번호 오류

			return 'authAccountError';
		}

	}).catch((err)=>{
		console.log("[로그인 POST 요청 부분에서 에러]")
		console.log(err)
		return 'axiosError';
	})
  }
	
}

export function logout(){
	return dispatch =>{
		console.log("[로그아웃 api]")
		setAuthorizationToken(false);
		localStorage.removeItem('token');
		dispatch(setCurrentUser({}));
		return "success"
	}
	
}