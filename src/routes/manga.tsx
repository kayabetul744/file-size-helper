import { createFileRoute, Link } from "@tanstack/react-router";
import landingImg from "@/assets/landing.jpg";
import { SiteFooter } from "@/components/site";

export const Route = createFileRoute("/manga")({
  head: () => ({
    meta: [
      { title: "Anime-Hikâye — Manga ile Anlatılan Hikâyeler" },
      {
        name: "description",
        content:
          "Anime-Hikâye, karakalem manga panelleriyle anlatılan uzun soluklu hikâyelerin evi. İlk seri: FinQuest — Manga ile Finans.",
      },
      { property: "og:title", content: "Anime-Hikâye — Manga ile Anlatılan Hikâyeler" },
      {
        property: "og:description",
        content:
          "Karakalem manga panelleriyle anlatılan seriler. FinQuest serisiyle Tokyo Borsası'nın gölgeli sokaklarına dal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b-4 border-ink">
        <img
          src={landingImg}
          alt="Karakalem manga tarzında üç ana karakter"
          width={1600}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-top opacity-60 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--background)_15%,transparent_60%,var(--background)_100%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
          <span className="slash inline-block bg-primary px-3 py-1 font-display text-xs tracking-[0.35em] text-primary-foreground">
            物語 · STORY HOUSE
          </span>
          <h1 className="mt-6 font-display text-6xl leading-[0.85] uppercase sm:text-7xl md:text-8xl">
            <span className="block text-foreground">Anime</span>
            <span className="block text-primary">Hikâye</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Karakalem panellerle anlatılan uzun soluklu seriler. Her seri bir konuyu hikâyenin
            içinden öğretir: karakterler karar verir, hata yapar, bedelini öder ve okuyucu onlarla
            birlikte öğrenir.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="slash bg-primary px-8 py-4 font-display text-sm tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              FinQuest'e Gir
            </Link>
            <a
              href="#seriler"
              className="border-2 border-foreground/70 px-8 py-4 font-display text-sm tracking-[0.2em] uppercase transition-colors hover:bg-foreground/10"
            >
              Seriler
            </a>
          </div>
        </div>
      </section>

      <section id="seriler" className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6 border-b-2 border-border pb-5">
          <h2 className="font-display text-4xl uppercase md:text-5xl">Seriler</h2>
          <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
            1 yayında · yenileri yolda
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/" className="block">
            <article className="grain flex h-full flex-col border-2 border-primary/60 bg-card p-6 transition-colors hover:border-primary">
              <span className="font-display text-xs tracking-[0.3em] text-primary">SERİ 01</span>
              <h3 className="mt-2 font-display text-3xl uppercase">FinQuest</h3>
              <p className="mt-1 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Manga ile Finans · 12 Bölüm
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                Ryō, Aiko ve Kenji ile Tokyo Borsası'nın gölgeli sokaklarına dal. Emir defterinden
                DeFi'a, her bölüm bir sınav ve her sınav bir ders.
              </p>
              <span className="mt-5 font-display text-xs tracking-[0.2em] text-primary uppercase">
                » Seriyi oku
              </span>
            </article>
          </Link>

          <article className="grain flex h-full flex-col border-2 border-border bg-card/40 p-6">
            <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">
              SERİ 02
            </span>
            <h3 className="mt-2 font-display text-3xl uppercase">Yakında</h3>
            <p className="mt-1 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Yeni bir dünya hazırlanıyor
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              Aynı karakalem çizgi, farklı bir konu. Yeni serinin ilk panelleri üzerinde
              çalışıyoruz.
            </p>
            <span className="mt-5 font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Yakında
            </span>
          </article>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/"
            className="slash bg-primary px-8 py-4 font-display text-sm tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            » Ana Sayfaya Dön
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
