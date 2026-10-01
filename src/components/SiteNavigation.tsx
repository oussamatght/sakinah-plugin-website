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
            className="w-full overflow-x-auto pb-1 md:w-auto md:overflow-visible md:pb-0"
          >
            <div className="flex min-w-max items-center justify-center gap-1.5 text-[11px] sm:text-sm">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-center leading-tight transition hover:bg-gold/15 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:px-3 sm:py-2 ${
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
                className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 transition hover:bg-gold/15 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:px-3 sm:py-2"
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
