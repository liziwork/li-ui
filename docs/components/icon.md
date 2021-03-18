# Icon 图标

?> 字体图标集，图标采集于[iconfont](https://www.iconfont.cn/)，可自定义iconfont字体样式文件，通过class类目引入。

## 组件引入
在app.json或index.json中引入组件，详细介绍见[快速开始](/quickstart)
``` json
{
	"usingComponents": {
		"li-icon": "@liziwork/li-ui/icon/index"
	}
}
```

## 使用组件

#### 基础使用
Icon的`name`属性支持多个类名，`src`属性支持本地和网络图片。
``` html
<!-- 图标名称 -->
<li-icon name="home" />
<!-- 自定义字体类目 -->
<li-icon name="custom-icon home" />
<!-- 小程序本地图片 -->
<li-icon src="/images/xxxx.jpg" />
<!-- 网络图片 -->
<li-icon src="https://xxxx.jpg" />
```

#### 图标颜色
``` html
<!-- 颜色名称 -->
<li-icon 
	name="home" 
	color="white"
/>
<!-- 16进制颜色 -->
<li-icon
	name="home"
	color="#fc0d1b"
/>
<!-- rgb颜色 -->
<li-icon
	name="home"
	color="rgba(255, 255, 255, 1)"
/>
```

#### 图标大小
``` html
<!-- rpx -->
<li-icon
	name="home"
	size="50rpx"
/>
<!-- px -->
<li-icon
	name="home"
	size="50px"
/>
<!-- em -->
<li-icon
	name="home"
	size="5em"
/>
```

#### 徽标提示
``` html
<!-- 圆点 -->
<li-icon
	name="notification"
	size="50rpx"
	dot
/>
<!-- 文字 -->
<li-icon
	name="message"
	size="50rpx"
	info="6"
/>
<!-- 自定义颜色 -->
<li-icon
	name="mail"
	size="50rpx"
	color="#29c2c1"
	dot-bg="#29c2c1"
	dot
/>
<li-icon
	name="star"
	size="50rpx"
	color="#090822"
	dot-bg="#090822"
	info="66"
/>
```

## API

**Props**

| 参数  | 说明                           | 类型    | 默认值  | 基础库 |
| ----- | ------------------------------ | ------- | ------- | ------ |
| name  | 图标名称                       | string  | -       |        |
| src   | 图标地址                       | string  | -       |        |
| size  | 图标大小                       | string  | 40rpx   |        |
| color | 图标颜色                       | string  | #111    |        |
| dot   | 是否显示图标右上角圆点提示     | boolean | false   |        |
| dotBg | 图标右上角圆点或者文字背景颜色 | string  | #ee0a24 |        |
| info  | 图标右上角提示文字             | string  | -       |        |