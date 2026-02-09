import React from 'react'
import data from "../../../Posts.json"
import { Link, NavLink, useParams } from 'react-router'
import { FaBookmark, FaCalendarAlt, FaClock, FaShareAlt, FaTag, FaVoicemail  } from 'react-icons/fa'

import ArticleCard from './../../componants/ArticleCard/ArticleCard';


export default function BlogDetails() {
  const {posts,siteInfo} = data
  const {social} = siteInfo
  console.log(posts)
   console.log(social)
  const {id} = useParams()
  console.log(id)
  const myPost = posts.find((item) => item.id==id)
  console.log(myPost)
 const { title, content, image, author, date, readTime, category, tags } = myPost;
 var filteredPosts = posts.filter((post)=> post.category===myPost.category)
 var finalfilteredPosts = filteredPosts.slice(0,3)
 const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans" dir="rtl">
      
      <section className="relative h-[70vh] flex items-end pb-16 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
              {category}
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-2">
              <FaCalendarAlt className="" /> {date}
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-2">
              <FaClock className="" /> {readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-3 rounded-2xl w-fit border border-white/10">
            <img src={author.avatar} alt={author.name} className="w-12 h-12 rounded-full border-2 border-orange-500" />
            <div>
              <p className="font-bold text-sm">{author.name}</p>
              <p className="text-[10px] text-gray-400">{author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. جسم المقال (Main Content) */}
      <main className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* الجانب الأيمن: النص */}
          <article className="lg:w-2/3">
            {/* التنسيق الديناميكي للمحتوى */}
            <div className="prose prose-invert prose-orange max-w-none text-gray-300 leading-relaxed text-lg">
              {content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
                    {paragraph.replace('##', '')}
                  </h2>
                }
                return <p key={index} className="mb-6">{paragraph}</p>
              })}
            </div>

            {/* الوسوم (Tags) */}
            <div className="mt-12 p-6 bg-[#111] rounded-3xl border border-white/5">
              <h4 className="flex items-center gap-2 mb-4 text-orange-500 font-bold">
                <FaTag /> الوسوم
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="bg-white/5 hover:bg-orange-600/20 px-4 py-2 rounded-xl text-sm transition-all cursor-pointer border border-white/10">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>


            <div className="mt-12 p-6 bg-[#111] rounded-3xl border border-white/5 flex justify-between items-center">
              <h4 className="flex items-center gap-2 mb-4 text-orange-500 font-bold">
                <FaTag /> شارك المقال
              </h4>
              <div className="flex flex-wrap gap-2">
                
                  <span className="bg-white/5 hover:bg-orange-600/20 px-4 py-2 rounded-xl text-sm transition-all cursor-pointer border border-white/10">
                    {social.twitter}
                  </span>

                   <span className="bg-white/5 hover:bg-orange-600/20 px-4 py-2 rounded-xl text-sm transition-all cursor-pointer border border-white/10">
                    {social.github}
                  </span>

                   <span className="bg-white/5 hover:bg-orange-600/20 px-4 py-2 rounded-xl text-sm transition-all cursor-pointer border border-white/10">
                    {social.linkedin}
                  </span>

                   <span className="bg-white/5 hover:bg-orange-600/20 px-4 py-2 rounded-xl text-sm transition-all cursor-pointer border border-white/10">
                    {social.youtube}
                  </span>
               
              </div>
            </div>


          </article>

          {/* الجانب الأيسر: Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* محتويات المقال (جدول تنقل) */}
            <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 sticky top-24">
              <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-4 flex items-center justify-between">
                محتويات المقال
                <FaBookmark className="text-orange-600 shadow-orange-500/50" />
              </h4>
              <ul className="space-y-4">
                {content.split('\n').filter(line => line.startsWith('##')).map((header, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 hover:text-orange-500 cursor-pointer group transition-all">
                    <span className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-xs group-hover:bg-orange-600 group-hover:text-white">
                      {i + 1}
                    </span>
                    {header.replace('##', '')}
                  </li>
                ))}
              </ul>

              <div className='p-6 bg-[#111111] rounded-2xl border border-[#262626]'>
                <div className="grid grid-cols-2 gap-4">
                  <div className='text-center p-4 bg-[#0a0a0a] rounded-xl'>
                   <p className='text-white font-bold'><FaClock className="text-orange-500" /> {readTime}</p> 
                  <p className='text-neutral-500 text-xs'>وقت القراءة</p>
                  </div>
                   <div className='text-center p-4 bg-[#0a0a0a] rounded-xl'>
                   <p className='text-white font-bold'><FaCalendarAlt className="text-orange-500" /> {date} </p> 
                  <p className='text-neutral-500 text-xs'>تاريخ النشر</p>
                  </div>
                </div>
              </div>


             
 
 <div className='p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20'>
 <div className='text-center'>

  <div className='w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
  <FaVoicemail className="text-orange-600 shadow-orange-500/50" />
  
  </div>
  <h3 className="font-bold text-white mb-2">لا تفوّت جديدنا</h3>
  <p className='text-neutral-400 text-sm mb-4'>اشترك للحصول على أحدث المقالات</p>
    <NavLink to="/blog" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-neutral-400 hover:text-white'}`}>تصفح المزيد</NavLink>
 
 
 </div>
 </div>

             
            </div>
          </aside>
        </div>
    
    <div className='p-6'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {finalfilteredPosts.length > 0 ? (
          finalfilteredPosts.map((item) => (
           <Link to={`/blog/${item.id}`} onClick={scrollToTop}>
    
            <React.Fragment key={item.id}>
              <ArticleCard item={item}/>
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

      </main>
    </div>
  );
}
