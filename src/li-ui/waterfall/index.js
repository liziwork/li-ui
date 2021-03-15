"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recycle_1 = require("../behaviors/recycle");
Component({
    options: {
        multipleSlots: true,
        pureDataPattern: /^_/,
    },
    behaviors: [recycle_1.default],
    data: {
        _views: [],
    },
    properties: {
        views: Array,
        span: {
            type: Array,
            value: [10, 10],
        },
        length: {
            type: Number,
            value: 10,
        },
        timeOut: {
            type: Number,
            value: 3000,
        },
        loadedClass: {
            type: String,
            value: '.loaded-view',
        },
        recycle: {
            type: Boolean,
            value: false,
        },
        skeleton: {
            type: Boolean,
            value: false,
        },
        skeletonSlot: {
            type: Boolean,
            value: false,
        },
    },
    methods: {
        loaded({ detail: { index, pIndex, height, width } }) {
            this.setData({
                [`views[${pIndex}][${index}].loaded`]: { height, width },
                [`_views[${pIndex}][${index}].loaded`]: { height, width },
            });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUEwQztBQUUxQyxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtRQUNuQixlQUFlLEVBQUUsSUFBSTtLQUN0QjtJQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFPLENBQUM7SUFDcEIsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRSxLQUFLO1FBQ1osSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsY0FBYztTQUN0QjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxDQUFDLFNBQVMsTUFBTSxLQUFLLEtBQUssVUFBVSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUN4RCxDQUFDLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2FBQzFELENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWN5Y2xlIGZyb20gJy4uL2JlaGF2aW9ycy9yZWN5Y2xlJ1xuXG5Db21wb25lbnQoe1xuICBvcHRpb25zOiB7XG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcbiAgICBwdXJlRGF0YVBhdHRlcm46IC9eXy8sXG4gIH0sXG4gIGJlaGF2aW9yczogW1JlY3ljbGVdLFxuICBkYXRhOiB7XG4gICAgX3ZpZXdzOiBbXSxcbiAgfSxcbiAgcHJvcGVydGllczoge1xuICAgIHZpZXdzOiBBcnJheSxcbiAgICBzcGFuOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBbMTAsIDEwXSxcbiAgICB9LFxuICAgIGxlbmd0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDEwLFxuICAgIH0sXG4gICAgdGltZU91dDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDMwMDAsXG4gICAgfSxcbiAgICBsb2FkZWRDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcubG9hZGVkLXZpZXcnLFxuICAgIH0sXG4gICAgcmVjeWNsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNrZWxldG9uOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2tlbGV0b25TbG90OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkZWQoeyBkZXRhaWw6IHsgaW5kZXgsIHBJbmRleCwgaGVpZ2h0LCB3aWR0aCB9IH0pIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdmlld3NbJHtwSW5kZXh9XVske2luZGV4fV0ubG9hZGVkYF06IHsgaGVpZ2h0LCB3aWR0aCB9LFxuICAgICAgICBbYF92aWV3c1ske3BJbmRleH1dWyR7aW5kZXh9XS5sb2FkZWRgXTogeyBoZWlnaHQsIHdpZHRoIH0sXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59KVxuIl19