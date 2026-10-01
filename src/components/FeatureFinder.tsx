import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  BookText,
  Heart,
  Moon,
  ScrollText,
  Sun,
  Sunrise,
  Timer,
  Compass,
  type LucideIcon,
} from "lucide-react";

type GuideLink = {
  label: string;
  feature: string;
};

type GuideQuestion = {
  question: string;
  icon: LucideIcon;
  title: string;
  answer: string;
  links: GuideLink[];
};

const questions: GuideQuestion[] = [
  {
    question: "أريد أن أحافظ على أذكار الصباح",
    icon: Sunrise,
    title: "أذكار الصباح",
    answer: "يمكنك الوصول إلى أذكار الصباح من قسم الأذكار، وقراءتها يوميًا والعودة إليها بسهولة.",
    links: [{ label: "الانتقال إلى الأذكار", feature: "adhkar" }],
  },
  {
    question: "أبحث عن كتب في السيرة",
    icon: BookText,
    title: "المكتبة الإسلامية",
    answer:
      "يمكنك استكشاف كتب السيرة في المكتبة الإسلامية، والتعرف على الكتب والمؤلفين ثم فتح الكتاب وقراءته.",
    links: [{ label: "استكشاف المكتبة", feature: "library" }],
  },
  {
    question: "أريد أن أتقرب إلى الله أكثر",
    icon: Heart,
    title: "ابدأ بخطوات بسيطة",
    answer:
      "يمكنك جعل سكينة رفيقك اليومي من خلال قراءة القرآن، والمحافظة على الصلاة، والأذكار، وقراءة ما ينفعك من الكتب الإسلامية.",
    links: [
      { label: "القرآن", feature: "quran" },
      { label: "الصلاة", feature: "prayer" },
      { label: "الأذكار", feature: "adhkar" },
      { label: "المكتبة الإسلامية", feature: "library" },
    ],
  },
  {
    question: "أريد أن أقرأ القرآن",
    icon: BookOpen,
    title: "القرآن الكريم",
    answer: "افتح قسم القرآن لقراءة المصحف، ومتابعة موضع القراءة، والاستمرار في وردك اليومي.",
    links: [{ label: "فتح القرآن", feature: "quran" }],
  },
  {
    question: "أريد معرفة مواقيت الصلاة",
    icon: Timer,
    title: "مواقيت الصلاة",
    answer: "يعرض لك قسم الصلاة مواقيت الصلوات حسب موقعك، مع إمكانية متابعة الصلاة القادمة.",
    links: [{ label: "مواقيت الصلاة", feature: "prayer" }],
  },
  {
    question: "أريد أن أسبّح وأتابع عدّي",
    icon: Sun,
    title: "التسبيح",
    answer: "استخدم قسم التسبيح لاختيار الذكر والعدد ومتابعة تقدّمك أثناء التسبيح.",
    links: [{ label: "فتح التسبيح", feature: "tasbih" }],
  },
  {
    question: "أريد قراءة الأحاديث",
    icon: ScrollText,
    title: "الأحاديث النبوية",
    answer:
      "يمكنك استكشاف الأحاديث والبحث فيها والاطلاع على مصدر الحديث ودرجته وشرحه عندما تكون هذه المعلومات متوفرة.",
    links: [{ label: "استكشاف الأحاديث", feature: "hadith" }],
  },
  {
    question: "أريد تعلم الفقه",
    icon: BookText,
    title: "المكتبة الإسلامية",
    answer:
      "استكشف قسم المكتبة الإسلامية للعثور على الكتب المتعلقة بالفقه، ثم اختر الكتاب المناسب للقراءة.",
    links: [{ label: "كتب الفقه", feature: "library" }],
  },
  {
    question: "أريد معرفة اتجاه القبلة",
    icon: Compass,
    title: "اتجاه القبلة",
    answer: "استخدم قسم القبلة لمعرفة اتجاه القبلة من موقعك.",
    links: [{ label: "فتح القبلة", feature: "qibla" }],
  },
  {
    question: "أريد أذكار المساء",
    icon: Moon,
    title: "أذكار المساء",
    answer: "اذهب إلى قسم الأذكار واختر أذكار المساء لقراءتها في وقتها.",
    links: [{ label: "أذكار المساء", feature: "adhkar" }],
  },
  {
    question: "أريد أذكار النوم",
    icon: Moon,
    title: "أذكار النوم",
    answer: "يمكنك الوصول إلى أذكار النوم من قسم الأذكار والعودة إليها قبل النوم.",
    links: [{ label: "أذكار النوم", feature: "adhkar" }],
  },
];

export function FeatureFinder() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const selected = selectedQuestion === null ? null : questions[selectedQuestion];

  return (
    <div className="mx-auto max-w-5xl">
      <p className="mb-6 text-center text-muted-foreground">
        لا تحتاج إلى معرفة أين تبدأ. اختر ما تبحث عنه، وسنرشدك.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map(({ question, icon: Icon }, index) => {
          const isSelected = selectedQuestion === index;

          return (
            <button
              key={question}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedQuestion(index)}
              className={`group flex min-h-20 items-center gap-4 rounded-2xl border p-4 text-start transition duration-200 hover:-translate-y-0.5 hover:border-gold hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isSelected
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-card text-foreground"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                  isSelected
                    ? "bg-primary-foreground/15 text-gold"
                    : "bg-parchment text-primary group-hover:text-gold"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-medium leading-relaxed">{question}</span>
            </button>
          );
        })}
      </div>

      {selected && (
        <article
          key={selected.question}
          aria-live="polite"
          className="mt-6 rounded-3xl border border-gold/40 bg-card p-6 shadow-soft transition duration-300 sm:p-8"
        >
          <h3 className="font-display text-2xl text-primary">{selected.title}</h3>
          <p className="mt-3 max-w-3xl leading-loose text-muted-foreground">{selected.answer}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {selected.links.map(({ label, feature }) => (
              <Link
                key={feature}
                to="/features"
                hash={feature}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {label} <span aria-hidden="true">←</span>
              </Link>
            ))}
          </div>
        </article>
      )}
    </div>
  );
}
