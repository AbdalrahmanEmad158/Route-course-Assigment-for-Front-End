import React, { createContext, useEffect, useState } from 'react'
import { headerDataObj } from '../helpers/headersObj'
import axios from 'axios'


export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
    const [token , setToken] = useState(localStorage.getItem("token"))
    const[UserData,setUserData]=useState()
    async function getLoggedUserData()
    {
      try {
      const {data} = await axios.get(`https://linked-posts.routemisr.com/users/profile-data`,headerDataObj)
    
    setUserData(data.user)
    } 
    
    catch (error) {
      console.log(error)
    }
    }

    useEffect(()=>
    {getLoggedUserData()},[])
  return (

<AuthContext.Provider value={{token , setToken,UserData}}>
{children}
</AuthContext.Provider>
   
  )
}
