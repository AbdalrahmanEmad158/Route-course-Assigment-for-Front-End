import React from 'react'
import data from "../../../Posts.json"
import OurAuthorsCard from '../../componants/our Auhour Card/OurAuthourCard';
import { Link } from 'react-router';

export default function About() {
  const dataA = data || [];
  return (
     <div className="pt-25 pb-5 text-white">
     
       <div className="bg-[#0a0a0a]">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div className="bg-grid"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              من نحن
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="glass-card p-6">
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 block" />
                <div className="text-3xl font-bold gradient-text mb-1">
                  +2مليون
                </div>
                <div className="text-sm text-neutral-500">قارئ شهرياً</div>
              </div>
              <div className="glass-card p-6">
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 block" />
                <div className="text-3xl font-bold gradient-text mb-1">
                  +500
                </div>
                <div className="text-sm text-neutral-500">مقالة منشورة</div>
              </div>
              <div className="glass-card p-6">
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 block" />
                <div className="text-3xl font-bold gradient-text mb-1">+50</div>
                <div className="text-sm text-neutral-500">كاتب خبير</div>
              </div>
              <div className="glass-card p-6">
                <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block" />
                <div className="text-3xl font-bold gradient-text mb-1">+15</div>
                <div className="text-sm text-neutral-500">تصنيف</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111111] border-y border-[#262626]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
                قيمنا
                <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <i className="fa-solid fa-bullseye text-4xl text-orange-500 mb-4 block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    الجودة أولاً
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    محتوى مدروس ومكتوب بخبرة
                  </p>
                </div>
              </div>
              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <i className="fa-solid fa-bolt text-4xl text-orange-500 mb-4 block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    تركيز عملي
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    أمثلة واقعية يمكنك تطبيقها اليوم
                  </p>
                </div>
              </div>
              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <i className="fa-solid fa-handshake text-4xl text-orange-500 mb-4 block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    المجتمع
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    تعلم مع آلاف المصورين
                  </p>
                </div>
              </div>
              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <i className="fa-solid fa-arrows-rotate text-4xl text-orange-500 mb-4 block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    دائماً محدث
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    أحدث الاتجاهات وأفضل الممارسات
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label mb-4">فريقنا</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                تعرف على كتابنا
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataA.posts.map((post) => {
                return <OurAuthorsCard key={post.id} data={post} />;
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@adasah.com"
                className="btn bg-black text-white rounded-full cursor-pointer flex items-center justify-center gap-2 px-6 py-3 text-sm hover:bg-white hover:text-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                تواصل معنا
              </a>
              <Link className="btn border hover:text-black hover:bg-white hover:border-0          
                   transition-all bg-orange-500 text-sm p-5 rounded-full cursor-pointer " to={"/blog"}>
                تصفح المقالات
              </Link>
            </div>
          </div>
        </section>
      </div>
     
    </div>
  )
}
   