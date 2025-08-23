import React from "react";

export default function ConsultingForm() {
  return (
    <form className="space-y-8 bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">GMK AGENT カウンセリング予約</h2>
      {/* お名前 */}
      <div>
        <label className="block font-semibold mb-1">お名前 <span className="text-red-500">(required)</span></label>
        <div className="flex gap-4">
          <input type="text" name="firstName" placeholder="First Name" required className="flex-1 border rounded px-3 py-2" />
          <input type="text" name="lastName" placeholder="Last Name" required className="flex-1 border rounded px-3 py-2" />
        </div>
      </div>
      {/* メールアドレス */}
      <div>
        <label className="block font-semibold mb-1">メールアドレス <span className="text-red-500">(required)</span></label>
        <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
      </div>
      {/* ご相談内容 */}
      <div>
        <label className="block font-semibold mb-1">ご相談内容 <span className="text-red-500">(required)</span></label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="topics" value="語学学校紹介" className="accent-green-500" />語学学校紹介
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="topics" value="ホームステイ先紹介" className="accent-green-500" />ホームステイ先紹介
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="topics" value="海外寿司職人エージェント" className="accent-green-500" />海外寿司職人エージェント
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="topics" value="YMSトータルサポートプラン" className="accent-green-500" />YMSトータルサポートプラン
          </label>
        </div>
      </div>
      {/* LINEアカウント */}
      <div>
        <label className="block font-semibold mb-1">LINEアカウント</label>
        <p className="text-xs text-gray-500 mb-1">ご自身のLINEアカウントの名前を正確に入力してください。正確でない場合、カウンセリングを行うことができなくなってしまいます。</p>
        <input type="text" name="lineAccount" className="w-full border rounded px-3 py-2" />
      </div>
      {/* 現在のご職業 */}
      <div>
        <label className="block font-semibold mb-1">現在のご職業 <span className="text-red-500">(required)</span></label>
        <select name="occupation" required className="w-full border rounded px-3 py-2">
          <option value="">選択してください。</option>
          <option value="学生">学生</option>
          <option value="社会人">社会人</option>
          <option value="その他">その他</option>
        </select>
      </div>
      {/* GMK AGENTをどこで知りましたか。 */}
      <div>
        <label className="block font-semibold mb-1">GMK AGENTをどこで知りましたか。<span className="text-red-500">(required)</span></label>
        <select name="howDidYouKnow" required className="w-full border rounded px-3 py-2">
          <option value="">選択してください。</option>
          <option value="Instagram">Instagram</option>
          <option value="Twitter">Twitter</option>
          <option value="LINE">LINE</option>
          <option value="友人・知人">友人・知人</option>
          <option value="Google検索">Google検索</option>
          <option value="その他">その他</option>
        </select>
      </div>
      {/* 予約日時 第一希望 */}
      <div>
        <label className="block font-semibold mb-1">予約日時　第一希望 <span className="text-red-500">(required)</span></label>
        <div className="flex gap-4">
          <input type="date" name="date1" required className="flex-1 border rounded px-3 py-2" />
          <input type="time" name="time1" required className="flex-1 border rounded px-3 py-2" />
        </div>
        <p className="text-xs text-gray-500 mt-1">in Greenwich Mean Time</p>
      </div>
      {/* 予約日時 第二希望 */}
      <div>
        <label className="block font-semibold mb-1">予約日時　第二希望日 <span className="text-red-500">(required)</span></label>
        <div className="flex gap-4">
          <input type="date" name="date2" required className="flex-1 border rounded px-3 py-2" />
          <input type="time" name="time2" required className="flex-1 border rounded px-3 py-2" />
        </div>
        <p className="text-xs text-gray-500 mt-1">in Greenwich Mean Time</p>
      </div>
      {/* 予約日時 第三希望 */}
      <div>
        <label className="block font-semibold mb-1">予約日時　第三希望日 <span className="text-red-500">(required)</span></label>
        <div className="flex gap-4">
          <input type="date" name="date3" required className="flex-1 border rounded px-3 py-2" />
          <input type="time" name="time3" required className="flex-1 border rounded px-3 py-2" />
        </div>
        <p className="text-xs text-gray-500 mt-1">in Greenwich Mean Time</p>
      </div>
      {/* カウンセリング内容 */}
      <div>
        <label className="block font-semibold mb-1">カウンセリング内容 <span className="text-red-500">(required)</span></label>
        <textarea name="details" required rows={4} className="w-full border rounded px-3 py-2" placeholder="差し支えなければ、ご相談内容についてご記載ください。円滑なカウンセリング実施のためご協力よろしくお願いいたします。" />
      </div>
      {/* Submit */}
      <div className="pt-4">
        <button type="submit" className="w-full py-3 rounded-full bg-[#B6FF8A] text-black font-bold text-lg shadow hover:bg-[#a0e86e] transition">送信</button>
      </div>
    </form>
  );
}
