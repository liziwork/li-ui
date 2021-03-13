"use strict";
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxRQUFRO3dCQUNmLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxlQUFlO3FCQUN0QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsT0FBTzt3QkFDZCxJQUFJLEVBQUUsZ0JBQWdCO3FCQUN2QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsU0FBUzt3QkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLE9BQU87d0JBQ2QsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxpQkFBaUI7d0JBQ3hCLElBQUksRUFBRSw0QkFBNEI7cUJBQ25DO29CQUNEO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxVQUFVO3dCQUNqQixJQUFJLEVBQUUsRUFBRTtxQkFDVDtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxZQUFZO3dCQUNuQixJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsU0FBUzt3QkFDaEIsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLElBQUksRUFBRSxvQkFBb0I7cUJBQzNCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WfuuehgOe7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2J1dHRvbicsXG4gICAgICAgICAgICBuYW1lOiAn5oyJ6ZKuJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQnV0dG9uJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2JhYnknLFxuICAgICAgICAgICAgbmFtZTogJ+WbvuaghycsXG4gICAgICAgICAgICBsYWJlbDogJ0ljb24nLFxuICAgICAgICAgICAgcGF0aDogJy4uL2ljb24vaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2FsYnVtJyxcbiAgICAgICAgICAgIG5hbWU6ICflm77niYcnLFxuICAgICAgICAgICAgbGFiZWw6ICdJbWFnZScsXG4gICAgICAgICAgICBwYXRoOiAnLi4vaW1hZ2UvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2RpdmlkZXInLFxuICAgICAgICAgICAgbmFtZTogJ+WIhuWJsue6vycsXG4gICAgICAgICAgICBsYWJlbDogJ0RpdmlkZXInLFxuICAgICAgICAgICAgcGF0aDogJy4uL2RpdmlkZXIvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3RhZycsXG4gICAgICAgICAgICBuYW1lOiAn5qCH6K6wJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGFnJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WvvOiIque7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3BhcGVycGxhbmUnLFxuICAgICAgICAgICAgbmFtZTogJ+WvvOiIquagjycsXG4gICAgICAgICAgICBsYWJlbDogJ05hdkJhcicsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdhcHBzJyxcbiAgICAgICAgICAgIG5hbWU6ICfmoIfnrb7moI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdUYWJCYXInLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYnVyZ2VyJyxcbiAgICAgICAgICAgIG5hbWU6ICfoj5zljZXmoI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51cycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuqTkupLnu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdsb2FkZXInLFxuICAgICAgICAgICAgbmFtZTogJ+WKoOi9veWKqOeUuycsXG4gICAgICAgICAgICBsYWJlbDogJ0xvYWRpbmcnLFxuICAgICAgICAgICAgcGF0aDogJy4uL2xvYWRpbmcvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2Rvd25sb2FkJyxcbiAgICAgICAgICAgIG5hbWU6ICfkuIvmi4nliLfmlrAnLFxuICAgICAgICAgICAgbGFiZWw6ICdQdWxsRG93blJlZnJlc2gnLFxuICAgICAgICAgICAgcGF0aDogJy4uL3B1bGwtZG93bi1yZWZyZXNoL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICd1cGxvYWQnLFxuICAgICAgICAgICAgbmFtZTogJ+S4iuaLieWKoOi9vScsXG4gICAgICAgICAgICBsYWJlbDogJ0xvYWRNb3JlJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+inhuWbvue7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2xheWVycycsXG4gICAgICAgICAgICBuYW1lOiAn5qCH562+6aG1JyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGFicycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdtb3VzZScsXG4gICAgICAgICAgICBuYW1lOiAn5rua5Yqo6KeG5Zu+JyxcbiAgICAgICAgICAgIGxhYmVsOiAnU2Nyb2xsVmlldycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdub3RlcGFkJyxcbiAgICAgICAgICAgIG5hbWU6ICfplb/liJfooagnLFxuICAgICAgICAgICAgbGFiZWw6ICdSZWN5Y2xlJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3B1YnVsaXUnLFxuICAgICAgICAgICAgbmFtZTogJ+eAkeW4g+a1gScsXG4gICAgICAgICAgICBsYWJlbDogJ1dhdGVyZmFsbCcsXG4gICAgICAgICAgICBwYXRoOiAnLi4vd2F0ZXJmYWxsL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufSlcbiJdfQ==