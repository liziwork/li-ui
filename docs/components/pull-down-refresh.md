# PullDownRefresh 下拉刷新

?> 封装的动画样式，需要配合视图组件使用才能实现下拉刷新。

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
  "usingComponents": {
    "dog": "@liziwork/li-ui/animations/dog/index",
    "magician": "@liziwork/li-ui/animations/magician/index",
    "hot-balloon": "@liziwork/li-ui/animations/hot-balloon/index",
    "flying-superman": "@liziwork/li-ui/animations/flying-superman/index"
  }
}
```

## 使用组件

#### 基础使用
`moving`属性可直接执行动画

``` html
<dog moving />
<magician moving />
<hot-balloon moving />
<flying-superman moving />
```
!> 需要配合`li-scroll-view`组件使用，请查看[文档](/components/scroll-view)

## API

**Props**

| 参数   | 说明     | 类型    | 默认值 | 基础库 |
| ------ | -------- | ------- | ------ | ------ |
| moving | 执行动画 | boolean | false  |        |