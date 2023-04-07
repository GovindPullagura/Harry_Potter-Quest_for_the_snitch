

 export  type userType= {
    _id :String,
    username :String,
    bestScore: Number,

 }
export type userReducerState = {
    users: []|userType[],
    isLoading :Boolean,
    isError: Boolean
  }
export type ReducerActionType = {
    type?: string
    payload?: [] | userType[]
  }
  export type DispatchType = (args: ReducerActionType) => ReducerActionType