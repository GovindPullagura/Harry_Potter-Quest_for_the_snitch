
import axios ,{ AxiosResponse} from "axios";

import { GET_USERS_SUCCESS, POST_USERS_SUCCESS, USERS_FAILURE, USERS_REQUEST } from "./actionType";
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

export const AddusersSuccessAction =()=>{
  return {type :POST_USERS_SUCCESS}
}




export const getUsersData  = (dispatch: Dispatch<any>) => {
  dispatch(usersRequestAction());

  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/leaderboard`).then((res: AxiosResponse<userType[]>) => {
    console.log(res,"hi")
    dispatch(usersSuccessAction(res.data));
  
    }).catch((e) => {
      dispatch(usersFailureAction());
    });
};


export const addNewUser = () => (dispatch: Dispatch<any>) => {
  dispatch(usersRequestAction());

  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/user`).then((res) => {
    dispatch( AddusersSuccessAction());
    }).catch((e) => {
      dispatch(usersFailureAction());
    });
};


export const upadteuserScore = () => (dispatch: Dispatch<any>) => {
  dispatch({ type:USERS_REQUEST });

  return axios.patch(`${process.env.REACT_APP_BACKEND_URL}/user/leaderboard`).then((res) => {
      dispatch({ type: POST_USERS_SUCCESS ,payload:res.data});
    }).catch((e) => {
      dispatch({ type: USERS_FAILURE });
    });
};
