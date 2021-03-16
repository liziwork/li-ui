const _test_views = [
  {
    image:
      'https://hbimg.huabanimg.com/a88e2a777c46b45ee12b8664e609307832fe971344641-UnrYi7_/fw/480/format/webp',
  },

  {
    image:
      'https://hbimg-other.huabanimg.com/5d4f66a23e98bbcf8df1a32190064f0a173d960b1cc6f_/fw/480/format/webp',
  },
  {
    image: 'https://source.unsplash.com/random',
  },
  {
    image:
      'https://hbimg.huabanimg.com/b87cbf4dd8a7b3089fabeec570f05afe49fa938411713-lUY3bD_/fw/480/format/webp',
  },
  {
    image: 'https://bing.ioliu.cn/v1/rand',
  },
]

Page({
  data: {
    views: [_test_views],
  },
  more() {
    this.setData({
      [`views[${this.data.views.length}]`]: _test_views,
    })
  },
})
