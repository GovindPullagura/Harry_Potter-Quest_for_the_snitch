

 export  type userType= {
    _id :string,
    username :string,
    bestScore: number,

 }
export type userReducerState = {
    users: []|userType[],
    leaderBoard:[]|userType[],
    player:userType,
    isLoading :Boolean,
    isError: Boolean
  }
export type ReducerActionType = {
    type?: string
    payload?: [] | userType[]
  }
  export type DispatchType = (args: ReducerActionType) => ReducerActionType