import getHuaBanList from '../../behaviors/getHuaBanList'

Component({
  options: {
    pureDataPattern: /^_/,
  },
  behaviors: [getHuaBanList],
  data: {
    _key: '淘宝主图',
  },
})
