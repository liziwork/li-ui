"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recycle_1 = require("../behaviors/recycle");
Component({
    properties: {
        options: Object,
    },
    externalClasses: ['content-class'],
    behaviors: [recycle_1.default],
    options: {
        pureDataPattern: /^_/,
    },
    observers: {
        'views.length': function (length) {
            const { views, block } = this.data;
            if (length === block.length)
                return;
            const index = views.length - 1;
            this.setData({
                [`block[${index}]`]: views[index].length,
            });
        },
    },
    data: {
        block: [],
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUEwQztBQUUxQyxTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsTUFBTTtLQUNoQjtJQUNELGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUNsQyxTQUFTLEVBQUUsQ0FBQyxpQkFBTyxDQUFDO0lBQ3BCLE9BQU8sRUFBRTtRQUNQLGVBQWUsRUFBRSxJQUFJO0tBQ3RCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsY0FBYyxFQUFFLFVBQVUsTUFBTTtZQUM5QixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFXLENBQUE7WUFDekMsSUFBSSxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU07Z0JBQUUsT0FBTTtZQUNuQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO2FBQ3pDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO0tBQ1Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVjeWNsZSBmcm9tICcuLi9iZWhhdmlvcnMvcmVjeWNsZSdcblxuQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIG9wdGlvbnM6IE9iamVjdCxcbiAgfSxcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2NvbnRlbnQtY2xhc3MnXSxcbiAgYmVoYXZpb3JzOiBbUmVjeWNsZV0sXG4gIG9wdGlvbnM6IHtcbiAgICBwdXJlRGF0YVBhdHRlcm46IC9eXy8sXG4gIH0sXG4gIG9ic2VydmVyczoge1xuICAgICd2aWV3cy5sZW5ndGgnOiBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IHZpZXdzLCBibG9jayB9ID0gdGhpcy5kYXRhIGFzIGFueVxuICAgICAgaWYgKGxlbmd0aCA9PT0gYmxvY2subGVuZ3RoKSByZXR1cm5cbiAgICAgIGNvbnN0IGluZGV4ID0gdmlld3MubGVuZ3RoIC0gMVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2BibG9ja1ske2luZGV4fV1gXTogdmlld3NbaW5kZXhdLmxlbmd0aCxcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbiAgZGF0YToge1xuICAgIGJsb2NrOiBbXSxcbiAgfSxcbn0pXG4iXX0=