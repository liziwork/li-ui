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
            wx.navigateTo({
                url: this.data.path
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUs7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDcEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIGljb246IFN0cmluZyxcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBwYXRoOiBTdHJpbmcsXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljaygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IHRoaXMuZGF0YS5wYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==