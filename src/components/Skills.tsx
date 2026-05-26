type Skill = { name: string; years: number; stars: number };

type Category = {
  title: string;
  icon: string;
  skills: Skill[];
};

const CATEGORIES: Category[] = [
  {
    title: "言語",
    icon: "💻",
    skills: [
      { name: "JavaScript", years: 2, stars: 3 },
      { name: "TypeScript", years: 2, stars: 3 },
      { name: "Apex", years: 1, stars: 2 },
      { name: "C", years: 0.3, stars: 2 },
    ],
  },
  {
    title: "フロントエンド",
    icon: "🖥️",
    skills: [
      { name: "React", years: 2, stars: 4 },
      { name: "React Native", years: 2, stars: 4 },
      { name: "Expo", years: 2, stars: 3 },
      { name: "Aura Components", years: 2, stars: 3 },
    ],
  },
  {
    title: "クラウド / バックエンド",
    icon: "☁️",
    skills: [
      { name: "AWS Amplify", years: 2, stars: 3 },
      { name: "AWS Cognito", years: 2, stars: 3 },
      { name: "AWS Lambda", years: 2, stars: 3 },
      { name: "AWS Transcribe", years: 0.5, stars: 5 },
      { name: "DynamoDB", years: 2, stars: 3 },
      { name: "GraphQL", years: 1, stars: 3 },
      { name: "S3", years: 2, stars: 3 },
      { name: "Secrets Manager", years: 0.5, stars: 5 },
      { name: "Elasticsearch", years: 0.5, stars: 2 },
      { name: "AppSync", years: 1, stars: 3 },
      { name: "CloudFormation", years: 0.5, stars: 2 },
    ],
  },
  {
    title: "プラットフォーム",
    icon: "🔧",
    skills: [
      { name: "Salesforce", years: 1, stars: 3 },
    ],
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-sky-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SkillRow({ name, years, stars }: Skill) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0">
      <span className="text-sm font-medium text-slate-700 w-32 shrink-0">{name}</span>
      <span className="text-xs text-slate-400 w-16 text-center">
        {years < 1 ? `${Math.round(years * 12)}ヶ月` : `${years}年`}
      </span>
      <Stars count={stars} />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sky-500 font-semibold tracking-widest uppercase text-sm text-center mb-2">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          技術スタック
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-semibold text-slate-800">{cat.title}</h3>
              </div>

              {/* ヘッダー行 */}
              <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-100">
                <span className="text-xs text-slate-400 w-32">技術名</span>
                <span className="text-xs text-slate-400 w-16 text-center">経験</span>
                <span className="text-xs text-slate-400">レベル</span>
              </div>

              {cat.skills.map((skill) => (
                <SkillRow key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
