# SafeArea 安全区占位符

?> 用于手机系统栏、刘海屏、苹果底部占位。

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
  "usingComponents": {
    "li-safe-area": "@liziwork/li-ui/safe-area/index"
  }
}
```

## 使用组件

#### 基础使用
``` html
<li-safe-area />
```

#### 占位区域
``` html
<li-safe-area area="top" />
<li-safe-area area="bottom" />
```

#### 背景色
``` html
<li-safe-area color="white" />
```
#### 删减高度
`height`用来减去节点自身高度
``` html
<li-safe-area height="30rpx" />
```

## API

**Props**

| 参数   | 说明     | 类型   | 默认值 | 基础库  |
| ------ | -------- | ------ | ------ | ------- |
| area   | 显示区域 | string | bottom | >2.14.1 |
| color  | 背景颜色 | string | -      | >2.14.1 |
| height | 删减高度 | string | 0px    | >2.14.1 |