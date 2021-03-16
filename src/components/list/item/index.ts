Component({
  properties: {
    icon: String,
    name: String,
    label: String,
    path: String,
  },
  methods: {
    click() {
      if (!this.data.path) {
        wx.showToast({
          title: '敬请期待',
          icon: 'none',
        })
        return
      }
      wx.navigateTo({
        url: this.data.path,
      })
    },
  },
})
