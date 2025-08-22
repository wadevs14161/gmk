
import HeroSection from '../../components/HeroSection';

export default function LanguageSchoolPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/language-school-hero.jpg" // Replace with your actual image
        title={
          <span className="text-white text-5xl md:text-[6rem] font-bold leading-none tracking-tight">
            語学学校紹介
          </span>
        }
        subtitle={
          <span className="text-white text-xl md:text-2xl font-light mb-4 tracking-wide">
            あなたに合った、最適な語学学校を
          </span>
        }
        ctaHref={undefined}
        ctaText={undefined}
        contentClassName="flex flex-col items-start max-w-5xl px-8 md:px-16"
      />
      <div className="max-w-4xl mx-auto px-4 py-12 text-black">
        {/* ...existing content sections... */}
      </div>
    </>
  );
}
