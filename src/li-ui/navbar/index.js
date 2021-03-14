"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_1 = require("../utils/system");
Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        icon: String,
        homePath: {
            type: String,
            value: '../../pages/index/index',
        },
        bgColor: {
            type: String,
            value: '#fff',
        },
        color: {
            type: String,
            value: '#111',
        },
        title: {
            type: String,
            value: '导航栏',
        },
        iconSlot: Boolean,
        titleSlot: Boolean,
        customBack: Boolean,
    },
    data: {
        system: system_1.default,
        pageLength: 0,
    },
    attached() {
        const length = getCurrentPages().length;
        this.setData({ pageLength: length });
    },
    methods: {
        back() {
            const { pageLength, homePath, customBack } = this.data;
            if (!customBack) {
                if (pageLength === 1) {
                    wx.reLaunch({
                        url: homePath,
                    });
                }
                else {
                    wx.navigateBack();
                }
            }
            this.triggerEvent('back');
        },
        title() {
            this.triggerEvent('title');
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUFvQztBQUVwQyxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtLQUNwQjtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUseUJBQXlCO1NBQ2pDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtTQUNkO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtTQUNkO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsUUFBUSxFQUFFLE9BQU87UUFDakIsU0FBUyxFQUFFLE9BQU87UUFDbEIsVUFBVSxFQUFFLE9BQU87S0FDcEI7SUFDRCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQU4sZ0JBQU07UUFDTixVQUFVLEVBQUUsQ0FBQztLQUNkO0lBQ0QsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFHLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQTtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNQLElBQUk7WUFDRixNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQ3RELElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO29CQUNwQixFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUNWLEdBQUcsRUFBRSxRQUFRO3FCQUNkLENBQUMsQ0FBQTtpQkFDSDtxQkFBTTtvQkFDTCxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7aUJBQ2xCO2FBQ0Y7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNCLENBQUM7UUFDRCxLQUFLO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1QixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3lzdGVtIGZyb20gJy4uL3V0aWxzL3N5c3RlbSdcblxuQ29tcG9uZW50KHtcbiAgb3B0aW9uczoge1xuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXG4gIH0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgaG9tZVBhdGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnLi4vLi4vcGFnZXMvaW5kZXgvaW5kZXgnLFxuICAgIH0sXG4gICAgYmdDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjZmZmJyxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyMxMTEnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAn5a+86Iiq5qCPJyxcbiAgICB9LFxuICAgIGljb25TbG90OiBCb29sZWFuLFxuICAgIHRpdGxlU2xvdDogQm9vbGVhbixcbiAgICBjdXN0b21CYWNrOiBCb29sZWFuLFxuICB9LFxuICBkYXRhOiB7XG4gICAgc3lzdGVtLFxuICAgIHBhZ2VMZW5ndGg6IDAsXG4gIH0sXG4gIGF0dGFjaGVkKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aFxuICAgIHRoaXMuc2V0RGF0YSh7IHBhZ2VMZW5ndGg6IGxlbmd0aCB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYmFjaygpIHtcbiAgICAgIGNvbnN0IHsgcGFnZUxlbmd0aCwgaG9tZVBhdGgsIGN1c3RvbUJhY2sgfSA9IHRoaXMuZGF0YVxuICAgICAgaWYgKCFjdXN0b21CYWNrKSB7XG4gICAgICAgIGlmIChwYWdlTGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgd3gucmVMYXVuY2goe1xuICAgICAgICAgICAgdXJsOiBob21lUGF0aCxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdiYWNrJylcbiAgICB9LFxuICAgIHRpdGxlKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3RpdGxlJylcbiAgICB9LFxuICB9LFxufSlcbiJdfQ==