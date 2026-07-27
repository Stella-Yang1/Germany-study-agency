import type { Metadata } from "next";
import Image from "next/image";
import { BottomCta, Disclaimer, PageShell, SubHero } from "../site";
export const metadata: Metadata = { title:"成功案例", description:"德国高中、本科预科与硕士申请路径案例展示。" };
const cases=[["Case A","高中长期规划","语言 · 学制 · 监护","从学生当前年级出发，识别学校类型、语言准备和家庭支持之间的关系。","/images/german-university.jpg"],["Case B","本科与预科路径","资格 · APS · 专业","先核验大学入学资格，再安排 APS、语言与预科或本科申请的先后顺序。","/images/berlin-university.jpg"],["Case C","硕士项目申请","课程 · 选校 · 材料","以本科课程和目标专业的匹配为核心，建立有层次的项目范围与材料逻辑。","/images/munich-city.jpg"]];
export default function Cases(){return <PageShell><SubHero kicker="FÄLLE & WEGE" title="成功案例" intro="案例的价值不在复制结果，而在理解每条路径背后的判断与取舍。" index="04"/>
  <section className="section container"><Disclaimer>当前页面使用结构化占位内容，不包含虚构人物、学校录取或成功率。正式上线后，请仅使用获得书面授权且隐去敏感信息的真实案例。</Disclaimer><div className="magazine-cases">{cases.map(([name,title,tags,text,image],i)=><article key={name} className={i%2?"reverse":""}><div className="case-photo"><Image src={image} alt="德国建筑与校园环境" fill sizes="(max-width: 800px) 100vw, 55vw"/></div><div className="case-copy"><span>0{i+1} / 03</span><p className="eyebrow">{tags}</p><h2>{name}</h2><h3>{title}</h3><p>{text}</p><dl><div><dt>关键判断</dt><dd>待真实案例替换</dd></div><div><dt>服务节点</dt><dd>待真实案例替换</dd></div><div><dt>最终结果</dt><dd>待真实案例替换</dd></div></dl></div></article>)}</div></section><BottomCta/></PageShell>}
