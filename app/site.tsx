import Link from "next/link";
import type { ReactNode } from "react";

export const nav = [
  ["德国高中", "/high-school"], ["德国大学", "/university"], ["服务流程", "/process"], ["成功案例", "/cases"], ["关于我们", "/about"], ["联系我们", "/contact"],
] as const;

export function Arrow(){return <span aria-hidden="true">↗</span>}
export function Compass(){return <span className="compass" aria-hidden="true">✦</span>}

export function Header(){return <header className="header"><div className="container nav-wrap"><Link className="logo" href="/"><span className="logo-mark">D<span>E</span></span><span><b>德境教育</b><small>DEWEG BILDUNG</small></span></Link><nav className="desktop-nav" aria-label="主导航">{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav><div className="nav-tools"><span className="lang">中文 <i/> DE</span><Link className="nav-cta" href="/contact">预约咨询</Link><details className="mobile-menu"><summary aria-label="打开菜单"><span/><span/></summary><div>{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}<Link className="mobile-contact" href="/contact">预约咨询</Link></div></details></div></div></header>}

export function Footer(){return <footer><div className="container footer-grid"><div><Link className="logo inverse" href="/"><span className="logo-mark">D<span>E</span></span><span><b>德境教育</b><small>DEWEG BILDUNG</small></span></Link><p>专注德国教育体系的长期规划与申请服务。</p></div><div><h4>留学服务</h4><Link href="/high-school">德国高中留学</Link><Link href="/university">德国大学申请</Link><Link href="/process">服务流程</Link></div><div><h4>认识我们</h4><Link href="/cases">成功案例</Link><Link href="/about">关于我们</Link><Link href="/contact">联系我们</Link></div><div><h4>联系</h4><a href="mailto:hello@deweg-edu.example">hello@deweg-edu.example</a><p>中国 · 上海 / 德国 · 柏林<br/><small>演示地址，正式上线前请替换</small></p></div></div><div className="container footer-bottom"><span>© 2026 DEWEG BILDUNG. ALL RIGHTS RESERVED.</span><span>隐私政策 · 法律声明</span></div></footer>}

export function PageShell({children}:{children:ReactNode}){return <><Header/><main>{children}</main><Footer/></>}
export function SectionHeading({kicker,title,text}:{kicker:string,title:string,text?:string}){return <div className="section-heading"><p className="eyebrow">{kicker}</p><div><h2>{title}</h2>{text&&<p>{text}</p>}</div></div>}
export function SubHero({kicker,title,intro,index}:{kicker:string,title:string,intro:string,index:string}){return <section className="subhero"><div className="container subhero-inner"><div><p className="eyebrow light">{kicker}</p><h1>{title}</h1><p>{intro}</p></div><span className="page-index">{index}<small>DEWEG BILDUNG</small></span></div></section>}
export function BottomCta(){return <section className="cta container"><Compass/><div><p className="eyebrow">PERSÖNLICHES GESPRÄCH</p><h2>每条路径，都从一次认真沟通开始。</h2></div><Link className="button primary" href="/contact">预约初步评估 <Arrow/></Link></section>}
