<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  source: string;
  path: string;
  rawSource: string;
  description: string;
}>();

const showCode = ref(false);

const toggleCode = () => {
  showCode.value = !showCode.value;
};
</script>

<template>
  <div>
    <div v-html="decodeURIComponent(description)"></div>
    <div class="rounded-md border-2 border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="px-4 py-8 vp-raw">
        <slot name="source" />
      </div>

      <div
        class="flex items-center justify-center border-t border-gray-200 dark:border-gray-700 h-11 bg-gray-50 dark:bg-gray-800 -mt-px text-gray-500 dark:text-gray-400 cursor-pointer sticky left-0 right-0 bottom-0 z-10 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="toggleCode"
      >
        <span class="text-sm ml-2.5">{{ showCode ? "隐藏代码" : "显示代码" }}</span>
      </div>

      <div
        class="bg-(--vp-code-block-bg) py-0.5"
        v-show="showCode"
        v-html="decodeURIComponent(source)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* 移除了所有多余的 CSS，改用 Tailwind 工具类 */
</style>
