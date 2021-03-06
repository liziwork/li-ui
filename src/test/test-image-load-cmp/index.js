"use strict";
Component({
    properties: {
        value: Object,
    },
    data: {},
    attached() {
    },
    methods: {
        loaded({ detail }) {
            const { index, pIndex } = this.data.value;
            this.triggerEvent('loaded', Object.assign({}, detail, { index,
                pIndex }));
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELElBQUksRUFBRSxFQUFFO0lBQ1IsUUFBUTtJQUVSLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUU7WUFDZixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxvQkFDckIsTUFBTSxJQUNULEtBQUs7Z0JBQ0wsTUFBTSxJQUNOLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgdmFsdWU6IE9iamVjdCxcbiAgfSxcbiAgZGF0YToge30sXG4gIGF0dGFjaGVkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YS52YWx1ZSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRlZCh7IGRldGFpbCB9KSB7XG4gICAgICBjb25zdCB7IGluZGV4LCBwSW5kZXggfSA9IHRoaXMuZGF0YS52YWx1ZVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2xvYWRlZCcsIHtcbiAgICAgICAgLi4uZGV0YWlsLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgcEluZGV4LFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiJdfQ==