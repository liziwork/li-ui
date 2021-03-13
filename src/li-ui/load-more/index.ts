Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    status: String,
    custom: Boolean,
    color: {
      type: String,
      value: '#aaa',
    },
    loadingKey: {
      type: Number,
      value: 14,
    },
    loadingScale: {
      type: Number,
      value: 0.6,
    },
    text: {
      type: String,
      value: '已加载全部',
    },
  },
})
