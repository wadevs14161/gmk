import Image from 'next/image';
const services = [
  {
    img: "/main-page-cards-language-school.png",
    title: "語学学習サポート",
    desc: `GMKAgentでは、イギリスでの英語力向上を目指す方に最適な語学学校をご紹介します。学校の特徴やコース内容、料金を丁寧にご案内し、あなたの目的や生活スタイルに合った選択肢を提案。\n\nさらに、学校への申し込みや手続きも全力サポート！英語を学びながら、イギリス生活を存分に楽しめるようお手伝いします。`,
    button: "詳細はこちらから",
    buttonDisabled: false,
  },
  {
    img: "/main-page-cards-home-stay.png",
    title: "現地ホームステイ紹介",
    desc: `イギリス、ロンドンでのホームステイ先を手配させていただいております。完全英語環境のお家で英語力をしっかり伸ばしたいという方にお勧め！\n\nイギリスでのホームステイで本物の英国ライフを感じませんか？温かい家族と共に、日常会話を楽しみながら学びましょう。`,
    button: "詳細はこちらから",
    buttonDisabled: false,
  },
  {
    img: "/main-page-cards-internship.png",
    title: "ロンドンインターンシップ",
    desc: `GMKAgentでは、オフィス系ジョブを中心に未経験でも参加することができる、インターンシッププログラムをご紹介させていただいております。\n\nYMSビザや大学卒業後のびざなどイギリスで働くことができるビザを所有している人が主に対象になります。\nイギリスに来たけど、結局ジャパレスで働いている。オフィスワークをしたいといった方にお勧めです。`,
    button: "ComingSoon",
    buttonDisabled: true,
  },
];

export default function ServiceCardsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center h-full bg-white"
            style={{ minHeight: 560 }}
          >
              <Image
                src={s.img}
                alt={s.title}
                width={400}
                height={160}
                className="rounded-2xl w-full h-72 object-cover mb-6"
                style={{ maxWidth: 340 }}
              />
            <h3 className="text-xl font-bold mb-2 underline decoration-black decoration-2 underline-offset-4">{s.title}</h3>
            <p className="text-base text-black mb-8 whitespace-pre-line flex-1">{s.desc}</p>
            <div className="mt-auto w-full flex justify-center">
              <button
                className={`w-full max-w-xs py-3 rounded-full text-black font-medium text-base shadow transition ${
                  s.buttonDisabled
                    ? "bg-[#B6FF8A] opacity-70 cursor-not-allowed"
                    : "bg-[#B6FF8A] hover:bg-[#a0e86e]"
                }`}
                disabled={s.buttonDisabled}
              >
                {s.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
