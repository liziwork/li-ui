"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Behavior({
    properties: {
        views: Array,
    },
    data: {
        _views: [],
    },
    methods: {
        generateObserves({ index }) {
            const { views, _views } = this.data;
            this.setData({ [`_views[${index}]`]: views[index] });
            const view = this.createIntersectionObserver({
                initialRatio: 0,
            }).relativeToViewport({ top: 0, bottom: 0 });
            view.observe(`#placeholder-${index}`, (res) => {
                if (res.intersectionRatio <= 0) {
                    let show = index + 2;
                    let hide = index - 1;
                    let data = {};
                    if (res.boundingClientRect.top > 0) {
                        show = index - 2;
                        hide = index + 1;
                    }
                    if (_views[hide]) {
                        data = Object.assign({}, data, { [`views[${hide}]`]: [] });
                    }
                    if (_views[show]) {
                        data = Object.assign({}, data, { [`views[${show}]`]: _views[show] });
                    }
                    if (!Object.keys(data).length)
                        return;
                    wx.nextTick(() => this.triggerEvent('observe', { data }));
                }
            });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjeWNsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY3ljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZSxRQUFRLENBQUM7SUFDdEIsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEtBQUs7S0FDYjtJQUNELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRCxPQUFPLEVBQUU7UUFDUCxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRTtZQUN4QixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDcEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO2dCQUMzQyxZQUFZLEVBQUUsQ0FBQzthQUNoQixDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksR0FBRyxDQUFDLGlCQUFpQixJQUFJLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQTtvQkFDcEIsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQTtvQkFDcEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO29CQUNiLElBQUksR0FBRyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFBO3dCQUNoQixJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQTtxQkFDakI7b0JBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ2hCLElBQUkscUJBQVEsSUFBSSxJQUFFLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRSxDQUFBO3FCQUMzQztvQkFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDaEIsSUFBSSxxQkFBUSxJQUFJLElBQUUsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFFLENBQUE7cUJBQ3JEO29CQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07d0JBQUUsT0FBTTtvQkFFckMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtpQkFDMUQ7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IEJlaGF2aW9yKHtcbiAgcHJvcGVydGllczoge1xuICAgIHZpZXdzOiBBcnJheSxcbiAgfSxcbiAgZGF0YToge1xuICAgIF92aWV3czogW10sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5lcmF0ZU9ic2VydmVzKHsgaW5kZXggfSkge1xuICAgICAgY29uc3QgeyB2aWV3cywgX3ZpZXdzIH0gPSB0aGlzLmRhdGFcbiAgICAgIHRoaXMuc2V0RGF0YSh7IFtgX3ZpZXdzWyR7aW5kZXh9XWBdOiB2aWV3c1tpbmRleF0gfSlcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHtcbiAgICAgICAgaW5pdGlhbFJhdGlvOiAwLFxuICAgICAgfSkucmVsYXRpdmVUb1ZpZXdwb3J0KHsgdG9wOiAwLCBib3R0b206IDAgfSlcbiAgICAgIHZpZXcub2JzZXJ2ZShgI3BsYWNlaG9sZGVyLSR7aW5kZXh9YCwgKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmludGVyc2VjdGlvblJhdGlvIDw9IDApIHtcbiAgICAgICAgICBsZXQgc2hvdyA9IGluZGV4ICsgMlxuICAgICAgICAgIGxldCBoaWRlID0gaW5kZXggLSAxXG4gICAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICAgIGlmIChyZXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA+IDApIHtcbiAgICAgICAgICAgIHNob3cgPSBpbmRleCAtIDJcbiAgICAgICAgICAgIGhpZGUgPSBpbmRleCArIDFcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF92aWV3c1toaWRlXSkge1xuICAgICAgICAgICAgZGF0YSA9IHsgLi4uZGF0YSwgW2B2aWV3c1ske2hpZGV9XWBdOiBbXSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfdmlld3Nbc2hvd10pIHtcbiAgICAgICAgICAgIGRhdGEgPSB7IC4uLmRhdGEsIFtgdmlld3NbJHtzaG93fV1gXTogX3ZpZXdzW3Nob3ddIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgICAgICB3eC5uZXh0VGljaygoKSA9PiB0aGlzLnRyaWdnZXJFdmVudCgnb2JzZXJ2ZScsIHsgZGF0YSB9KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiJdfQ==