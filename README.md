# ChatUI Demo

基于 [ChatUI](https://chatui.io) 官方「快速上手」示例搭建的对话界面，使用 **Vite + React** 构建，并通过 **GitHub Pages** 自动部署为可访问的在线站点。

## 功能

- 仿微信/智能客服风格的聊天界面（顶部导航栏 + 气泡消息）
- 输入消息后自动回显到右侧，并模拟机器人「正在输入」后给出回复
- 已做 iPhone X 等机型的安全区（刘海/底部）适配

## 本地开发

```bash
npm install
npm run dev      # 本地预览，默认 http://localhost:5173
```

## 构建与部署

```bash
npm run build    # 产物输出到 dist/
npm run preview  # 本地预览构建产物
```

推送到 `main` 分支后，GitHub Actions 会自动执行 `build` 并部署到 GitHub Pages（见 `.github/workflows/deploy.yml`）。

## 在线地址

部署完成后访问：`https://ware144.github.io/chatui-demo/`

## 技术栈

- [@chatui/core](https://www.npmjs.com/package/@chatui/core) `^3.8.0`
- React `^18.3.1`
- Vite `^5.4.10`
