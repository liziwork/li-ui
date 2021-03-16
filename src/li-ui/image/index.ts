Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    width: {
      type: String,
      value: '100%',
    },
    height: {
      type: String,
      value: '100%',
    },
    mode: {
      type: String,
      value: 'none',
    },
    bgColor: String,
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
