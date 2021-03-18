# LoadMore 上拉加载


## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
  "usingComponents": {
    "load-more": "@liziwork/li-ui/load-more/index"
  }
}
```

## 使用组件

#### 基础使用
``` html
<li-load-more status="{{ status }}" />
```

#### 自定义内容
``` html
<li-load-more 
  status="{{ status }}"
  custom
>
  <view slot="ready">ready</view>
  <view slot="loading">loading</view>
  <view slot="loaded">loaded</view>
</li-load-more>
```

#### 修改status状态
``` js
Page({
  data: {
    status
  },
  changeStatus() {
    // '' 不显示
    // ready 默认提示
    // loading 显示loading动画
    // done 不再加载
    this.setData({
      status: ''
    })
  }
})
```

## API

**Props**

| 参数          | 说明        | 类型    | 默认值     | 基础库 |
| ------------- | ----------- | ------- | ---------- | ------ |
| status        | 状态        | string  | -          |        |
| custom        | 自定义内容  | boolean | false      |        |
| color         | 字体颜色    | string  | #aaa       |        |
| loading-key   | loading下标 | number  | 14         |        |
| loading-scale | loading大小 | number  | 0.6        |        |
| text          | 文字        | string  | 已加载全部 |        |