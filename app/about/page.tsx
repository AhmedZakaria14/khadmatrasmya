import { ShieldCheck, CheckCircle2, Building, Target, Scale, Award } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'عن مكتب ابو محمد المطيري | أفضل مكتب معقب في السعودية',
  description: 'تعرف على مكتب ابو محمد المطيري أفضل معقب في السعودية. ننجز كافة المعاملات الحكومية (الجوازات، مكتب العمل، المرور) بسرعة وبمصداقية مع الدفع بعد الإنجاز.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-white py-16 font-sans lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6} className="mx-auto mb-20 max-w-3xl text-center">
          <span className="section-kicker mb-6">
            تعرف علينا
          </span>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-primary-900 md:text-5xl lg:text-6xl">
            عن مكتب <span className="text-primary-500">ابو محمد المطيري</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            مكتب ابو محمد المطيري هو خيارك الأمثل لإنهاء كافّة الخدمات والمعاملات الرسمية والحكومية في المملكة العربية السعودية بسرعة، دقة، وموثوقية عالية مع التزام راسخ بالشفافية.
          </p>
        </ScrollReveal>

        {/* Vision & Mission Bento Grid */}
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <ScrollReveal direction="right" duration={0.8} className="group relative h-full rounded-[30px] border border-primary-100 bg-primary-50/60 p-10 shadow-[0_18px_55px_rgba(8,63,70,.07)] md:col-span-12 md:p-14 lg:col-span-7">
            <div className="relative z-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-primary-100">
                <Target className="h-8 w-8 text-primary-500" />
              </div>
              <h2 className="text-3xl font-extrabold text-primary-900 mb-5">رؤيتنا</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                أن نكون المكتب الرائد والأول للمرجع في تقديم خدمات التعقيب وإنهاء المعاملات، من خلال بناء جسور الثقة مع عملائنا وتقديم خدمات احترافية تضمن لهم الراحة وسرعة الإنجاز بطرق مبتكرة وحديثة.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" duration={0.8} className="relative h-full overflow-hidden rounded-[30px] bg-primary-900 p-10 text-white shadow-[0_18px_55px_rgba(8,63,70,.18)] md:col-span-12 md:p-14 lg:col-span-5">
            <div className="absolute inset-0 bg-[url('/images/sections/about-saudi-team.webp')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <Building className="h-8 w-8 text-accent-400" />
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
               { icon: <ShieldCheck className="h-8 w-8 text-primary-500" />, title: 'الأمانة المطلقة', desc: 'نتعامل مع بيانات عملائنا ومعاملاتهم بأقصى درجات السرية والأمان.' },
               { icon: <Scale className="h-8 w-8 text-primary-500" />, title: 'الالتزام بالنظام', desc: 'جميع أعمالنا تتوافق بشكل تام مع الأنظمة والقوانين السعودية.' },
               { icon: <Award className="h-8 w-8 text-primary-500" />, title: 'الجودة والسرعة', desc: 'نحقق التوازن المثالي بين دقة الإنجاز وسرعة تسليم المستندات.' },
             ].map((val, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.15} duration={0.7}>
                  <div className="h-full rounded-[26px] border border-primary-100 bg-white p-8 text-center shadow-[0_14px_45px_rgba(8,63,70,.06)] transition duration-300 hover:-translate-y-1 hover:border-primary-300">
                     <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50">
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
        <ScrollReveal direction="up" duration={0.8} className="soft-grid relative overflow-hidden rounded-[32px] border border-primary-100 bg-primary-50/60 p-8 md:p-16">
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary-900 leading-tight">لماذا تختار التعامل معنا وتثق بنا؟</h2>
              <p className="text-gray-600 text-lg mb-10 font-medium leading-relaxed">
                في مكتب ابو محمد المطيري، نقدر وقتك الثمين وندرك أهمية المعاملات التي توكلها إلينا، ولذلك نقدم تجربة متكاملة ترتكز على الثقة.
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
            
            <div className="relative flex w-full flex-col justify-center rounded-[28px] bg-primary-900 p-10 text-center shadow-xl md:p-14 lg:w-1/2">
               <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">جاهز لبدء معاملتك؟</h3>
                 <p className="text-gray-300 mb-10 text-lg font-medium leading-relaxed">تواصل معنا الآن عبر الواتساب وسنقوم بمراجعة طلبك والبدء في الإجراءات فوراً.</p>
                 <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-200 hover:bg-accent-600 hover:shadow-lg active:scale-[0.98] md:w-auto"
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
