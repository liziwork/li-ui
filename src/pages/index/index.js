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
                        path: '../navbar/index',
                    },
                    {
                        icon: 'apps',
                        name: '标签栏',
                        label: 'TabBar',
                        path: '../tabbar/index',
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
                        path: '../load-more/index',
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
                        path: '../scroll-view/index',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxRQUFRO3dCQUNmLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxlQUFlO3FCQUN0QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsT0FBTzt3QkFDZCxJQUFJLEVBQUUsZ0JBQWdCO3FCQUN2QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsU0FBUzt3QkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxvQkFBb0I7cUJBQzNCO29CQUNEO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxLQUFLO3dCQUNaLElBQUksRUFBRSxFQUFFO3FCQUNUO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxRQUFRO3dCQUNmLElBQUksRUFBRSxpQkFBaUI7cUJBQ3hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxRQUFRO3dCQUNmLElBQUksRUFBRSxpQkFBaUI7cUJBQ3hCO29CQUNEO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxPQUFPO3dCQUNkLElBQUksRUFBRSxFQUFFO3FCQUNUO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7cUJBQ3pCO29CQUNEO3dCQUNFLElBQUksRUFBRSxVQUFVO3dCQUNoQixJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixJQUFJLEVBQUUsNEJBQTRCO3FCQUNuQztvQkFDRDt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLG9CQUFvQjtxQkFDM0I7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsWUFBWTt3QkFDbkIsSUFBSSxFQUFFLHNCQUFzQjtxQkFDN0I7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxXQUFXO3dCQUNsQixJQUFJLEVBQUUsb0JBQW9CO3FCQUMzQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfln7rnoYDnu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdidXR0b24nLFxuICAgICAgICAgICAgbmFtZTogJ+aMiemSricsXG4gICAgICAgICAgICBsYWJlbDogJ0J1dHRvbicsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdiYWJ5JyxcbiAgICAgICAgICAgIG5hbWU6ICflm77moIcnLFxuICAgICAgICAgICAgbGFiZWw6ICdJY29uJyxcbiAgICAgICAgICAgIHBhdGg6ICcuLi9pY29uL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdhbGJ1bScsXG4gICAgICAgICAgICBuYW1lOiAn5Zu+54mHJyxcbiAgICAgICAgICAgIGxhYmVsOiAnSW1hZ2UnLFxuICAgICAgICAgICAgcGF0aDogJy4uL2ltYWdlL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdkaXZpZGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICfliIblibLnur8nLFxuICAgICAgICAgICAgbGFiZWw6ICdEaXZpZGVyJyxcbiAgICAgICAgICAgIHBhdGg6ICcuLi9kaXZpZGVyL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdtb2JpbGUnLFxuICAgICAgICAgICAgbmFtZTogJ+WuieWFqOWMuuWNoOS9jeespicsXG4gICAgICAgICAgICBsYWJlbDogJ1NhZmVBcmVhJyxcbiAgICAgICAgICAgIHBhdGg6ICcuLi9zYWZlLWFyZWEvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3RhZycsXG4gICAgICAgICAgICBuYW1lOiAn5qCH6K6wJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGFnJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WvvOiIque7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3BhcGVycGxhbmUnLFxuICAgICAgICAgICAgbmFtZTogJ+WvvOiIquagjycsXG4gICAgICAgICAgICBsYWJlbDogJ05hdkJhcicsXG4gICAgICAgICAgICBwYXRoOiAnLi4vbmF2YmFyL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdhcHBzJyxcbiAgICAgICAgICAgIG5hbWU6ICfmoIfnrb7moI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdUYWJCYXInLFxuICAgICAgICAgICAgcGF0aDogJy4uL3RhYmJhci9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYnVyZ2VyJyxcbiAgICAgICAgICAgIG5hbWU6ICfoj5zljZXmoI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51cycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuqTkupLnu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdsb2FkZXInLFxuICAgICAgICAgICAgbmFtZTogJ+WKoOi9veWKqOeUuycsXG4gICAgICAgICAgICBsYWJlbDogJ0xvYWRpbmcnLFxuICAgICAgICAgICAgcGF0aDogJy4uL2xvYWRpbmcvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2Rvd25sb2FkJyxcbiAgICAgICAgICAgIG5hbWU6ICfkuIvmi4nliLfmlrAnLFxuICAgICAgICAgICAgbGFiZWw6ICdQdWxsRG93blJlZnJlc2gnLFxuICAgICAgICAgICAgcGF0aDogJy4uL3B1bGwtZG93bi1yZWZyZXNoL2luZGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICd1cGxvYWQnLFxuICAgICAgICAgICAgbmFtZTogJ+S4iuaLieWKoOi9vScsXG4gICAgICAgICAgICBsYWJlbDogJ0xvYWRNb3JlJyxcbiAgICAgICAgICAgIHBhdGg6ICcuLi9sb2FkLW1vcmUvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+inhuWbvue7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2xheWVycycsXG4gICAgICAgICAgICBuYW1lOiAn5qCH562+6aG1JyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGFicycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdtb3VzZScsXG4gICAgICAgICAgICBuYW1lOiAn5rua5Yqo6KeG5Zu+JyxcbiAgICAgICAgICAgIGxhYmVsOiAnU2Nyb2xsVmlldycsXG4gICAgICAgICAgICBwYXRoOiAnLi4vc2Nyb2xsLXZpZXcvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ25vdGVwYWQnLFxuICAgICAgICAgICAgbmFtZTogJ+mVv+WIl+ihqCcsXG4gICAgICAgICAgICBsYWJlbDogJ1JlY3ljbGUnLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAncHVidWxpdScsXG4gICAgICAgICAgICBuYW1lOiAn54CR5biD5rWBJyxcbiAgICAgICAgICAgIGxhYmVsOiAnV2F0ZXJmYWxsJyxcbiAgICAgICAgICAgIHBhdGg6ICcuLi93YXRlcmZhbGwvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59KVxuIl19