"use strict";
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0o7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsY0FBYzthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsSUFBSTthQUNYO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxjQUFjO2FBQ3JCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxNQUFNO2dCQUNaLE1BQU0sRUFBRSxJQUFJO2FBQ2I7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB0YWJzOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICBpY29uOiAnaG9tZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pCc57SiJyxcbiAgICAgICAgaWNvbjogJ3NlYXJjaCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5raI5oGvJyxcbiAgICAgICAgaWNvbjogJ25vdGlmaWNhdGlvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn6LSt54mp6L2mJyxcbiAgICAgICAgaWNvbjogJ2NhcnQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+aIkeeahCcsXG4gICAgICAgIGljb246ICd1c2VyJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB0YWJzMjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAn6aaW6aG1JyxcbiAgICAgICAgaWNvbjogJ2hvbWUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+a2iOaBrycsXG4gICAgICAgIGljb246ICdub3RpZmljYXRpb24nLFxuICAgICAgICBkb3Q6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn6LSt54mp6L2mJyxcbiAgICAgICAgaWNvbjogJ2NhcnQnLFxuICAgICAgICBpbmZvOiAnOTknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+aIkeeahCcsXG4gICAgICAgIGljb246ICd1c2VyJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB0YWJzMzogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAn6aaW6aG1JyxcbiAgICAgICAgaWNvbjogJ2hvbWUnLFxuICAgICAgICBwYXRoOiAnLi4vaW5kZXgvaW5kZXgnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+a2iOaBrycsXG4gICAgICAgIGljb246ICdub3RpZmljYXRpb24nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+i0reeJqei9picsXG4gICAgICAgIGljb246ICdjYXJ0JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmiJHnmoQnLFxuICAgICAgICBpY29uOiAndXNlcicsXG4gICAgICAgIGF2YXRhcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pXG4iXX0=