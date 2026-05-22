type Item = {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work";
};

const ITEMS: Item[] = [
  {
    period: "2023年3月",
    title: "柴島高校",
    organization: "総合学科",
    description:
      "総合学科での学習成果発表において代表に選出され、全校生徒約700名の前でプレゼンテーションを実施。",
    type: "education",
  },
  {
    period: "2023年3月",
    title: "東京ダンス&アクターズ専門学校",
    organization: "ダンス&アクターズ科",
    description:
      "ヒップホップ・ジャズ・ブレイキンなどのダンスを学習。パフォーマンスを通じて、表現力や継続力、チームでの協調性を培いました。",
    type: "education",
  },
  {
    period: "2023年4月 〜 2026年3月",
    title: "ソフトウェアエンジニア インターン",
    organization: "株式会社ネクスト・アイ",
    description: "React Native / Expo を用いたモバイルアプリ開発に従事。AWS Cognito・Amplify GraphQL API・DynamoDB を活用した認証/データ基盤の実装、AI議事録機能や顧客検索機能の要件定義〜実装を担当。UX改善、Sentryによる監視導入、Amplify v6移行、Salesforce(Apex/Aura)開発などフロントエンドからクラウド連携まで幅広く経験。",
    type: "work",
  },
  {
    period: "2026年4月 〜 現在",
    title: "42Tokyo",
    organization: "42Tokyo",
    description:
      "約1ヶ月間の入試課題と合格率6%の選抜過程を経て42Tokyoへ入学。C言語を中心に、メモリ管理・プロセス制御・ファイルI/O・アルゴリズムなど低レイヤー領域を学習し、Linux環境での実践的な開発力を磨いています。",
    type: "education",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sky-500 font-semibold tracking-widest uppercase text-sm text-center mb-2">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          経歴・学歴
        </h2>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full border-2 border-sky-400 bg-white -translate-x-1/2 z-10" />

                {/* spacer for alternating layout */}
                <div className="hidden md:block flex-1" />

                <div className="ml-10 md:ml-0 flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      item.type === "education"
                        ? "bg-violet-50 text-violet-500"
                        : "bg-sky-50 text-sky-500"
                    }`}
                  >
                    {item.type === "education" ? "学歴" : "職歴"}
                  </span>
                  <p className="text-xs text-slate-400 mt-2">{item.period}</p>
                  <h3 className="text-base font-semibold text-slate-800 mt-1">{item.title}</h3>
                  <p className="text-sm text-sky-500 font-medium">{item.organization}</p>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
