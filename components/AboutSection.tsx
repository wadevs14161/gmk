export default function AboutSection() {
  return (
    <section
      className="w-full bg-[#f4f4f4] py-20 relative"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
        background: '#f4f4f4',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 px-6">
        <h2 className="text-4xl font-bold flex-shrink-0 md:w-1/3">GMKAgentとは</h2>
        <p className="text-lg md:w-2/3 leading-relaxed">
          GMKAgentは、イギリスを拠点にする、イギリス専門のエージェント会社です。イギリスへの留学支援、生活サポート、おうち探し、物件の手配などイギリスに関するすべてのサポートを行っているエージェントになります。イギリス専門のエージェントなので、イギリスに関することならなんでもご相談ください。特にYMSの方へのサポート、住居、物件の手配サポートは、専門ですのでまずは無料カウンセリングにてご相談ください。
        </p>
      </div>
    </section>
  );
}
