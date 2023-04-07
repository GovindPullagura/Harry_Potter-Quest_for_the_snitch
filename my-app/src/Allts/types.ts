

 export  interface userType {
    _id :String,
    username :String,
    bestScore: Number,

 }
export type userState = {
    users: userType[],
    isLoading :Boolean,
    isError: Boolean
  }
export type paylodType = {
    type: string
    payload?: userType[]
  }
  export type DispatchType = (args: paylodType) => paylodType