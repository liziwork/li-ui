# Navbar 导航栏

?> 自定义导航栏组件

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
  "navigationStyle": "custom",
  "usingComponents": {
    "li-navbar": "@liziwork/li-ui/navbar/index"
  }
}
```

## 使用组件

#### 基础使用
组件默认是没有`fixed`定位样式，需要开发者自己设置。
``` html
<li-navbar title="导航栏" />
```

#### 自定义图标
``` html
<li-navbar
  title="导航栏"
  icon="close"
/>
```
#### 自定义颜色
``` html
<li-navbar
  title="导航栏"
  color="#fff"
  bg-color="#5474fb"
/>
```

#### 自定义事件
`custom-back`可开启自定义点击事件
``` html
<li-navbar
  title="导航栏"
  icon="share"
  custom-back
  bind:back="back"
  bind:title="title"
/>
```
#### 删减高度
`icon-slot`插槽可插入内容到icon节点位置，`title-slot`插槽可插入内容到title节点位置，`other`插槽可插入自定义内容
``` html
<li-navbar
  title="导航栏"
  icon-slot
  title-slot
>
  <li-icon
    slot="icon"
    src="../../assets/icons/setting.svg"
    size="40rpx"
  />
  <view
    slot="title"
    class="title"
    style="width: 100%;height:10px;background: #333"
  ></view>
  <view
    slot="other"
    style="width: 100%;height: 100rpx;background:#1abefd"
  >自定义额外内容</view>
</li-navbar>
```

## API

**Props**

| 参数       | 说明               | 类型    | 默认值            | 基础库  |
| ---------- | ------------------ | ------- | ----------------- | ------- |
| icon       | 图标名称           | string  | chevron-left      | >2.14.1 |
| homePath   | 首页路径           | string  | pages/index/index | >2.14.1 |
| bgColor    | 背景颜色           | string  | #fff              | >2.14.1 |
| color      | 字体颜色           | string  | #111              | >2.14.1 |
| title      | 标题文字           | string  | 导航栏            | >2.14.1 |
| icon-slot  | 是否开启自定义icon | boolean | false             | >2.14.1 |
| title-slot | 是否开启自定义标题 | boolean | false             | >2.14.1 |
| customBack | 是否拦截返回事件   | boolean | 0px               | >2.14.1 |

**Events**

| 事件名     | 说明         | 回调参数 |
| ---------- | ------------ | -------- |
| bind:back  | 点击icon事件 | -        |
| bind:title | 点击标题事件 | -        |