import type { Metadata } from "next";
import { BottomCta, Disclaimer, PageShell, SectionHeading, SubHero } from "../site";
export const metadata: Metadata = { title: "德国高中留学", description: "了解德国高中体系、学校类型、申请条件、德语要求、费用与时间规划。" };
const schools = [
  ["Gymnasium", "以大学升学为主要方向，课程学术性较强，通常以 Abitur 为毕业目标。"],
  ["Realschule", "强调一般教育与实践能力，毕业后可进入职业教育，也可继续衔接更高层次学校。"],
  ["Gesamtschule", "在一所学校中整合不同教育路径，具体课程与毕业选择因州和学校而异。"],
  ["国际高中", "可能提供 IB、国际课程或英语教学环境，费用与入学标准通常高于普通公立学校。"],
];
const requirements = [["年龄要求","通常需要结合申请年级、国内学制和学校政策判断，不存在全国统一的单一年龄线。"],["德语要求","多数德语授课学校需要具备可衔接课堂的语言能力，常见准备目标在 B1–B2 区间，最终以学校要求为准。"],["学业基础","学校会关注在校成绩、学习能力、出勤与行为表现；部分学校安排面试或入学测试。"],["家庭准备","未成年学生需要充分考虑监护、住宿、保险、预算和跨文化适应。"]];
const publicPlans = [
  {
    state: "巴登-符腾堡州",
    school: "公立文理中学",
    costs: [
      ["申请与签证服务", "人民币 28,000 元 / 项目"],
      ["监护管理", "12,000 欧元 / 学年"],
      ["住宿及餐食", "12,000 欧元 / 学年"],
      ["国际生手续", "2,000 欧元 / 学年"],
    ],
  },
  {
    state: "勃兰登堡州",
    school: "公立文理中学",
    costs: [
      ["申请与签证服务", "人民币 28,000 元 / 项目"],
      ["监护管理", "12,000 欧元 / 学年"],
      ["住宿及餐食", "约 6,000 欧元 / 学年"],
      ["国际生手续", "4,000 欧元 / 学年"],
    ],
  },
];
export default function HighSchool(){return <PageShell>
  <SubHero kicker="SCHULBILDUNG IN DEUTSCHLAND" title="德国高中留学" intro="在学校选择之前，先理解学制、语言、成长节奏与未来升学方向。" index="01" image="/images/german-university.jpg" alt="德国历史大学建筑"/>
  <section className="section container"><SectionHeading kicker="SCHULSYSTEM" title="德国高中体系" text="德国教育由各联邦州负责，学校类型、年级衔接和毕业路径可能不同。以下介绍用于建立基本框架，不替代目标学校当年的官方要求。"/>
    <div className="school-grid">{schools.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>
  <section className="section soft-section"><div className="container"><SectionHeading kicker="VORAUSSETZUNGEN" title="申请条件" text="判断是否适合，不只看成绩。年龄、语言、学业衔接和独立生活准备同样重要。"/><div className="detail-list">{requirements.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section container"><SectionHeading kicker="KOSTEN" title="项目费用参考" text="以下为GLC盛途教育当前德国高中项目的参考收费，用于初步预算判断。人民币与欧元项目分别计价。"/>
    <div className="pricing-grid">{publicPlans.map(plan=><article className="pricing-card" key={plan.state}><p className="eyebrow">{plan.state}</p><h3>{plan.school}</h3><div>{plan.costs.map(([name,value])=><p key={name}><span>{name}</span><b>{value}</b></p>)}</div></article>)}
      <article className="pricing-card private-card"><p className="eyebrow">PRIVATSCHULE</p><h3>私立文理中学</h3><div><p><span>申请与签证服务</span><b>人民币 28,000 元 / 项目</b></p><p><span>学费、住宿及生活费</span><b>约 28,000–56,000 欧元 / 学年</b></p></div></article>
    </div>
    <div className="service-scope"><h3>申请服务包含</h3><div><p><b>学校申请</b><span>结合学生能力与家庭意愿推荐 1–3 所学校，并按确认顺序推进申请。</span></p><p><b>签证协助</b><span>保险建议、材料清单、资料审核、递签预约与面谈准备（如适用）。</span></p><p><b>学业支持</b><span>德语学习路径、阶段性学业规划，以及辅导资源与在读经验交流对接。</span></p><p><b>未成年人支持</b><span>协助安排德国本地监护、学校沟通、月度反馈、基础事务及突发情况协调。</span></p></div></div>
    <Disclaimer>重要说明：监护管理费按预计就读年限制定整体方案，具体缴费节点以双方正式合同为准。住宿、餐食、学校及第三方费用可能调整；保险、交通、语言课程、签证费和个人生活支出如未在合同中列明，通常另计。录取、签证和升学结果由学校及主管机构独立决定，任何服务均不构成结果保证。</Disclaimer>
  </section>
  <section className="section soft-section"><div className="container two-col"><div><p className="eyebrow">ZEITPLAN</p><h2>时间规划</h2></div><div className="prose"><h3>建议准备周期</h3><p>建议至少提前 12–18 个月开始规划，用于学制判断、语言准备、学校沟通、材料整理和签证衔接。时间越紧，路径选择通常越受限制。</p><h3>以个案为准</h3><p>德国教育由各联邦州负责，同一类型学校的录取、住宿和国际生安排也可能不同。最终方案应以目标学校当年书面要求及正式服务合同为准。</p></div></div></section>
  <section className="section faq-section"><div className="container"><SectionHeading kicker="FAQ" title="常见问题"/><div className="faq-list">{[
    ["不会德语可以申请吗？","部分国际学校提供英语或双语环境，但多数德国本土学校需要德语。语言基础不足时，应先规划语言准备期。"],
    ["德国高中毕业后一定能读大学吗？","需要取得符合大学入学要求的毕业资格，并满足具体专业和院校要求；不同毕业证书对应的升学路径不同。"],
    ["公立高中是否完全免费？","不能简单理解为零成本。即使学校不收学费，住宿、监护、保险、生活与行政费用仍需单独预算。"],
    ["家长需要陪读吗？","未成年学生的居留、监护与住宿安排需按具体情况核实，不能将其他国家的“陪读”规则直接套用到德国。"],
  ].map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div></div></section>
  <BottomCta/>
</PageShell>}
