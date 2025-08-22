export default function Footer() {
  return (
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
  );
}
