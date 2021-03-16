import getHuaBanList from '../../behaviors/getHuaBanList'

Component({
  options: {
    pureDataPattern: /^_/,
  },
  behaviors: [getHuaBanList],
  data: {
    _key: '综艺海报',
  },
  methods: {
    onShareAppMessage() {},
  },
})
