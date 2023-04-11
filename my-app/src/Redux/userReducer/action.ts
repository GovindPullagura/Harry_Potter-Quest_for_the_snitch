
import axios ,{ AxiosResponse} from "axios";

import { GET_USERS_SUCCESS, POST_USERS_SUCCESS, USERS_FAILURE, USERS_REQUEST,GET_LEADERS_SUCCESS } from "./actionType";
import { DispatchType, userType } from "../../Constants/types";
import { Dispatch } from "react";


export const usersRequestAction =()=>{
  return {type :USERS_REQUEST}
}

export const usersFailureAction =()=>{
  return {type :USERS_FAILURE}
}

export const usersSuccessAction =(payload:userType[])=>{
  return {type :GET_USERS_SUCCESS,payload}
}

export const leadersSuccessAction =(payload:userType[])=>{
  return {type :GET_LEADERS_SUCCESS,payload}
}

export const AddusersSuccessAction =(payload:userType)=>{
  return {type :POST_USERS_SUCCESS,payload}
}




export const getUsersData  = (dispatch: Dispatch<any>) => {
  dispatch(usersRequestAction());

  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/plyerlist`).then((res: AxiosResponse<userType[]>) => {
    // console.log(res,"hi")
    dispatch(usersSuccessAction(res.data));
  
    }).catch((e) => {
      dispatch(usersFailureAction());
    });
};

export const getLeadersData  = (dispatch: Dispatch<any>) => {
  dispatch(usersRequestAction());

  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/leaderboard`).then((res: AxiosResponse<userType[]>) => {
    // console.log(res,"hi")
    dispatch(leadersSuccessAction(res.data));
  
    }).catch((e) => {
      dispatch(usersFailureAction());
    });
};



export const addNewUser = (userNAme:string) => (dispatch: Dispatch<any>) => {
  dispatch(usersRequestAction());

  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/newuser`,{username:userNAme}).then((res:AxiosResponse<userType>) => {
    console.log(res.data)
    localStorage.setItem("player",(res.data.username))
    dispatch( AddusersSuccessAction(res.data));
    // console.log(res)
    }).catch((e) => {
      dispatch(usersFailureAction());
    });
};

export const loginUser = (userNAme:string) => (dispatch: Dispatch<any>) => {
  dispatch(usersRequestAction());

  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/user`,{username:userNAme}).then((res:AxiosResponse<userType>) => {
    console.log(res)
    dispatch( AddusersSuccessAction(res.data));
    localStorage.setItem("player",(res.data.username))
 
    }).catch((e) => {
      dispatch(usersFailureAction());
    });
};



export const upadteuserScore = (score:number,id:string) => (dispatch: Dispatch<any>) => {
  dispatch({ type:USERS_REQUEST });

  return axios.patch(`${process.env.REACT_APP_BACKEND_URL}/user/playerlist/${id}`,{bestScore:score}).then((res) => {
      dispatch({ type: POST_USERS_SUCCESS ,payload:res.data});
    }).catch((e) => {
      dispatch({ type: USERS_FAILURE });
    });
};
