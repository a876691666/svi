<template>
  <SCanvas height="400px">
    <TresCanvas>
      <TresPerspectiveCamera :position="[0, 1.6, 2.5]" :look-at="[0, 0.8, 0]" />
      <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />
      <TresAmbientLight :intensity="5" />

      <!-- HERE -->
      <SCharacter url="/nv.glb" draco @loaded="onLoaded" />
    </TresCanvas>
  </SCanvas>
</template>
<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";

const onLoaded = (obj: any) => {
  debugger;
};
</script>
