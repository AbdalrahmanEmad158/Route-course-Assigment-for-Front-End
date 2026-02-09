import React from 'react'

export default function Footer() {
  return <>
  
   <div className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"> </div>

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    <div className="lg:col-span-1">
      <a className="flex items-center gap-3 mb-6 group" href="/" data-discover="true">
        <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300" style={{boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px"}}>
          <span className="text-white font-bold text-xl">
            ع
          </span>
        </div>

        <span className="text-xl font-bold text-white">عدسة</span>
      </a>
      <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
      </p>
      <div className="flex gap-2">
        <a href="https://x.com/adasah" target="_blank" rel="noopener noreferrer" classname="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110" aria-label="twitter">
          <svg fill="currentColor" classname="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="https://github.com/adasah" target="_blank" rel="noopener noreferrer" classname="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110" aria-label="github">
          <svg fill="currentColor" classname="w-5 h-5" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/adasah" target="_blank" rel="noopener noreferrer" classname="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110" aria-label="linkedin">
          <svg fill="currentColor" classname="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="https://x.com/adasah" target="_blank" rel="noopener noreferrer" classname="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110" aria-label="twitter">
          <svg fill="currentColor" classname="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
        <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
        استكشف
      </h3>
      <ul className="space-y-4">
        <li>
          <a className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group" href="/" data-discover="true">
            <svg className="w-4 h-4 opacity-1 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 5l7 7-7 7"></path>
              
               
              </svg>
               الرئيسية
               </a>
        </li>

         <li>
          <a className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group" href="/" data-discover="true">
            <svg className="w-4 h-4 opacity-1 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 5l7 7-7 7"></path>
              
               
              </svg>
              المدونة
               </a>
        </li>


        <li>
          <a className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group" href="/" data-discover="true">
            <svg className="w-4 h-4 opacity-1 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 5l7 7-7 7"></path>
              
               
              </svg>
              من نحن
               </a>
        </li>


          
      </ul>


    </div>




    <div>
      <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
        <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
       التصنيفات
      </h3>
      <ul className="space-y-4">
      
       <li>
          <a className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group" href="/" data-discover="true">
            <svg className="w-4 h-4 opacity-1 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 5l7 7-7 7"></path>
              
               
              </svg>
              إضاءة
               </a>
        </li>


         <li>
          <a className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group" href="/" data-discover="true">
            <svg className="w-4 h-4 opacity-1 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 5l7 7-7 7"></path>
              
               
              </svg>
              بورتريه
               </a>
        </li>



         <li>
          <a className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group" href="/" data-discover="true">
            <svg className="w-4 h-4 opacity-1 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 5l7 7-7 7"></path>
              
               
              </svg>
              مناظر طبيعية
               </a>
        </li>



         <li>
          <a className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group" href="/" data-discover="true">
            <svg className="w-4 h-4 opacity-1 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 5l7 7-7 7"></path>
              
               
              </svg>
              تقنيات
               </a>
        </li>
        


      </ul>

      
    </div>


<div>
    <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
        <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
      ابقى على اطلاع
      </h3>

      <p className="text-sm text-neutral-500 mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
      <form className="space-y-3">
        <div className="relative">
          <input type="email" className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
          placeholder='أدخل بريدك الإلكتروني'/>
        </div>
        <button className='w-full bg-orange-500 text-sm p-5 rounded-full' type="submit">اشترك</button>
      </form>
</div>

  </div>
 
 </div>

 <div className="relative border-t border-[#262626]">
  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

<p className="text-sm text-neutral-600">
  © 
  2026
  عدسة
  .  صنع بكل
  <i className="fa-solid fa-heart text-orange-500">
    
  </i>
    جميع الحقوق محفوظة. 
</p>
<div className="flex gap-6">
  <a className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300" href="/privacy" data-discover="true"></a>
  <a className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300" href="/terms" data-discover="true"></a>
</div>
    </div>
  </div>
 </div>
  </div>
  </>
   
  
}

