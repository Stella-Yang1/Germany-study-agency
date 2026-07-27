import type { Metadata } from "next";
import Image from "next/image";
import { BottomCta, Disclaimer, PageShell, SubHero } from "../site";
export const metadata: Metadata = { title:"服务场景", description:"GLC盛途教育德国高中、大学申请与未成年人在德支持的典型服务场景。" };
const cases=[
  {name:"高中申请",title:"公立及私立文理中学规划",tags:"择校 · 语言 · 签证",text:"根据学生能力、家庭意愿和目标州的实际安排，筛选 1–3 所公立或私立学校，推进申请并协助准备签证。",decision:"年级衔接、德语基础与学校要求是否匹配",service:"学校建议、申请材料、签证准备与学业规划",boundary:"录取及签证由学校和主管机构独立决定",image:"/images/german-university.jpg"},
  {name:"在德支持",title:"未成年学生监护与生活协调",tags:"监护 · 学校 · 反馈",text:"围绕未成年学生在德期间的学校沟通、月度反馈、基础事务与突发情况提供协调支持。",decision:"监护、住宿、学校和家庭之间的责任边界",service:"监护文件协助、学校沟通、定期反馈与应急协调",boundary:"具体职责、期限及费用以正式合同为准",image:"/images/berlin-university.jpg"},
  {name:"大学申请",title:"语言班与德国大学路径",tags:"语言 · 资格 · 申请",text:"结合申请人的教育背景、语言基础、目标学校和专业，安排语言准备与大学申请的先后顺序。",decision:"入学资格、语言要求与目标专业的匹配程度",service:"路径梳理、材料准备、节点管理与申请协助",boundary:"不承诺录取、考试、签证或后续就业结果",image:"/images/munich-city.jpg"},
];
export default function Cases(){return <PageShell><SubHero kicker="ANWENDUNGSFÄLLE" title="服务场景" intro="以下内容来自公司已明确的业务范围，用来说明我们在不同阶段能够提供什么支持。" index="04"/>
  <section className="section container"><Disclaimer>为保护学生隐私，本页面不使用未经书面授权的姓名、成绩、学校及个人经历，也不将宣传材料中的个案描述当作公开背书。</Disclaimer><div className="magazine-cases">{cases.map((item,i)=><article key={item.name} className={i%2?"reverse":""}><div className="case-photo"><Image src={item.image} alt="德国建筑与校园环境" fill sizes="(max-width: 800px) 100vw, 55vw"/></div><div className="case-copy"><span>0{i+1} / 03</span><p className="eyebrow">{item.tags}</p><h2>{item.name}</h2><h3>{item.title}</h3><p>{item.text}</p><dl><div><dt>关键判断</dt><dd>{item.decision}</dd></div><div><dt>服务内容</dt><dd>{item.service}</dd></div><div><dt>责任边界</dt><dd>{item.boundary}</dd></div></dl></div></article>)}</div></section><BottomCta/></PageShell>}
