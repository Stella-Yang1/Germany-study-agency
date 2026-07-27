# GLC盛途教育 · 德国留学官网

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

公司邮箱、电话、办公地址、服务范围与德国高中项目参考收费已依据项目方提供的资料更新。未获公开授权的社交账号、学生个案、合作院校和团队资料不在网站展示。联系及预约表单会调用访问者设备的邮件应用生成咨询邮件，网站本身不保存表单数据；后续如接入邮件或客户管理系统，应同步更新隐私政策。
