import React from 'react'

export default function Pagination(props) {
    const {numberOfPages,setcurrentPagePagination,currentPagePagination} = props
  return (
   <ul className='flex justify-center gap-8 py-5'>
    {Array.from({length: numberOfPages},(_,i)=><li onClick={()=>setcurrentPagePagination(i+1)} className=
    {` ${currentPagePagination===i+1 ? "w-10 h-10 flex justify-center items-center border-2 p-2 cursor-pointer text-white bg-orange-500" 
        :
     "w-10 h-10 flex justify-center items-center border-2 p-2 cursor-pointer text-neutral-400 bg-[#161616]"} `} size={30} >{i+1}</li>)}
   </ul>
  )
}
