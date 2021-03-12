"use strict";
Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        width: {
            type: String,
            value: '200rpx',
        },
        height: {
            type: String,
            value: '200rpx',
        },
        mode: {
            type: String,
            value: 'none',
        },
        bgColor: {
            type: String,
            value: '#f7f7f7',
        },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxRQUFRO1NBQ2hCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsUUFBUTtTQUNoQjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLFNBQVM7U0FDakI7UUFDRCxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLE1BQU07UUFDZCxXQUFXLEVBQUUsT0FBTztRQUNwQixTQUFTLEVBQUUsT0FBTztLQUNuQjtJQUNELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxTQUFTO0tBQ2xCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsb0JBQU8sTUFBTSxFQUFHLENBQUE7UUFDNUMsQ0FBQztRQUNELE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDeEMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgb3B0aW9uczoge1xuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXG4gIH0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcyMDBycHgnLFxuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJzIwMHJweCcsXG4gICAgfSxcbiAgICBtb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ25vbmUnLFxuICAgIH0sXG4gICAgYmdDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjZjdmN2Y3JyxcbiAgICB9LFxuICAgIHNyYzogU3RyaW5nLFxuICAgIHJvdW5kOiBCb29sZWFuLFxuICAgIHJhZGl1czogU3RyaW5nLFxuICAgIGxvYWRpbmdTbG90OiBCb29sZWFuLFxuICAgIGVycm9yU2xvdDogQm9vbGVhbixcbiAgfSxcbiAgZGF0YToge1xuICAgIHN0YXR1czogJ2xvYWRpbmcnLFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25Mb2FkZWQoeyBkZXRhaWwgfSkge1xuICAgICAgdGhpcy5zZXREYXRhKHsgc3RhdHVzOiAnbG9hZGVkJyB9KVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2xvYWRlZCcsIHsgLi4uZGV0YWlsIH0pXG4gICAgfSxcbiAgICBvbkVycm9yKHsgZGV0YWlsOiB7IGVyck1zZyB9IH0pIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IHN0YXR1czogJ2Vycm9yJyB9KVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Vycm9yJywgeyBlcnJNc2cgfSlcbiAgICB9LFxuICB9LFxufSlcbiJdfQ==