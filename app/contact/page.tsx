import type { Metadata } from "next";
import { LeadForm } from "../forms";
import { PageShell, SubHero } from "../site";
export const metadata: Metadata = { title:"联系我们", description:"通过公司邮箱、联系电话或官网咨询表单联系德境教育。" };
const fields=[{name:"name",label:"姓名",placeholder:"您的姓名"},{name:"phone",label:"电话",type:"tel" as const,placeholder:"+86 / +49"},{name:"wechat",label:"微信",placeholder:"微信号"},{name:"email",label:"邮箱",type:"email" as const,placeholder:"name@example.com"},{name:"grade",label:"学生年级",type:"select" as const,options:["初中","高中","大学本科","大学毕业","其他"]},{name:"goal",label:"目标",type:"select" as const,options:["德国高中","德国本科 / 预科","德国硕士","长期规划","其他"]},{name:"message",label:"留言",type:"textarea" as const,placeholder:"请简要介绍目前情况、语言基础与计划入学时间"}];
const channels=[["公司邮箱","shengtujy@163.com"],["联系电话","135 2759 6068"],["联系人","张智"],["公司主体","重庆盛途教育咨询有限公司"]];
export default function Contact(){return <PageShell><SubHero kicker="KONTAKT" title="联系我们" intro="先从一次认真沟通开始。告诉我们你的现状、目标和时间线。" index="06"/>
  <section className="section container contact-layout"><div className="contact-intro"><p className="eyebrow">KONTAKTWEGE</p><h2>保持联系</h2><p>德境教育由重庆盛途教育咨询有限公司运营，业务范围包括德国语言班、公立及私立高中、大学申请，以及未成年学生在德支持服务。</p><div className="channel-list">{channels.map(([name,value])=><div key={name}><span>{name}</span><b>{value}</b></div>)}</div><div className="contact-actions"><a className="button primary" href="tel:+8613527596068">拨打电话</a><a className="button secondary-button" href="mailto:shengtujy@163.com">发送邮件</a></div></div><LeadForm fields={fields} submitLabel="生成咨询邮件" successTitle="咨询邮件已生成" successText="您的设备应已打开邮件编辑窗口。"/></section>
  <section className="map-placeholder"><div><span>CHONGQING · CHINA</span><h2>重庆市大渡口区</h2><p>湖榕路22号4幢16-16 · 到访前请先电话预约</p></div></section>
</PageShell>}
