"use strict";
Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        refresh: Boolean,
        refreshStyle: String,
        trigger: Boolean,
        threshold: {
            type: Number,
            value: 100,
        },
        refreshBgColor: {
            type: String,
            value: '#f9f9f9',
        },
        bgColor: String,
        loadMoreStatus: String,
        upperThreshold: {
            type: Number,
            value: 50,
        },
        lowerThreshold: {
            type: Number,
            value: 50,
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsT0FBTztRQUNoQixZQUFZLEVBQUUsTUFBTTtRQUNwQixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxTQUFTO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFLE1BQU07UUFDZixjQUFjLEVBQUUsTUFBTTtRQUN0QixjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIG9wdGlvbnM6IHtcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxuICB9LFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgcmVmcmVzaDogQm9vbGVhbixcbiAgICByZWZyZXNoU3R5bGU6IFN0cmluZyxcbiAgICB0cmlnZ2VyOiBCb29sZWFuLFxuICAgIHRocmVzaG9sZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDEwMCxcbiAgICB9LFxuICAgIHJlZnJlc2hCZ0NvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNmOWY5ZjknLFxuICAgIH0sXG4gICAgYmdDb2xvcjogU3RyaW5nLFxuICAgIGxvYWRNb3JlU3RhdHVzOiBTdHJpbmcsXG4gICAgdXBwZXJUaHJlc2hvbGQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiA1MCxcbiAgICB9LFxuICAgIGxvd2VyVGhyZXNob2xkOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogNTAsXG4gICAgfSxcbiAgfSxcbn0pXG4iXX0=