import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "週末自然散步｜大安森林公園（虛構教學活動）" },
      { name: "description", content: "2026年12月12日上午9點至12點，在大安森林公園一起慢慢散步、觀察自然。此為虛構教學示範活動。" },
      { property: "og:title", content: "週末自然散步｜大安森林公園" },
      { property: "og:description", content: "12/12 上午，在大安森林公園一起觀察樹木與鳥類。虛構教學示範活動。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const schedule = [
  ["09:00", "捷運大安森林公園站 2 號出口集合、簽到"],
  ["09:20", "樹木觀察：認識公園裡的老樹"],
  ["10:15", "生態池賞鳥與休息"],
  ["11:15", "自由漫步、分享今日發現"],
  ["12:00", "活動結束"],
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-accent px-4 py-2 text-center text-sm text-accent-foreground">
        ⚠️ 本頁為虛構教學活動示範，並非真實舉辦之活動，請勿前往報名或集合。
      </div>

      <section className="hero-leaf px-6 py-20 text-center">
        <p className="mb-3 text-sm tracking-[0.3em] text-primary">WEEKEND NATURE WALK</p>
        <h1 className="font-display text-4xl font-bold sm:text-6xl">週末自然散步</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          放慢腳步，在城市中的森林裡，聽鳥鳴、看樹影，和自然好好相處一個早上。
        </p>
        <span className="mt-6 inline-block rounded-full border border-primary px-4 py-1 text-sm text-primary">
          虛構教學活動
        </span>
      </section>

      <div className="mx-auto grid max-w-5xl gap-8 px-6 pb-20">
        <section className="card-soft">
          <h2 className="section-title">活動介紹</h2>
          <p className="leading-relaxed text-muted-foreground">
            這是一場輕鬆的自然散步，由導覽員帶領大家認識大安森林公園的樹木、鳥類與小生物。
            不需要任何經驗，適合親子、朋友或一個人參加。請穿著舒適的鞋子，攜帶水壺與好奇心。
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="card-soft">
            <h2 className="section-title">時間地點</h2>
            <dl className="space-y-3">
              <div><dt className="text-sm text-primary">日期</dt><dd className="text-lg">2026 年 12 月 12 日（星期六）</dd></div>
              <div><dt className="text-sm text-primary">時間</dt><dd className="text-lg">上午 9:00 – 12:00</dd></div>
              <div><dt className="text-sm text-primary">地點</dt><dd className="text-lg">大安森林公園（台北市大安區新生南路二段 1 號）</dd></div>
              <div><dt className="text-sm text-primary">集合點</dt><dd className="text-lg">捷運大安森林公園站 2 號出口</dd></div>
            </dl>
          </section>
          <section className="card-soft">
            <h2 className="section-title">當日流程</h2>
            <ol className="space-y-3">
              {schedule.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="font-semibold text-primary">{t}</span>
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="card-soft">
          <h2 className="section-title">集合地圖</h2>
          <div className="overflow-hidden rounded-xl border">
            <iframe
              title="大安森林公園集合地圖"
              src="https://www.google.com/maps?q=捷運大安森林公園站2號出口&output=embed"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      <footer className="border-t px-6 py-8 text-center text-sm text-muted-foreground">
        本活動為虛構教學示範內容，日期、流程與人物皆為範例。
      </footer>
    </main>
  );
}
