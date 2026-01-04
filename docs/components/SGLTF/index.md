# SGLTF 说明

## 概述

SGLTF 组件用来加载和显示 GLTF 格式的 3D 模型文件。

## 特性

- 支持 GLTF/GLB 格式模型加载
- 可选 Draco 压缩支持
- 自定义渲染顺序
- 灵活的模型场景集成

## 使用示例

:::demo
components/SGLTF/index
:::

### 参数透传

:::demo
components/SGLTF/props
:::

## Props

| 属性名      | 类型      | 默认值      | 说明                    |
| ----------- | --------- | ----------- | ----------------------- |
| url         | `string`  | -           | GLTF 模型文件路径       |
| draco       | `boolean` | `false`     | 是否启用 Draco 压缩解码 |
| decoderPath | `string`  | `'/draco/'` | Draco 解码器文件路径    |
| renderOrder | `number`  | `1`         | 渲染顺序                |
