import Footer from "./Footer";

const features = [
  {
    title: "イギリス専門！",
    desc: (
      <>
        <b>GMKAgent</b>は、イギリスに特化したサポートを提供するエキスパートです！現地の就職事情やビザ手続き、生活のコツに精通しているからこそ、一人ひとりにぴったりのアドバイスをお届け。イギリスでの新生活をスムーズにスタートしたいなら、GMKAgentにお任せください！
      </>
    ),
  },
  {
    title: "YMSに強い",
    desc: (
      <>
        YMSビザでイギリスに挑戦したい方、必見！GMKAgentはYMSビザに関する豊富な知識と経験を持つプロフェッショナルです。ビザ申請から仕事探し、住まいの確保、語学学校の手配まで、すべてワンストップでサポート。あなたの夢を実現するお手伝いをします！
      </>
    ),
  },
  {
    title: "イギリス在住のカウンセラー",
    desc: (
      <>
        「初めての海外生活で不安…」そんなあなたに寄り添うのが、<b>GMKAgent</b>の現地在住カウンセラーです！イギリスでの生活を知り尽くした日本人スタッフが、あなたの疑問や悩みにとことんお答え。異国の地でも、安心して新たな一歩を踏み出せます！
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="w-full pt-16 pb-28 relative"
      style={{
        // clipPath: 'ellipse(120% 6% at 50% 0%)',
        background: '#ededed',
        zIndex: 100,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-black">
        {/* Booking Button Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1 flex justify-center">
            <a
              href="https://calendly.com/gmkagent/consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#ffe066] rounded-xl px-8 py-8 shadow-lg border-2 border-[#ffe066] hover:bg-yellow-300 transition-all w-full md:w-auto"
              style={{ minWidth: 350, maxWidth: 500 }}
            >
              <span className="mr-6 text-5xl" role="img" aria-label="calendar">📅</span>
              <span className="text-3xl md:text-4xl font-extrabold text-white" style={{ textShadow: '0 2px 8px #d4a700' }}>
                カウンセリングを予約！
              </span>
            </a>
          </div>
          <div className="flex-1 text-black text-lg leading-relaxed">
            まずは、イギリス専門のカウンセラーに相談してみてください。何から始めていいかわからない。漠然と留学に行きたいなどなんでも構いません。そういったお思いを具体的な形にできるようサポートさせていただきます！<br />
            <span className="font-bold">GMKAgentのスタッフ一同お待ちしております。</span>
          </div>
        </div>
        {/* Features Section */}
        <h2 className="text-5xl font-bold mb-16" style={{ color: 'black' }}>GMKAgentの特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ color: 'black' }}>
          {features.map((f, i) => (
            <div key={i} className="text-left">
              <h3 className="text-xl font-bold mb-4 underline decoration-black decoration-2 underline-offset-4">{f.title}</h3>
              <div className="text-base leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    <Footer />
    </section>
  );
}
