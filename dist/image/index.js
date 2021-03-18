"use strict";
Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        width: {
            type: String,
            value: '100%',
        },
        height: {
            type: String,
            value: '100%',
        },
        mode: {
            type: String,
            value: 'none',
        },
        bgColor: String,
        src: String,
        round: Boolean,
        radius: String,
        loadingSlot: Boolean,
        errorSlot: Boolean,
    },
    data: {
        status: 'loading',
    },
    methods: {
        onLoaded({ detail }) {
            this.setData({ status: 'loaded' });
            this.triggerEvent('loaded', Object.assign({}, detail));
        },
        onError({ detail: { errMsg } }) {
            this.setData({ status: 'error' });
            this.triggerEvent('error', { errMsg });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2Q7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2Q7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2Q7UUFDRCxPQUFPLEVBQUUsTUFBTTtRQUNmLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsTUFBTTtRQUNkLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLFNBQVM7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxvQkFBTyxNQUFNLEVBQUcsQ0FBQTtRQUM1QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUN4QyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBvcHRpb25zOiB7XG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcbiAgfSxcbiAgcHJvcGVydGllczoge1xuICAgIHdpZHRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJzEwMCUnLFxuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJzEwMCUnLFxuICAgIH0sXG4gICAgbW9kZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdub25lJyxcbiAgICB9LFxuICAgIGJnQ29sb3I6IFN0cmluZyxcbiAgICBzcmM6IFN0cmluZyxcbiAgICByb3VuZDogQm9vbGVhbixcbiAgICByYWRpdXM6IFN0cmluZyxcbiAgICBsb2FkaW5nU2xvdDogQm9vbGVhbixcbiAgICBlcnJvclNsb3Q6IEJvb2xlYW4sXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBzdGF0dXM6ICdsb2FkaW5nJyxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uTG9hZGVkKHsgZGV0YWlsIH0pIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IHN0YXR1czogJ2xvYWRlZCcgfSlcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdsb2FkZWQnLCB7IC4uLmRldGFpbCB9KVxuICAgIH0sXG4gICAgb25FcnJvcih7IGRldGFpbDogeyBlcnJNc2cgfSB9KSB7XG4gICAgICB0aGlzLnNldERhdGEoeyBzdGF0dXM6ICdlcnJvcicgfSlcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdlcnJvcicsIHsgZXJyTXNnIH0pXG4gICAgfSxcbiAgfSxcbn0pXG4iXX0=