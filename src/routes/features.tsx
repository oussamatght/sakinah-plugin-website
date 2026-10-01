import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { FEATURES } from "@/lib/features";
import { FeatureFinder } from "@/components/FeatureFinder";

const TITLE = "ما الذي يميز سكينة؟ — شرح ميزات التطبيق";
const DESC =
  "تعرّف بالتفصيل على ميزات سكينة: القرآن، مواقيت الصلاة، التسبيح، الأحاديث، الأذكار، المكتبة الإسلامية، واتجاه القبلة.";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="relative bg-night text-night-foreground">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-6">
          <header className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 font-display text-2xl">
              <img
                src="/favicon.ico"
                alt="شعار سكينة"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl bg-white object-contain p-1"
              />
              سكينة
            </Link>
            <Link to="/" className="flex items-center gap-2 text-sm opacity-80 hover:text-gold">
              <ArrowRight className="h-4 w-4" /> الرئيسية
            </Link>
          </header>
          <div className="fade-up mx-auto mt-16 max-w-2xl text-center">
            <h1 className="font-display text-5xl leading-tight md:text-6xl">ما الذي يميز سكينة؟</h1>
            <p className="mt-5 leading-loose opacity-80">
              لكل قسم: ما هو، ولماذا تحتاجه، وكيف تستخدمه.
            </p>
          </div>
          <nav className="mt-10 flex flex-wrap justify-center gap-2">
            {FEATURES.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="rounded-full border border-night-foreground/20 px-4 py-1.5 text-sm hover:border-gold hover:text-gold"
              >
                {f.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
        {FEATURES.map((f, i) => (
          <article
            key={f.id}
            id={f.id}
            className="grid scroll-mt-8 items-center gap-10 md:grid-cols-2"
          >
            <img
              src={f.image}
              alt={f.title}
              width={944}
              height={704}
              loading="lazy"
              className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-soft ${i % 2 ? "md:order-2" : ""}`}
            />
            <div>
              <h2 className="font-display text-3xl text-primary md:text-4xl">{f.title}</h2>
              <dl className="mt-6 space-y-5 leading-loose">
                <div>
                  <dt className="text-sm font-semibold text-gold">ما هو؟</dt>
                  <dd>{f.what}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gold">لماذا تستخدمه؟</dt>
                  <dd className="text-muted-foreground">{f.why}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gold">كيف تستخدمه؟</dt>
                  <dd>
                    <ul className="mt-2 space-y-2">
                      {f.how.map((s) => (
                        <li key={s} className="flex gap-2">
                          <Check className="mt-1.5 h-4 w-4 shrink-0 text-primary" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center font-display text-3xl text-primary">دليلك داخل سكينة</h2>
          <FeatureFinder />
        </div>
      </section>
    </div>
  );
}
