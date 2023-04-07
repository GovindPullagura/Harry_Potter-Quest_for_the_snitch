import React, { Dispatch, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"

import { getUsersData } from '../Redux/userReducer/action'
import axios from 'axios'

export const LeaderBoard = () => {

    const users =useSelector((store:any)=>store.users)
    
    const dispatch: Dispatch<any> = useDispatch();
   
    useEffect(()=>{
        dispatch(getUsersData)
    },[])

    console.log(users)

     
  return (
    <div>LeaderBoard</div>
  )
}
