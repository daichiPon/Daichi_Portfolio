// src/assets/photos/ に画像を追加したらここにimportして配列に追加する
// 例: import photo1 from "../assets/photos/photo1.jpg";
const PHOTOS: string[] = [
  // photo1,
  // photo2,
];

const PLACEHOLDERS = ["🏔️", "🌊", "🌸", "🏙️", "🌅", "🎉"];

export default function PhotoMarquee() {
  const hasPhotos = PHOTOS.length > 0;
  const items = hasPhotos ? PHOTOS : PLACEHOLDERS;
  // シームレスループのため2倍に複製
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-slate-50 py-6 border-y border-slate-100">
      <div className="flex animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="mx-2 shrink-0 w-52 h-36 rounded-xl overflow-hidden shadow-sm"
          >
            {hasPhotos ? (
              <img
                src={item}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-sky-50 to-slate-100 flex items-center justify-center text-4xl">
                {item}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
