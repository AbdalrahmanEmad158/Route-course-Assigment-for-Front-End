// usePosts.jsx
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function usePosts(queryKey, isEnabled, endPoint) {
  
  async function getPosts() {
    // نقرأ التوكن هنا مباشرة قبل إرسال الطلب لضمان أنه أحدث نسخة
    const token = localStorage.getItem('token'); 
    
    const headers = {
      token: token // تأكد من اسم المفتاح المطلبو من الـ API (غالباً token أو Authorization)
    };

    try {
      const { data } = await axios.get(
        `https://linked-posts.routemisr.com/${endPoint}`, 
        { headers } // نمرر الهيدرز هنا
      );
      return data;
    } catch (error) {
      // هام جداً: لا ترجع الخطأ كـ return، بل استخدم throw ليشعر به React Query
      throw error; 
    }
  }

  return useQuery({
    queryFn: getPosts,
    queryKey: [...queryKey],
    enabled: isEnabled
  });
}