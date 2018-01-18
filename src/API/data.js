import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../Modules/Auth';
import { API_HOST, cert } from './config';
import setAuthorizationToken from '../Utils/setAuthorizationToken'

export function test(data){
    return dispatch =>{
        console.log(data);
        return axios.post(API_HOST+'/client/test',data).then((res)=>{
            console.log(res.data);
            return res.data;
        })
    }
}