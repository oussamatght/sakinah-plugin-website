import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Clock,
  ScrollText,
  Sparkles,
  Library,
  Compass,
  WifiOff,
  ShieldCheck,
  Heart,
  Download,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import { FeatureFinder } from "@/components/FeatureFinder";
import { SiteNavigation } from "@/components/SiteNavigation";
import { APK_DOWNLOAD_URL } from "@/lib/apk-download";

const TITLE = "سكينة — رفيقك اليومي للقرآن والذكر";
const DESC =
  "سكينة تطبيق إسلامي هادئ يجمع القرآن الكريم ومواقيت الصلاة والأحاديث والأذكار والمكتبة الإسلامية والقبلة في مكان واحد.";
export const Route = createFileRoute("/")({
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
  component: Index,
});

const features = [
  {
    icon: BookOpen,
    title: "القرآن",
    text: "مصحف كامل بخط واضح، مع ورد يومي وحفظ موضع القراءة تلقائياً.",
  },
  { icon: Clock, title: "الصلاة", text: "مواقيت دقيقة حسب موقعك، مع تذكير لطيف قبل كل صلاة." },
  {
    icon: ScrollText,
    title: "الأحاديث",
    text: "أحاديث مختارة من الكتب الصحيحة، مع شرح ميسّر ومصدر موثّق.",
  },
  {
    icon: Sparkles,
    title: "الأذكار",
    text: "أذكار الصباح والمساء والنوم، وسبحة إلكترونية تحفظ عدّك.",
  },
  {
    icon: Library,
    title: "المكتبة الإسلامية",
    text: "كتب في العقيدة والفقه والسيرة، تقرؤها بهدوء وتعود إليها متى شئت.",
  },
  { icon: Compass, title: "القبلة", text: "بوصلة تحدد اتجاه القبلة من أي مكان بسهولة ودقة." },
];

