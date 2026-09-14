import { createFileRoute, Link } from "@tanstack/react-router";
import { chapters } from "@/data/chapters";
import heroImg from "@/assets/hero.jpg";
import { SiteFooter, SiteNav } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manga ile Finans — FinQuest | 12 Bölümlük Seri" },
      {
        name: "description",
        content:
          "Ryō, Aiko ve Kenji ile Tokyo Borsası'nın arka sokaklarına dal. 12 bölümde teknik analiz, portföy yönetimi ve risk kontrolü — karakalem manga panelleriyle.",
      },
      { property: "og:title", content: "Manga ile Finans — FinQuest" },
      {
        property: "og:description",
        content:
          "Yükseliş piyasasının sabırlı ustaları, düşüş piyasasının gölgedeki stratejistleri ve kripto dünyasının kod ustaları arasında geçen 12 bölümlük finans mangası.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const readableCount = chapters.filter((c) => c.pages).length;
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden border-b-4 border-ink">
        <img
          src={heroImg}
          alt="Tokyo Borsası'nda duran genç trader — karakalem manga çizimi"
          width={1408}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-right opacity-70 contrast-125 grayscale"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--background)_18%,transparent_72%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-24 md:py-32">
          <div className="max-w-xl">
            <span className="slash inline-block bg-primary px-3 py-1 font-display text-xs tracking-[0.35em] text-primary-foreground">
              第一巻 · CHAPTER 01
            </span>
            <h1 className="mt-6 font-display text-6xl leading-[0.85] uppercase sm:text-7xl md:text-8xl">
              <span className="block text-foreground">Manga ile</span>
              <span className="block text-primary">Finans</span>
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Ryō, Aiko ve Kenji ile birlikte Tokyo Borsası'nın gölgeli sokaklarına dal. Her bölüm
              bir sınav: yükseliş piyasasının sabırlı ustaları, düşüş piyasasının gölgedeki
              stratejistleri ve kripto dünyasının kod ustaları arasında geçen strateji hikâyeleri. Manga panelleri arasında öğreneceğin her
              ders — teknik analiz, portföy yönetimi, risk kontrolü — gerçek piyasada seni bir adım
              öne taşıyacak.
            </p>
            <ul className="mt-7 space-y-1.5 text-sm text-muted-foreground">
              <li>
                <span className="font-display tracking-wide text-primary">» 12 BÖLÜM</span> — türev
                piyasalardan DeFi'a
              </li>
              <li>
                <span className="font-display tracking-wide text-primary">» 40+ KARAKTER</span> —
                her biri bir yatırım stratejisi
              </li>
              <li>
                <span className="font-display tracking-wide text-primary">» HAFTALIK</span> yeni
                bölüm, ücretsiz
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#bolumler"
                className="slash bg-primary px-8 py-4 font-display text-sm tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                Hikâyeleri Oku
              </a>
              <a
                href="#seri"
                className="border-2 border-foreground/70 px-8 py-4 font-display text-sm tracking-[0.2em] uppercase transition-colors hover:bg-foreground/10"
              >
                Seri Hakkında
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section id="seri" className="halftone border-b-2 border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {[
            {
              k: "相場",
              t: "Hikâye Önce Gelir",
              d: "Her bölüm bir karakterin bir kararı üzerine kurulur. Teori, olay örgüsünün içinden çıkar; slayt gibi anlatılmaz.",
            },
            {
              k: "修行",
              t: "Sırayla Zorlaşır",
              d: "1. bölümde emir defteri, 12. bölümde kendi sistemini kurmak. Bölümler birbirinin üzerine biner.",
            },
            {
              k: "損切",
              t: "Kayıp da Ders",
              d: "Serinin kahramanı sürekli kazanmaz. Riski yönetmeyi, tasfiye olduktan sonra öğrenir.",
            },
          ].map((x) => (
            <div key={x.t} className="border-l-2 border-primary pl-5">
              <div className="font-brush text-3xl text-primary">{x.k}</div>
              <h2 className="mt-2 font-display text-xl tracking-wide uppercase">{x.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTERS */}
      <section id="bolumler" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6 border-b-2 border-border pb-5">
          <h2 className="font-display text-4xl uppercase md:text-5xl">Bölümler</h2>
          <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
            12 bölüm · {readableCount}'i okunabilir
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => {
            const readable = Boolean(c.pages);
            const inner = (
              <article
                className={`grain relative flex h-full flex-col border-2 ${
                  readable
                    ? "border-primary/60 bg-card hover:border-primary"
                    : "border-border bg-card/40"
                } transition-colors`}
              >
                {c.cover ? (
                  <img
                    src={c.cover}
                    alt={`${c.title} bölümünün karakalem manga kapağı`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-52 w-full object-cover object-top grayscale contrast-125"
                  />
                ) : (
                  <div className="speedlines flex h-52 items-center justify-center bg-secondary">
                    <span className="font-brush text-6xl text-foreground/25">{c.kanji}</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs tracking-[0.3em] text-primary">
                      BÖLÜM {String(c.no).padStart(2, "0")}
                    </span>
                    <span className="font-brush text-sm text-muted-foreground">{c.kanji}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl uppercase">{c.title}</h3>
                  <p className="mt-1 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    {c.subject}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.logline}
                  </p>
                  <span
                    className={`mt-5 inline-block font-display text-xs tracking-[0.2em] uppercase ${
                      readable ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {readable ? "» Bölümü oku" : "Yakında"}
                  </span>
                </div>
              </article>
            );

            return readable ? (
              <Link key={c.slug} to="/bolum/$slug" params={{ slug: c.slug }} className="block">
                {inner}
              </Link>
            ) : (
              <div key={c.slug}>{inner}</div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
