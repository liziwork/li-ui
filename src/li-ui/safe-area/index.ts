import system from '../utils/system'

Component({
  properties: {
    area: {
      type: String,
      value: 'bottom',
    },
    color: String,
    height: {
      type: String,
      value: '0px',
    },
  },
  data: {
    system,
  },
})
