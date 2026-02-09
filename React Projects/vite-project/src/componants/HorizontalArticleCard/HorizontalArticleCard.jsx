import React from 'react'

export default function HorizontalArticleCard({item}) {
  return (
    <div>
      <div className="mb-3 group cursor-pointer max-w-7xl mx-auto px-4 bg-[#121212] text-white rounded-3xl overflow-hidden border border-gray-800 flex flex-row-reverse" dir="rtl">
     
      <div className="w-2/3 p-8 flex flex-col ">
        <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
          <span className="bg-orange-900/30 text-orange-500 px-3 py-1 rounded-lg text-[10px] font-bold">
            {item.category}
          </span>
          <span>🕒 {item.readTime} دقائق للقراءة</span>
          <span>📅 {item.date}</span>
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition">{item.title}</h3>
        <p className="text-gray-400 text-sm mb-6">{item.excerpt}</p>

        <div className="mt-auto flex items-center justify-between">
        
            <div className="flex items-center gap-3">
                <div className="text-left">
                    <p className="text-sm font-bold">{item.author.name}</p>
                    <p className="text-[10px] text-gray-500 text-left">{item.author.role}</p>
                </div>
                <img src={item.author.avatar} alt={item.author.name} className="w-10 h-10 rounded-full object-cover border border-gray-700" />
            </div>
             <button className="text-orange-500 font-bold flex items-center gap-2 group-hover:text-white group-hover:translatex-20 transition">
               اقرأ المقال ←
            </button>
        </div>
      </div>

      <div className="w-1/3 h-64 p-2">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition" />
      </div>
    </div>
    </div>
  )
}
