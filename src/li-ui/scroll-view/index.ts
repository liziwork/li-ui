import system from '../utils/system'

Component({
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
  },
  data: {
    system,
  },
})
