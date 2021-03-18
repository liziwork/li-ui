# 快速开始

!> 使用LI UI前，请先了解 [微信小程序开发](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

## 安装

### 通过 npm 安装

?> 使用 npm 构建前，请先阅读微信官方的 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

```bash
# 通过 npm 安装
npm install @liziwork/li-ui

# 通过 yarn 安装
yarn add @liziwork/li-ui
```

### 检查 project.config.json 
检查当前项目package.json是否与小程序配置文件为同级目录，如果项目目录复杂，请参考小程序[npm构建包配置](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 构建 npm 包
打开微信开发者工具，点击 **工具 -> 构建 npm**，并勾选 **使用 npm 模块** 选项，构建完成后，项目根目录会生成 **miniprogram_npm** 目录。

![示例截图](https://www.hualigs.cn/image/6052f57726792.jpg)

## 使用

## 引入组件
``` json
// 全局引入
// app.json
"usingComponents": {
  "li-icon": "@liziwork/li-ui/icon/index"
}

// 单页面引入
// index.json
"usingComponents": {
  "li-icon": "@liziwork/li-ui/icon/index"
}
```

## 使用组件
``` html
<li-icon name="home" />
```

?> 请注意组件路径是否正确，基础库版本是否过低导致api不兼容。