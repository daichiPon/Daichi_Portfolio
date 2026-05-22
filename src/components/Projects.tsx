import { useState } from "react";
import PdfModal from "./PdfModal";
import foodmap from "../assets/projects/foodmap.png";
import driverpayment from "../assets/projects/driverpayment.png";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
  pdf?: string;
};

const PROJECTS: Project[] = [
  {
    title: "ポートフォリオサイト",
    description:
      "React + TypeScript + Tailwind CSS で構築した個人ポートフォリオ。レスポンシブ対応、スムーズスクロールを実装。",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/daichiPon/Daichi_Portfolio",
    image: "🌐",
    pdf: `${import.meta.env.BASE_URL}pdfs/portfolio.pdf`,
  },
  {
    title: "foodMap",
    description:
      "利用した飲食店を登録し、友達や他人がどういった店にご飯を食べに行っているかを確認できるアプリ",
    tags: ["React", "TypeScript", "Vite", "AWS-amplify", "AWS-DynamoDB", "AWS-Lambda", "AWS-S3", "AWS-Cognito", "AWS-Graphql", "Vercel", "MapBox", "HotPepperグルメAPI"],
    github: "https://github.com/daichiPon/foodMap",
    image: foodmap,
    pdf: "https://food-map-lime.vercel.app",
  },
  {
    title: "driverpayment",
    description:
      "LINEのトーク内で動作するwebアプリを構築。給料清算やシフト管理が可能",
    tags: ["React", "Javascript", "firebase", "Liff"],
    github: "https://github.com/daichiPon/driverPayment",
    image: driverpayment,
    pdf: `${import.meta.env.BASE_URL}pdfs/salary.pdf`,
  },
];

type ModalState = { title: string; url: string } | null;

export default function Projects() {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sky-500 font-semibold tracking-widest uppercase text-sm text-center mb-2">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          制作物
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              onClick={() => project.pdf && setModal({ title: project.title, url: project.pdf })}
              className={`bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-200 ${project.pdf ? "cursor-pointer" : ""}`}
            >
              <div className="h-36 bg-gradient-to-br from-sky-50 to-slate-100 flex items-center justify-center text-5xl overflow-hidden">
                {project.image.startsWith("http") || project.image.startsWith("/") || project.image.startsWith("data:") || !(/^\p{Emoji}/u.test(project.image)) ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  project.image
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 bg-sky-50 text-sky-600 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4" onClick={(e) => e.stopPropagation()}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sky-500 hover:text-sky-600 flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                  {project.pdf && (
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      クリックでPDFやアプリ表示
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <PdfModal
          title={modal.title}
          url={modal.url}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
