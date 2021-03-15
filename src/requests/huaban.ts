interface IViwe {
  image: string
  title: string
  author: {
    username: string
    avatar: string
  }
  board: string
  like_count: number
  repin_count: number
}

export default (key: string, page: number) => {
  return new Promise((resolve) => {
    wx.request({
      url: `https://huaban.com/search/?q=${key}&page=${page}&per_page=10&wfl=1`,
      header: {
        accept: 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'x-request': 'JSON',
        'x-requested-with': 'XMLHttpRequest',
      },
      success: (res: any) => {
        const results: IViwe[] = []
        res.data.pins.map((v) => {
          results.push({
            image: `https://hbimg.huabanimg.com/${v.file.key}_/fw/480/format/webp`,
            title: v.raw_text,
            author: {
              username: v.user.username,
              avatar: v.user.avatar.key,
            },
            board: v.board.title,
            repin_count: v.repin_count,
            like_count: v.like_count,
          })
        })
        resolve(results)
      },
    })
  })
}
