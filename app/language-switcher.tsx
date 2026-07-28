"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = [
  ["zh", "中文"],
  ["de", "DE"],
  ["en", "EN"],
] as const;

function localizedPath(pathname: string, locale: string) {
  const clean = pathname.replace(/^\/(de|en)(?=\/|$)/, "") || "/";
  return locale === "zh" ? clean : `/${locale}${clean === "/" ? "/home" : clean}`;
}

export function LanguageSwitcher({ current }: { current: "zh" | "de" | "en" }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="language-switcher" role="group" aria-label={current === "de" ? "Sprache wählen" : current === "en" ? "Choose language" : "选择语言"}>
      {locales.map(([locale, label]) => (
        <button
          type="button"
          key={locale}
          className={current === locale ? "active" : ""}
          aria-pressed={current === locale}
          onClick={() => {
            document.cookie = `glc-locale=${locale}; path=/; max-age=31536000; samesite=lax`;
            router.push(localizedPath(pathname, locale));
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
