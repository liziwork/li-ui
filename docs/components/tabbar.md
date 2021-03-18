# Navbar 导航栏

?> 自定义标签栏组件

## 配置文件
需要在`app.json`开启自定义tabbar设置，详情请看[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

``` json
{
  "tabBar": {
    "custom": true,
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/user/index",
      "text": "我的"
    }]
  }
}
```

!>需要在项目根目录创建自定义组件`custom-tab-bar`，注意，路径以及组件名必须正确。

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
// custom-tab-bar/index.json
{
  "usingComponents": {
    "li-tabbar": "@liziwork/li-ui/tabbar/index"
  }
}
```

## 使用组件

#### 基础使用
``` html
<li-tabbar
  color="#666"
  active-color="#111"
  tabs="{{ tabs }}"
/>
<!-- 隐藏文字 -->
<li-tabbar
  color="#666"
  active-color="#5474fb"
  hide-text
  active-style="dot"
  tabs="{{ tabs }}"
/>
```
``` js
{
  tabs: [
    {
      text: '首页',
      icon: 'home',
    },
    {
      text: '搜索',
      icon: 'search',
    },
    {
      text: '消息',
      icon: 'notification',
    },
    {
      text: '购物车',
      icon: 'cart',
    },
    {
      text: '我的',
      icon: 'user',
    },
  ]
}
```

#### 内联显示
``` html
<li-tabbar
  margin="{{ ['0px', '20rpx'] }}"
  bg-color="#5474fb"
  color="rgba(255,255,255,0.7)"
  active-color="#fff"
  inline
  tabs="{{ tabs }}"
/>
```

#### 自定义颜色
``` html
<!-- 渐变色背景 -->
<li-tabbar
  bg-color="linear-gradient(to right, #38c9fc, #2abefa)"
  color="rgba(255,255,255,0.7)"
  active-color="#fff"
  tabs="{{ tabs }}"
/>
<!-- glass 玻璃毛背景 -->
<li-tabbar
  bg-color="rgba(255,255,255,0.35)"
  active-color="#fff"
  color="#111"
  glass
  tabs="{{ tabs }}"
/>
```

#### 激活状态
`custom-back`可开启自定义点击事件
``` html
<!-- 圆点 -->
<li-tabbar
  margin="{{ ['20rpx', '0px'] }}"
  color="#999"
  active-style="dot"
  active-color="#5474fb"
  tabs="{{ tabs }}"
/>
<!-- 色块 -->
<li-tabbar
  margin="{{ ['20rpx', '0px'] }}"
  color="#fff"
  bg-color="#5474fb"
  active-style="block"
  active-color="#5474fb"
  active-bg-color="#ffff"
  tabs="{{ tabs }}"
/>
```

## tabs参数
``` js
{
  text: '首页', // tab名称
  icon: 'home', // icon名称
  path: 'pages/index/index',  // 跳转路径，请填tabbar的页面路径
  dot: false, // icon圆点提示
  info: '99', // icon文字提示
  avatar: true  // 显示头像
}
```

## 修改tabbar激活下标
请在tabbar页面修改自定义tabbar实例的`active`参数
``` js
Page({
  onShow() {
    this.getTabBar().setData({
      active: 0
    })
  }
})
```

## API

**Props**

| 参数          | 说明                   | 类型                                 | 默认值  | 基础库 |
| ------------- | ---------------------- | ------------------------------------ | ------- | ------ |
| hide-text     | 是否隐藏文字           | boolean                              | false   | >2.5.0 |
| color         | 字体颜色               | #111                                 | string  | >2.5.0 |
| bgColor       | 背景颜色               | #fff                                 | string  | >2.5.0 |
| glass         | 玻璃毛背景             | false                                | boolean | >2.5.0 |
| activeColor   | 激活状态字体颜色       | #111                                 | string  | >2.5.0 |
| activeBgColor | 激活状态背景颜色       | #fff                                 | string  | >2.5.0 |
| activeStyle   | 激活样式               | dot/block                            | string  | >2.5.0 |
| active        | 激活下标               | 0                                    | number  | >2.5.0 |
| margin        | 外边距                 | []                                   | array   | >2.5.0 |
| radius        | 圆角参数，从右上到左上 | [10rpx]                              | Array   | >2.5.0 |
| inline        | 是否内联显示           | false                                | boolean | >2.5.0 |
| filter        | 背景模糊参数           | 30rpx                                | string  | >2.5.0 |
| shadow        | 背景阴影样式           | 0 8px 32px 0 rgba(95, 99, 167, 0.37) | string  | >2.5.0 |
| info          | 图标info参数           | -                                    | string  | >2.5.0 |
| dot           | 图标dot参数            | false                                | boolean | >2.5.0 |
| tabs          | 标签数据               | []                                   | Array   | >2.5.0 |
| size          | 文字大小               | 40rpx                                | string  | >2.5.0 |

**Events**

| 事件名     | 说明     | 回调参数      |
| ---------- | -------- | ------------- |
| bind:click | 点击标签 | index: Number |