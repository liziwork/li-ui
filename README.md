# 扫码体验
![小程序码](https://ae01.alicdn.com/kf/U5f40a0b1a2b049a392029ccb9f684308q.jpg)

# 安装

## 通过 `npm` 安装
> 使用 npm 构建前，请先阅读微信官方的 [npm支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

``` sh
# 通过 npm 安装
npm i @liziwork/li-ui

# 通过 yarn 安装
yarn add @liziwork/li-ui
```

## 检查 `project.config.json` 
检查当前项目package.json是否与小程序配置文件为同级目录，如果项目目录复杂，请参考小程序[npm构建包配置](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 构建 `npm` 包
打开微信开发者工具，点击 `工具 -> 构建 npm`，并勾选 `使用 npm 模块` 选项，构建完成后，项目根目录会生成 `miniprogram_npm`目录。


# 使用

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

# 组件列表
## 已发布
- 基础组件
  - 图标
  - 图片
  - 分割线
  - 安全区占位符
- 导航组件
	- 导航栏
	- 标签栏
- 交互组件
  - 加载动画
  - 下拉刷新
  - 上拉加载
- 视图组件
  - 滚动视图
  - 长列表
  - 瀑布流
  
## 待开发
- 按钮
- 开关
- 标签
- 遮罩层
- 侧边导航栏
- 选项卡
- 菜单栏


