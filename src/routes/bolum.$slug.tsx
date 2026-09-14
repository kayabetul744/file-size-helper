import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { chapters, getChapter, type Chapter, type Page, type Panel } from "@/data/chapters";
import { SiteFooter, SiteNav } from "@/components/site";

export const Route = createFileRoute("/bolum/$slug")({
  loader: ({ params }) => {
    const chapter = getChapter(params.slug);
    if (!chapter || !chapter.pages) throw notFound();
    return { chapter };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Bölüm bulunamadı — FinQuest" }, { name: "robots", content: "noindex" }],
      };
    }
    const { chapter } = loaderData;
    const title = `Bölüm ${chapter.no}: ${chapter.title} — FinQuest`;
    return {
      meta: [
        { title },
        { name: "description", content: chapter.logline },
        { property: "og:title", content: title },
        { property: "og:description", content: chapter.logline },
      ],
    };
  },
  component: ChapterPage,
});

const spanFor: Record<Panel["size"], string> = {
  full: "sm:col-span-2 min-h-[260px]",
  wide: "sm:col-span-2 min-h-[200px]",
  half: "sm:col-span-1 min-h-[220px]",
  tall: "sm:col-span-1 row-span-2 min-h-[380px]",
};

function PanelView({ panel }: { panel: Panel }) {
  return (
    <figure className={`panel grain flex flex-col ${spanFor[panel.size]}`}>
      {panel.image && (
        <img
          src={panel.image}
          alt={panel.scene}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full border-b-[3px] border-ink bg-secondary object-contain grayscale contrast-125"
        />
      )}

      <div className="relative flex flex-1 flex-col gap-3 p-4">
        {!panel.image && (
          <div className="speedlines pointer-events-none absolute inset-0 opacity-[0.09]" />
        )}

        {panel.narration && (
          <p className="caption-box relative z-10 border-ink font-body italic">{panel.narration}</p>
        )}

        <p className="relative z-10 text-[13px] leading-relaxed text-ink/65">{panel.scene}</p>

        {panel.lines && (
          <div className="relative z-10 flex flex-col gap-3">
            {panel.lines.map((l, i) => (
              <div
                key={i}
                className={`flex ${i % 2 === 1 ? "justify-end text-right" : "justify-start"}`}
              >
                <div className="max-w-[85%]">
                  <span className="mb-1 block font-display text-[10px] tracking-[0.25em] text-ink/60 uppercase">
                    {l.who}
                  </span>
                  <p
                    className={
                      l.type === "thought"
                        ? "thought text-sm"
                        : l.type === "shout"
                          ? "shout text-base"
                          : "speech text-sm"
                    }
                  >
                    {l.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {panel.sfx && (
          <span className="sfx relative z-10 mt-auto self-end text-3xl sm:text-4xl">
            {panel.sfx}
          </span>
        )}
      </div>
    </figure>
  );
}

function ChapterPage() {
  const { chapter } = Route.useLoaderData() as { chapter: Chapter };
  const readable = chapters.filter((c) => c.pages);
  const idx = readable.findIndex((c) => c.slug === chapter.slug);
  const prev = readable[idx - 1];
  const next = readable[idx + 1];

  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* Chapter header */}
      <header className="relative overflow-hidden border-b-4 border-ink">
        {chapter.cover && (
          <img
            src={chapter.cover}
            alt={`${chapter.title} bölüm kapağı`}
            width={1024}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover object-top opacity-40 grayscale contrast-125"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background)_10%,transparent_50%,var(--background)_100%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="font-brush text-5xl text-primary">{chapter.kanji}</span>
          <p className="mt-4 font-display text-xs tracking-[0.4em] text-muted-foreground uppercase">
            Bölüm {String(chapter.no).padStart(2, "0")} · {chapter.subject}
          </p>
          <h1 className="mt-3 font-display text-5xl uppercase md:text-6xl">{chapter.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {chapter.logline}
          </p>
          <p className="mt-5 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Kadro: {chapter.cast.join(" · ")}
          </p>
        </div>
      </header>

      {/* Manga pages */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {chapter.pages!.map((page: Page) => (
          <section key={page.no} className="mb-16">
            <div className="mb-5 flex items-center gap-4">
              <span className="slash bg-primary px-3 py-1 font-display text-[11px] tracking-[0.3em] text-primary-foreground uppercase">
                Sayfa {page.no}
              </span>
              <h2 className="font-display text-lg tracking-wide uppercase">{page.title}</h2>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {page.panels.map((p: Panel, i: number) => (
                <PanelView key={i} panel={p} />
              ))}
            </div>
          </section>
        ))}

        {/* Lesson */}
        <section className="border-2 border-primary/60 bg-card p-6 sm:p-8">
          <h2 className="font-display text-2xl uppercase">
            Bu bölümden kalanlar<span className="text-primary">.</span>
          </h2>
          <ul className="mt-5 space-y-3">
            {chapter.lesson.map((l: string) => (
              <li key={l} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-display text-primary">»</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation */}
        <nav className="mt-12 flex flex-wrap items-center justify-between gap-4">
          {prev ? (
            <Link
              to="/bolum/$slug"
              params={{ slug: prev.slug }}
              className="border-2 border-border px-5 py-3 font-display text-xs tracking-[0.2em] uppercase transition-colors hover:border-primary"
            >
              « {prev.title}
            </Link>
          ) : (
            <span />
          )}
          <Link
            to="/"
            hash="bolumler"
            className="slash bg-primary px-6 py-3 font-display text-xs tracking-[0.2em] text-primary-foreground uppercase"
          >
            Hikayelere Dön
          </Link>
          {next ? (
            <Link
              to="/bolum/$slug"
              params={{ slug: next.slug }}
              className="border-2 border-border px-5 py-3 font-display text-xs tracking-[0.2em] uppercase transition-colors hover:border-primary"
            >
              {next.title} »
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>

      <SiteFooter />
    </main>
  );
}
