import type { Metadata } from "next";
import { LeadForm } from "../forms";
import { PageShell, SubHero } from "../site";
export const metadata: Metadata = { title:"预约咨询", description:"预约德境教育德国升学初步评估与规划咨询。" };
const fields=[{name:"name",label:"姓名",placeholder:"您的姓名"},{name:"wechat",label:"微信",placeholder:"微信号"},{name:"email",label:"邮箱",type:"email" as const,placeholder:"name@example.com"},{name:"phone",label:"电话",type:"tel" as const,placeholder:"+86 / +49"},{name:"country",label:"目前所在国家",placeholder:"例如：中国 / 德国"},{name:"education",label:"目前学历",type:"select" as const,options:["初中在读","高中在读","高中毕业","本科在读","本科毕业","其他"]},{name:"school",label:"目标学校",placeholder:"如暂未确定，可填写“待评估”"},{name:"major",label:"目标专业",placeholder:"如暂未确定，可填写兴趣方向"},{name:"intake",label:"预计入学时间",placeholder:"例如：2027 冬季学期"},{name:"message",label:"留言",type:"textarea" as const,placeholder:"请介绍成绩、语言基础、目标与最希望解决的问题"}];
export default function Appointment(){return <PageShell><SubHero kicker="TERMIN VEREINBAREN" title="预约咨询" intro="填写基本情况，帮助我们在首次沟通前理解你的背景与目标。" index="07" image="/images/berlin-university.jpg" alt="德国大学建筑"/>
  <section className="section container appointment-layout"><div><p className="eyebrow">ERSTGESPRÄCH</p><h2>一次有准备的<br/>初步沟通。</h2><p>我们会先了解你目前所处的阶段，确认需要解决的问题，再判断下一步是否需要正式评估。</p><ol><li><span>01</span>基本背景与时间线</li><li><span>02</span>核心目标与现实约束</li><li><span>03</span>可选方向与下一步建议</li></ol></div><LeadForm fields={fields} submitLabel="提交预约" successTitle="感谢预约" successText="我们会尽快联系您。"/></section>
</PageShell>}
