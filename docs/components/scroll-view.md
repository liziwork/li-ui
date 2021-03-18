# ScrollView 滚动视图

?> 封装了下拉刷新、上拉加载功能。

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
   "usingComponents": {
    "li-scroll-view": "@liziwork/li-ui/scroll-view/index",
    "li-navbar": "@liziwork/li-ui/navbar/index",
    "flying-superman": "@liziwork/li-ui/animations/flying-superman/index"
  },
  "navigationStyle": "custom",
  "disableScroll": true
}
```

## 使用组件

#### 基础使用
该组件下拉刷新组件为抽象节点，传入下拉动画组件即可。
``` html
<li-scroll-view
  generic:selectable="flying-superman"
  refresh
  refresh-style="flyingSuperman"
  refresh-bg-color="#fff"
  trigger="{{ trigger }}"
  loadMoreStatus="{{ status }}"
  bind:tolower="onTolower"
  bind:refresh="onRefresh"
  bind:restore="onRestore"
>
  <!-- 自定义navbar -->
  <li-navbar
    slot="navbar"
    title="滚动视图"
  />
  <!-- 视图内容区 -->
  <view
    slot="content-bar"
    class="content"
  >
    content
  </view>
</li-scroll-view>
```
!> 需要配合`li-scroll-view`组件使用，请查看[文档](/components/scroll-view)

## API

**Props**

| 参数             | 说明                                                                          | 类型    | 默认值  | 基础库  |
| ---------------- | ----------------------------------------------------------------------------- | ------- | ------- | ------- |
| refresh          | 是否开启下拉刷新                                                              | boolean | false   | >2.10.1 |
| refresh-style    | 下拉刷新动画组件名                                                            | boolean | false   | >2.10.1 |
| trigger          | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发 | number  | 100     | >2.10.1 |
| threshold        | 设置自定义下拉刷新阈值                                                        | boolean | false   | >2.10.1 |
| refresh-bg-color | 下拉刷新背景颜色                                                              | string  | #f9f9f9 | >2.10.1 |
| bgColor          | 内容区背景颜色                                                                | string  | #fff    | >2.10.1 |
| load-more-status | 上拉加载状态                                                                  | string  |         | >2.10.1 |
| upper-threshold  | 距顶部/左边多远时，触发 toupper 事件                                          | number  | false   | >2.10.1 |
| lower-threshold  | 距底部/右边多远时，触发 tolower 事件                                          | number  | false   | >2.10.1 |

| 事件名       | 说明                  | 回调参数 |
| ------------ | --------------------- | -------- |
| bind:toupper | 滚动到顶部/左边时触发 |          |
| bind:tolower | 滚动到底部/右边时触发 |          |
| bind:refresh | 自定义下拉刷新被触发  |          |
| bind:restore | 自定义下拉刷新被复位  |          |