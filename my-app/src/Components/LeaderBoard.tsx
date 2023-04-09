import React, { Dispatch, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"

import { getUsersData } from '../Redux/userReducer/action'
import axios from 'axios'
import { userType } from '../Constants/types'

export const LeaderBoard = () => {

    const users =useSelector((store:any)=>store.users)
    
    const dispatch: Dispatch<any> = useDispatch();
   
    useEffect(()=>{
        dispatch(getUsersData)
    },[])

    console.log(users)

     

  return (
    <div className="text-center fixed flex items-center right-0 bg-blue-500 h-screen" >
      
      <table className="w-96  max-w-3xl" >
        <thead>
          <tr>
            <th  >User</th>
            <th >Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user:userType,i:number) => (
            <tr key={user._id} >
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.bestScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

//className="w-90% m-auto text-center border-collapse border border-slate-400 ..."
//className="w-80% border border-black ..."