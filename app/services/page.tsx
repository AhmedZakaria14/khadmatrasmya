import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'خدمات التعقيب والمعاملات الحكومية | مكتب ابو محمد المطيري',
  description: 'نقدم خدمات معقب محترف: الجوازات، استخراج تأشيرات، تصاريح زواج، التجنيس، مكتب العمل السجل التجاري والمرور بالرياض وكافة مناطق المملكة.',
};

export default function ServicesPage() {
  return (
    <div className="soft-grid min-h-screen bg-primary-50/35 py-16 font-sans lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesClient />
      </div>
    </div>
  );
}
