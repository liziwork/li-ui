interface IViwe {
  image: string
  title: string
  author: {
    username: string
    avatar: string
  }
  board: string
}

Page({
  data: {
    views: [] as IViwe[][],
    loading: false,
    _page: 1,
  },
  onReady() {
    this.getHuaBanList()
  },
  observe({ detail: { data } }) {
    this.setData(data)
  },
  getHuaBanList() {
    let { views, _page } = this.data
    wx.request({
      url: `https://huaban.com/search/?q=综艺海报&page=${_page}&per_page=10&wfl=1`,
      header: {
        accept: 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'x-request': 'JSON',
        'x-requested-with': 'XMLHttpRequest',
      },
      success: (res: any) => {
        const results: IViwe[] = []
        res.data.pins.map((v) => {
          results.push({
            image: `https://hbimg.huabanimg.com/${v.file.key}_/fw/480/format/webp`,
            title: v.raw_text,
            author: {
              username: v.user.username,
              avatar: v.user.avatar.key,
            },
            board: v.board.title,
          })
        })
        views.push(results)
        this.setData({ views, _page: ++_page })
        wx.hideLoading()
      },
    })
  },
  onReachBottom() {
    let { loading } = this.data
    if (!loading) {
      wx.showLoading({
        title: 'loading...',
      })
      loading = true
      setTimeout(() => {
        this.getHuaBanList()
        wx.hideLoading()
        loading = false
      }, 1000)
    }
  },
})
