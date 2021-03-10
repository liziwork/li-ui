Component({
  properties: {
    icon: String,
    name: String,
    label: String,
    path: String,
  },
  methods: {
    click() {
      wx.navigateTo({
        url: this.data.path
      })
    }
  }
})
