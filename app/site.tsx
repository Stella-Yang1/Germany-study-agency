import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const nav = [
  ["首页", "/"],
  ["德国高中", "/high-school"],
  ["德国大学", "/university"],
  ["服务流程", "/process"],
  ["服务场景", "/cases"],
  ["关于我们", "/about"],
  ["联系我们", "/contact"],
  ["预约咨询", "/appointment"],
] as const;

export function Arrow() { return <span aria-hidden="true">↗</span>; }
export function Plus() { return <span aria-hidden="true">＋</span>; }

export function Header() {
  return <header className="header">
    <div className="container nav-wrap">
      <Link className="logo" href="/" aria-label="德境教育首页">
        <span className="logo-mark">D<span>E</span></span>
        <span><b>德境教育</b><small>DEWEG BILDUNG</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="主导航">
        {nav.slice(0, 7).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <div className="nav-tools">
        <Link className="nav-cta" href="/appointment">立即预约 <Arrow /></Link>
        <details className="mobile-menu">
          <summary aria-label="打开菜单"><span /><span /></summary>
          <div>{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
        </details>
      </div>
    </div>
  </header>;
}

export function Footer() {
  return <footer>
    <div className="container footer-grid">
      <div className="footer-brand">
        <Link className="logo inverse" href="/">
          <span className="logo-mark">D<span>E</span></span>
          <span><b>德境教育</b><small>DEWEG BILDUNG</small></span>
        </Link>
        <p>专注德国教育体系的长期升学规划与申请服务。</p>
      </div>
      <div><h4>留学方向</h4><Link href="/high-school">德国高中</Link><Link href="/university">德国大学</Link><Link href="/process">服务流程</Link></div>
      <div><h4>德境教育</h4><Link href="/cases">服务场景</Link><Link href="/about">关于我们</Link><Link href="/appointment">预约咨询</Link></div>
      <div><h4>联系方式</h4><a href="mailto:shengtujy@163.com">shengtujy@163.com</a><a href="tel:+8613527596068">135 2759 6068</a><p>重庆市大渡口区<br /><small>重庆盛途教育咨询有限公司</small></p></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 DEWEG BILDUNG</span><span>All Rights Reserved. · <Link href="/privacy">隐私政策</Link> · <Link href="/legal">法律声明</Link></span></div>
  </footer>;
}

export function PageShell({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }

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
      <span className="page-index">{index}<small>DEWEG BILDUNG</small></span>
    </div>
  </section>;
}

export function BottomCta() {
  return <section className="full-cta"><div className="container full-cta-inner"><div><p className="eyebrow light">PERSÖNLICHES GESPRÄCH</p><h2>准备开启你的德国升学之路？</h2><p>先了解方向、条件与时间线，再做出适合自己的选择。</p></div><Link className="button light-button" href="/appointment">预约咨询 <Arrow /></Link></div></section>;
}

export function Disclaimer({ children }: { children: ReactNode }) { return <div className="disclaimer">{children}</div>; }
