import HeroSection from '../../components/HeroSection';
import Image from 'next/image';

export default function LanguageSchoolPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/language-school-hero.jpg"
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
      <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-stretch bg-[#f7f7f7]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-12 bg-[#f7f7f7]">
          <div>
            <div className="text-gray-700 text-base md:text-lg mb-4">あなたにとってベストな語学学校を</div>
            <div className="mb-8">
              <div className="text-2xl md:text-3xl font-semibold mb-2">語学学校選びにおいて<br />最も重要なことは何か……</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-2">
              イギリス留学専門のエージェントだからこそできる<br />最善の方法で紹介します。
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center bg-[#f7f7f7] p-0 md:p-12">
          <div className="w-full max-w-lg aspect-square relative">
            <Image
              src="/language-school-background-2.png"
              alt="語学学校の風景"
              fill
              className="object-cover rounded-md shadow-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      {/* Next Section: Large heading and text with image */}
      <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-stretch bg-[#f7f7f7] mt-0 md:mt-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-12">
          <div>
            <div className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
              語学学校に行くのは、<br />Agentではなく、あなたです。。。
            </div>
            <div className="text-lg md:text-xl mb-10 mt-8">
              他社さんの語学学校紹介のように、提携している学校だから・語学学校を紹介するのではなく、あなたに本当にあった語学学校を紹介するのが、エージェントの本来の仕事だと思っています。
            </div>
            <div className="text-lg md:text-xl mt-16">
              GMKAgentでは、提携している語学学校だけではなく、あなたが本当に行きたい・あなたに合った語学学校を紹介させていただきます。
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-end justify-end p-0 md:p-12">
          <div className="w-full max-w-lg aspect-video relative">
            <Image
              src="/language-school-image-1.png"
              alt="ENGLISH hands"
              fill
              className="object-cover rounded-md shadow-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      {/* Section 3 & 4: Combined with full-height image */}
      <section className="w-full flex flex-col md:flex-row items-stretch bg-white min-h-[140vh]">
        {/* Left: Both text blocks stacked */}
        <div className="flex-1 flex flex-col">
          {/* Section 3: GMKAgent difference */}
          <div className="flex flex-col px-6 md:px-16 py-12">
            <div className="mb-8">
              <div className="text-2xl md:text-3xl font-bold mb-4">GMKAgentだからできる・他とは違う<br />語学学校紹介</div>
            </div>
            {/* Block 01 */}
            <div className="mb-12">
              <div className="text-5xl font-extrabold mb-2">01</div>
              <div className="text-xl md:text-2xl font-bold mb-2">GMKAgentと提携のない語学学校も紹介</div>
              <div className="text-base md:text-lg mb-2">
                GMKAgentの語学学校紹介は一風変わった制度を取り入れております。通常のAgentでは、Agentと契約をしている語学学校の中から紹介されますが、GMKAgentでは・お客様のご要望に合わせて、提携校以外の語学学校でも、柔軟にご紹介させていただくことができます。<br />
                <span className="font-bold">一番大事なことは・個人にあった語学学校選びを行うことです。</span><br />
                お客様のベストを提供させていただきます。
              </div>
            </div>
            {/* Block 02 */}
            <div>
              <div className="text-5xl font-extrabold mb-2">02</div>
              <div className="text-xl md:text-2xl font-bold mb-2">煩雑な手続きもすべてGMKAgentに任せ</div>
              <div className="text-base md:text-lg">
                語学学校に入校する際には・煩雑な手続きはつきもの。<br />
                入校手続きだけでなく・入校後の語学学校とのやり取りなど、初めての海外に緊張される方や・英語に不安がある方には、少し難しいもの。<br /><br />
                トラブルに巻き込まれないようにするためにも・そのような手続きまですべてGMKAgentにお任せください。
              </div>
            </div>
          </div>
          {/* Section 4: Free introduction and UK schools */}
          <div className="flex flex-col px-6 md:px-16 py-12 justify-center">
            {/* Block 03 */}
            <div className="mb-12">
              <div className="text-5xl font-extrabold mb-2">03</div>
              <div className="text-xl md:text-2xl font-bold mb-2">語学学校紹介にかかわる費用はすべて無料</div>
              <div className="text-base md:text-lg mb-2">
                GMKAgentでは・語学学校の紹介をすべて無料で行わせていただいております。紹介および入校手続きなどに関する費用は一切発生することはないので安心してご利用いただけます。<br />
                <br />
                ※語学学校の実費用はもちろんのこと、GMKAgentが支払いを代行するなどの際には、別途で為替レートの手数料などが発生いたします。<br />
                詳しくは、カウンセラーおよび公式LINEでお問い合わせください。
              </div>
            </div>
            {/* Block 04 */}
            <div>
              <div className="text-5xl font-extrabold mb-2">04</div>
              <div className="text-xl md:text-2xl font-bold mb-2">イギリス全土の学校から・ベストをお届け</div>
              <div className="text-base md:text-lg">
                GMKAgentでは・ロンドンはもちろんのこと、ロンドン以外の都市にある、ブライトンや、マンチェスター・ボーンマス・オックスフォード・ケンブリッジなどの語学学校を手配することもできますので・ご要望に合った都市などを一緒に提案することもできます。<br />
                <br />
                せっかくのイギリスYMSですので・ロンドンだけではなく・イギリスならではの・ロンドンとは少し違った暮らしや勉強もぜひ・検討してみてください。
              </div>
            </div>
          </div>
        </div>
        {/* Right: Full-height image for both sections */}
        <div className="hidden md:flex w-2/5 min-h-full">
          <div className="relative w-full h-full min-h-[140vh]">
            <Image
              src="/language-school-image-2.png"
              alt="Cityscape London"
              fill
              className="object-cover object-right md:rounded-none rounded-md"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>
            {/* Section: Flow Steps */}
      <section className="w-full py-24 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">語学学校紹介までの流れ</h2>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-16 px-6">
          {/* Step 1 */}
          <div className="flex-1">
            <div className="text-4xl md:text-5xl font-bold mb-4">Step1</div>
            <div className="text-lg font-semibold mb-2">・ヒアリング</div>
            <div className="text-base md:text-lg mb-2">まずは、ご要望・予算・ご状況などについてヒアリングを行います！<br /><br />ヒアリングは、直接カウンセラーと話すカウンセリングおよび公式ラインを活用したヒアリングも行っておりますので、どちらからでもご相談いただけます！</div>
          </div>
          {/* Step 2 */}
          <div className="flex-1">
            <div className="text-4xl md:text-5xl font-bold mb-4">Step2</div>
            <div className="text-lg font-semibold mb-2">・ご紹介</div>
            <div className="text-base md:text-lg mb-2">ヒアリングをさせていただいた情報をもとに、ご要望およびご条件に沿ったいくつかの候補をご紹介させていただきます。</div>
          </div>
          {/* Step 3 */}
          <div className="flex-1">
            <div className="text-4xl md:text-5xl font-bold mb-4">Step3</div>
            <div className="text-lg font-semibold mb-2">・語学学校手続き及びお支払い</div>
            <div className="text-base md:text-lg mb-2">語学学校決定後、入校の手続きを行います。<br />入校手続きに必要な情報などの入力も行います。<br /><br />ほとんどの語学学校さんでは、このタイミングでお支払いを行います。</div>
          </div>
          {/* Step 4 */}
          <div className="flex-1">
            <div className="text-4xl md:text-5xl font-bold mb-4">Step4</div>
            <div className="text-lg font-semibold mb-2">・語学学校入校準備完了</div>
            <div className="text-base md:text-lg mb-2">すべての手続きが完了すると、語学学校さんから、申込確定のメールなどが送信されます。そちらを受け取れば、これで申し込み手続きは完了です！<br /><br />一般的には、入校の2〜3か月前に手続きが完了しているのが理想的です！</div>
          </div>
        </div>
      </section>
            {/* Final CTA Section */}
      <section className="relative w-full bg-black text-white overflow-hidden pt-24 pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-12">
          {/* Left message */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 flex items-center justify-center md:justify-start">
            <div className="text-3xl md:text-4xl font-bold leading-relaxed whitespace-pre-line">
              まずは、カウンセリング\nもしくは、\n公式ラインでご相談ください
            </div>
          </div>
          {/* Right CTAs */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-16">
            <div className="w-full md:w-[90%]">
              <div className="text-3xl md:text-5xl font-bold mb-4 text-right">カウンセリングお申込みはこちら</div>
              <button className="w-full py-4 md:py-6 bg-pink-200 text-gray-800 rounded-full text-lg md:text-xl font-medium shadow mb-8 transition hover:bg-pink-300">Learnmore</button>
            </div>
            <div className="w-full md:w-[90%]">
              <div className="text-3xl md:text-5xl font-bold mb-4 text-right">公式ラインでのご相談はこちら</div>
              <button className="w-full py-4 md:py-6 bg-pink-200 text-gray-800 rounded-full text-lg md:text-xl font-medium shadow transition hover:bg-pink-300">Learnmore</button>
            </div>
          </div>
        </div>
        {/* Return link */}
        <div className="w-full flex justify-center mt-16">
          <a href="#" className="underline text-white text-base md:text-lg">サービス一覧に戻る</a>
        </div>
        {/* Curved white border at bottom */}
        <svg className="absolute left-0 bottom-0 w-full h-24 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C480 120 960 120 1440 0V120H0V0Z" fill="white"/>
        </svg>
      </section>
    </>
  );
}
