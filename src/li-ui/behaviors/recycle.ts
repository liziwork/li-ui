export default Behavior({
  properties: {
    views: Array,
  },
  data: {
    _views: [],
  },
  methods: {
    generateObserves({ index }) {
      const { views, _views } = this.data
      this.setData({ [`_views[${index}]`]: views[index] })
      const view = this.createIntersectionObserver({
        initialRatio: 0,
      }).relativeToViewport({ top: 0, bottom: 0 })
      view.observe(`#placeholder-${index}`, (res) => {
        if (res.intersectionRatio <= 0) {
          let show = index + 2
          let hide = index - 1
          let data = {}
          if (res.boundingClientRect.top > 0) {
            show = index - 2
            hide = index + 1
          }
          if (_views[hide]) {
            data = { ...data, [`views[${hide}]`]: [] }
          }
          if (_views[show]) {
            data = { ...data, [`views[${show}]`]: _views[show] }
          }

          if (!Object.keys(data).length) return

          wx.nextTick(() => this.triggerEvent('observe', { data }))
        }
      })
    },
  },
})
