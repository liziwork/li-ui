import Recycle from '../behaviors/recycle'

Component({
  options: {
    multipleSlots: true,
    pureDataPattern: /^_/,
  },
  behaviors: [Recycle],
  data: {
    _views: [],
  },
  properties: {
    views: Array,
    span: {
      type: Array,
      value: [10, 10],
    },
    length: {
      type: Number,
      value: 10,
    },
    timeOut: {
      type: Number,
      value: 3000,
    },
    loadedClass: {
      type: String,
      value: '.loaded-view',
    },
    recycle: {
      type: Boolean,
      value: false,
    },
    skeleton: {
      type: Boolean,
      value: false,
    },
    skeletonSlot: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    loaded({ detail: { index, pIndex, height, width } }) {
      this.setData({
        [`views[${pIndex}][${index}].loaded`]: { height, width },
        [`_views[${pIndex}][${index}].loaded`]: { height, width },
      })
    },
  },
})
