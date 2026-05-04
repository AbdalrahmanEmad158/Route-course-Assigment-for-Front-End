import { Button, Card } from 'flowbite-react'
import React from 'react'
import { FcLike } from "react-icons/fc";
import { FaCommentAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
//import {formatDistanceToNow} from "date-fns" ;

export default function PostCard({post}) {
    const {body,createdAt:postDate,id:postId , image:postImg} = post
    const {photo:userImg,_id:userId} = post.user
   /* const result = formatDistanceToNow(
      newDate(postDate),
      {
        addSufix : true
      }
    )*/
  return (
        <Card
      className="w-full my-4"
     
    >
     <div className = "flex text-white justify-between">
        <div>
          <div className="flex gap-3">
              <img className='size-[40px] rounded-full object-cover' src={userImg} alt={name} />
          </div>
            <div className='flex'>
              <p>{name}</p>
              <p>{result}</p>
           </div>
        </div>
       <Button className='bg-red-500!'>Delete</Button>
        </div>
       <p className='text-white' >{body}</p>
       {postImg&& <img className='h-[300px] object-contain' src={postImg} alt="" />}
 <div className='flex justify-between text-slate-300'>
       <FcLike size={40} />
       <FaCommentAlt size={40} />
       <FaInfoCircle size={40} />
 </div>
    </Card>
  )
}
