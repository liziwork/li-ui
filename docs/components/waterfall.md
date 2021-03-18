# Waterfall 瀑布流

?> 节点高度不一致时能更好的展示内容，比较流行的设计。组件内置了长列表功能，不用担心内容过多导致程序崩溃。

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
  "usingComponents": {
    "li-load-more": "@liziwork/li-ui/load-more/index",
    "li-waterfall": "@liziwork/li-ui/waterfall/index",
    "card": "../../components/card/index"
  },
}
```

## 使用组件

#### 基础使用
组件的内容为抽象节点，传入组件的名称即可展示。
``` html
<li-waterfall
  generic:selectable="card"
  views="{{ views }}"
  skeleton
  length="8"
  recycle
  time-out="3000"
  loaded-class="loaded-view"
  bind:observe="observe"
/>
<li-load-more status="{{ loading }}" />
```

!> 因为图片显示会有一定的消耗，网络情况差的时候可能会加载很久导致页面图片显示变形，又或者会导致前面的图片会把内容挤下来挡住下面的内容。所以，最好是后端给出图片的尺寸，然后前端计算图片的长度比例，提前设置好节点内容的样式，这样不用担心图片加载延迟导致瀑布流内容定位不准确或者多次计算过于开销性能。

#### 内容组件
`loaded-view`类名用于图片加载完后动态设置样式的节点，如果后端给出图片长宽了则不用关心，也不用触发`loaded`事件给父级组件了。
``` html
<!-- card -->
<view class="c-card">
	<view class="loaded-view">
		<li-image
			src="{{ value.item.image }}"
			bind:loaded="load"
		>
		</li-image>
	</view>
  <view class="title">
    {{ value.item.title }}
  </view>
</view>
```

``` js
Component({
  properties: {
    value: Object,
  },
  methods: {
    load({ detail }) {
      // 必须把当前下标，父级下标，图片长度传给父级组件，waterfall组件才能正确的计算内容显示位置
      const { index, pIndex } = this.data.value
      this.triggerEvent('loaded', {
        ...detail,
        index,
        pIndex,
      })
    },
  },
})
```

## API

**Props**

| 参数          | 说明                 | 类型    | 默认值      | 基础库  |
| ------------- | -------------------- | ------- | ----------- | ------- |
| views         | 视图内容数据         | array   | []          | >2.14.5 |
| span          | 内容外边距，单位为px | array   | [10, 10]    | >2.14.5 |
| length        | 生成几个骨架屏       | number  | 10          | >2.14.5 |
| time-out      | 图片加载超时         | number  | 3000        | >2.14.5 |
| loaded-class  | 承载内容的class类目  | string  | loaded-view | >2.14.5 |
| recycle       | 开启长列表功能       | boolean | false       | >2.14.5 |
| skeleton      | 开启骨架屏显示       | boolean | false       | >2.14.5 |
| skeleton-slot | 自定义骨架屏插槽     | boolean | false       | >2.14.5 |

**Events**

| 事件名       | 说明             | 回调参数      |
| ------------ | ---------------- | ------------- |
| bind:observe | 触发视图显示事件 | index: Number |