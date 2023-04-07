
import axios from "axios";

import { GET_USERS_SUCCESS, POST_USERS_SUCCESS, USERS_FAILURE, USERS_REQUEST } from "./actionType";
import { DispatchType, paylodType, userType } from "../../Allts/types";


export const usersRequestAction =()=>{
  return {type :USERS_REQUEST}
}

export const usersFailureAction =()=>{
  return {type :USERS_FAILURE}
}

export const usersSuccessAction =(payload:paylodType)=>{
  return {type :GET_USERS_SUCCESS,payload}
}

export const AddusersSuccessAction =(payload:userType)=>{
  return {type :POST_USERS_SUCCESS,payload}
}




export const getUsersData  = (dispatch: DispatchType) => {
  dispatch(usersRequestAction());

  return axios.get(`http://localhost:8080/user/leaderboard`).then((res) => {
    console.log(res,"hi")
    // dispatch(usersSuccessAction(res.data));
      // dispatch({ type: GET_USERS_SUCCESS ,payload:res.data});
    }).catch((e) => {
      dispatch(usersFailureAction());
    });
};


export const addNewUser = () => (dispatch: DispatchType) => {
  dispatch(usersRequestAction());

  return axios.post(`${process.env.Url}/user`).then((res) => {
    // dispatch(AddusersSuccessAction(res.data));
    }).catch((e) => {
      dispatch(usersFailureAction());
    });
};


// export const upadteuserScore = () => (dispatch: Dispatch<any>) => {
//   dispatch({ type:USERS_REQUEST });

//   return axios.patch(`${process.env.Url}/user/leaderboard`).then((res) => {
//       dispatch({ type: POST_USERS_SUCCESS ,payload:res.data});
//     }).catch((e) => {
//       dispatch({ type: USERS_FAILURE });
//     });
// };