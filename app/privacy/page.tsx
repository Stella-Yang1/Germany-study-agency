import type { Metadata } from "next";
import { PageShell, SubHero } from "../site";

export const metadata: Metadata = { title: "隐私政策", description: "德境教育网站咨询信息处理说明。" };

export default function PrivacyPage() {
  return <PageShell>
    <SubHero kicker="DATENSCHUTZ" title="隐私政策" intro="我们只处理回复咨询所必要的信息，并尽量减少不必要的数据收集。" index="09" />
    <section className="section container legal-copy">
      <h2>目前的表单状态</h2>
      <p>当前网站表单尚未连接邮件、数据库或客户管理系统。点击提交只会在当前浏览器显示成功提示，表单内容不会由网站保存或发送。</p>
      <h2>计划收集的信息</h2>
      <p>正式接入咨询系统后，可能处理姓名、电话、微信、邮箱、学生年级、所在国家、目前学历、目标学校或专业、预计入学时间及留言内容，目的仅限于回复咨询、进行初步评估和安排后续服务。</p>
      <h2>未成年人信息</h2>
      <p>请勿在首次咨询中提交护照、身份证、成绩单、健康资料或其他敏感文件。涉及未成年学生时，应由其监护人知情并同意后再提供必要信息。</p>
      <h2>共享与跨境</h2>
      <p>在未取得必要授权前，我们不会将咨询信息提供给学校、语言机构、监护服务人员或其他合作方。若后续服务确有共享或跨境传输需要，将在合同或单独告知中说明接收方、目的、范围与保存安排。</p>
      <h2>联系我们</h2>
      <p>如需查询、更正或删除已提供的信息，可联系重庆盛途教育咨询有限公司：<a href="mailto:shengtujy@163.com">shengtujy@163.com</a>，电话 <a href="tel:+8613527596068">135 2759 6068</a>。</p>
      <p className="legal-review-note">在表单真正连接后台之前，本政策仅描述当前状态与拟采用原则。上线数据收集功能时应同步补充保存期限、技术服务商、Cookie 使用和跨境处理的具体信息。</p>
    </section>
  </PageShell>;
}
