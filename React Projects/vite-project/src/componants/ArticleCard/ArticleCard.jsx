import React from 'react'

export default function ArticleCard({item}) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16' >
      <div className=" group hover:cursor-pointer max-w-sm bg-[#121212] text-white rounded-3xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full">
      {/* قسم الصورة مع التاج */}
      <div className="relative h-64">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover p-2 group-hover:scale-105 rounded-t-[2rem]" />
        <span className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-xs font-bold px-4 py-1.5 rounded-full border border-gray-500">
          {item.category}
        </span>
      </div>

      {/* محتوى المقال */}
      <div className="p-6 flex flex-col flex-grow text-right" dir="rtl">
        <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
          <span className="flex items-center gap-1">
             🕒 {item.readTime} دقائق للقراءة
          </span>
          <span>•</span>
          <span>{item.date}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 leading-snug">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3 group-hover:text-orange-500">
          {item.excerpt}
        </p>

        {/* تذييل الكارد - الكاتب والزر */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
             <div className="text-right">
              <p className="text-sm font-semibold">{item.author.name}</p>
              <p className="text-[10px] text-gray-500">{item.author.role}</p>
            </div>
            <img src={item.author.avatar} alt={item.author.name} className="w-10 h-10 rounded-full object-cover border border-gray-700" />
          </div>
          
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors group-hover:bg-orange-600 group-hover:text-white">
            ←
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
