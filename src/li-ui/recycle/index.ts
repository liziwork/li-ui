import Recycle from '../behaviors/recycle'

Component({
  properties: {
    options: Object,
  },
  externalClasses: ['content-class'],
  behaviors: [Recycle],
  options: {
    pureDataPattern: /^_/,
  },
  observers: {
    'views.length': function (length) {
      const { views, block } = this.data as any
      if (length === block.length) return
      const index = views.length - 1
      this.setData({
        [`block[${index}]`]: views[index].length,
      })
    },
  },
  data: {
    block: [],
  },
})
