import type { Metadata } from "next";
import { BottomCta, Disclaimer, PageShell, SectionHeading, SubHero } from "../site";
export const metadata: Metadata = { title: "德国大学申请", description: "德国本科、预科、APS、语言考试、Uni 与 FH 申请规划。" };
const topics=[["本科申请","先核验国内学历是否具备德国大学直接入学资格，再结合专业限制、语言和申请通道制定方案。"],["预科 Studienkolleg","当学历暂不满足直接入学要求时，预科可能是衔接路径之一；方向、入学考试与结业考试均需提前准备。"],["APS 审核","部分申请人需要完成德国驻华使馆文化处留德人员审核部的学历审核，办理顺序应纳入整体时间线。"],["德语考试","常见认可考试包括 TestDaF、DSH、telc C1 Hochschule 等，具体分数和考试类型以项目要求为准。"],["英语授课","国际课程可能接受 IELTS、TOEFL 等成绩，但英语授课不代表日常生活和实习就业不需要德语。"],["Uni 与 FH","综合大学通常更强调理论与研究；应用科学大学更突出实践与行业联系。选择应回到专业目标，而非简单排名。"]];
export default function University(){return <PageShell>
  <SubHero kicker="STUDIUM IN DEUTSCHLAND" title="德国大学申请" intro="从入学资格到专业匹配，把复杂规则拆解成可以执行的申请路径。" index="02" image="/images/german-campus.jpg" alt="德国现代大学校园"/>
  <section className="section container"><SectionHeading kicker="BEWERBUNGSWEGE" title="理解路径，再选择学校。" text="德国大学申请不是一份通用清单。学历资格、专业课程、语言与申请平台共同决定最终方案。"/><div className="topic-grid">{topics.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="dark-section"><div className="container split-dark"><div><p className="eyebrow light">ZEITPLAN</p><h2>申请时间</h2><p>许多项目常见冬季学期与夏季学期申请，但截止日期、材料补交和国际生通道并不统一。</p></div><div className="dark-steps"><article><b>01</b><h3>提前 12–18 个月</h3><p>学历与专业评估、语言考试规划、APS 准备。</p></article><article><b>02</b><h3>提前 6–12 个月</h3><p>项目筛选、材料与文书准备、申请通道确认。</p></article><article><b>03</b><h3>录取后</h3><p>签证、保险、资金证明、住宿和注册安排。</p></article></div></div></section>
  <section className="section container"><SectionHeading kicker="LEBEN & KARRIERE" title="费用、住宿与就业" text="正式预算应覆盖整个学习周期，而不是只看学校是否收取学费。"/><div className="three-notes"><article><h3>费用</h3><p>多数公立高校学费相对较低，但通常有学期费；巴登-符腾堡州部分国际学生、私立院校及特定项目可能另收学费。</p></article><article><h3>住宿</h3><p>学生宿舍数量有限，热门城市租房竞争明显。建议收到录取前后同步准备宿舍申请与市场租房方案。</p></article><article><h3>就业</h3><p>实习、学生工和毕业后的求职机会与专业、城市、语言和个人能力有关，不应把留学等同于就业保证。</p></article></div><Disclaimer>大学项目要求、APS 规则、签证与工作政策均可能更新。申请前请核对目标院校、uni-assist、APS、德国使领馆等官方渠道。</Disclaimer></section>
  <BottomCta/>
</PageShell>}
