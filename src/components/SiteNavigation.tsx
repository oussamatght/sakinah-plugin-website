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
      <div className="mx-auto max-w-6xl px-3 py-3 text-night-foreground sm:px-6 sm:py-4">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 self-center font-display text-lg sm:gap-3 sm:text-xl md:self-auto"
          >
            <img
              src="/favicon.ico"
              alt=""
              width={40}
              height={40}
              className="h-8 w-8 rounded-xl bg-white object-contain p-1 sm:h-10 sm:w-10"
            />
            <span>سكينة</span>
          </Link>

          <nav
            aria-label="التنقل الرئيسي"
            className="w-full md:w-auto"
          >
            <div className="grid grid-cols-2 items-center gap-1 text-xs sm:flex sm:flex-wrap sm:justify-center sm:gap-1.5 sm:text-sm md:justify-end">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`rounded-full px-2 py-2 text-center leading-tight transition hover:bg-gold/15 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:shrink-0 sm:whitespace-nowrap sm:px-3 ${
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
                className="inline-flex items-center justify-center gap-1.5 rounded-full px-2 py-2 transition hover:bg-gold/15 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:shrink-0 sm:whitespace-nowrap sm:px-3"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
