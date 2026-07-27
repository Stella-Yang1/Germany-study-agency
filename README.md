# 德境教育 · 德国留学中介官网

一个以中文为主、预留德语语言入口的德国留学机构多页面官网。采用标准 Next.js + React + TypeScript，适配手机与桌面端，可直接部署到 Vercel，也可在增加静态导出配置后部署到 GitHub Pages。

## 页面

- `/` 首页
- `/high-school` 德国高中留学
- `/university` 德国大学申请
- `/process` 服务流程
- `/cases` 成功案例
- `/about` 关于我们
- `/contact` 联系我们

## 本地预览

建议使用 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

生产构建：

```bash
npm run build
```

## 主要结构

```text
app/
├── page.tsx                 # 首页
├── site.tsx                 # 公共导航、页脚与页面组件
├── globals.css              # 全站视觉与响应式样式
├── layout.tsx               # 网站元信息与根布局
├── high-school/page.tsx     # 德国高中
├── university/page.tsx      # 德国大学
├── process/page.tsx         # 服务流程
├── cases/page.tsx           # 案例
├── about/page.tsx           # 关于
└── contact/page.tsx         # 联系
public/                      # 站点图标与静态资源
```

## 上线前必须替换

联系邮箱、电话、社交账号、办公地址、案例结果与团队照片仍为占位内容。正式商用前请替换为可核验信息，并完善隐私政策、法律声明、工商与资质信息。联系及预约表单目前提供完整前端交互和成功提示，但尚未接入邮件或客户管理系统，不会提交或保存数据。
