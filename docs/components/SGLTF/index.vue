<template>
  <SCanvas height="400px">
    <TresCanvas>
      <TresPerspectiveCamera :position="[0, 0, 20]" />
      <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />
      <TresAmbientLight :intensity="0.5" />

      <!-- HERE -->
      <SGLTF url="/gltf/AttenuationTest.glb" draco />
    </TresCanvas>
  </SCanvas>
</template>
<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
</script>
