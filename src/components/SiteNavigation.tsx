import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/features", label: "مميزات Sakinah" },
  { to: "/library", label: "المكتبة الإسلامية" },
  { to: "/download", label: "تحميل التطبيق" },
  { to: "/install", label: "كيفية التثبيت" },
  { to: "/contact", label: "الأسئلة والاستفسارات" },
] as const;

type SiteNavigationProps = {
  overlay?: boolean;
};

export function SiteNavigation({ overlay = false }: SiteNavigationProps) {
  return (
    <header
      className={
        overlay ? "absolute inset-x-0 top-0 z-20" : "relative z-20 bg-night text-night-foreground"
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-4 text-night-foreground sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 self-center font-display text-xl md:self-auto"
          >
            <img
              src="/favicon.ico"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl bg-white object-contain p-1"
            />
            <span>سكينة</span>
          </Link>
          <nav
            aria-label="التنقل الرئيسي"
            className="flex flex-wrap items-center justify-center gap-1.5 text-sm"
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`rounded-full px-3 py-2 transition hover:bg-gold/15 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  to === "/download" ? "bg-gold font-semibold text-night hover:text-night" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://github.com/oussamatght"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 transition hover:bg-gold/15 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
