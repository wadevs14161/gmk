import Link from "next/dist/client/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f7f7] w-full border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-tight text-black">GMK AGENT</Link>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center gap-8 text-base">
          <Link href="/" className="border-b-2 border-black pb-1 font-normal">ホーム</Link>
          <Link href="/language-school" className="hover:underline">語学学校紹介</Link>
          <Link href="/home-stay" className="hover:underline">ホームステイ</Link>
          <Link href="/blog" className="hover:underline">ブログ記事</Link>
        </nav>

        {/* Socials & CTA */}
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/gmkagent/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="#171717" strokeWidth="2"/><rect x="7" y="7" width="8" height="8" rx="4" stroke="#171717" strokeWidth="2"/><circle cx="16.5" cy="5.5" r="1" fill="#171717"/></svg>
          </a>
          <a href="https://twitter.com/gmkagent" target="_blank" rel="noopener" aria-label="Twitter">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M19 6.5a7.5 7.5 0 01-2.14.59A3.75 3.75 0 0018.5 5a7.5 7.5 0 01-2.38.91A3.75 3.75 0 0011 8.75v.85A10.64 10.64 0 014 5.5s-4 9 5 13a11.13 11.13 0 01-6.5 2c13 7.5 20-6.5 20-12.5 0-.19 0-.37-.01-.56A7.18 7.18 0 0021 4.5a7.5 7.5 0 01-2.14.59A3.75 3.75 0 0018.5 5z" stroke="#171717" strokeWidth="2"/></svg>
          </a>
          <a href="https://lin.ee/ktmwS1v" target="_blank" rel="noopener" aria-label="LINE">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="8" stroke="#171717" strokeWidth="2"/><path d="M7 11h8M7 11l2-2m-2 2l2 2" stroke="#171717" strokeWidth="2"/></svg>
          </a>
          <a href="/counseling" className="ml-4 px-6 py-2 rounded-full bg-[#B6FF8A] text-black font-medium shadow hover:bg-[#a0e86e] transition">無料カウンセリング</a>
        </div>
      </div>
    </header>
  );
}
