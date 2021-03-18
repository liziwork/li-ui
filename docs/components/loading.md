# Loading 加载动画

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
  "usingComponents": {
    "li-loading": "@liziwork/li-ui/loading/index"
  }
}
```

## 使用组件

#### 基础使用
``` html
<li-loading key="14" />
```

#### 自定义颜色
``` html
<li-loading
  key="1"
  color="#5374fb"
/>
```

#### 自定义大小
``` html
<li-loading
  key="11"
  scale="2"
/>
<li-loading
  key="11"
  scale="0.5"
/>
```

## API

**Props**

| 参数  | 说明        | 类型   | 默认值 | 基础库 |
| ----- | ----------- | ------ | ------ | ------ |
| color | 图标颜色    | string | #333   |        |
| key   | loading下标 | number | 0      |        |
| bg    | 背景色      | string | #fff   |        |
| scale | 缩放        | number | 0      |        |