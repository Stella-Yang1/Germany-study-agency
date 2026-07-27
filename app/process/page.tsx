import type { Metadata } from "next";
import { BottomCta, PageShell, SubHero } from "../site";
export const metadata: Metadata = { title:"服务流程", description:"德国留学咨询、评估、规划、申请、签证、赴德与持续支持流程。" };
const steps=[
  ["01","咨询","了解学生背景、家庭期待、预算与计划入学时间。","基础成绩、学历信息、语言情况、初步目标。","约 30–60 分钟","首次沟通用于判断方向，不等于形成正式申请方案。"],
  ["02","评估","核对学历资格、学习能力、专业匹配与主要风险。","成绩单、课程信息、语言成绩及其他背景材料。","3–7 个工作日","资料越完整，评估越接近真实申请条件。"],
  ["03","规划","确定阶段目标、路径组合、时间线和优先级。","目标确认、考试计划、院校范围与预算边界。","1–2 周","方案应保留调整空间，但关键前提必须提前验证。"],
  ["04","申请","完成材料清单、版本管理、院校递交与状态跟进。","学历文件、语言证明、简历、动机材料等。","依院校窗口","所有材料需真实一致，不制作、不美化虚假经历。"],
  ["05","签证","根据录取与个人情况准备签证、保险和资金材料。","录取文件、资金证明、保险及使领馆要求材料。","以官方处理为准","签证由主管机关独立审理，任何机构都不能保证结果。"],
  ["06","赴德","衔接住宿、注册、交通、通信和抵达后的必要手续。","住宿确认、行程、入学注册与城市落地清单。","出发前 4–8 周","热门城市住宿紧张，应尽早准备备选方案。"],
  ["07","持续支持","关注入学适应、学业节奏与后续阶段选择。","阶段反馈、问题记录与下一步成长目标。","按服务方案","支持的具体期限和范围以正式合同约定为准。"],
];
export default function Process(){return <PageShell><SubHero kicker="SO ARBEITEN WIR" title="服务流程" intro="清楚知道现在在哪一步、需要准备什么，以及下一步为什么这样做。" index="03" image="/images/berlin-city.jpg" alt="柏林现代城市建筑"/>
  <section className="section container process-long">{steps.map(([n,title,desc,prep,time,note])=><article key={n}><div className="process-number">{n}</div><div className="process-main"><p className="eyebrow">{title==="咨询"?"ERSTGESPRÄCH":"SCHRITT "+n}</p><h2>{title}</h2><p className="process-desc">{desc}</p></div><div className="process-meta"><div><small>需要准备什么</small><p>{prep}</p></div><div><small>预计时间</small><p>{time}</p></div><div><small>注意事项</small><p>{note}</p></div></div></article>)}</section><BottomCta/></PageShell>}
