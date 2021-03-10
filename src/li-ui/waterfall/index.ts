Component({
  options: {
    multipleSlots: true,
    pureDataPattern: /_/,
  },
  data: {
    _views: [],
  },
  properties: {
    views: Array,
    span: {
      type: Array,
      value: [10, 10],
    },
    length: {
      type: Number,
      value: 10,
    },
    timeOut: {
      type: Number,
      value: 3000,
    },
    loadedClass: {
      type: String,
      value: '.loaded-view',
    },
    recycle: {
      type: Boolean,
      value: false,
    },
    skeleton: {
      type: Boolean,
      value: false,
    },
    skeletonSlot: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    loaded({ detail: { index, pIndex, height, width } }) {
      this.setData({
        [`views[${pIndex}][${index}].loaded`]: { height, width },
        [`_views[${pIndex}][${index}].loaded`]: { height, width },
      })
    },
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
