import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setCurrentData,pushCurrentData } from '../Modules/Data';
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

export function getAllData(){
    return dispatch =>{
        console.log("전체 데이터 가져오기");
        return axios.get(API_HOST+'/client/getData/all').then((res)=>{
            // console.log(res.data);
            dispatch(setCurrentData(res.data.data));
            return res.data;
        })
    }
}

export function pushData(newData){
    // console.log(newData)
    return dispatch =>{
        return axios.post(API_HOST+'/client/pushContent',newData).then((res)=>{
            console.log("Data Store complete");
            // console.log(res);
            return axios.get(API_HOST+'/client/getData/all').then((res)=>{
                // console.log(res.data);
                dispatch(setCurrentData(res.data.data));
                return res.data;
            })

        })
    }
}