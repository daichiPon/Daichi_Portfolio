type LifeCard = {
  emoji: string;
  title: string;
  body: string;
};

const CARDS: LifeCard[] = [
  {
    emoji: "🏂",
    title: "スノーボード",
    body: "中学生まではスキーに取り組み、高校からスノーボードへ転向。学生時代には毎年リゾートバイトに行くほど好きで、冬はよく雪山に行っています。",
  },
  {
    emoji: "🏃",
    title: "筋トレ",
    body: "毎年春〜夏を中心に継続して取り組んでいます。体づくりだけでなく、気分転換や生活リズムを整える習慣にもなっています。",
  },
  {
    emoji: "✈️",
    title: "旅行",
    body: "毎年中国へ旅行しており、時間がある時は周辺地域まで足を伸ばして各地を巡っています。現地の文化や食事を楽しむのが好きです。",
  },
  {
    emoji: "🍳",
    title: "料理",
    body: "電子レンジを活用した手軽な料理が好きです。簡単に美味しく作れるレシピを日々探しています。",
  },
  {
    emoji: "🎮",
    title: "ゲーム",
    body: "『にゃんこ大戦争』を約8年間プレイしています。長くコツコツ続けるタイプで、かなり育ったアカウントになっています。",
  },
];

export default function MyLife() {
  return (
    <section id="mylife" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sky-500 font-semibold tracking-widest uppercase text-sm text-center mb-2">
          My Life
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          趣味・プライベート
        </h2>
        <p className="text-slate-500 text-center max-w-lg mx-auto mb-16">
          コードを書く以外の自分について少しご紹介します。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="text-base font-semibold text-slate-800 mb-1">{card.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
