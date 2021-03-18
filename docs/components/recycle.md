# Recycle 长列表

?> 虚拟滚动组件，回收资源机制，避免大量setData数据、dom节点导致程序崩溃。

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
   "usingComponents": {
      "li-recycle": "@liziwork/li-ui/recycle/index",
      "li-load-more": "@liziwork/li-ui/load-more/index",
      "shop-card": "../../components/shop-card/index"
   }
}
```

## 使用组件

#### 基础使用
组件的内容为抽象节点，传入组件的名称即可展示。
``` html
<li-recycle
  content-class="content"
  generic:selectable="shop-card"
  views="{{ views }}"
  bind:observe="observe"
/>
<li-load-more status="{{ loading }}" />
```

``` css
.content {
  padding: 20rpx;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20rpx;
}
```

``` html
<!-- shop-card -->
<view>{{ value.xxx }}</view>
```

!> `content-class`为内容组件的样式类名，用来设置长列表组件内部的样式避免样式污染，请查看[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)

## API

**Props**

| 参数          | 说明         | 类型   | 默认值 | 基础库  |
| ------------- | ------------ | ------ | ------ | ------- |
| content-class | 内容样式类名 | string |        | >2.14.5 |
| views         | 长列表数据   | array  | []     | >2.14.5 |

**Events**

| 事件名       | 说明             | 回调参数      |
| ------------ | ---------------- | ------------- |
| bind:observe | 触发视图显示事件 | index: Number |