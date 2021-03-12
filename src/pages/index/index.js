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
                        path: '',
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
                        path: '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxRQUFRO3dCQUNmLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxPQUFPO3dCQUNkLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxTQUFTO3dCQUNoQixJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsS0FBSzt3QkFDWCxJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsS0FBSzt3QkFDWixJQUFJLEVBQUUsRUFBRTtxQkFDVDtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsUUFBUTt3QkFDZixJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsUUFBUTt3QkFDZixJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsT0FBTzt3QkFDZCxJQUFJLEVBQUUsRUFBRTtxQkFDVDtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxVQUFVO3dCQUNoQixJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixJQUFJLEVBQUUsNEJBQTRCO3FCQUNuQztvQkFDRDt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsVUFBVTt3QkFDakIsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsWUFBWTt3QkFDbkIsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxXQUFXO3dCQUNsQixJQUFJLEVBQUUsb0JBQW9CO3FCQUMzQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfln7rnoYDnu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdidXR0b24nLFxuICAgICAgICAgICAgbmFtZTogJ+aMiemSricsXG4gICAgICAgICAgICBsYWJlbDogJ0J1dHRvbicsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdiYWJ5JyxcbiAgICAgICAgICAgIG5hbWU6ICflm77moIcnLFxuICAgICAgICAgICAgbGFiZWw6ICdJY29uJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ2FsYnVtJyxcbiAgICAgICAgICAgIG5hbWU6ICflm77niYcnLFxuICAgICAgICAgICAgbGFiZWw6ICdJbWFnZScsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdkaXZpZGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICfliIblibLnur8nLFxuICAgICAgICAgICAgbGFiZWw6ICdEaXZpZGVyJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3RhZycsXG4gICAgICAgICAgICBuYW1lOiAn5qCH6K6wJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVGFnJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WvvOiIque7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3BhcGVycGxhbmUnLFxuICAgICAgICAgICAgbmFtZTogJ+WvvOiIquagjycsXG4gICAgICAgICAgICBsYWJlbDogJ05hdkJhcicsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdhcHBzJyxcbiAgICAgICAgICAgIG5hbWU6ICfmoIfnrb7moI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdUYWJCYXInLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnYnVyZ2VyJyxcbiAgICAgICAgICAgIG5hbWU6ICfoj5zljZXmoI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51cycsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuqTkupLnu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdkb3dubG9hZCcsXG4gICAgICAgICAgICBuYW1lOiAn5LiL5ouJ5Yi35pawJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUHVsbERvd25SZWZyZXNoJyxcbiAgICAgICAgICAgIHBhdGg6ICcuLi9wdWxsLWRvd24tcmVmcmVzaC9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAndXBsb2FkJyxcbiAgICAgICAgICAgIG5hbWU6ICfkuIrmi4nliqDovb0nLFxuICAgICAgICAgICAgbGFiZWw6ICdMb2FkTW9yZScsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfop4blm77nu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdsYXllcnMnLFxuICAgICAgICAgICAgbmFtZTogJ+agh+etvumhtScsXG4gICAgICAgICAgICBsYWJlbDogJ1RhYnMnLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnbW91c2UnLFxuICAgICAgICAgICAgbmFtZTogJ+a7muWKqOinhuWbvicsXG4gICAgICAgICAgICBsYWJlbDogJ1Njcm9sbFZpZXcnLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnbm90ZXBhZCcsXG4gICAgICAgICAgICBuYW1lOiAn6ZW/5YiX6KGoJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUmVjeWNsZScsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdwdWJ1bGl1JyxcbiAgICAgICAgICAgIG5hbWU6ICfngJHluIPmtYEnLFxuICAgICAgICAgICAgbGFiZWw6ICdXYXRlcmZhbGwnLFxuICAgICAgICAgICAgcGF0aDogJy4uL3dhdGVyZmFsbC9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pXG4iXX0=