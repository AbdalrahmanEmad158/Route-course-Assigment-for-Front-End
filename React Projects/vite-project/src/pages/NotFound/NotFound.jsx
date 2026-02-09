import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      {/* Orange Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 text-center px-6">

        {/* 404 */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-orange-500 leading-none">
          404
        </h1>

        {/* Sad Icon Circle */}
        <div className="flex justify-center my-6">
          <div className="w-24 h-24 rounded-full border border-orange-500/40 bg-orange-500/10 flex items-center justify-center backdrop-blur-md">
            <span className="text-4xl text-orange-500">☹</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          عفواً! الصفحة غير موجودة
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Home Button */}
          <Link to="/" 
            
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold shadow-lg shadow-orange-500/30"
          >
            {/* Home SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 10.5L12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5" />
            </svg>
            الذهاب للرئيسية
          </Link>

          {/* Articles Button */}
          <Link to="/blog" 
            className="flex items-center gap-2 border border-gray-600 hover:border-orange-500 hover:text-orange-500 transition px-6 py-3 rounded-full"
          >
            {/* File SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
            </svg>
            تصفح المقالات
          </Link>

        </div>

        {/* Footer Links */}
        <div className="mt-12 text-sm text-gray-500 flex justify-center gap-6">
              <Link to="/" className="hover:text-orange-500">الرئيسيه</Link>
          <Link to="/blog"  className="hover:text-orange-500">المدونة</Link>
          <Link to="/about"  className="hover:text-orange-500">من نحن</Link>
        
        </div>

      </div>
    </div>
  );
}
