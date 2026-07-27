import Image from "next/image";
import Link from "next/link";
import { Arrow, BottomCta, PageShell, SectionHeading } from "./site";

const germanyReasons = [
  ["01", "教育质量", "严谨的培养体系，重视学术基础、独立思考与实践能力。"],
  ["02", "相对低学费", "多数公立高校学费相对较低，但学期费及部分项目学费仍需纳入预算。"],
  ["03", "就业机会", "德国制造、工程、科技与商业生态，为毕业后的职业探索提供空间。"],
  ["04", "国际认可", "多元院校体系与国际化课程，为跨国学习和职业发展建立基础。"],
];
const services = [
  ["01", "德国高中", "从学校类型、语言准备到监护与落地，建立长期升学路径。", "/high-school", "/images/german-university.jpg"],
  ["02", "德国大学", "覆盖本科、预科与硕士申请，明确资格、专业和申请节奏。", "/university", "/images/german-campus.jpg"],
  ["03", "长期规划", "从初中、高中到大学，用阶段目标连接语言、学业与未来选择。", "/process", "/images/munich-city.jpg"],
  ["04", "签证与落地", "围绕签证、保险、住宿、注册与抵德事项完成行前衔接。", "/process", "/images/berlin-city.jpg"],
];
const advantages = ["长期规划", "德国本地资源", "一对一咨询", "透明流程", "申请全程陪伴", "持续成长支持"];
const process = ["咨询", "评估", "规划", "申请", "签证", "赴德", "持续支持"];

export default function Home() {
  return <PageShell>
    <section className="hero">
      <Image src="/images/berlin-university.jpg" alt="柏林洪堡大学建筑" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow light">DEUTSCHLAND · BILDUNG · ZUKUNFT</p>
          <h1>把德国升学，<br /><em>做成一条清晰的路。</em></h1>
          <p className="lead">专注德国教育体系长期规划与申请服务。<br />帮助学生从初中、高中到大学建立完整升学路径。</p>
          <div className="hero-actions"><Link className="button light-button" href="/appointment">预约初步评估 <Arrow /></Link><Link className="text-link light-link" href="/process">了解服务 <Arrow /></Link></div>
        </div>
        <div className="hero-note"><span>BERLIN · GERMANY</span><b>52.5200° N<br />13.4050° E</b></div>
      </div>
    </section>

    <section className="section container">
      <SectionHeading kicker="WARUM DEUTSCHLAND" title="为什么选择德国？" text="吸引力不只来自教育成本，更来自多元路径、培养质量与长期发展空间。" />
      <div className="reason-grid">{germanyReasons.map(([n, title, text]) => <article key={n}><span className="minimal-icon">{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionHeading kicker="UNSERE LEISTUNGEN" title="我们的服务" text="围绕学生的当前阶段与长期目标，建立连续、清晰的升学支持。" />
        <div className="service-image-grid">{services.map(([n, title, text, href, image]) => <Link href={href} className="image-card" key={n}>
          <Image src={image} alt={`${title}服务`} fill sizes="(max-width: 700px) 100vw, 50vw" />
          <span className="image-card-shade" />
          <span className="card-no">{n}</span><div><h3>{title}</h3><p>{text}</p><b>了解更多 <Arrow /></b></div>
        </Link>)}</div>
      </div>
    </section>

    <section className="section container">
      <SectionHeading kicker="WARUM GLC" title="为什么选择GLC盛途教育" text="我们不把申请看成一次材料递交，而是把每个阶段放进完整的成长路径中。" />
      <div className="advantage-grid">{advantages.map((item, i) => <article key={item}><span>0{i + 1}</span><h3>{item}</h3><p>{["从当前阶段倒推未来选择，让语言、学业与申请相互衔接。","理解德国教育体系与在地生活语境，提供更贴近真实环境的判断。","固定顾问持续沟通，重要选择有依据、有记录、有反馈。","服务范围、流程节点与责任边界在合作开始前清晰说明。","从评估、材料、递交到结果跟进，关键节点保持连续协作。","关注录取之后的适应与发展，让规划延伸到在德学习阶段。"][i]}</p></article>)}</div>
    </section>

    <section className="dark-section">
      <div className="container">
        <SectionHeading kicker="ABLAUF" title="从咨询到赴德，每一步都清楚。" text="流程不是流水线，而是一组可以共同确认、持续追踪的关键节点。" inverted />
        <div className="home-timeline">{process.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong>{i < process.length - 1 && <i aria-hidden="true">↓</i>}</div>)}</div>
        <Link className="text-link light-link process-link" href="/process">查看完整服务流程 <Arrow /></Link>
      </div>
    </section>

    <section className="section container">
      <SectionHeading kicker="ANWENDUNGSFÄLLE" title="服务发生在每一个关键节点。" text="基于公司已明确的业务范围，介绍高中申请、未成年人在德支持与大学申请三个典型服务场景。" />
      <div className="home-cases">{["高中申请", "在德支持", "大学申请"].map((item, i) => <Link href="/cases" key={item}><span>0{i + 1}</span><div><small>{["公立及私立文理中学", "未成年学生监护协调", "语言班与大学路径"][i]}</small><h3>{item}</h3><p>{["聚焦择校、语言准备与签证衔接。", "聚焦学校沟通、月度反馈与突发情况协调。", "聚焦入学资格、语言要求与申请节点。"][i]}</p></div><Arrow /></Link>)}</div>
    </section>
    <BottomCta />
  </PageShell>;
}
