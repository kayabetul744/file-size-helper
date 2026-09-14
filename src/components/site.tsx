import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="font-display text-xl tracking-[0.2em] uppercase">
          Fin<span className="text-primary">Quest</span>
        </Link>
        <nav className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">
            Ana Sayfa
          </Link>
          <Link
            to="/"
            hash="bolumler"
            className="slash bg-primary px-4 py-2 text-primary-foreground"
          >
            Bölümler
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display tracking-[0.2em] uppercase">FinQuest · Manga ile Finans</p>
        <p>Hikâyeler kurgudur; içerik yatırım tavsiyesi değildir.</p>
      </div>
    </footer>
  );
}
