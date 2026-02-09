import React, { useState } from 'react'
import style from "./Blog.module.css";
import data from "../../../Posts.json"
import CategoriesItem from './../../componants/CategoriesItem/CategoriesItem';
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import ArticleCard from '../../componants/ArticleCard/ArticleCard';
import HorizontalArticleCard from '../../componants/HorizontalArticleCard/HorizontalArticleCard';
import Pagination from '../../componants/pagination/Pagination';
import { Link } from 'react-router-dom';
export default function Blog() {
  console.log(data)
  const {categories , posts, siteInfo} = data
  const AllCategory = [,"جميع المقالات",... categories.map((item)=>item.name)]

  const [display,setdisplay]= useState("grid")
  const [curentcategory , setcurentcategory] = useState("جميع المقالات")
  const [search_value,setsearch_value]= useState()
  const [currentPagePagination,setcurrentPagePagination] = useState(1)

console.log(search_value)
console.log(AllCategory)
console.log(currentPagePagination)

const filteredPosts = posts.filter((post) => {
  const matchesCategory = curentcategory === "جميع المقالات" || post.category === curentcategory;

  const searchLower = (search_value || "").toLowerCase();
  const matchesSearch = post.title.toLowerCase().includes(searchLower);

  return matchesCategory && matchesSearch;
});

const numberOfPages = Math.ceil(filteredPosts.length/6)
const  finalfilteredPosts = filteredPosts.slice((currentPagePagination-1)*6,currentPagePagination*6)

  return (
   <div className="pt-20">
  <section className={style['hero-section']}>
    <div className={style.content}>
      <div className={style.badge}>
        <span>مدونتنا</span>
        <i className={style['icon-blog']}></i>
      </div>
      
      <h1 className={style['main-title']}>
        استكشف <span>مقالاتنا</span>
      </h1>
      
      <p className={style['sub-title']} >
        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
      </p>
    </div>
  </section>

  <div className='bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
<div className='flex flex-col md:flex-row justify-between items-center gap-4'>

<div className='relative w-full md:w-80'>
<input onChange={(e)=>setsearch_value(e.target.value)} type="text" placeholder='ابحث في المقالات...' className='rounded-lg focus:border focus:border-2 focus:border-orange-700 w-full px-5 py-3 pr-12 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'  />

</div>


<div className='flex flex-wrap justify-center gap-2'>
  {AllCategory.map((item)=><CategoriesItem setcurentcategory={setcurentcategory} curentcategory={curentcategory} setcurrentPagePagination={setcurrentPagePagination} content={item}/>)}
</div>

</div>
    </div >

    </div>

    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-between'>
  <span className='text-neutral-400' >عرض <span className='text-white'>{posts.length}</span> مقالات</span>
  <div className='flex p-1 border-2  border-[#262626] rounded-2xl gap-1'>
    <FaListUl onClick={()=>setdisplay("list")} className={`p-2  cursor-pointer ${display==="list"? "bg-orange-600 text-white" : "text-[#262626]"}`} size={34}/>
    <IoGrid onClick={()=>setdisplay("grid")} className={`p-2  cursor-pointer ${display==="grid"? "bg-orange-600  text-white" : "text-[#262626]"}`} size={34}/>
  </div>
</div>



<div className='p-6'>
  <div className={`grid ${display === "grid" ? "grid-cols-1 md:grid-cols-3 gap-6" : "grid-cols-1 gap-4"}`}>
    {finalfilteredPosts.length > 0 ? (
      finalfilteredPosts.map((item) => (
       <Link to={`/blog/${item.id}`}>

        <React.Fragment key={item.id}>
          {display === "grid" ? (
            <ArticleCard item={item} />
          ) : (
            <HorizontalArticleCard item={item} />
          )}
        </React.Fragment>
        
        </Link>
      ))
    ) : (
      <div className="text-center text-gray-500 col-span-full py-10">
        لا توجد مقالات تطابق بحثك..
      </div>
    )}
  </div>
</div>


<div>
  <Pagination setcurrentPagePagination={setcurrentPagePagination} currentPagePagination={currentPagePagination} numberOfPages={numberOfPages}/>
</div>

</div>
  )
}
