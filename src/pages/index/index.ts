Page({
  data: {
    items: [
      {
        title: '基础组件',
        children: [
          {
            icon: 'baby',
            name: '图标',
            label: 'Icon',
            path: '',
          },
        ],
      },
      {
        title: '交互组件',
        children: [
          {
            icon: 'refresh',
            name: '下拉刷新',
            label: 'PullDownRefresh',
            path: '../pull-down-refresh/index',
          },
        ],
      },
      {
        title: '视图组件',
        children: [
          {
            icon: 'paperplane',
            name: '导航栏',
            label: 'NavBar',
            path: '',
          },
          {
            icon: 'apps',
            name: '标签栏',
            label: 'TabBar',
            path: '',
          },
          {
            icon: 'notepad',
            name: '长列表',
            label: 'Recycle',
            path: '',
          },
          {
            icon: 'pubuliu',
            name: '瀑布流',
            label: 'Waterfall',
            path: '../waterfall/index',
          },
        ],
      },
    ],
  },
})
