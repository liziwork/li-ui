Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    refresh: Boolean,
    refreshStyle: String,
    trigger: Boolean,
    threshold: {
      type: Number,
      value: 100,
    },
    refreshBgColor: {
      type: String,
      value: '#f9f9f9',
    },
    bgColor: String,
    loadMoreStatus: String,
    upperThreshold: {
      type: Number,
      value: 50,
    },
    lowerThreshold: {
      type: Number,
      value: 50,
    },
  },
})
