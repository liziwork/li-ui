Component({
  properties: {
    value: Object,
  },
  methods: {
    load({ detail }) {
      const { index, pIndex } = this.data.value
      this.triggerEvent('loaded', {
        ...detail,
        index,
        pIndex,
      })
    },
  },
})
