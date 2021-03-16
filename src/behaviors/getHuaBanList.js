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
        loading: 'ready',
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
                loading = 'ready';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SHVhQmFuTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldEh1YUJhbkxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUF1QztBQUV2QyxrQkFBZSxRQUFRLENBQUM7SUFDdEIsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQWdCO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLE9BQU87S0FDakI7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxhQUFhO1lBQ1gsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQ2xDLElBQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssTUFBTTtnQkFBRSxPQUFNO1lBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtZQUNwQyxVQUFVLENBQUMsR0FBUyxFQUFFO2dCQUNwQixNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDMUIsT0FBTyxHQUFHLE9BQU8sQ0FBQTtnQkFDakIsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFBRSxPQUFPLEdBQUcsTUFBTSxDQUFBO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUMzQixDQUFDLENBQUEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNWLENBQUM7UUFDRCxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BCLENBQUM7UUFDSyxhQUFhOztnQkFDakIsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtnQkFDdEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxnQkFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxDQUFDLFNBQVMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTTtvQkFDbEMsS0FBSyxFQUFFLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUE7WUFDSixDQUFDO1NBQUE7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIdWFCYW4gZnJvbSAnLi4vcmVxdWVzdHMvaHVhYmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvcih7XG4gIGRhdGE6IHtcbiAgICB2aWV3czogW10gYXMgbnVtYmVyW11bXSxcbiAgICBfcGFnZTogMCxcbiAgICBsb2FkaW5nOiAncmVhZHknLFxuICB9LFxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmdldEh1YUJhbkxpc3QoKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgIGxldCB7IGxvYWRpbmcsIF9wYWdlIH0gPSB0aGlzLmRhdGFcbiAgICAgIGlmIChsb2FkaW5nID09PSAnbG9hZGluZycgfHwgbG9hZGluZyA9PT0gJ2RvbmUnKSByZXR1cm5cbiAgICAgIHRoaXMuc2V0RGF0YSh7IGxvYWRpbmc6ICdsb2FkaW5nJyB9KVxuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0SHVhQmFuTGlzdCgpXG4gICAgICAgIGxvYWRpbmcgPSAncmVhZHknXG4gICAgICAgIGlmIChfcGFnZSA+PSAxMCkgbG9hZGluZyA9ICdkb25lJ1xuICAgICAgICB0aGlzLnNldERhdGEoeyBsb2FkaW5nIH0pXG4gICAgICB9LCAxMDAwKVxuICAgIH0sXG4gICAgb2JzZXJ2ZSh7IGRldGFpbDogeyBkYXRhIH0gfSkge1xuICAgICAgdGhpcy5zZXREYXRhKGRhdGEpXG4gICAgfSxcbiAgICBhc3luYyBnZXRIdWFCYW5MaXN0KCkge1xuICAgICAgbGV0IHsgX3BhZ2UsIHZpZXdzLCBfa2V5IH0gPSB0aGlzLmRhdGFcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEh1YUJhbihfa2V5LCBfcGFnZSlcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdmlld3NbJHt2aWV3cy5sZW5ndGh9XWBdOiByZXN1bHQsXG4gICAgICAgIF9wYWdlOiArK19wYWdlLFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiJdfQ==