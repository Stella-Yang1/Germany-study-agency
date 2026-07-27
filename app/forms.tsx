"use client";
import { useState, type FormEvent } from "react";
import { Arrow } from "./site";

type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "select" | "textarea"; options?: string[]; placeholder?: string };

export function LeadForm({ fields, submitLabel = "提交咨询", successTitle = "感谢留言", successText = "我们会尽快与您联系。" }: { fields: Field[]; submitLabel?: string; successTitle?: string; successText?: string }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
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
      <small className="form-note">当前为前端演示表单，尚未连接邮件或客户管理系统，不会保存数据。</small>
    </form>
    {sent && <div className="success-backdrop" role="dialog" aria-modal="true" aria-labelledby="success-title">
      <div className="success-modal"><span className="success-mark">✓</span><p className="eyebrow">VIELEN DANK</p><h2 id="success-title">{successTitle}</h2><p>{successText}</p><button className="button primary" type="button" onClick={() => setSent(false)}>关闭</button></div>
    </div>}
  </>;
}