const faqs = [
  { q: "هل التطبيق مجاني؟", a: "نعم، سكينة مجاني بالكامل ودون إعلانات مزعجة." },
  { q: "هل أحتاج إلى حساب؟", a: "لا. يمكنك البدء فوراً، وتُحفظ مفضلتك وتقدّمك على جهازك." },
  {
    q: "هل يعمل دون إنترنت؟",
    a: "يمكنك تنزيل المصحف للقراءة دون اتصال. بقية الأقسام تحتاج إلى الإنترنت عند أول تحميل.",
  },
  {
    q: "لماذا يطلب التطبيق موقعي؟",
    a: "فقط لحساب مواقيت الصلاة واتجاه القبلة بدقة، ولا يُشارَك موقعك مع أحد.",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <SiteNavigation overlay />

      {/* Hero */}
      <section className="relative bg-night text-night-foreground">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-32 md:grid-cols-2 md:pt-40">
          <div className="fade-up">
            <p className="mb-5 font-quran text-xl text-gold">
              ﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾
            </p>
            <h1 className="font-display text-7xl leading-tight md:text-8xl">سكينة</h1>
            <p className="mt-4 text-2xl font-light opacity-90">رفيقك اليومي للقرآن والذكر</p>
            <p className="mt-6 max-w-md leading-loose opacity-70">
              قرآنك وصلاتك وأذكارك في تطبيق واحد هادئ، صُمّم ليرافقك في يومك دون تشتيت.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                id="start"
                className="rounded-full bg-gold px-8 py-3.5 font-medium text-night shadow-soft transition hover:brightness-110"
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="me-2 inline h-5 w-5" aria-hidden="true" />
                نزّل تطبيق سكينة
              </a>
              <a
                href="#download"
                className="rounded-full border border-night-foreground/25 px-8 py-3.5 transition hover:border-gold hover:text-gold"
              >
                امسح رمز QR للتنزيل
              </a>
            </div>
          </div>
          <div className="float-slow relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 arch border border-gold/30" />
            <img
              src={hero}
              alt="قوس إسلامي ومصحف مفتوح تحت هلال في ليلة هادئة"
              width={1280}
              height={1280}
              className="arch aspect-[4/5] w-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* App download */}
      <section id="download" className="relative overflow-hidden bg-parchment py-20">
        <div className="absolute inset-0 bg-pattern opacity-35" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[1fr_auto]">
          <div className="text-center md:text-start">
            <p className="text-sm tracking-widest text-gold">✦ تطبيق سكينة على أندرويد ✦</p>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
              خذ سكينة معك أينما ذهبت
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-loose text-muted-foreground md:mx-0">
              امسح رمز QR بكاميرا هاتفك أو اضغط الزر لتنزيل ملف APK مباشرةً من Google Drive.
            </p>
            <a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-soft transition hover:bg-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              تنزيل تطبيق APK
            </a>
            <p className="mt-3 text-sm text-muted-foreground">تنزيل مباشر من Google Drive</p>
          </div>
          <div className="mx-auto w-full max-w-xs rounded-3xl border bg-white p-4 text-center shadow-soft">
            <img
              src="/app-download-qr.png"
              alt="رمز QR لتنزيل تطبيق سكينة على أندرويد"
              width={435}
              height={433}
              loading="lazy"
              className="mx-auto aspect-square w-full rounded-2xl object-contain"
            />
            <p className="mt-3 font-medium text-primary">امسح الرمز لتنزيل التطبيق</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-28">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm tracking-widest text-gold">✦ المزايا ✦</p>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
              كل ما تحتاجه في مكان واحد
            </h2>
            <Link
              to="/features"
              className="mt-4 inline-block text-primary underline-offset-4 hover:underline"
            >
              اكتشف ما الذي يميز سكينة ←
            </Link>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-3xl border bg-card p-8 shadow-soft transition hover:-translate-y-1"
              >
                <div className="arch mb-6 flex h-16 w-14 items-end justify-center bg-primary pb-3 text-gold transition group-hover:bg-night">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-primary">{title}</h3>
                <p className="mt-3 leading-loose text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Manual guide */}
      <section id="finder" className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-sm tracking-widest text-gold">✦ دليلك داخل سكينة ✦</p>
            <h2 className="mt-3 font-display text-4xl text-primary">ماذا تريد أن تفعل؟</h2>
            <p className="mt-3 text-muted-foreground">
              اختر ما تبحث عنه، وسنرشدك إلى القسم المناسب في سكينة.
            </p>
          </div>
          <FeatureFinder />
        </div>
      </section>

      {/* Privacy + offline */}
      <section id="privacy" className="bg-parchment py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              t: "خصوصيتك أولاً",
              d: "لا حساب، ولا تتبّع. بياناتك تبقى على جهازك.",
            },
            {
              icon: WifiOff,
              t: "القرآن دون اتصال",
              d: "نزّل المصحف واقرأ في أي مكان، حتى دون إنترنت.",
            },
            { icon: Heart, t: "بلا تشتيت", d: "تصميم هادئ يعينك على الخشوع، بلا إعلانات مزعجة." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 rounded-2xl bg-card/70 p-6">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
              <div>
                <h3 className="text-lg font-semibold text-primary">{t}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-4xl text-primary">الأسئلة الشائعة</h2>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border bg-card p-6 open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                  {f.q}
                  <span className="text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-loose text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-night py-16 text-night-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm tracking-widest text-gold">✦ اكتشف أكثر ✦</p>
          <h2 className="mt-4 font-display text-4xl text-primary-foreground md:text-5xl">
            ابدأ رحلتك داخل سكينة اليوم
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-loose text-night-foreground/75">
            اقرأ القرآن، وتابع أذكارك، واستكشف المكتبة الإسلامية، وحمّل التطبيق على هاتفك.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/download"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 py-3 font-medium text-night shadow-soft transition hover:brightness-110"
            >
              📱 تحميل التطبيق
            </Link>
            <Link
              to="/library"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-night-foreground/30 px-7 py-3 font-medium text-night-foreground transition hover:border-gold hover:text-gold"
            >
              📚 اكتشف المكتبة
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-night-foreground/30 px-7 py-3 font-medium text-night-foreground transition hover:border-gold hover:text-gold"
            >
              ❓ الأسئلة والاستفسارات
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-night py-14 text-night-foreground">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
          <img
            src="/favicon.ico"
            alt="شعار سكينة"
            width={56}
            height={56}
            loading="lazy"
            className="h-14 w-14 rounded-2xl bg-white object-contain p-1"
          />
          <span className="font-display text-3xl text-gold">سكينة</span>
          <p className="opacity-70">رفيقك اليومي للقرآن والذكر</p>
          <p className="mt-2 max-w-xl leading-loose text-night-foreground/80">
            اللهم بارك لمن أنشأ هذا التطبيق، واجزه خير الجزاء، واجعله في ميزان حسناته.
          </p>
          <p className="mt-4 text-xs opacity-50">
            © {new Date().getFullYear()} سكينة. جميع الحقوق محفوظة.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <Link to="/features" className="hover:text-gold">
              مميزات سكينة
            </Link>
            <Link to="/library" className="hover:text-gold">
              المكتبة الإسلامية
            </Link>
            <Link to="/download" className="hover:text-gold">
              تحميل التطبيق
            </Link>
            <Link to="/install" className="hover:text-gold">
              كيفية التثبيت
            </Link>
            <Link to="/contact" className="hover:text-gold">
              الأسئلة والاستفسارات
            </Link>
            <a
              href="https://github.com/oussamatght"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
