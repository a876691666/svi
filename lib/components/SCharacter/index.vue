<template>
  <SGLTF :url="url" ref="gltf" @loaded="onLoaded" />
</template>

<script setup lang="ts">
import type SGLTF from "../SGLTF";

const emits = defineEmits<{
  loaded: any[];
}>();

const props = withDefaults(
  defineProps<{
    url: string;
  }>(),
  {}
);

const onLoaded = (...args: any[]) => {
  emits("loaded", ...args);
};
</script>
