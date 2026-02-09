import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
let loc =  useLocation()
console.log(loc)
  // تأثير لتغيير خلفية الـ Navbar عند السكرول (مثل المواقع الاحترافية)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 
      bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-[#262626] py-3
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* اليمين: اللوجو والروابط الأساسية */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(249,115,22,0.3)]">
                <span className="text-white font-bold text-lg">ع</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">عدسة</span>
            </Link>

            {/* روابط الديسكتوب */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-neutral-400 hover:text-white'}`}>الرئيسية</NavLink>
              <NavLink to="/blog" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-neutral-400 hover:text-white'}`}>المدونة</NavLink>
              <NavLink to="/about" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-neutral-400 hover:text-white'}`}>من نحن</NavLink>
            </div>
          </div>

          {/* اليسار: أدوات البحث والـ View (اختياري في الـ Nav) */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-[#161616] border border-[#262626] rounded-xl px-3 py-1.5 focus-within:border-orange-500 transition-all">
               <i className="fa-solid fa-magnifying-glass text-neutral-500 text-xs"></i>
               <input 
                type="text" 
                placeholder="ابحث عن تدوينة..." 
                className="bg-transparent border-none focus:ring-0 text-xs text-white placeholder-neutral-600 w-32 lg:w-48 text-right"
               />
            </div>

            <button className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-orange-500/10">
              اشترك الآن
            </button>

            {/* زر الموبايل */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#161616] border border-[#262626] text-white"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      <div className={`absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#262626] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4 text-right">
          <Link to="/" className="text-neutral-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>الرئيسية</Link>
          <Link to="/blog" className="text-neutral-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>المدونة</Link>
          <Link to="/about" className="text-neutral-400 hover:text-white py-2" onClick={() => setIsOpen(false)}>من نحن</Link>
          <button className="bg-orange-500 text-white py-3 rounded-xl font-bold mt-2">اشترك الآن</button>
        </div>
      </div>
    </nav>
  );
}