let timer: any

Page({
  data: {
    trigger: false,
    items: 15,
    status: 'ready',
  },
  onTolower() {
    let { items, status } = this.data
    if (status === 'loading' || status === 'loaded') return
    this.setData({ status: 'loading' })
    setTimeout(() => {
      if (items > 50) {
        status = 'loaded'
      } else {
        status = ''
        items += 5
      }
      this.setData({ status, items })
    }, 2000)
  },
  onRefresh() {
    timer = setTimeout(() => {
      wx.showToast({
        title: '刷新成功',
        icon: 'none',
      })
      this.setData({ trigger: false, items: 15, status: 'ready' })
    }, 1000)
  },
  onRestore() {
    clearTimeout(timer)
  },
  onShareAppMessage() {},
})

export {}
