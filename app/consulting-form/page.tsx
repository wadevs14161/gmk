import Header from '@/components/Header';
import ConsultingForm from '../../components/ConsultingForm';

export default function ConsultingFormPage() {
  return (
    <>
      <Header />
      {/* Form section will go here */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-12">
        {/* Form column */}
        <div className="w-full md:w-3/5">
          <ConsultingForm />
        </div>
        {/* Info column */}
        <aside className="w-full md:w-2/5 flex flex-col bg-white/80 rounded-xl shadow p-4 md:p-6 text-gray-900 text-sm md:text-base leading-relaxed">
          <p className="mb-3">GMKAgentは、イギリス専門の留学エージェント。あなたの海外生活、挑戦を全力でサポートします。ただ、何をしていいのかわからない。詳しい話を聞いてみたい</p>
          <p className="mb-3">そんな時は私たちに相談してみてください。</p>
          <p className="mb-3">経験のあるカウンセラーがあなたの疑問を解消します。</p>
          <p className="mb-3">カウンセリングは、ご希望のサービスごとに行うことができます。</p>
          <ul className="list-disc pl-6 mb-3">
            <li>語学学校紹介</li>
            <li>YMSトータルサポートプラン</li>
            <li>ホームステイ先紹介</li>
            <li>海外寿司シェフエージェント</li>
          </ul>
          <p className="mb-3">ご希望の相談内容を、フォームにて選択してください。</p>
          <p className="mb-3">ホームステイについてのカウンセリングをご希望の場合は、こちらからホームステイ専用カウンセリングページにてフォームのご記入をよろしくお願いします。</p>
          <p className="mb-3">こちらはGMK AGENTの無料カウンセリング予約になります。</p>
          <p className="mb-3">こちらで取得した情報は、GMK AGENTの活動以外において利用することはございませんのでご安心ください。</p>
          <p className="mb-3">また、公式ラインからもご相談を受け付けております。以下のURLより私たちの公式ラインを登録後、ご連絡ください。</p>
          <a href="https://lin.ee/ktmwS1v" target="_blank" rel="noopener" className="text-black underline font-medium">公式ラインはこちらから</a>
        </aside>
      </section>
    </>
  );
}
