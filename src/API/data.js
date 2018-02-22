import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setCurrentData,pushCurrentData } from '../Modules/Data';
import { API_HOST, cert } from './config';
import setAuthorizationToken from '../Utils/setAuthorizationToken'

export function test(data){
    return dispatch =>{
  
        return axios.post(API_HOST+'/client/test',data).then((res)=>{
            // console.log(res.data);
            return res.data;
        })
    }
}

export function getAllData(){
    return dispatch =>{
       
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
     
            // console.log(res);
            return axios.get(API_HOST+'/client/getData/all').then((res)=>{
                // console.log(res.data);
                dispatch(setCurrentData(res.data.data));
                return res.data;
            })

        })
    }
}

export function getThemeData(category){
    return dispatch =>{
        return axios.post(API_HOST+'/client/getThemeData',category).then((res)=>{
            // console.log("getTheme Data");
            return res.data;
        })
    }
}

export function getThemeDataSpecific(theme){

    return dispatch =>{
        return axios.post(API_HOST+'/client/getThemeDataSpecific',theme).then((res)=>{
            // console.log("getTheme Data");
            return res.data;
        })
    }
}

export function getThemeEachData(theme){
    return dispatch =>{
        return axios.post(API_HOST+'/client/getThemeEachData',theme).then((res)=>{
            // console.log("getTheme Data");
            return res.data;
        })
    }
}

export function getSnippetData(category){
    return dispatch =>{
        return axios.post(API_HOST+'/client/getCategoryData',category).then((res)=>{
            // console.log("getTheme Data");
            return res.data;
        })
    }
}

export function getTagData(tag){
  
    var data = {
        tag : tag
    }
    return dispatch =>{
        return axios.post(API_HOST+'/client/getTagData',data).then((res)=>{
            return res.data;
        })
    }
}

export function getHomePageData(){

    return dispatch =>{
        return axios.post(API_HOST+'/client/getHomePageData').then((res)=>{
            return res.data;
        })
    }
}

