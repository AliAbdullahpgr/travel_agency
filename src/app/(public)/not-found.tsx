import Link from "next/link";

export default function PublicNotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[color:var(--gold-light)]">404</p>
      <h1 className="mt-4 font-display text-5xl text-white">Aradığınız tur bulunamadı</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
        İçerik kaldırılmış olabilir veya bağlantı hatalı olabilir. Kategori sayfalarından güncel turları inceleyebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/umre-turlari" className="lux-button">
          Umre Turları
        </Link>
        <Link
          href="/"
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
        >
          Ana Sayfa
        </Link>
      </div>
    </main>
  );
}
