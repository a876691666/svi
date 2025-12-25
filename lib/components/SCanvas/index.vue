<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
  }>(),
  {
    width: "100%",
    height: "100%",
  }
);
</script>

<template>
  <div
    :style="{ width: props.width, height: props.height }"
    style="position: relative; overflow: hidden"
  >
    <div style="position: absolute; top: 0; left: 0; z-index: 2000; width: 100%; height: 100%">
      <slot name="ui" />
    </div>
    <div style="position: absolute; top: 0; left: 0; z-index: 1000; width: 100%; height: 100%">
      <slot />
    </div>
  </div>
</template>
