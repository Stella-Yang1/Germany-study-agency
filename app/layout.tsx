import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://germany-study-agency-wxiv.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "德境教育｜德国留学长期规划与申请", template: "%s｜德境教育" },
  description: "德境教育由重庆盛途教育咨询有限公司运营，专注德国语言班、高中与大学申请、未成年学生在德支持及长期升学规划。",
  keywords: ["德国留学", "德国高中", "德国大学申请", "德国预科", "APS", "德国留学咨询", "德境教育"],
  authors: [{ name: "德境教育 DEWEG BILDUNG" }],
  creator: "德境教育 DEWEG BILDUNG",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "德境教育 DEWEG BILDUNG",
    title: "德境教育｜把德国升学，做成一条清晰的路。",
    description: "专注德国教育体系长期规划与申请服务。",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "德境教育｜把德国升学，做成一条清晰的路。" }],
  },
  twitter: { card: "summary_large_image", title: "德境教育｜德国留学长期规划与申请", description: "把德国升学，做成一条清晰的路。", images: ["/og.png"] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#102a23" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
