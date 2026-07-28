"use client";
import { useState, type FormEvent } from "react";
import { Arrow } from "./site";

export type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "select" | "textarea"; options?: readonly string[]; placeholder?: string };

export function LeadForm({ fields, submitLabel, successTitle, successText, locale = "zh" }: { fields: readonly Field[]; submitLabel?: string; successTitle?: string; successText?: string; locale?: "zh" | "de" | "en" }) {
  const [sent, setSent] = useState(false);
  const copy = locale === "de"
    ? { submit:"E-Mail-Anfrage erstellen", success:"E-Mail-Anfrage erstellt", successText:"Ihr E-Mail-Programm sollte sich geöffnet haben.", choose:"Bitte auswählen", empty:"Nicht angegeben", subject:"Anfrage über die GLC-Website", hello:"Guten Tag, ich interessiere mich für eine Beratung zu Bildungswegen in Deutschland.", generated:"Diese E-Mail wurde über das Formular der GLC-Website vorbereitet.", consent:"Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung dieser Angaben zur Beantwortung meiner Anfrage zu.", note:"Nach dem Absenden öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht an shengtujy@163.com. Die Website speichert die Formulardaten nicht.", confirm:"Bitte prüfen und senden Sie die Nachricht in Ihrem E-Mail-Programm. Falls es sich nicht öffnet, schreiben Sie direkt an shengtujy@163.com.", close:"Schließen" }
    : locale === "en"
    ? { submit:"Create enquiry email", success:"Enquiry email created", successText:"Your email application should now be open.", choose:"Please select", empty:"Not provided", subject:"GLC website enquiry", hello:"Hello, I would like to ask about education planning and applications in Germany.", generated:"This email was prepared through the GLC website form.", consent:"I have read the privacy policy and consent to these details being processed to answer my enquiry.", note:"Submitting opens your email application with a prepared message to shengtujy@163.com. The website does not store the form data.", confirm:"Please review and send the message in your email application. If it does not open, email shengtujy@163.com directly.", close:"Close" }
    : { submit:"提交咨询", success:"感谢留言", successText:"我们会尽快与您联系。", choose:"请选择", empty:"未填写", subject:"GLC盛途教育官网咨询", hello:"您好，我希望咨询德国留学服务。", generated:"此邮件由GLC盛途教育官网表单生成。", consent:"我已阅读隐私政策，并同意GLC盛途教育为回复本次咨询处理以上信息。", note:"提交后将调用您设备上的邮件应用，并预先填写发送至 shengtujy@163.com 的咨询邮件；网站本身不会保存表单内容。您也可以直接致电 135 2759 6068。", confirm:"请在邮件应用中确认内容并点击发送；如果没有自动打开，请直接邮件联系 shengtujy@163.com。", close:"关闭" };
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lines = fields.map(field => `${field.label}: ${String(form.get(field.name) ?? "").trim() || copy.empty}`);
    const subject = encodeURIComponent(`${copy.subject} | ${String(form.get("name") ?? "")}`);
    const body = encodeURIComponent(`${copy.hello}\n\n${lines.join("\n")}\n\n${copy.generated}`);
    window.location.href = `mailto:shengtujy@163.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <>
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">{fields.map(field => <label key={field.name} className={field.type === "textarea" ? "full-field" : ""}>
        <span>{field.label}</span>
        {field.type === "select" ? <select name={field.name} required defaultValue=""><option value="" disabled>{copy.choose}</option>{field.options?.map(option => <option key={option}>{option}</option>)}</select>
        : field.type === "textarea" ? <textarea name={field.name} rows={5} placeholder={field.placeholder} />
        : <input name={field.name} type={field.type ?? "text"} placeholder={field.placeholder} required={["name","phone","wechat"].includes(field.name)} />}
      </label>)}</div>
      <label className="consent"><input type="checkbox" required /> <span><a href={locale === "zh" ? "/privacy" : `/${locale}/privacy`} target="_blank">{copy.consent}</a></span></label>
      <button className="button primary form-submit" type="submit">{submitLabel ?? copy.submit} <Arrow /></button>
      <small className="form-note">{copy.note}</small>
    </form>
    {sent && <div className="success-backdrop" role="dialog" aria-modal="true" aria-labelledby="success-title">
      <div className="success-modal"><span className="success-mark">✓</span><p className="eyebrow">E-MAIL</p><h2 id="success-title">{successTitle ?? copy.success}</h2><p>{successText ?? copy.successText}</p><p>{copy.confirm}</p><button className="button primary" type="button" onClick={() => setSent(false)}>{copy.close}</button></div>
    </div>}
  </>;
}
