"use strict";
Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        status: String,
        custom: Boolean,
        color: {
            type: String,
            value: '#aaa',
        },
        loadingKey: {
            type: Number,
            value: 14,
        },
        loadingScale: {
            type: Number,
            value: 0.6,
        },
        text: {
            type: String,
            value: '已加载全部',
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxPQUFPO1FBQ2YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtTQUNkO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsT0FBTztTQUNmO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBvcHRpb25zOiB7XG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcbiAgfSxcbiAgcHJvcGVydGllczoge1xuICAgIHN0YXR1czogU3RyaW5nLFxuICAgIGN1c3RvbTogQm9vbGVhbixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjYWFhJyxcbiAgICB9LFxuICAgIGxvYWRpbmdLZXk6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAxNCxcbiAgICB9LFxuICAgIGxvYWRpbmdTY2FsZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDAuNixcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAn5bey5Yqg6L295YWo6YOoJyxcbiAgICB9LFxuICB9LFxufSlcbiJdfQ==