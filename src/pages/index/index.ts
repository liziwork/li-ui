Page({
  data: {
    items: [
      {
        title: '基础组件',
        children: [
          {
            icon: 'button',
            name: '按钮',
            label: 'Button',
            path: '',
          },
          {
            icon: 'baby',
            name: '图标',
            label: 'Icon',
            path: '../icon/index',
          },
          {
            icon: 'album',
            name: '图片',
            label: 'Image',
            path: '../image/index',
          },
          {
            icon: 'divider',
            name: '分割线',
            label: 'Divider',
            path: '../divider/index',
          },
          {
            icon: 'mobile',
            name: '安全区占位符',
            label: 'SafeArea',
            path: '../safe-area/index',
          },
          {
            icon: 'tag',
            name: '标记',
            label: 'Tag',
            path: '',
          },
        ],
      },
      {
        title: '导航组件',
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
            icon: 'burger',
            name: '菜单栏',
            label: 'Menus',
            path: '',
          },
        ],
      },
      {
        title: '交互组件',
        children: [
          {
            icon: 'loader',
            name: '加载动画',
            label: 'Loading',
            path: '../loading/index',
          },
          {
            icon: 'download',
            name: '下拉刷新',
            label: 'PullDownRefresh',
            path: '../pull-down-refresh/index',
          },
          {
            icon: 'upload',
            name: '上拉加载',
            label: 'LoadMore',
            path: '',
          },
        ],
      },
      {
        title: '视图组件',
        children: [
          {
            icon: 'layers',
            name: '标签页',
            label: 'Tabs',
            path: '',
          },
          {
            icon: 'mouse',
            name: '滚动视图',
            label: 'ScrollView',
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
