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
                        path: '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxRQUFRO3dCQUNmLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxlQUFlO3FCQUN0QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsT0FBTzt3QkFDZCxJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsU0FBUzt3QkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLE9BQU87d0JBQ2QsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLGlCQUFpQjt3QkFDeEIsSUFBSSxFQUFFLDRCQUE0QjtxQkFDbkM7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxFQUFFO3FCQUNUO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLE1BQU07d0JBQ2IsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFlBQVk7d0JBQ25CLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxTQUFTO3dCQUNoQixJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsV0FBVzt3QkFDbEIsSUFBSSxFQUFFLG9CQUFvQjtxQkFDM0I7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgZGF0YToge1xuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Z+656GA57uE5Lu2JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG5hbWU6ICfmjInpkq4nLFxuICAgICAgICAgICAgbGFiZWw6ICdCdXR0b24nLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYmFieScsXG4gICAgICAgICAgICBuYW1lOiAn5Zu+5qCHJyxcbiAgICAgICAgICAgIGxhYmVsOiAnSWNvbicsXG4gICAgICAgICAgICBwYXRoOiAnLi4vaWNvbi9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYWxidW0nLFxuICAgICAgICAgICAgbmFtZTogJ+WbvueJhycsXG4gICAgICAgICAgICBsYWJlbDogJ0ltYWdlJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2RpdmlkZXInLFxuICAgICAgICAgICAgbmFtZTogJ+WIhuWJsue6vycsXG4gICAgICAgICAgICBsYWJlbDogJ0RpdmlkZXInLFxuICAgICAgICAgICAgcGF0aDogJy4uL2RpdmlkZXIvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3RhZycsXG4gICAgICAgICAgICBuYW1lOiAn5qCH6K6wJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGFnJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WvvOiIque7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3BhcGVycGxhbmUnLFxuICAgICAgICAgICAgbmFtZTogJ+WvvOiIquagjycsXG4gICAgICAgICAgICBsYWJlbDogJ05hdkJhcicsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdhcHBzJyxcbiAgICAgICAgICAgIG5hbWU6ICfmoIfnrb7moI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdUYWJCYXInLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYnVyZ2VyJyxcbiAgICAgICAgICAgIG5hbWU6ICfoj5zljZXmoI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51cycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuqTkupLnu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdkb3dubG9hZCcsXG4gICAgICAgICAgICBuYW1lOiAn5LiL5ouJ5Yi35pawJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUHVsbERvd25SZWZyZXNoJyxcbiAgICAgICAgICAgIHBhdGg6ICcuLi9wdWxsLWRvd24tcmVmcmVzaC9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAndXBsb2FkJyxcbiAgICAgICAgICAgIG5hbWU6ICfkuIrmi4nliqDovb0nLFxuICAgICAgICAgICAgbGFiZWw6ICdMb2FkTW9yZScsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfop4blm77nu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdsYXllcnMnLFxuICAgICAgICAgICAgbmFtZTogJ+agh+etvumhtScsXG4gICAgICAgICAgICBsYWJlbDogJ1RhYnMnLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnbW91c2UnLFxuICAgICAgICAgICAgbmFtZTogJ+a7muWKqOinhuWbvicsXG4gICAgICAgICAgICBsYWJlbDogJ1Njcm9sbFZpZXcnLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnbm90ZXBhZCcsXG4gICAgICAgICAgICBuYW1lOiAn6ZW/5YiX6KGoJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUmVjeWNsZScsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdwdWJ1bGl1JyxcbiAgICAgICAgICAgIG5hbWU6ICfngJHluIPmtYEnLFxuICAgICAgICAgICAgbGFiZWw6ICdXYXRlcmZhbGwnLFxuICAgICAgICAgICAgcGF0aDogJy4uL3dhdGVyZmFsbC9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pXG4iXX0=