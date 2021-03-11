Component({
  properties: {
    title: String,
    bgColor: String,
    height: String,
  },
  methods: {
    click() {
      wx.navigateTo({
        url: '../../pages/pull-down-refresh-demo/index',
        success: ({ eventChannel }) => {
          eventChannel.emit('load', { ...this.data })
        },
      })
    },
  },
})
