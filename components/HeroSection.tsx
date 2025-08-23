import Image from 'next/image';

type HeroSectionProps = {
  backgroundImage?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaHref?: string;
  ctaText?: string;
  overlayClassName?: string;
  contentClassName?: string;
};

export default function HeroSection({
  backgroundImage = "/main-page-background.jpg",
  title,
  subtitle,
  ctaHref,
  ctaText,
  overlayClassName = "bg-black/20",
  contentClassName = "flex flex-col items-start max-w-4xl px-8"
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Hero"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          priority
          sizes="100vw"
        />
      <div className={`relative z-10 ${contentClassName}`}>
        {subtitle && (
          <span className="text-white text-lg md:text-2xl mb-2 drop-shadow-lg">{subtitle}</span>
        )}
        <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight drop-shadow-lg mb-8">{title}</h1>
        {ctaHref && ctaText ? (
          <a
            href={ctaHref}
            className="mt-2 px-8 py-3 rounded-full bg-[#B6FF8A] text-black font-medium text-lg shadow hover:bg-[#a0e86e] transition"
          >
            {ctaText}
          </a>
        ) : null}
      </div>
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
    </section>
  );
}
