Component({
  properties: {
    value: Object,
  },
  data: {},
  attached() {
    // console.log(this.data.value)
  },
  methods: {
    loaded({ detail }) {
      const { index, pIndex } = this.data.value
      this.triggerEvent('loaded', {
        ...detail,
        index,
        pIndex,
      })
    },
  },
})
