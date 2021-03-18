# Divider 分割线

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
	"usingComponents": {
		"li-divider": "@liziwork/li-ui/divider/index"
	}
}
```

## 使用组件

#### 基础使用
``` html
<li-divider />
```

#### 显示文本
``` html
<li-divider text="文本" />
```

#### 虚线
``` html
<li-divider dashed />
<li-divider
	dashed
	text="文本"
/>
```

#### 文本位置
``` html
<li-divider
	text="文本"
	position="left"
/>
<li-divider
	text="文本"
	position="center"
/>
<li-divider
	text="文本"
	position="right"
/>
```

#### 自定义样式
``` html
<li-divider
	text="文本"
	color="#1989fa"
	border-color="#1989fa"
	font-size="30rpx"
/>
<li-divider
	text="文本"
	custom-style="--color: red; --border-color: red"
/>
```

#### 自定义内容
`safe-area`可开启底部安全区占位
``` html
<li-divider
	custom
	safe-area
>
	<li-loading
		key="14"
		scale="0.7"
	/>
</li-divider>
```

## API

**Props**

| 参数         | 说明                   | 类型    | 默认值 | 基础库  |
| ------------ | ---------------------- | ------- | ------ | ------- |
| text         | 文字内容               | string  | -      |         |
| dashed       | 是否显示虚线           | boolean | false  |         |
| position     | 文字显示位置           | string  | center |         |
| color        | 文字颜色               | string  | #aaa   |         |
| border-color | 线条颜色               | string  | #eee   |         |
| font-size    | 字体大小               | string  | 28rpx  |         |
| safe-area    | 是否开启底部安全区占位 | boolean | false  | >2.14.1 |
| custom       | 是否开启自定义内容插槽 | boolean | false  |         |
| custom-style | 自定义样式             | string  | -      |         |
