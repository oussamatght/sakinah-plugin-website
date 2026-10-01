import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SiteNavigation } from "@/components/SiteNavigation";

const TITLE = "الأسئلة والاستفسارات — Sakinah";

const contacts = [
  {
    label: "GitHub",
    detail: "تابع مشاريعي وتواصل معي",
    href: "https://github.com/oussamatght",
    icon: Github,
  },
  {
    label: "LinkedIn",
    detail: "تواصل معي مهنيًا",
    href: "https://linkedin.com/in/taright-oussama",
    icon: Linkedin,
  },
  {
    label: "البريد الإلكتروني",
    detail: "oussamatght6@gmail.com",
    href: "mailto:oussamatght6@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    detail: "تابعني على Instagram",
    href: "https://www.instagram.com/oussama_soul",
    icon: Instagram,
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content: "تواصل معنا لأسئلتك أو ملاحظاتك أو اقتراحاتك حول تطبيق Sakinah.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <main>
        <section className="bg-night py-16 text-night-foreground md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <MessageCircle className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
            <p className="mt-4 text-sm tracking-widest text-gold">✦ نحن هنا للمساعدة ✦</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">الأسئلة والاستفسارات</h1>
            <div className="mx-auto mt-6 max-w-3xl space-y-3 leading-loose text-night-foreground/80">
              <h2 className="text-xl font-semibold text-night-foreground">
                هل لديك سؤال أو استفسار؟
              </h2>
              <p>
                مرحبًا بك! إذا كان لديك سؤال حول تطبيق Sakinah، أو واجهت مشكلة، أو لديك اقتراح أو
                ملاحظة، يمكنك التواصل معي عبر مواقع التواصل التالية.
              </p>
              <p>يسعدني استقبال أسئلتكم واقتراحاتكم وملاحظاتكم.</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-18">
          <div className="mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2">
            {contacts.map(({ label, detail, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group flex min-h-28 items-center gap-5 rounded-3xl border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-parchment text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-semibold text-primary">{label}</span>
                  <span className="mt-1 block break-words text-sm text-muted-foreground">
                    {detail}
                  </span>
                </span>
                <ExternalLink
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </section>

        <section className="bg-parchment px-6 py-14">
          <a
            href="https://github.com/oussamatght/Sakinah-App"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border bg-card p-6 shadow-soft transition hover:border-gold md:flex-row md:items-center md:p-8"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-night text-night-foreground">
              <Github className="h-7 w-7" aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="block font-display text-2xl text-primary">
                Sakinah App — Open Source
              </span>
              <span className="mt-2 block leading-loose text-muted-foreground">
                يمكنك الاطلاع على مصدر تطبيق Sakinah ومتابعة تطور المشروع على GitHub.
              </span>
              <span className="mt-2 block break-all text-sm text-primary">
                github.com/oussamatght/Sakinah-App
              </span>
            </span>
            <ExternalLink
              className="h-5 w-5 self-end text-primary transition group-hover:-translate-x-1 md:self-center"
              aria-hidden="true"
            />
          </a>
        </section>
      </main>
    </div>
  );
}
