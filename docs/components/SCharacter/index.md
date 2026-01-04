# SCharacter 说明

## 概述

`SCharacter` 组件是一个专为加载和显示三维角色模型而设计的 Vue 组件。它基于 `SGLTF` 组件，提供了对 GLTF/GLB 格式模型的支持，并且可以选择启用 Draco 压缩以优化加载性能。该组件适用于需要在三维场景中集成角色模型的应用场景。

## 特性

- 支持 GLTF/GLB 格式模型加载
- 可选 Draco 压缩支持
- 自定义渲染顺序
- 灵活的模型场景集成

## 使用示例

:::demo
components/SCharacter/index
:::

## Props

| 属性名      | 类型      | 默认值      | 说明                    |
| ----------- | --------- | ----------- | ----------------------- |
| url         | `string`  | -           | GLTF 模型文件路径       |
| draco       | `boolean` | `false`     | 是否启用 Draco 压缩解码 |
| decoderPath | `string`  | `'/draco/'` | Draco 解码器文件路径    |
| renderOrder | `number`  | `1`         | 渲染顺序                |
