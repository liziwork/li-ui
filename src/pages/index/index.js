"use strict";
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxFQUFFO3FCQUNUO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLGlCQUFpQjt3QkFDeEIsSUFBSSxFQUFFLDRCQUE0QjtxQkFDbkM7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsSUFBSSxFQUFFLEVBQUU7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLElBQUksRUFBRSxFQUFFO3FCQUNUO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxXQUFXO3dCQUNsQixJQUFJLEVBQUUsb0JBQW9CO3FCQUMzQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfln7rnoYDnu4Tku7YnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdiYWJ5JyxcbiAgICAgICAgICAgIG5hbWU6ICflm77moIcnLFxuICAgICAgICAgICAgbGFiZWw6ICdJY29uJyxcbiAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+S6pOS6kue7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3JlZnJlc2gnLFxuICAgICAgICAgICAgbmFtZTogJ+S4i+aLieWIt+aWsCcsXG4gICAgICAgICAgICBsYWJlbDogJ1B1bGxEb3duUmVmcmVzaCcsXG4gICAgICAgICAgICBwYXRoOiAnLi4vcHVsbC1kb3duLXJlZnJlc2gvaW5kZXgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+inhuWbvue7hOS7ticsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3BhcGVycGxhbmUnLFxuICAgICAgICAgICAgbmFtZTogJ+WvvOiIquagjycsXG4gICAgICAgICAgICBsYWJlbDogJ05hdkJhcicsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdhcHBzJyxcbiAgICAgICAgICAgIG5hbWU6ICfmoIfnrb7moI8nLFxuICAgICAgICAgICAgbGFiZWw6ICdUYWJCYXInLFxuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnbm90ZXBhZCcsXG4gICAgICAgICAgICBuYW1lOiAn6ZW/5YiX6KGoJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUmVjeWNsZScsXG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICdwdWJ1bGl1JyxcbiAgICAgICAgICAgIG5hbWU6ICfngJHluIPmtYEnLFxuICAgICAgICAgICAgbGFiZWw6ICdXYXRlcmZhbGwnLFxuICAgICAgICAgICAgcGF0aDogJy4uL3dhdGVyZmFsbC9pbmRleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pXG4iXX0=