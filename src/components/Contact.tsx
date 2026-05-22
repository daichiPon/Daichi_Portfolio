// import { useState } from "react";

// type FormState = { name: string; email: string; message: string };
// type Status = "idle" | "sent";

export default function Contact() {
  // const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  // const [status, setStatus] = useState<Status>("idle");

  // function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  //   setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // }

  // function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  //   // TODO: 実際の送信処理（Formspree / EmailJS など）に置き換える
  //   console.log("Submitted:", form);
  //   setStatus("sent");
  //   setForm({ name: "", email: "", message: "" });
  // }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-sky-500 font-semibold tracking-widest uppercase text-sm text-center mb-2">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          お問い合わせ
        </h2>
        <p className="text-slate-500 text-center mb-12">
          {/* ご連絡はこちらのフォーム、または{" "} */}
          <a href="mailto:nakamotodaich@gmail.com" className="text-sky-500 hover:underline">
            nakamotodaich@gmail.com
          </a>{" "}
          まで。
        </p>
        {/* {status === "sent" ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">✉️</div>
            <p className="text-lg font-semibold text-slate-800">送信しました！</p>
            <p className="text-slate-500 mt-2">お返事はメールにてお送りします。</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-sky-500 hover:underline"
            >
              もう一度送る
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                お名前
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="山田 太郎"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="お気軽にご連絡ください..."
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors shadow-sm"
            >
              送信する
            </button>
          </form>
        )} */}
      </div>
    </section>
  );
}
