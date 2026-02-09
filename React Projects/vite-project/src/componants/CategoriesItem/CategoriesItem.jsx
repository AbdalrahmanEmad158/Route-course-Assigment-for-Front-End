import React from 'react'

export default function CategoriesItem(props) {
    const{content,setcurentcategory,curentcategory,setcurrentPagePagination} = props
  return (
    <div>
      <button className={`${curentcategory===content ? "bg-orange-500 text-white  cursor-pointer px-4 py-2 rounded-xl text-sm font-medium": "cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
       onClick={()=>setcurentcategory(content) + setcurrentPagePagination(1)}  >{content}</button>
    </div>
  )
}
