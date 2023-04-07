

import {  ReducerActionType, userReducerState } from "../../Constants/types";
import { GET_USERS_SUCCESS, POST_USERS_SUCCESS, USERS_FAILURE, USERS_REQUEST } from "./actionType";



const initialState   = {

  users: [],
  isLoading: false,
  isError: false,
};

const reducer = (state :userReducerState=initialState , action:any) => {
const {type,payload}=action
  switch (type) {
    case USERS_REQUEST:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return {...state, isLoading: false, users: payload};

      case POST_USERS_SUCCESS:
      return {...state, isLoading: false,};

    case USERS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };