"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (key, page) => {
    return new Promise((resolve) => {
        wx.request({
            url: `https://huaban.com/search/?q=${key}&page=${page}&per_page=10&wfl=1`,
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
                        repin_count: v.repin_count,
                        like_count: v.like_count,
                    });
                });
                resolve(results);
            },
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVhYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHVhYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBWUEsa0JBQWUsQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQzdCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsZ0NBQWdDLEdBQUcsU0FBUyxJQUFJLG9CQUFvQjtZQUN6RSxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsaUJBQWlCLEVBQUUsZ0JBQWdCO2dCQUNuQyxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsa0JBQWtCLEVBQUUsZ0JBQWdCO2FBQ3JDO1lBQ0QsT0FBTyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7Z0JBQ3BCLE1BQU0sT0FBTyxHQUFZLEVBQUUsQ0FBQTtnQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ1gsS0FBSyxFQUFFLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsc0JBQXNCO3dCQUN0RSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVE7d0JBQ2pCLE1BQU0sRUFBRTs0QkFDTixRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUN6QixNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzt5QkFDMUI7d0JBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSzt3QkFDcEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXO3dCQUMxQixVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVU7cUJBQ3pCLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUMsQ0FBQTtnQkFDRixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDbEIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElWaXdlIHtcbiAgaW1hZ2U6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGF1dGhvcjoge1xuICAgIHVzZXJuYW1lOiBzdHJpbmdcbiAgICBhdmF0YXI6IHN0cmluZ1xuICB9XG4gIGJvYXJkOiBzdHJpbmdcbiAgbGlrZV9jb3VudDogbnVtYmVyXG4gIHJlcGluX2NvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGtleTogc3RyaW5nLCBwYWdlOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwczovL2h1YWJhbi5jb20vc2VhcmNoLz9xPSR7a2V5fSZwYWdlPSR7cGFnZX0mcGVyX3BhZ2U9MTAmd2ZsPTFgLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnYWNjZXB0LWxhbmd1YWdlJzogJ3poLUNOLHpoO3E9MC45JyxcbiAgICAgICAgJ3gtcmVxdWVzdCc6ICdKU09OJyxcbiAgICAgICAgJ3gtcmVxdWVzdGVkLXdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBJVml3ZVtdID0gW11cbiAgICAgICAgcmVzLmRhdGEucGlucy5tYXAoKHYpID0+IHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgaW1hZ2U6IGBodHRwczovL2hiaW1nLmh1YWJhbmltZy5jb20vJHt2LmZpbGUua2V5fV8vZncvNDgwL2Zvcm1hdC93ZWJwYCxcbiAgICAgICAgICAgIHRpdGxlOiB2LnJhd190ZXh0LFxuICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiB2LnVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgIGF2YXRhcjogdi51c2VyLmF2YXRhci5rZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9hcmQ6IHYuYm9hcmQudGl0bGUsXG4gICAgICAgICAgICByZXBpbl9jb3VudDogdi5yZXBpbl9jb3VudCxcbiAgICAgICAgICAgIGxpa2VfY291bnQ6IHYubGlrZV9jb3VudCxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpXG4gICAgICB9LFxuICAgIH0pXG4gIH0pXG59XG4iXX0=