Component({
  properties: {
    hideText: Boolean,
    color: String,
    bgColor: String,
    glass: Boolean,
    activeColor: String,
    activeBgColor: String,
    activeStyle: String,
    active: {
      type: Number,
      value: 0,
    },
    margin: Array,
    radius: Array,
    inline: Boolean,
    filter: String,
    shadow: String,
    info: String,
    dot: Boolean,
    tabs: Array,
    size: String,
  },
  methods: {
    click({
      currentTarget: {
        dataset: { index },
      },
    }) {
      const { tabs, active } = this.data
      if (active === index) return

      const { path } = tabs[index]
      if (path) {
        wx.switchTab({
          url: path,
          fail: () => {
            wx.navigateTo({
              url: path,
            })
          },
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: 'path is not found',
        })
        this.setData({ active: index })
      }
      this.triggerEvent('click', { index })
    },
  },
})
