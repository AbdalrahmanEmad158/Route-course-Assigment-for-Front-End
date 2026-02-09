import React from 'react'
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className="pt-25">
     
      <section className={style['hero-section']}> {/* لاحظ استخدام القوسين لأن الاسم فيه شرطة - */}
          <div className={style.content}>
            <div className={style.badge}>
              <span>مرحباً بك في عدسة</span>
              <i className={style['icon-blog']}></i>
            </div>
            
            <h1 className={style['main-title']}>
             اكتشف <span>فن </span> <br />
التصوير الفوتوغرافي
            </h1>
            
            <p className={style['sub-title']}>
             انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            {/* الأزرار (Buttons) */}
<div className={style['hero-actions']}>
  <button className={style['btn-primary']}>
    <span>استكشف المقالات</span>
    <i className="fa-solid fa-arrow-left"></i>
  </button>
  <button className={style['btn-outline']}>
    <span>اعرف المزيد</span>
    <i className="fa-solid fa-circle-info"></i>
  </button>
</div>

{/* بطاقات الإحصائيات (Stats Cards) */}
<div className={style['stats-container']}>
  <div className={style['stat-card']}>
    <i className="fa-solid fa-newspaper"></i>
    <h3>+50</h3>
    <p>مقالة</p>
  </div>
  <div className={style['stat-card']}>
    <i className="fa-solid fa-users"></i>
    <h3>+10 ألف</h3>
    <p>قارئ</p>
  </div>
  <div className={style['stat-card']}>
    <i className="fa-solid fa-folder-open"></i>
    <h3>4</h3>
    <p>تصنيفات</p>
  </div>
  <div className={style['stat-card']}>
    <i className="fa-solid fa-pen-nib"></i>
    <h3>6</h3>
    <p>كاتب</p>
  </div>
</div>
          </div>
        </section>
     
    </div>
  )
}
