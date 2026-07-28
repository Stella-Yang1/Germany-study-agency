import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "./language-switcher";

export type Locale = "zh" | "de" | "en";
const labels = {
  zh: { nav: ["首页","德国高中","德国大学","服务流程","服务场景","关于我们","联系我们","预约咨询"], cta:"立即预约", direction:"留学方向", brand:"GLC盛途教育", contact:"联系方式", privacy:"隐私政策", legal:"法律声明", tagline:"专注德国教育体系的长期升学规划与申请服务。", schoolWechat:"高中项目微信：GLC210411" },
  de: { nav: ["Startseite","Schule","Hochschule","Ablauf","Leistungsfälle","Über uns","Kontakt","Beratung"], cta:"Beratung", direction:"Bildungswege", brand:"GLC Shengtu", contact:"Kontakt", privacy:"Datenschutz", legal:"Rechtliche Hinweise", tagline:"Langfristige Bildungsplanung und Bewerbungsbegleitung für Deutschland.", schoolWechat:"WeChat Schulprogramm: GLC210411" },
  en: { nav: ["Home","Schools","University","Process","Service cases","About","Contact","Consultation"], cta:"Book now", direction:"Study pathways", brand:"GLC Shengtu", contact:"Contact", privacy:"Privacy", legal:"Legal notice", tagline:"Long-term education planning and application support for Germany.", schoolWechat:"School programme WeChat: GLC210411" },
} as const;
const paths = ["/","/high-school","/university","/process","/cases","/about","/contact","/appointment"] as const;
const hrefFor = (locale: Locale, path: string) => locale === "zh" ? path : `/${locale}${path === "/" ? "" : path}`;

export function Arrow() { return <span aria-hidden="true">↗</span>; }
export function Plus() { return <span aria-hidden="true">＋</span>; }

export function Header({ locale = "zh" }: { locale?: Locale }) {
  const t = labels[locale];
  const nav = t.nav.map((label, index) => [label, hrefFor(locale, paths[index])] as const);
  return <header className="header">
    <div className="container nav-wrap">
      <Link className="logo" href={hrefFor(locale, "/")} aria-label="GLC盛途教育">
        <span className="logo-mark">GLC</span>
        <span><b>GLC盛途教育</b><small>GERMANY STUDY PROGRAM</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="主导航">
        {nav.slice(0, 7).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <div className="nav-tools">
        <LanguageSwitcher current={locale} />
        <Link className="nav-cta" href={hrefFor(locale, "/appointment")}>{t.cta} <Arrow /></Link>
        <details className="mobile-menu">
          <summary aria-label="打开菜单"><span /><span /></summary>
          <div>{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
        </details>
      </div>
    </div>
  </header>;
}

export function Footer({ locale = "zh" }: { locale?: Locale }) {
  const t = labels[locale];
  return <footer>
    <div className="container footer-grid">
      <div className="footer-brand">
        <Link className="logo inverse" href={hrefFor(locale, "/")}>
          <span className="logo-mark">GLC</span>
          <span><b>GLC盛途教育</b><small>GERMANY STUDY PROGRAM</small></span>
        </Link>
        <p>{t.tagline}</p>
      </div>
      <div><h4>{t.direction}</h4><Link href={hrefFor(locale,"/high-school")}>{t.nav[1]}</Link><Link href={hrefFor(locale,"/university")}>{t.nav[2]}</Link><Link href={hrefFor(locale,"/process")}>{t.nav[3]}</Link></div>
      <div><h4>{t.brand}</h4><Link href={hrefFor(locale,"/cases")}>{t.nav[4]}</Link><Link href={hrefFor(locale,"/about")}>{t.nav[5]}</Link><Link href={hrefFor(locale,"/appointment")}>{t.nav[7]}</Link></div>
      <div><h4>{t.contact}</h4><a href="mailto:shengtujy@163.com">shengtujy@163.com</a><a href="tel:+8613527596068">135 2759 6068</a><Link href={hrefFor(locale,"/contact")}>{t.schoolWechat}</Link><p>Chongqing, China<br /><small>重庆盛途教育咨询有限公司</small></p></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 GLC盛途教育</span><span>All Rights Reserved. · <Link href={hrefFor(locale,"/privacy")}>{t.privacy}</Link> · <Link href={hrefFor(locale,"/legal")}>{t.legal}</Link></span></div>
  </footer>;
}

export function PageShell({ children, locale = "zh" }: { children: ReactNode; locale?: Locale }) { return <><Header locale={locale} /><main>{children}</main><Footer locale={locale} /></>; }

export function SectionHeading({ kicker, title, text, inverted = false }: { kicker: string; title: string; text?: string; inverted?: boolean }) {
  return <div className={`section-heading ${inverted ? "inverted" : ""}`}>
    <p className="eyebrow">{kicker}</p>
    <div><h2>{title}</h2>{text && <p>{text}</p>}</div>
  </div>;
}

export function SubHero({ kicker, title, intro, index, image, alt }: { kicker: string; title: string; intro: string; index: string; image?: string; alt?: string }) {
  return <section className={`subhero ${image ? "with-image" : ""}`}>
    {image && <Image src={image} alt={alt ?? ""} fill priority sizes="100vw" className="subhero-image" />}
    <div className="subhero-shade" />
    <div className="container subhero-inner">
      <div><p className="eyebrow light">{kicker}</p><h1>{title}</h1><p>{intro}</p></div>
      <span className="page-index">{index}<small>GLC盛途教育</small></span>
    </div>
  </section>;
}

export function BottomCta({ locale = "zh" }: { locale?: Locale }) {
  const copy = locale === "de" ? ["PERSÖNLICHES GESPRÄCH","Bereit für Ihren Bildungsweg in Deutschland?","Klären Sie zuerst Richtung, Voraussetzungen und Zeitplan.","Beratung vereinbaren"] : locale === "en" ? ["PERSONAL CONSULTATION","Ready to begin your education journey in Germany?","Understand the route, requirements and timeline before deciding.","Book a consultation"] : ["PERSÖNLICHES GESPRÄCH","准备开启你的德国升学之路？","先了解方向、条件与时间线，再做出适合自己的选择。","预约咨询"];
  return <section className="full-cta"><div className="container full-cta-inner"><div><p className="eyebrow light">{copy[0]}</p><h2>{copy[1]}</h2><p>{copy[2]}</p></div><Link className="button light-button" href={hrefFor(locale,"/appointment")}>{copy[3]} <Arrow /></Link></div></section>;
}

export function Disclaimer({ children }: { children: ReactNode }) { return <div className="disclaimer">{children}</div>; }
