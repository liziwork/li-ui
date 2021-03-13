Page({
  data: {
    items: 10,
    status: '',
  },
  onReachBottom() {
    let { items, status } = this.data
    if (status === 'loading' || status === 'loaded') return
    this.setData({ status: 'loading' })
    setTimeout(() => {
      if (items > 50) {
        status = 'loaded'
      } else {
        status = ''
        items += 10
      }
      this.setData({ status, items })
    }, 2000)
  },
})
