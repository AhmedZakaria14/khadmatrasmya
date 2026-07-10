import { ShieldCheck, CheckCircle2, Building, Target, Scale, Award } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'عن مكتب خدمات ومعاملات رسمية | أفضل مكتب معقب في السعودية',
  description: 'تعرف على مكتب خدمات ومعاملات رسمية أفضل معقب في السعودية. ننجز كافة المعاملات الحكومية (الجوازات، مكتب العمل، المرور) بسرعة وبمصداقية مع الدفع بعد الإنجاز.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6} className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block border-b-2 border-accent-500 text-primary-900 text-xs font-bold pb-1 uppercase tracking-widest mb-6">
            تعرف علينا
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-900 mb-6 tracking-tight">
            عن مكتب <span className="text-accent-500">خدمات ومعاملات رسمية</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            مكتب خدمات ومعاملات رسمية هو خيارك الأمثل لإنهاء كافّة الخدمات والمعاملات الرسمية والحكومية في المملكة العربية السعودية بسرعة، دقة، وموثوقية عالية مع التزام راسخ بالشفافية.
          </p>
        </ScrollReveal>

        {/* Vision & Mission Bento Grid */}
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <ScrollReveal direction="right" duration={0.8} className="md:col-span-12 lg:col-span-7 bg-gray-50 p-10 md:p-14 border border-gray-200 relative group h-full">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-sm bg-white flex items-center justify-center mb-8 border border-gray-200 shadow-sm">
                <Target className="h-8 w-8 text-primary-900" />
              </div>
              <h2 className="text-3xl font-extrabold text-primary-900 mb-5">رؤيتنا</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                أن نكون المكتب الرائد والأول للمرجع في تقديم خدمات التعقيب وإنهاء المعاملات، من خلال بناء جسور الثقة مع عملائنا وتقديم خدمات احترافية تضمن لهم الراحة وسرعة الإنجاز بطرق مبتكرة وحديثة.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" duration={0.8} className="md:col-span-12 lg:col-span-5 bg-primary-950 text-white p-10 md:p-14 border-t-4 border-accent-500 relative h-full">
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540171/aboutUS_a2o8hn.jpg')] opacity-5 bg-cover mix-blend-overlay grayscale"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="bg-primary-900 w-16 h-16 rounded-sm flex items-center justify-center mb-8 border border-primary-800">
                <Building className="h-8 w-8 text-accent-500" />
              </div>
              <h2 className="text-3xl font-extrabold mb-5 text-white">مهمتنا</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                تيسير الإجراءات الرسمية، ورفع العناء عن كاهل الأفراد بالنيابة عنهم في المراجعات المعقدة، مع التزام تام بالشفافية عبر ميزة الدفع بعد الإنجاز التام.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Values Section */}
        <div className="mb-24">
           <ScrollReveal direction="up" duration={0.6} className="text-center mb-12">
             <h2 className="text-3xl font-extrabold text-primary-900 mb-4">قيمنا الأساسية</h2>
             <p className="text-gray-600 font-medium">نرتكز على مبادئ ثابتة تضمن جودة العمل ورضا العملاء.</p>
           </ScrollReveal>
           
           <div className="grid sm:grid-cols-3 gap-8">
             {[
               { icon: <ShieldCheck className="h-8 w-8 text-accent-500" />, title: 'الأمانة المطلقة', desc: 'نتعامل مع بيانات عملائنا ومعاملاتهم بأقصى درجات السرية والأمان.' },
               { icon: <Scale className="h-8 w-8 text-accent-500" />, title: 'الالتزام بالنظام', desc: 'جميع أعمالنا تتوافق بشكل تام مع الأنظمة والقوانين السعودية.' },
               { icon: <Award className="h-8 w-8 text-accent-500" />, title: 'الجودة والسرعة', desc: 'نحقق التوازن المثالي بين دقة الإنجاز وسرعة تسليم المستندات.' },
             ].map((val, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.15} duration={0.7}>
                  <div className="bg-white p-8 border border-gray-200 text-center shadow-sm hover:border-primary-900 transition-colors h-full">
                     <div className="inline-flex items-center justify-center mb-6">
                       {val.icon}
                     </div>
                     <h3 className="text-xl font-bold text-primary-900 mb-3">{val.title}</h3>
                     <p className="text-gray-500 font-medium leading-relaxed">{val.desc}</p>
                  </div>
                </ScrollReveal>
             ))}
           </div>
        </div>

        {/* Why Us? */}
        <ScrollReveal direction="up" duration={0.8} className="bg-gray-50 p-10 md:p-16 border border-gray-200 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary-900 leading-tight">لماذا تختار التعامل معنا وتثق بنا؟</h2>
              <p className="text-gray-600 text-lg mb-10 font-medium leading-relaxed">
                في مكتب خدمات ومعاملات رسمية، نقدر وقتك الثمين وندرك أهمية المعاملات التي توكلها إلينا، ولذلك نقدم تجربة متكاملة ترتكز على الثقة.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: 'ضمان الدفع بعد الإنجاز', desc: 'حقك محفوظ، لا نطلب أي مبالغ مالية حتى نتأكد من إتمام المعاملة.' },
                  { title: 'تغطية واسعة', desc: 'نخدمك في أي مدينة داخل المملكة العربية السعودية.' },
                  { title: 'خبرة طويلة وأنظمة متجددة', desc: 'فريقنا مطلع بشكل دائم على أحدث التحديثات في الدوائر الحكومية.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-accent-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-1.5">{item.title}</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full flex flex-col justify-center bg-primary-950 p-10 md:p-14 text-center relative border-r-4 border-accent-500 shadow-xl">
               <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">جاهز لبدء معاملتك؟</h3>
                 <p className="text-gray-300 mb-10 text-lg font-medium leading-relaxed">تواصل معنا الآن عبر الواتساب وسنقوم بمراجعة طلبك والبدء في الإجراءات فوراً.</p>
                 <Link
                    href="/contact"
                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-primary-950 font-bold text-lg px-8 py-4 rounded-sm transition-all duration-200 active:scale-[0.98] select-none hover:shadow-lg shadow-md"
                 >
                    انتقل لصفحة التواصل
                 </Link>
               </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
