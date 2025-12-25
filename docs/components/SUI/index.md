# SUI 说明

SUI 组件是 SVI 提供的一个智能 UI 定位组件，用于在父容器中精确定位 UI 元素。该组件采用绝对定位方式，支持九宫格式的灵活布局，并提供偏移量调整功能。

## 特性

### 九宫格定位系统

SUI 组件支持 9 种预定义的位置，覆盖容器的所有角落、边缘中心和正中心：

- **顶部**: `top-left`、`top-center`、`top-right`
- **中部**: `center-left`、`center-right`
- **底部**: `bottom-left`、`bottom-center`、`bottom-right`

### 精确偏移控制

支持通过 `offsetX` 和 `offsetY` 属性对元素位置进行像素级微调，满足精确布局需求。

### 应用场景

- 三维场景中的 UI 叠加层
- 游戏 HUD 界面元素
- 视频播放器控制栏
- 图片查看器工具栏
- 任何需要精确定位的 UI 元素

## 使用示例

:::demo
components/SUI/index
:::

## Props

| 属性名   | 类型                                                                                                                                 | 默认值       | 说明                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------ |
| position | `'top-left' \| 'top-center' \| 'top-right' \| 'center-left' \| 'center-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'top-left'` | UI 元素的位置                  |
| offsetX  | `number`                                                                                                                             | `0`          | 水平方向的偏移量（单位：像素） |
| offsetY  | `number`                                                                                                                             | `0`          | 垂直方向的偏移量（单位：像素） |
