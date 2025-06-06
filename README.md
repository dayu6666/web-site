# 大鱼软件服务管理

大鱼软件服务管理公司官方网站，基于 Next.js 15、TailwindCSS 4、shadcn/ui 等现代前端技术栈构建，支持响应式设计、多语言（中英文）切换、暗黑模式和丰富动画效果。

## 主要特性

- 🚀 **Next.js 15** 最新版本，支持 App Router
- 🎨 **TailwindCSS 4** 现代化原子化 CSS
- 🧩 **shadcn/ui** 组件库，快速构建美观 UI
- 🌗 **明亮/暗黑模式** 一键切换
- 🌏 **中英文双语** 支持，i18n 国际化
- 📱 **响应式设计**，适配手机、平板、桌面
- ✨ **动画与交互**，如流星、地球、渐变等

## 技术栈

- [Next.js](https://nextjs.org/) v15+
- [React](https://react.dev/) v19+
- [TailwindCSS](https://tailwindcss.com/) v4+
- [shadcn/ui](https://ui.shadcn.com/)
- [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) 暗黑模式
- [motion](https://motion.dev/) 动画
- [cobe](https://github.com/shuding/cobe) 3D 地球
- [axios](https://axios-http.com/) 请求库

## 目录结构

```
├── app/                # Next.js 页面与布局
├── components/         # 复用组件（如 hero-section, magicui/* 等）
├── public/             # 静态资源
├── styles/             # 全局样式（如 globals.css）
├── lib/                # 工具函数与 i18n 配置
├── package.json        # 依赖与脚本
└── README.md           # 项目说明
```

## 安装与启动

```bash
# 安装依赖
npm install

# 启动开发环境
npm run dev

# 构建生产环境
npm run build
npm start
```

## 多语言切换

- 页面右上角/菜单可切换中英文，基于 i18next 实现。

## 明亮/暗黑模式

- 页面右上角/菜单可切换主题，基于 next-themes 实现。

## 动画说明

- 首页 HeroSection 包含 3D 地球（cobe）与流星动画（magicui/meteors）等。
- 其他组件如按钮、渐变、淡入淡出等均有动画效果。

