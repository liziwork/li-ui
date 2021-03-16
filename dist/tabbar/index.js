"use strict";
Component({
    properties: {
        hideText: Boolean,
        color: String,
        bgColor: String,
        glass: Boolean,
        activeColor: String,
        activeBgColor: String,
        activeStyle: String,
        active: {
            type: Number,
            value: 0,
        },
        margin: Array,
        radius: Array,
        inline: Boolean,
        filter: String,
        shadow: String,
        info: String,
        dot: Boolean,
        tabs: Array,
        size: String,
    },
    methods: {
        click({ currentTarget: { dataset: { index }, }, }) {
            const { tabs, active } = this.data;
            if (active === index)
                return;
            const { path } = tabs[index];
            if (path) {
                wx.switchTab({
                    url: path,
                    fail: () => {
                        wx.navigateTo({
                            url: path,
                        });
                    },
                });
            }
            else {
                wx.showToast({
                    icon: 'none',
                    title: 'path is not found',
                });
                this.setData({ active: index });
            }
            this.triggerEvent('click', { index });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFLE9BQU87UUFDakIsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxPQUFPO1FBQ2QsV0FBVyxFQUFFLE1BQU07UUFDbkIsYUFBYSxFQUFFLE1BQU07UUFDckIsV0FBVyxFQUFFLE1BQU07UUFDbkIsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztTQUNUO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osR0FBRyxFQUFFLE9BQU87UUFDWixJQUFJLEVBQUUsS0FBSztRQUNYLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxPQUFPLEVBQUU7UUFDUCxLQUFLLENBQUMsRUFDSixhQUFhLEVBQUUsRUFDYixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FDbkIsR0FDRjtZQUNDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUNsQyxJQUFJLE1BQU0sS0FBSyxLQUFLO2dCQUFFLE9BQU07WUFFNUIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM1QixJQUFJLElBQUksRUFBRTtnQkFDUixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEdBQUcsRUFBRSxJQUFJO29CQUNULElBQUksRUFBRSxHQUFHLEVBQUU7d0JBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUUsSUFBSTt5QkFDVixDQUFDLENBQUE7b0JBQ0osQ0FBQztpQkFDRixDQUFDLENBQUE7YUFDSDtpQkFBTTtnQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxtQkFBbUI7aUJBQzNCLENBQUMsQ0FBQTtnQkFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7YUFDaEM7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7UUFDdkMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIGhpZGVUZXh0OiBCb29sZWFuLFxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgYmdDb2xvcjogU3RyaW5nLFxuICAgIGdsYXNzOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgYWN0aXZlQmdDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZVN0eWxlOiBTdHJpbmcsXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMCxcbiAgICB9LFxuICAgIG1hcmdpbjogQXJyYXksXG4gICAgcmFkaXVzOiBBcnJheSxcbiAgICBpbmxpbmU6IEJvb2xlYW4sXG4gICAgZmlsdGVyOiBTdHJpbmcsXG4gICAgc2hhZG93OiBTdHJpbmcsXG4gICAgaW5mbzogU3RyaW5nLFxuICAgIGRvdDogQm9vbGVhbixcbiAgICB0YWJzOiBBcnJheSxcbiAgICBzaXplOiBTdHJpbmcsXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljayh7XG4gICAgICBjdXJyZW50VGFyZ2V0OiB7XG4gICAgICAgIGRhdGFzZXQ6IHsgaW5kZXggfSxcbiAgICAgIH0sXG4gICAgfSkge1xuICAgICAgY29uc3QgeyB0YWJzLCBhY3RpdmUgfSA9IHRoaXMuZGF0YVxuICAgICAgaWYgKGFjdGl2ZSA9PT0gaW5kZXgpIHJldHVyblxuXG4gICAgICBjb25zdCB7IHBhdGggfSA9IHRhYnNbaW5kZXhdXG4gICAgICBpZiAocGF0aCkge1xuICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgIHVybDogcGF0aCxcbiAgICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiBwYXRoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgdGl0bGU6ICdwYXRoIGlzIG5vdCBmb3VuZCcsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogaW5kZXggfSlcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljaycsIHsgaW5kZXggfSlcbiAgICB9LFxuICB9LFxufSlcbiJdfQ==