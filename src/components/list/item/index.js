"use strict";
Component({
    properties: {
        icon: String,
        name: String,
        label: String,
        path: String,
    },
    methods: {
        click() {
            if (!this.data.path) {
                wx.showToast({
                    title: '敬请期待',
                    icon: 'none',
                });
                return;
            }
            wx.navigateTo({
                url: this.data.path,
            });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUs7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLE1BQU07aUJBQ2IsQ0FBQyxDQUFBO2dCQUNGLE9BQU07YUFDUDtZQUNELEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNwQixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgaWNvbjogU3RyaW5nLFxuICAgIG5hbWU6IFN0cmluZyxcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIHBhdGg6IFN0cmluZyxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsaWNrKCkge1xuICAgICAgaWYgKCF0aGlzLmRhdGEucGF0aCkge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5pWs6K+35pyf5b6FJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogdGhpcy5kYXRhLnBhdGgsXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59KVxuIl19