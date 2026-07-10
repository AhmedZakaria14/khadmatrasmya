import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'خدمات التعقيب والمعاملات الحكومية | مكتب خدمات ومعاملات رسمية',
  description: 'نقدم خدمات معقب محترف: الجوازات، استخراج تأشيرات، تصاريح زواج، التجنيس، مكتب العمل السجل التجاري والمرور بالرياض وكافة مناطق المملكة.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesClient />
      </div>
    </div>
  );
}
