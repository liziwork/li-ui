Page({
  data: {
    items: 10,
    status: '',
  },
  onReachBottom() {
    let { items, status } = this.data
    if (status === 'loading' || status === 'done') return
    this.setData({ status: 'loading' })
    setTimeout(() => {
      if (items > 50) {
        status = 'done'
      } else {
        status = ''
        items += 10
      }
      this.setData({ status, items })
    }, 2000)
  },
  onShareAppMessage() {},
})
