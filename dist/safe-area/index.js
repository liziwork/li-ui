"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_1 = require("../utils/system");
Component({
    properties: {
        area: {
            type: String,
            value: 'bottom',
        },
        color: String,
        height: {
            type: String,
            value: '0px',
        },
    },
    data: {
        system: system_1.default,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUFvQztBQUVwQyxTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxRQUFRO1NBQ2hCO1FBQ0QsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxLQUFLO1NBQ2I7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBTixnQkFBTTtLQUNQO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN5c3RlbSBmcm9tICcuLi91dGlscy9zeXN0ZW0nXG5cbkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICBhcmVhOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2JvdHRvbScsXG4gICAgfSxcbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBzeXN0ZW0sXG4gIH0sXG59KVxuIl19