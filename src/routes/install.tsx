import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowLeft,
  Check,
  CircleAlert,
  Download,
  FileCheck2,
  FolderOpen,
  PackageCheck,
  Settings2,
  Smartphone,
} from "lucide-react";
import { SiteNavigation } from "@/components/SiteNavigation";

const TITLE = "كيفية تحميل وتثبيت تطبيق Sakinah على Android";

export const Route = createFileRoute("/install")({
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content: "دليل سهل خطوة بخطوة لتحميل وتثبيت Sakinah APK على Android.",
      },
    ],
  }),
  component: InstallPage,
});

const steps = [
  {
    icon: Download,
    title: "الخطوة 1 — تحميل التطبيق",
    content: (
      <>
        اضغط على زر <strong>تحميل Sakinah APK</strong> أو امسح رمز QR باستخدام هاتفك. سيُفتح رابط
        Google Drive، ومنه يمكنك تنزيل ملف APK.
      </>
    ),
  },
  {
    icon: FolderOpen,
    title: "الخطوة 2 — افتح الملف",
    content: (
      <>
        بعد انتهاء التحميل، افتح ملف <strong>Sakinah.apk</strong> من الإشعارات أو من مجلد التنزيلات
        (Downloads).
      </>
    ),
  },
];

function InstallPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <main>
        <section className="bg-night py-14 text-center text-night-foreground md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Smartphone className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
            <p className="mt-4 text-sm tracking-widest text-gold">دليل سهل خطوة بخطوة</p>
            <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              كيفية تحميل وتثبيت تطبيق Sakinah على Android
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-loose text-night-foreground/75">
              اتبع هذه الخطوات لتثبيت التطبيق على هاتفك. تختلف أسماء بعض الإعدادات قليلًا بين
              الهواتف.
            </p>
            <Link
              to="/download"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 font-semibold text-night transition hover:brightness-110"
            >
              <ArrowDownToLine className="h-5 w-5" aria-hidden="true" />
              تحميل Sakinah APK
            </Link>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-5 px-6 py-12 md:py-16">
          {steps.map(({ icon: Icon, title, content }, index) => (
            <article
              key={title}
              className="flex gap-4 rounded-3xl border bg-card p-5 shadow-soft md:gap-6 md:p-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-parchment text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-gold">0{index + 1}</p>
                <h2 className="mt-1 font-display text-xl text-primary md:text-2xl">{title}</h2>
                <p className="mt-3 leading-loose text-muted-foreground">{content}</p>
              </div>
            </article>
          ))}

          <article className="rounded-3xl border bg-card p-5 shadow-soft md:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-parchment text-primary">
                <Settings2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-gold">03</p>
                <h2 className="mt-1 font-display text-xl text-primary md:text-2xl">
                  الخطوة 3 — السماح بالتثبيت
                </h2>
                <p className="mt-3 leading-loose text-muted-foreground">
                  إذا منع هاتفك التثبيت، اسمح لمتصفح التنزيل بتثبيت هذا التطبيق. اختر التعليمات
                  المناسبة لإصدار Android لديك:
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <section className="rounded-2xl border bg-parchment/60 p-5">
                <h3 className="font-semibold text-primary">Android 8.0 (API 26) أو أحدث</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  افتح إعدادات تثبيت التطبيقات غير المعروفة (Install unknown apps)، واسمح للمتصفح
                  الذي استخدمته لتحميل التطبيق بالتثبيت.
                </p>
                <p className="mt-3 rounded-xl bg-card p-3 text-sm font-medium leading-loose text-foreground">
                  Settings → Apps → Special app access → Install unknown apps → Chrome/Browser →
                  Allow from this source
                </p>
              </section>
              <section className="rounded-2xl border bg-parchment/60 p-5">
                <h3 className="font-semibold text-primary">Android 7.1.1 (API 25) أو أقدم</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  افتح الإعدادات وفعّل السماح بالتثبيت من مصادر غير معروفة:
                </p>
                <p className="mt-3 rounded-xl bg-card p-3 text-sm font-medium text-foreground">
                  Settings → Security → Unknown sources
                </p>
              </section>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              قد تختلف أسماء القوائم وخطوات الوصول قليلًا حسب الشركة المصنّعة للهاتف وإصدار Android.
            </p>
          </article>

          <article className="flex gap-4 rounded-3xl border bg-card p-5 shadow-soft md:gap-6 md:p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-parchment text-primary">
              <PackageCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-gold">04</p>
              <h2 className="mt-1 font-display text-xl text-primary md:text-2xl">
                الخطوة 4 — تثبيت التطبيق
              </h2>
              <p className="mt-3 leading-loose text-muted-foreground">
                ارجع إلى ملف <strong>Sakinah.apk</strong> واضغط عليه، ثم اختر{" "}
                <strong>Install / تثبيت</strong>.
              </p>
            </div>
          </article>

          <article className="flex gap-4 rounded-3xl border border-gold/50 bg-parchment p-5 shadow-soft md:gap-6 md:p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-card text-primary">
              <Check className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-gold">05</p>
              <h2 className="mt-1 font-display text-xl text-primary md:text-2xl">
                الخطوة 5 — افتح Sakinah
              </h2>
              <p className="mt-3 leading-loose text-muted-foreground">
                بعد انتهاء التثبيت، اضغط <strong>Open / فتح</strong> واستمتع بتطبيق Sakinah.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl border border-amber-300 bg-amber-50 p-5 md:p-7">
            <h2 className="flex items-center gap-2 font-display text-xl text-amber-950">
              <CircleAlert className="h-6 w-6" aria-hidden="true" />
              ملاحظة مهمة
            </h2>
            <p className="mt-3 leading-loose text-amber-950/80">
              تطبيق Sakinah يتم توزيعه حاليًا كملف APK خارج متجر Google Play، لذلك قد يعرض Android
              أو المتصفح تحذيرًا أمنيًا أثناء التحميل أو التثبيت. هذا بسبب طريقة توزيع ملف APK خارج
              Google Play. إذا حصلت على الملف من رابط Sakinah الرسمي، يمكنك متابعة خطوات التثبيت
              أعلاه.
            </p>
          </aside>

          <div className="flex flex-wrap justify-center gap-3 pt-3">
            <Link
              to="/download"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:bg-night"
            >
              <ArrowDownToLine className="h-5 w-5" aria-hidden="true" />
              إلى صفحة التحميل
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary px-7 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              تواصل معنا <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
