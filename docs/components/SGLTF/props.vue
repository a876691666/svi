<template>
  <SCanvas height="400px">
    <TresCanvas>
      <TresPerspectiveCamera :position="[0, 0, 20]" />
      <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />
      <TresAmbientLight :intensity="0.5" />

      <!-- HERE -->
      <SGLTF url="/gltf/AttenuationTest.glb" draco :scale="0.8" :rotation="[-0.8, 0, 0]" />
    </TresCanvas>
  </SCanvas>
</template>
<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
</script>
