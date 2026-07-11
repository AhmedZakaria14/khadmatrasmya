import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'رقم معقب | تواصل مع مكتب ابو محمد المطيري في السعودية',
  description: 'هل تبحث عن رقم معقب؟ تواصل مع مكتب ابو محمد المطيري للإجابة عن استفساراتك وانجاز معاملاتك في الجوازات، المرور، مكتب العمل بأسرع وقت والدفع بعد الإنجاز.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6} className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block border-b-2 border-accent-500 text-primary-900 text-xs font-bold pb-1 uppercase tracking-widest mb-6">
            دعم ومساندة
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-primary-900 mb-6 tracking-tight">ابقى على تواصل <span className="text-accent-500">معنا</span></h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            فريق الدعم وبدء المعاملات مستعد للرد على استفساراتكم والبدء في إنجاز أعمالكم فوراً. نحن دائماً في خدمتكم.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Contact Box */}
          <ScrollReveal direction="right" duration={0.8} className="lg:col-span-12 xl:col-span-7 bg-primary-950 p-10 md:p-14 text-white shadow-2xl relative order-last lg:order-first border-r-4 border-accent-500">
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-primary-900 w-16 h-16 rounded-sm flex items-center justify-center mb-8 border border-primary-800">
                <MessageCircle className="h-8 w-8 text-accent-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight text-white">راسلنا مباشرة عبر واتساب للبدء فوراً!</h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg">
                أسرع طريقة لإنجاز معاملتك هي بتوضيح تفاصيلها لممثلينا عبر تطبيق واتساب. نحن نرد بسرعة ونبدأ الإجراءات بمجرد الاتفاق.
              </p>
              
              <div className="bg-primary-900 rounded-sm p-6 border border-primary-800 mb-10 space-y-5">
                 <div className="flex items-center justify-between border-b border-primary-800 pb-5">
                    <span className="text-gray-300 font-medium">معدل الاستجابة السريع:</span>
                    <span className="font-bold text-primary-950 bg-accent-400 px-4 py-1.5 rounded-sm text-sm">فوري</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium">سياسة المركز الأساسية:</span>
                    <span className="font-bold text-white inline-flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                       الدفع بعد الإنجاز
                    </span>
                 </div>
              </div>

              <div className="mt-auto">
                <a
                  href="https://wa.me/966547147102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-3 bg-accent-500 hover:bg-accent-400 text-primary-950 font-bold text-xl px-8 py-5 rounded-sm transition-all duration-200 active:scale-[0.98] select-none shadow-md hover:shadow-lg"
                >
                  <Phone className="h-6 w-6" />
                  بدء المحادثة الآن
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info Cards */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <ScrollReveal direction="left" duration={0.8}>
              <h2 className="text-2xl font-bold text-primary-900 mb-6">قنوات الاتصال الرسمية</h2>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.1} duration={0.8}>
              <div className="bg-white p-8 border border-gray-200 shadow-sm hover:border-primary-900 transition-colors group animate-none">
                <div className="flex items-start gap-5">
                  <div className="bg-gray-50 p-4 shrink-0 border border-gray-100">
                    <Phone className="h-7 w-7 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">رقم الجوال</h3>
                    <p className="text-gray-500 font-medium mb-3 text-sm">الاتصال متوفر للأمور العاجلة.</p>
                    <a href="tel:+966547147102" className="text-2xl font-bold text-primary-900 hover:text-accent-500 transition-all duration-200 active:scale-[0.98] select-none py-2 -my-2 inline-block" dir="ltr">
                      +966 54 714 7102
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2} duration={0.8}>
              <div className="bg-white p-8 border border-gray-200 shadow-sm hover:border-primary-900 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="bg-gray-50 p-4 shrink-0 border border-gray-100">
                    <MapPin className="h-7 w-7 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">التغطية الجغرافية</h3>
                    <p className="text-gray-500 font-medium text-base">نغطي بخدماتنا جميع مناطق ومدن المملكة العربية السعودية دون استثناء. أعمالك تُنجز بالكامل عن بُعد أو عن طريق وكلائنا.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3} duration={0.8}>
              <div className="bg-white p-8 border border-gray-200 shadow-sm hover:border-primary-900 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="bg-gray-50 p-4 shrink-0 border border-gray-100">
                    <Clock className="h-7 w-7 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">أوقات العمل</h3>
                    <p className="text-gray-500 font-medium text-base">نستقبل استفساراتكم والمستندات على مدار أيام الأسبوع بلا توقف لضمان استمرارية الخدمة.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </div>
  );
}
