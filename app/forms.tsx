"use client";
import { useState, type FormEvent } from "react";
import { Arrow } from "./site";

type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "select" | "textarea"; options?: string[]; placeholder?: string };

export function LeadForm({ fields, submitLabel = "提交咨询", successTitle = "感谢留言", successText = "我们会尽快与您联系。" }: { fields: Field[]; submitLabel?: string; successTitle?: string; successText?: string }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lines = fields.map(field => `${field.label}：${String(form.get(field.name) ?? "").trim() || "未填写"}`);
    const subject = encodeURIComponent(`德境教育官网咨询｜${String(form.get("name") ?? "未署名")}`);
    const body = encodeURIComponent(`您好，我希望咨询德国留学服务。\n\n${lines.join("\n")}\n\n此邮件由德境教育官网表单生成。`);
    window.location.href = `mailto:shengtujy@163.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <>
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">{fields.map(field => <label key={field.name} className={field.type === "textarea" ? "full-field" : ""}>
        <span>{field.label}</span>
        {field.type === "select" ? <select name={field.name} required defaultValue=""><option value="" disabled>请选择</option>{field.options?.map(option => <option key={option}>{option}</option>)}</select>
        : field.type === "textarea" ? <textarea name={field.name} rows={5} placeholder={field.placeholder} />
        : <input name={field.name} type={field.type ?? "text"} placeholder={field.placeholder} required={["name","phone","wechat"].includes(field.name)} />}
      </label>)}</div>
      <label className="consent"><input type="checkbox" required /> <span>我已阅读<a href="/privacy" target="_blank">隐私政策</a>，并同意德境教育为回复本次咨询处理以上信息。</span></label>
      <button className="button primary form-submit" type="submit">{submitLabel} <Arrow /></button>
      <small className="form-note">提交后将调用您设备上的邮件应用，并预先填写发送至 shengtujy@163.com 的咨询邮件；网站本身不会保存表单内容。您也可以直接致电 135 2759 6068。</small>
    </form>
    {sent && <div className="success-backdrop" role="dialog" aria-modal="true" aria-labelledby="success-title">
      <div className="success-modal"><span className="success-mark">✓</span><p className="eyebrow">E-MAIL</p><h2 id="success-title">{successTitle}</h2><p>{successText}</p><p>请在邮件应用中确认内容并点击发送；如果没有自动打开，请直接邮件联系 shengtujy@163.com。</p><button className="button primary" type="button" onClick={() => setSent(false)}>关闭</button></div>
    </div>}
  </>;
}
