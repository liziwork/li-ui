"use strict";
Component({
    properties: {
        title: String,
        bgColor: String,
        height: String,
    },
    methods: {
        click() {
            wx.navigateTo({
                url: '../../pages/pull-down-refresh-demo/index',
                success: ({ eventChannel }) => {
                    eventChannel.emit('load', Object.assign({}, this.data));
                },
            });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsTUFBTTtRQUNmLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxLQUFLO1lBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsMENBQTBDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7b0JBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxvQkFBTyxJQUFJLENBQUMsSUFBSSxFQUFHLENBQUE7Z0JBQzdDLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBiZ0NvbG9yOiBTdHJpbmcsXG4gICAgaGVpZ2h0OiBTdHJpbmcsXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljaygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi8uLi9wYWdlcy9wdWxsLWRvd24tcmVmcmVzaC1kZW1vL2luZGV4JyxcbiAgICAgICAgc3VjY2VzczogKHsgZXZlbnRDaGFubmVsIH0pID0+IHtcbiAgICAgICAgICBldmVudENoYW5uZWwuZW1pdCgnbG9hZCcsIHsgLi4udGhpcy5kYXRhIH0pXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59KVxuIl19