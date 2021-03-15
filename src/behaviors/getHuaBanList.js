"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const huaban_1 = require("../requests/huaban");
exports.default = Behavior({
    data: {
        views: [],
        _page: 0,
        loading: '',
    },
    attached() {
        this.getHuaBanList();
    },
    methods: {
        onReachBottom() {
            let { loading, _page } = this.data;
            if (loading === 'loading' || loading === 'done')
                return;
            this.setData({ loading: 'loading' });
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.getHuaBanList();
                loading = '';
                if (_page >= 10)
                    loading = 'done';
                this.setData({ loading });
            }), 1000);
        },
        observe({ detail: { data } }) {
            this.setData(data);
        },
        getHuaBanList() {
            return __awaiter(this, void 0, void 0, function* () {
                let { _page, views, _key } = this.data;
                const result = yield huaban_1.default(_key, _page);
                this.setData({
                    [`views[${views.length}]`]: result,
                    _page: ++_page,
                });
            });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SHVhQmFuTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldEh1YUJhbkxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUF1QztBQUV2QyxrQkFBZSxRQUFRLENBQUM7SUFDdEIsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQWdCO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNQLGFBQWE7WUFDWCxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDbEMsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxNQUFNO2dCQUFFLE9BQU07WUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1lBQ3BDLFVBQVUsQ0FBQyxHQUFTLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUMxQixPQUFPLEdBQUcsRUFBRSxDQUFBO2dCQUNaLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQTtnQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7WUFDM0IsQ0FBQyxDQUFBLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDVixDQUFDO1FBQ0QsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixDQUFDO1FBQ0ssYUFBYTs7Z0JBQ2pCLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7Z0JBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsQ0FBQyxTQUFTLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU07b0JBQ2xDLEtBQUssRUFBRSxFQUFFLEtBQUs7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUFBO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHVhQmFuIGZyb20gJy4uL3JlcXVlc3RzL2h1YWJhbidcblxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3Ioe1xuICBkYXRhOiB7XG4gICAgdmlld3M6IFtdIGFzIG51bWJlcltdW10sXG4gICAgX3BhZ2U6IDAsXG4gICAgbG9hZGluZzogJycsXG4gIH0sXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZ2V0SHVhQmFuTGlzdCgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgbGV0IHsgbG9hZGluZywgX3BhZ2UgfSA9IHRoaXMuZGF0YVxuICAgICAgaWYgKGxvYWRpbmcgPT09ICdsb2FkaW5nJyB8fCBsb2FkaW5nID09PSAnZG9uZScpIHJldHVyblxuICAgICAgdGhpcy5zZXREYXRhKHsgbG9hZGluZzogJ2xvYWRpbmcnIH0pXG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRIdWFCYW5MaXN0KClcbiAgICAgICAgbG9hZGluZyA9ICcnXG4gICAgICAgIGlmIChfcGFnZSA+PSAxMCkgbG9hZGluZyA9ICdkb25lJ1xuICAgICAgICB0aGlzLnNldERhdGEoeyBsb2FkaW5nIH0pXG4gICAgICB9LCAxMDAwKVxuICAgIH0sXG4gICAgb2JzZXJ2ZSh7IGRldGFpbDogeyBkYXRhIH0gfSkge1xuICAgICAgdGhpcy5zZXREYXRhKGRhdGEpXG4gICAgfSxcbiAgICBhc3luYyBnZXRIdWFCYW5MaXN0KCkge1xuICAgICAgbGV0IHsgX3BhZ2UsIHZpZXdzLCBfa2V5IH0gPSB0aGlzLmRhdGFcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEh1YUJhbihfa2V5LCBfcGFnZSlcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdmlld3NbJHt2aWV3cy5sZW5ndGh9XWBdOiByZXN1bHQsXG4gICAgICAgIF9wYWdlOiArK19wYWdlLFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiJdfQ==