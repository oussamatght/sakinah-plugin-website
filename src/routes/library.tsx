import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Search } from "lucide-react";
import { SiteNavigation } from "@/components/SiteNavigation";

const TITLE = "المكتبة الإسلامية — Sakinah";
const categories = [
  "الحديث",
  "العقيدة",
  "الفقه",
  "التفسير",
  "السيرة",
  "التاريخ الإسلامي",
  "الآداب",
  "الدعوة",
  "وغيرها",
];

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content: "اكتشف المكتبة الإسلامية في Sakinah وأكثر من 10,000 كتاب وحديث ومحتوى إسلامي.",
      },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <main>
        <section className="relative overflow-hidden bg-night py-16 text-night-foreground md:py-24">
          <div className="absolute inset-0 bg-pattern opacity-35" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
            <p className="mt-4 text-sm tracking-widest text-gold">✦ اقرأ واكتشف ✦</p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl">📚 المكتبة الإسلامية</h1>
            <p className="mx-auto mt-5 max-w-3xl leading-loose text-night-foreground/75">
              اكتشف مجموعة واسعة من الكتب والمراجع الإسلامية في مكان واحد، مع إمكانية تصفح المحتوى
              والبحث والوصول إلى المصادر بسهولة.
            </p>
            <div className="mx-auto mt-9 inline-flex flex-col items-center rounded-3xl border border-gold/40 bg-night/70 px-10 py-6">
              <strong className="font-display text-6xl text-gold md:text-7xl">+10,000</strong>
              <span className="mt-1 text-xl font-semibold">كتاب وحديث</span>
              <span className="mt-2 text-sm text-night-foreground/65">محتوى إسلامي في متناولك</span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Search className="mx-auto h-9 w-9 text-gold" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl text-primary">مجالات متعددة للقراءة</h2>
              <p className="mt-3 leading-loose text-muted-foreground">
                تنقّل بين أبواب المعرفة الإسلامية واختر الموضوع الذي ترغب في استكشافه.
              </p>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <article
                  key={category}
                  className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-soft transition hover:-translate-y-0.5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-parchment font-display text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-primary">{category}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-parchment py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 text-center">
            <h2 className="font-display text-3xl text-primary">ابدأ القراءة مع Sakinah</h2>
            <p className="max-w-2xl leading-loose text-muted-foreground">
              حمّل التطبيق لاستكشاف المكتبة وبقية الموارد الإسلامية في مكان واحد.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/download"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:bg-night"
              >
                تحميل التطبيق
              </Link>
              <Link
                to="/features"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary px-7 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                مميزات Sakinah <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
