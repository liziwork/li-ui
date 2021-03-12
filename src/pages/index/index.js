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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxRQUFRO3dCQUNmLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxlQUFlO3FCQUN0QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsT0FBTzt3QkFDZCxJQUFJLEVBQUUsZ0JBQWdCO3FCQUN2QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsU0FBUzt3QkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLE9BQU87d0JBQ2QsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLGlCQUFpQjt3QkFDeEIsSUFBSSxFQUFFLDRCQUE0QjtxQkFDbkM7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxFQUFFO3FCQUNUO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLE1BQU07d0JBQ2IsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFlBQVk7d0JBQ25CLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxTQUFTO3dCQUNoQixJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsV0FBVzt3QkFDbEIsSUFBSSxFQUFFLG9CQUFvQjtxQkFDM0I7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgZGF0YToge1xuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Z+656GA57uE5Lu2JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG5hbWU6ICfmjInpkq4nLFxuICAgICAgICAgICAgbGFiZWw6ICdCdXR0b24nLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYmFieScsXG4gICAgICAgICAgICBuYW1lOiAn5Zu+5qCHJyxcbiAgICAgICAgICAgIGxhYmVsOiAnSWNvbicsXG4gICAgICAgICAgICBwYXRoOiAnLi4vaWNvbi9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYWxidW0nLFxuICAgICAgICAgICAgbmFtZTogJ+WbvueJhycsXG4gICAgICAgICAgICBsYWJlbDogJ0ltYWdlJyxcbiAgICAgICAgICAgIHBhdGg6ICcuLi9pbWFnZS9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnZGl2aWRlcicsXG4gICAgICAgICAgICBuYW1lOiAn5YiG5Ymy57q/JyxcbiAgICAgICAgICAgIGxhYmVsOiAnRGl2aWRlcicsXG4gICAgICAgICAgICBwYXRoOiAnLi4vZGl2aWRlci9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAndGFnJyxcbiAgICAgICAgICAgIG5hbWU6ICfmoIforrAnLFxuICAgICAgICAgICAgbGFiZWw6ICdUYWcnLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5a+86Iiq57uE5Lu2JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAncGFwZXJwbGFuZScsXG4gICAgICAgICAgICBuYW1lOiAn5a+86Iiq5qCPJyxcbiAgICAgICAgICAgIGxhYmVsOiAnTmF2QmFyJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2FwcHMnLFxuICAgICAgICAgICAgbmFtZTogJ+agh+etvuagjycsXG4gICAgICAgICAgICBsYWJlbDogJ1RhYkJhcicsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdidXJnZXInLFxuICAgICAgICAgICAgbmFtZTogJ+iPnOWNleagjycsXG4gICAgICAgICAgICBsYWJlbDogJ01lbnVzJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+S6pOS6kue7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2Rvd25sb2FkJyxcbiAgICAgICAgICAgIG5hbWU6ICfkuIvmi4nliLfmlrAnLFxuICAgICAgICAgICAgbGFiZWw6ICdQdWxsRG93blJlZnJlc2gnLFxuICAgICAgICAgICAgcGF0aDogJy4uL3B1bGwtZG93bi1yZWZyZXNoL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICd1cGxvYWQnLFxuICAgICAgICAgICAgbmFtZTogJ+S4iuaLieWKoOi9vScsXG4gICAgICAgICAgICBsYWJlbDogJ0xvYWRNb3JlJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+inhuWbvue7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2xheWVycycsXG4gICAgICAgICAgICBuYW1lOiAn5qCH562+6aG1JyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGFicycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdtb3VzZScsXG4gICAgICAgICAgICBuYW1lOiAn5rua5Yqo6KeG5Zu+JyxcbiAgICAgICAgICAgIGxhYmVsOiAnU2Nyb2xsVmlldycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdub3RlcGFkJyxcbiAgICAgICAgICAgIG5hbWU6ICfplb/liJfooagnLFxuICAgICAgICAgICAgbGFiZWw6ICdSZWN5Y2xlJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3B1YnVsaXUnLFxuICAgICAgICAgICAgbmFtZTogJ+eAkeW4g+a1gScsXG4gICAgICAgICAgICBsYWJlbDogJ1dhdGVyZmFsbCcsXG4gICAgICAgICAgICBwYXRoOiAnLi4vd2F0ZXJmYWxsL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufSlcbiJdfQ==