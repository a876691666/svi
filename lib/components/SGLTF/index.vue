<template>
  <primitive :object="scene" v-if="scene" />
</template>

<script setup lang="ts">
import { shallowRef, watch } from "vue";
import { useGLTF } from "./useGLTF";

const props = withDefaults(
  defineProps<{
    url: string;
    draco?: boolean;
    decoderPath?: string;
    renderOrder?: number;
  }>(),
  {
    draco: false,
    decoderPath: "/draco/",
    renderOrder: 1,
  }
);

const emits = defineEmits<{
  loaded: [{}];
}>();

const scene = shallowRef<any>();
const gltf = useGLTF(props.url, {
  draco: props.draco,
  decoderPath: props.draco ? props.decoderPath : undefined,
});

const isLoaded = shallowRef(false);

watch(
  gltf.state,
  () => {
    const gltfScene = gltf.state.value?.scene;
    scene.value = gltfScene;
    if (scene.value && !isLoaded.value) {
      scene.value.renderOrder = props.renderOrder;
      isLoaded.value = true;
      emits("loaded", {
        gltf,
        scene: scene.value,
      });
    }
  },
  { immediate: true }
);
</script>
