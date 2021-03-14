import system from '../utils/system'

Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    icon: String,
    homePath: {
      type: String,
      value: '../../pages/index/index',
    },
    bgColor: {
      type: String,
      value: '#fff',
    },
    color: {
      type: String,
      value: '#111',
    },
    title: {
      type: String,
      value: '导航栏',
    },
    iconSlot: Boolean,
    titleSlot: Boolean,
    customBack: Boolean,
  },
  data: {
    system,
    pageLength: 0,
  },
  attached() {
    const length = getCurrentPages().length
    this.setData({ pageLength: length })
  },
  methods: {
    back() {
      const { pageLength, homePath, customBack } = this.data
      if (!customBack) {
        if (pageLength === 1) {
          wx.reLaunch({
            url: homePath,
          })
        } else {
          wx.navigateBack()
        }
      }
      this.triggerEvent('back')
    },
    title() {
      this.triggerEvent('title')
    },
  },
})
