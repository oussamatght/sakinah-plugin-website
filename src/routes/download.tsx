import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowLeft, Smartphone } from "lucide-react";
import { SiteNavigation } from "@/components/SiteNavigation";
import { APK_DOWNLOAD_URL } from "@/lib/apk-download";

const QR_IMAGE = "/app-download-qr.png";
const TITLE = "تحميل تطبيق Sakinah للأندرويد";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content: "حمّل تطبيق Sakinah للأندرويد وامسح رمز QR للوصول إلى ملف APK الرسمي.",
      },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <main>
        <section className="relative overflow-hidden bg-night py-16 text-night-foreground md:py-24">
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-night">
              <Smartphone className="h-8 w-8" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm tracking-widest text-gold">SAKINAH APK</p>
            <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
              تحميل تطبيق Sakinah للأندرويد
            </h1>
            <p className="mx-auto mt-5 max-w-2xl leading-loose text-night-foreground/75">
              خذ القرآن والأذكار ومواقيت الصلاة والمكتبة الإسلامية معك أينما ذهبت.
            </p>
            <a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gold px-9 py-4 text-lg font-bold text-night shadow-soft transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              <ArrowDownToLine className="h-6 w-6" aria-hidden="true" />
              تحميل Sakinah APK
            </a>
            <p className="mt-3 text-sm text-night-foreground/60">
              سيتم فتح رابط تنزيل الملف على Google Drive
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm tracking-widest text-gold">✦ تحميل التطبيق ✦</p>
              <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
                نزّله مباشرة على هاتفك
              </h2>
              <p className="mt-4 max-w-xl leading-loose text-muted-foreground">
                امسح رمز QR بكاميرا هاتفك لفتح رابط ملف Sakinah APK على Google Drive. يمكنك أيضًا
                استخدام زر التحميل أسفل الرمز.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm rounded-3xl border bg-white p-5 text-center shadow-soft">
              <img
                src={QR_IMAGE}
                alt="رمز QR لفتح رابط تحميل Sakinah APK على Google Drive"
                width={512}
                height={512}
                className="mx-auto aspect-square w-full"
              />
              <p className="mt-3 font-semibold text-primary">
                امسح رمز QR لتحميل التطبيق مباشرة على هاتفك
              </p>
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary px-6 py-2.5 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                تحميل APK <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-parchment py-14">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-gold/50 bg-card p-6 shadow-soft md:p-8">
              <h2 className="font-display text-2xl text-primary">⚠️ ملاحظة مهمة</h2>
              <p className="mt-4 leading-loose text-muted-foreground">
                تطبيق Sakinah يتم توزيعه حاليًا كملف APK خارج متجر Google Play، لذلك قد يعرض Android
                أو المتصفح تحذيرًا أمنيًا أثناء التحميل أو التثبيت. هذا بسبب طريقة توزيع ملف APK
                خارج Google Play. إذا كنت قد حصلت على الملف من رابط Sakinah الرسمي، يمكنك متابعة
                خطوات التثبيت الموضحة أدناه.
              </p>
              <Link
                to="/install"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4"
              >
                تعرّف على خطوات التثبيت <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 text-center">
          <p className="text-muted-foreground">هل تحتاج إلى مساعدة في التثبيت؟</p>
          <Link
            to="/contact"
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-night"
          >
            الأسئلة والاستفسارات
          </Link>
        </section>
      </main>
    </div>
  );
}
