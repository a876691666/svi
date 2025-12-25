<script setup lang="ts">
import { computed } from "vue";

type Position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-left"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

const props = withDefaults(
  defineProps<{
    position?: Position;
    offsetX?: number;
    offsetY?: number;
  }>(),
  {
    position: "top-left",
    offsetX: 0,
    offsetY: 0,
  }
);

const positionStyle = computed(() => {
  const styles: Record<string, string> = {
    position: "absolute",
  };

  // 处理垂直方向
  if (props.position.startsWith("top")) {
    styles.top = `${props.offsetY}px`;
  } else if (props.position.startsWith("bottom")) {
    styles.bottom = `${props.offsetY}px`;
  } else if (props.position.startsWith("center")) {
    styles.top = "50%";
    styles.transform = `translateY(calc(-50% + ${props.offsetY}px))`;
  }

  // 处理水平方向
  if (props.position.endsWith("left")) {
    styles.left = `${props.offsetX}px`;
  } else if (props.position.endsWith("right")) {
    styles.right = `${props.offsetX}px`;
  } else if (props.position.includes("center")) {
    styles.left = "50%";
    if (styles.transform) {
      styles.transform = `translate(calc(-50% + ${props.offsetX}px), calc(-50% + ${props.offsetY}px))`;
    } else {
      styles.transform = `translateX(calc(-50% + ${props.offsetX}px))`;
    }
  }

  return styles;
});
</script>

<template>
  <div :style="positionStyle" class="s-ui">
    <slot />
  </div>
</template>

<style scoped>
.s-ui {
  width: fit-content;
  height: fit-content;
}
</style>
