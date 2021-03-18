# Image 图片

?> 封装版`image`组件，支持loading加载提示、加载失败提示。

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
	"usingComponents": {
		"li-image": "@liziwork/li-ui/image/index"
	}
}
```

## 使用组件

#### 基础使用
Icon的`src`属性支持本地和网络图片，`width`图片宽度，`height`图片高度，支持rpx和px，默认继承父级节点长宽。
``` html
<!-- 小程序本地图片 -->
<li-image 
	width="200rpx"
	height="200rpx"
	src="/images/xxxx.jpg" 
/>
<!-- 网络图片 -->
<li-image 
	src="https://xxxx.jpg"
	width="200rpx"
	height="200rpx"
/>
```

#### 圆角
``` html
<li-image
	width="200rpx"
	height="200rpx"
	src="{{ imageSrc }}"
	round
/>
<li-image
	width="200rpx"
	height="200rpx"
	src="{{ imageSrc }}"
	radius="20rpx"
/>
```

#### 裁剪
继承原生image组件裁剪功能，请看[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)。
``` html
<li-image
	mode="widthFix"
	width="200rpx"
	height="200rpx"
	src="{{ imageSrc }}"
/>
```

#### 加载提示
``` html
<!-- 默认加载提示 -->
<li-image
	width="200rpx"
	height="200rpx"
	src="{{ imageSrc }}"
/>
<!-- 自定义加载提示 -->
<li-image
	width="200rpx"
	height="200rpx"
	loading-slot
>
	<li-loading
		slot="loading"
		key="20"
		color="#aaa"
		scale="0.5"
	/>
</li-image>
```

#### 失败提示
``` html
<!-- 默认提示 -->
<li-image
	width="200rpx"
	height="200rpx"
	src="{{ imageSrc }}"
/>
<!-- 自定义提示 -->
<li-image
	width="200rpx"
	height="200rpx"
	error-slot
>
	<view
		slot="error"
		style="font-size: 26rpx;color: #555;"
	>
		加载失败
	</view>
</li-image>
```

## API

**Props**

| 参数        | 说明                   | 类型    | 默认值 | 基础库 |
| ----------- | ---------------------- | ------- | ------ | ------ |
| src         | 图片地址               | string  | -      |        |
| width       | 宽度                   | string  | 100%   |        |
| height      | 高度                   | string  | 100%   |        |
| round       | 是否显示圆形           | boolean | false  |        |
| radius      | 圆角大小               | string  | 0      |        |
| mode        | 裁剪模式               | string  | none   |        |
| bgColor     | 背景颜色               | string  | f7f7f7 |        |
| loadingSlot | 是否自定义加载提示     | boolean | false  |        |
| errorSlot   | 是否自定义加载失败提示 | boolean | false  |        |

**Events**

| 事件名      | 说明         | 回调参数                |
| ----------- | ------------ | ----------------------- |
| bind:loaded | 图片加载完成 | detail: {width, height} |
| bind:error  | 图片加载失败 | errMsg: String          |