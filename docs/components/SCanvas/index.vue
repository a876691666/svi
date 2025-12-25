<template>
  <SCanvas height="400px">
    <template #ui>
      <SUI position="top-left" :offsetX="10" :offsetY="10"> 左上角内容 </SUI>
      <SUI position="center-right" :offsetX="20" :offsetY="0"> 侧边内容 </SUI>
    </template>

    <TresCanvas>
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <TresMesh>
        <TresBoxGeometry />
        <TresMeshBasicMaterial :color="0x00ff00" />
      </TresMesh>
    </TresCanvas>
  </SCanvas>
</template>
<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
</script>
