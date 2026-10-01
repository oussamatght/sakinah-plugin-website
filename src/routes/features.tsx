import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Check, Compass, Heart, Headphones, Search, Star } from "lucide-react";
import { FEATURES } from "@/lib/features";
import { FeatureFinder } from "@/components/FeatureFinder";
import { SiteNavigation } from "@/components/SiteNavigation";

const TITLE = "ما الذي يميز سكينة؟ — شرح ميزات التطبيق";
const DESC =
  "تعرّف بالتفصيل على ميزات سكينة: القرآن، مواقيت الصلاة، التسبيح، الأحاديث، الأذكار، المكتبة الإسلامية، واتجاه القبلة.";

const highlights = [
  { icon: BookOpen, title: "القرآن الكريم", text: "مصحف وورد يومي لمرافقتك في القراءة." },
  { icon: Check, title: "مواقيت الصلاة", text: "تابع مواقيت الصلاة حسب موقعك." },
  { icon: Compass, title: "القبلة", text: "تعرّف على اتجاه القبلة من موقعك." },
  { icon: Star, title: "التسبيح والأذكار", text: "أذكار يومية وسبحة لمتابعة العد." },
  { icon: BookOpen, title: "الأحاديث", text: "تصفّح الأحاديث ومصادرها." },
  { icon: BookOpen, title: "المكتبة الإسلامية", text: "كتب ومراجع في مجالات إسلامية متعددة." },
  { icon: Search, title: "البحث", text: "اعثر على ما تبحث عنه في المحتوى." },
  { icon: Heart, title: "المفضلة", text: "احتفظ بما تريد الرجوع إليه." },
  { icon: Headphones, title: "الاستماع والتلاوة", text: "استمع إلى التلاوات حيثما توفرت." },
];

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
          <SiteNavigation />
          <div className="fade-up mx-auto mt-16 max-w-2xl text-center">
            <h1 className="font-display text-5xl leading-tight md:text-6xl">مميزات سكينة</h1>
            <p className="mt-5 leading-loose opacity-80">
              موارد إسلامية مهمة تجتمع في تطبيق واحد لتكون أقرب إليك كل يوم.
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

      <section className="bg-parchment py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm tracking-widest text-gold">✦ محتوى متنوع في مكان واحد ✦</p>
            <h2 className="mt-3 font-display text-3xl text-primary">رفيقك لمصادر إسلامية متعددة</h2>
            <p className="mt-3 max-w-2xl leading-loose text-muted-foreground">
              اجمع بين القراءة والعبادة والتعلّم في تجربة عربية هادئة وسهلة الاستخدام.
            </p>
          </div>
          <div className="rounded-3xl border bg-card px-8 py-5 text-center shadow-soft">
            <strong className="block font-display text-5xl text-primary">+10,000</strong>
            <span className="mt-1 block font-medium">كتاب وحديث</span>
            <Link
              to="/library"
              className="mt-3 inline-block text-sm text-primary underline underline-offset-4"
            >
              اكتشف المكتبة الإسلامية
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center font-display text-3xl text-primary">
            كل ما تحتاجه في سكينة
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-parchment text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
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
