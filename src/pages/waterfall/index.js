"use strict";
Page({
    data: {
        views: [],
        loading: false,
        _page: 1,
    },
    onReady() {
        this.getHuaBanList();
    },
    observe({ detail: { data } }) {
        this.setData(data);
    },
    getHuaBanList() {
        let { views, _page } = this.data;
        wx.request({
            url: `https://huaban.com/search/?q=综艺海报&page=${_page}&per_page=10&wfl=1`,
            header: {
                accept: 'application/json',
                'accept-language': 'zh-CN,zh;q=0.9',
                'x-request': 'JSON',
                'x-requested-with': 'XMLHttpRequest',
            },
            success: (res) => {
                const results = [];
                res.data.pins.map((v) => {
                    results.push({
                        image: `https://hbimg.huabanimg.com/${v.file.key}_/fw/480/format/webp`,
                        title: v.raw_text,
                        author: {
                            username: v.user.username,
                            avatar: v.user.avatar.key,
                        },
                        board: v.board.title,
                    });
                });
                views.push(results);
                this.setData({ views, _page: ++_page });
                wx.hideLoading();
            },
        });
    },
    onReachBottom() {
        let { loading } = this.data;
        if (!loading) {
            wx.showLoading({
                title: 'loading...',
            });
            loading = true;
            setTimeout(() => {
                this.getHuaBanList();
                wx.hideLoading();
                loading = false;
            }, 1000);
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBVUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQWU7UUFDdEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsT0FBTztRQUNMLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBQ0QsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNoQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDBDQUEwQyxLQUFLLG9CQUFvQjtZQUN4RSxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsaUJBQWlCLEVBQUUsZ0JBQWdCO2dCQUNuQyxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsa0JBQWtCLEVBQUUsZ0JBQWdCO2FBQ3JDO1lBQ0QsT0FBTyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7Z0JBQ3BCLE1BQU0sT0FBTyxHQUFZLEVBQUUsQ0FBQTtnQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ1gsS0FBSyxFQUFFLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsc0JBQXNCO3dCQUN0RSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVE7d0JBQ2pCLE1BQU0sRUFBRTs0QkFDTixRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUN6QixNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzt5QkFDMUI7d0JBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSztxQkFDckIsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQyxDQUFBO2dCQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtnQkFDdkMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ2xCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLEtBQUssRUFBRSxZQUFZO2FBQ3BCLENBQUMsQ0FBQTtZQUNGLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDZCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDcEIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNoQixPQUFPLEdBQUcsS0FBSyxDQUFBO1lBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNUO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJVml3ZSB7XG4gIGltYWdlOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBhdXRob3I6IHtcbiAgICB1c2VybmFtZTogc3RyaW5nXG4gICAgYXZhdGFyOiBzdHJpbmdcbiAgfVxuICBib2FyZDogc3RyaW5nXG59XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdmlld3M6IFtdIGFzIElWaXdlW11bXSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBfcGFnZTogMSxcbiAgfSxcbiAgb25SZWFkeSgpIHtcbiAgICB0aGlzLmdldEh1YUJhbkxpc3QoKVxuICB9LFxuICBvYnNlcnZlKHsgZGV0YWlsOiB7IGRhdGEgfSB9KSB7XG4gICAgdGhpcy5zZXREYXRhKGRhdGEpXG4gIH0sXG4gIGdldEh1YUJhbkxpc3QoKSB7XG4gICAgbGV0IHsgdmlld3MsIF9wYWdlIH0gPSB0aGlzLmRhdGFcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHBzOi8vaHVhYmFuLmNvbS9zZWFyY2gvP3E957u86Im65rW35oqlJnBhZ2U9JHtfcGFnZX0mcGVyX3BhZ2U9MTAmd2ZsPTFgLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnYWNjZXB0LWxhbmd1YWdlJzogJ3poLUNOLHpoO3E9MC45JyxcbiAgICAgICAgJ3gtcmVxdWVzdCc6ICdKU09OJyxcbiAgICAgICAgJ3gtcmVxdWVzdGVkLXdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBJVml3ZVtdID0gW11cbiAgICAgICAgcmVzLmRhdGEucGlucy5tYXAoKHYpID0+IHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgaW1hZ2U6IGBodHRwczovL2hiaW1nLmh1YWJhbmltZy5jb20vJHt2LmZpbGUua2V5fV8vZncvNDgwL2Zvcm1hdC93ZWJwYCxcbiAgICAgICAgICAgIHRpdGxlOiB2LnJhd190ZXh0LFxuICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiB2LnVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgIGF2YXRhcjogdi51c2VyLmF2YXRhci5rZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9hcmQ6IHYuYm9hcmQudGl0bGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdmlld3MucHVzaChyZXN1bHRzKVxuICAgICAgICB0aGlzLnNldERhdGEoeyB2aWV3cywgX3BhZ2U6ICsrX3BhZ2UgfSlcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGxldCB7IGxvYWRpbmcgfSA9IHRoaXMuZGF0YVxuICAgIGlmICghbG9hZGluZykge1xuICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ2xvYWRpbmcuLi4nLFxuICAgICAgfSlcbiAgICAgIGxvYWRpbmcgPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRIdWFCYW5MaXN0KClcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICBsb2FkaW5nID0gZmFsc2VcbiAgICAgIH0sIDEwMDApXG4gICAgfVxuICB9LFxufSlcbiJdfQ==