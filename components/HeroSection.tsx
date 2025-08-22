export default function HeroSection() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
      <img
        src="/main-page-background.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="relative z-10 flex flex-col items-start max-w-4xl px-8">
        <h1 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8 drop-shadow-lg">
          <span className="font-bold">GMKAgent</span>は、<br />
          あなたの挑戦を支える、<br />
          イギリス専門のエージェントです。
        </h1>
        <a
          href="/counseling"
          className="mt-2 px-8 py-3 rounded-full bg-[#B6FF8A] text-black font-medium text-lg shadow hover:bg-[#a0e86e] transition"
        >
          無料カウンセリング
        </a>
      </div>
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
    </section>
  );
}
