"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_1 = require("../utils/system");
Component({
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
    },
    data: {
        system: system_1.default,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUFvQztBQUVwQyxTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsT0FBTztRQUNoQixZQUFZLEVBQUUsTUFBTTtRQUNwQixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxTQUFTO1NBQ2pCO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQU4sZ0JBQU07S0FDUDtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzeXN0ZW0gZnJvbSAnLi4vdXRpbHMvc3lzdGVtJ1xuXG5Db21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgcmVmcmVzaDogQm9vbGVhbixcbiAgICByZWZyZXNoU3R5bGU6IFN0cmluZyxcbiAgICB0cmlnZ2VyOiBCb29sZWFuLFxuICAgIHRocmVzaG9sZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDEwMCxcbiAgICB9LFxuICAgIHJlZnJlc2hCZ0NvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNmOWY5ZjknLFxuICAgIH0sXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBzeXN0ZW0sXG4gIH0sXG59KVxuIl19