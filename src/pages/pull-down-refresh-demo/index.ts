let timer: any

Page({
  data: {
    trigger: false,
    title: '下拉刷新',
  },
  onLoad() {
    try {
      const eventChannel = this.getOpenerEventChannel()
      eventChannel.on('load', ({ title }) => {
        this.setData({ title })
        wx.setNavigationBarTitle({
          title,
        })
      })
    } catch (error) {}
  },
  onRefresh() {
    wx.showLoading({
      title: '加载中',
    })
    timer = setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '加载成功',
      })
      this.setData({ trigger: false })
    }, 3000)
  },
  onRestore() {
    wx.hideLoading()
    clearTimeout(timer)
  },
  onShareAppMessage() {},
})
