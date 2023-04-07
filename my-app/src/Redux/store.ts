import { applyMiddleware,  legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./userReducer/reducer";
import { ReducerActionType, userReducerState } from "../Constants/types";



export const store = legacy_createStore(reducer, applyMiddleware(thunk));