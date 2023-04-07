

import { GET_USERS_SUCCESS, USERS_FAILURE, USERS_REQUEST } from "./actionType";



const initialState  = {

  users: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action: any) => {
  const { type,payload } = action;
  switch (type) {
    case USERS_REQUEST:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return {...state, isLoading: false, users: payload};
      case GET_USERS_SUCCESS:
      return {...state, isLoading: false, users: [...state.users,payload]};

    case USERS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };