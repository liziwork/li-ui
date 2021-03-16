Page({
  data: {
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
    ],
    tabs2: [
      {
        text: '首页',
        icon: 'home',
      },
      {
        text: '消息',
        icon: 'notification',
        dot: true,
      },
      {
        text: '购物车',
        icon: 'cart',
        info: '99',
      },
      {
        text: '我的',
        icon: 'user',
      },
    ],
    tabs3: [
      {
        text: '首页',
        icon: 'home',
        path: '../index/index',
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
        avatar: true,
      },
    ],
  },
  onShareAppMessage() {},
})
