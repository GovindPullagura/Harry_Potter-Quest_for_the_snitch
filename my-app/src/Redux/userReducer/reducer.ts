import { ReducerActionType, userReducerState } from "../../Constants/types";
import {
  GET_LEADERS_SUCCESS,
  GET_USERS_SUCCESS,
  POST_USERS_SUCCESS,
  USERS_FAILURE,
  USERS_REQUEST,
} from "./actionType";

const initialState = {
  users: [],
  leaderBoard: [],
  player: {},
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_REQUEST:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    case GET_LEADERS_SUCCESS:
      return { ...state, isLoading: false, leaderBoard: payload };

    case POST_USERS_SUCCESS:
      return { ...state, isLoading: false, player: payload };

    case USERS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };
