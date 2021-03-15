import HuaBan from '../requests/huaban'

export default Behavior({
  data: {
    views: [] as number[][],
    _page: 0,
    loading: '',
  },
  attached() {
    this.getHuaBanList()
  },
  methods: {
    onReachBottom() {
      let { loading, _page } = this.data
      if (loading === 'loading' || loading === 'done') return
      this.setData({ loading: 'loading' })
      setTimeout(async () => {
        await this.getHuaBanList()
        loading = ''
        if (_page >= 10) loading = 'done'
        this.setData({ loading })
      }, 1000)
    },
    observe({ detail: { data } }) {
      this.setData(data)
    },
    async getHuaBanList() {
      let { _page, views, _key } = this.data
      const result = await HuaBan(_key, _page)
      this.setData({
        [`views[${views.length}]`]: result,
        _page: ++_page,
      })
    },
  },
})
