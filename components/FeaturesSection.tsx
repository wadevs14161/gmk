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
      {/* Footer */}
      <footer className="w-full bg-[#f4f4f4] border-t border-gray-300 py-8 mt-0">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <div className="font-bold text-lg mb-1">GMK AGENT</div>
            <div className="text-sm text-gray-700">info@gmkagent.com</div>
          </div>
          <nav className="flex-1 flex flex-wrap justify-center gap-6 text-sm text-gray-800">
            <a href="#" className="hover:underline">ホーム</a>
            <a href="#" className="hover:underline">海外寿司職人</a>
            <a href="#" className="hover:underline">語学学校</a>
            <a href="#" className="hover:underline">ホームステイ</a>
            <a href="#" className="hover:underline">YMSプラン</a>
            <a href="#" className="hover:underline">ブログ記事</a>
          </nav>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.instagram.com/gmkagent/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="#171717" strokeWidth="2"/><rect x="7" y="7" width="8" height="8" rx="4" stroke="#171717" strokeWidth="2"/><circle cx="16.5" cy="5.5" r="1" fill="#171717"/></svg>
            </a>
            <a href="https://twitter.com/gmkagent" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M19 6.5a7.5 7.5 0 01-2.14.59A3.75 3.75 0 0018.5 5a7.5 7.5 0 01-2.38.91A3.75 3.75 0 0011 8.75v.85A10.64 10.64 0 014 5.5s-4 9 5 13a11.13 11.13 0 01-6.5 2c13 7.5 20-6.5 20-12.5 0-.19 0-.37-.01-.56A7.18 7.18 0 0021 4.5a7.5 7.5 0 01-2.14.59A3.75 3.75 0 0018.5 5z" stroke="#171717" strokeWidth="2"/></svg>
            </a>
            <a href="https://lin.ee/ktmwS1v" target="_blank" rel="noopener noreferrer" aria-label="LINE">
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="8" stroke="#171717" strokeWidth="2"/><path d="M7 11h8M7 11l2-2m-2 2l2 2" stroke="#171717" strokeWidth="2"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
