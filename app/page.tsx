import Link from "next/link";
import { Arrow, Compass, PageShell, SectionHeading } from "./site";

const services = [
  { no: "01", title: "德国高中留学", de: "SCHULE", text: "从学制匹配、语言规划到监护与落地，帮助家庭建立清晰、稳妥的长期升学路径。", href: "/high-school" },
  { no: "02", title: "德国大学申请", de: "HOCHSCHULE", text: "覆盖本科、硕士与预科申请，用节点管理和材料审校降低流程中的不确定性。", href: "/university" },
  { no: "03", title: "全程留德支持", de: "BEGLEITUNG", text: "签证、保险、住宿与行前衔接，重要信息有依据，关键节点有人跟进。", href: "/process" },
];

export default function Home() {
  return <PageShell>
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">DEUTSCHLAND · BILDUNG · ZUKUNFT</p>
        <h1>把德国升学，<br/><em>做成一条清晰的路。</em></h1>
        <p className="lead">专注德国教育体系的长期规划与申请服务。我们以严谨的信息、透明的流程和克制的建议，陪学生走稳每一个关键节点。</p>
        <div className="hero-actions"><Link className="button primary" href="/contact">预约初步评估 <Arrow/></Link><Link className="text-link" href="/process">了解服务方式 <Arrow/></Link></div>
        <div className="trust-row"><span>体系化评估</span><span>全流程节点管理</span><span>中德双向沟通</span></div>
      </div>
      <div className="hero-visual" aria-label="德国升学规划示意图">
        <div className="flag-line"><i/><i/><i/></div>
        <p className="visual-kicker">YOUR ROUTE TO GERMANY</p>
        <div className="route-map"><span className="point p1">评估<small>ASSESSMENT</small></span><span className="route-line"/><span className="point p2">申请<small>APPLICATION</small></span><span className="route-line"/><span className="point p3">赴德<small>ARRIVAL</small></span></div>
        <div className="berlin-card"><span>BERLIN</span><b>52.5200° N</b><b>13.4050° E</b></div>
      </div>
    </section>

    <section className="section container">
      <SectionHeading kicker="WAS WIR TUN" title="围绕选择，而不是焦虑。" text="每一项服务都从学生现状和真实目标出发。我们不承诺结果，只承诺专业判断、过程透明与责任边界。"/>
      <div className="service-grid">{services.map((item)=><Link className="service-card" href={item.href} key={item.no}><div><span className="card-no">{item.no}</span><span className="card-de">{item.de}</span></div><h3>{item.title}</h3><p>{item.text}</p><span className="circle-arrow"><Arrow/></span></Link>)}</div>
    </section>

    <section className="dark-band"><div className="container principles"><div><p className="eyebrow light">UNSERE HALTUNG</p><h2>专业，首先是<br/>知道边界在哪里。</h2></div><div className="principle-list"><article><b>01</b><div><h3>信息有出处</h3><p>以学校、使领馆及官方机构公开信息为基础，区分政策事实与经验判断。</p></div></article><article><b>02</b><div><h3>方案有取舍</h3><p>说明每条路径的前提、成本与风险，不用单一“成功率”替代完整判断。</p></div></article><article><b>03</b><div><h3>过程可追踪</h3><p>申请节点、材料版本和待办事项清晰可见，重要决定共同确认。</p></div></article></div></div></section>

    <section className="section container split-intro"><div><SectionHeading kicker="WARUM DEUTSCHLAND" title="为什么是德国？"/></div><div className="fact-grid"><div><strong>多元</strong><span>综合大学、应用科学大学与职业教育构成多样路径</span></div><div><strong>严谨</strong><span>培养体系强调学术基础、实践能力与独立思考</span></div><div><strong>长期</strong><span>从语言、学业到职业，需要面向未来的连续规划</span></div><div><strong>开放</strong><span>国际化课程与跨文化环境提供更宽广的成长空间</span></div></div></section>

    <section className="cta container"><Compass/><div><p className="eyebrow">ERSTGESPRÄCH</p><h2>先弄清方向，再决定是否出发。</h2><p>一次不带销售压力的初步沟通，了解你的背景、目标和时间线。</p></div><Link className="button primary" href="/contact">预约沟通 <Arrow/></Link></section>
  </PageShell>;
}
