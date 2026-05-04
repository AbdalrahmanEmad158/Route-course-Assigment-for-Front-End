
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../components/Context/AuthContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { headerDataObj } from '../../components/helpers/headersObj'
import usePosts from '../../CustomHooks/usePosts'

export default function Profile() {
  
    const {UserData} = useContext(AuthContext)
    console.log(UserData)

 const {data ,isLoading, isFetched,isFetching,isError,refetch} = usePosts(['userPosts'],Boolean(UserData?._id),`users/${UserData._id}/posts?limit=2` )
 
   
  return (
    <div>
       {(isLoading || UserData?._id ==false)   /*(isLoading || Boolean(UserData?._id ==false)*/ 
        && 
        <p>loading ......</p>}
     {isFetched && data.posts.map((post)=> <PostCard post={post}/>)}
    </div>
  )
} 









/*import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../components/Context/AuthContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { headerDataObj } from '../../components/helpers/headersObj'

export default function Profile() {
  
    const {UserData} = useContext(AuthContext)
console.log(UserData)
 /* const {data ,isLoading, isFetched,isFetching,isError,refetch} = useQuery(
    {
      queryFn: getUserPosts,
      queryKey:['userPosts'],
    
    }
  )*/
  
  
  
   /* async function getUserPosts()
    {
      try {
        console.log("testtt")
        const {data} = await axios.get(`https://linked-posts.routemisr.com/users/${UserData._id}/posts?limit=2`
          ,headerDataObj)
      console.log(data)
    // return data.posts
      } 
      
      catch (error) {
        console.log(error)
      //  return error
      }
    }
    useEffect(()=>
    {
      if (UserData?._id) {
        getUserPosts()
      }
    },[UserData])
  return (
    <div>
      {UserData?._id ? <>heloooo true</> : <>heloooo false</>}
    </div>
  )
} */
