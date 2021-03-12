Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    width: {
      type: String,
      value: '200rpx',
    },
    height: {
      type: String,
      value: '200rpx',
    },
    mode: {
      type: String,
      value: 'none',
    },
    bgColor: {
      type: String,
      value: '#f7f7f7',
    },
    src: String,
    round: Boolean,
    radius: String,
    loadingSlot: Boolean,
    errorSlot: Boolean,
  },
  data: {
    status: 'loading',
  },
  methods: {
    onLoaded({ detail }) {
      this.setData({ status: 'loaded' })
      this.triggerEvent('loaded', { ...detail })
    },
    onError({ detail: { errMsg } }) {
      this.setData({ status: 'error' })
      this.triggerEvent('error', { errMsg })
    },
  },
})
