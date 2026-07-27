import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:{default:"德境教育｜德国留学规划与申请",template:"%s｜德境教育"},description:"专注德国高中、德国大学申请与全程留德支持的教育咨询网站演示项目。",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
