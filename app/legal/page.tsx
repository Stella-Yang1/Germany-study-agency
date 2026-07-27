import type { Metadata } from "next";
import { PageShell, SubHero } from "../site";

export const metadata: Metadata = { title: "法律声明", description: "GLC盛途教育网站运营主体、信息边界与免责声明。" };

export default function LegalPage() {
  return <PageShell>
    <SubHero kicker="RECHTLICHE HINWEISE" title="法律声明" intro="网站信息用于服务介绍与初步规划，不替代学校、签证或法律主管机构的正式决定。" index="08" />
    <section className="section container legal-copy">
      <h2>运营信息</h2>
      <p>“GLC盛途教育”是本网站使用的服务品牌，网站运营主体为重庆盛途教育咨询有限公司。联系邮箱：<a href="mailto:shengtujy@163.com">shengtujy@163.com</a>；联系电话：<a href="tel:+8613527596068">135 2759 6068</a>；办公地址：重庆市大渡口区湖榕路22号4幢16-16。</p>
      <h2>信息边界</h2>
      <p>网站内容基于现有项目资料整理。德国各联邦州、学校、使领馆及其他主管机构的政策与要求可能变化，申请人应以相关机构最新书面信息为准。</p>
      <h2>结果说明</h2>
      <p>学校录取、签证、考试、升学、就业及居留决定均由相应学校或主管机构独立作出。咨询、申请协助、监护协调和学业支持不构成对任何结果的保证。</p>
      <h2>费用说明</h2>
      <p>网站展示的费用为当前项目参考，不当然构成合同报价。实际费用、第三方支出、付款节点、服务期限、退费及终止条件，以双方签署的正式合同为准。</p>
      <h2>知识产权</h2>
      <p>除另有说明外，本网站文字、版式与品牌内容受相关法律保护。引用学校、城市或第三方名称仅用于说明，不表示其对本网站或服务作出背书。</p>
      <p className="legal-review-note">本页面为基础信息版本，并非律师出具的法律意见。正式大规模推广或开展跨境数据收集前，建议由熟悉中国与德国相关法律的专业人士复核。</p>
    </section>
  </PageShell>;
}
