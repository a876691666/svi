<template>
  <SCanvas height="400px">
    <template #ui>
      <SUI position="top-left" :offsetX="10" :offsetY="10">
        <div class="flex gap-2">
          <button class="square-btn">1</button>
          <button class="square-btn">2</button>
          <button class="square-btn">3</button>
        </div>
      </SUI>
      <SUI position="bottom-left" :offsetX="10" :offsetY="10">
        <div class="flex flex-col gap-2">
          <button class="square-btn">1</button>
          <button class="square-btn">2</button>
          <button class="square-btn">3</button>
        </div>
      </SUI>
      <SUI position="center-right" :offsetX="20" :offsetY="0">
        <div class="flex flex-col gap-2">
          <button class="square-btn">4</button>
          <button class="square-btn">5</button>
        </div>
      </SUI>
    </template>

    <TresCanvas>
      <TresPerspectiveCamera :position="[3, 3, 3]" :lookAt="[0, 0, 0]" />
      <TresDirectionalLight :position="[3, 2, 5]" :intensity="1.0" />
      <TresMesh>
        <TresBoxGeometry />
        <TresMeshStandardMaterial :color="0x00ff00" />
      </TresMesh>
    </TresCanvas>
  </SCanvas>
</template>
<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
</script>
<style scoped>
.square-btn {
  width: 40px;
  height: 40px;
  border: 2px solid #3b82f6;
  background-color: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.square-btn:hover {
  background-color: #3b82f6;
  color: white;
  transform: scale(1.05);
}

.square-btn:active {
  transform: scale(0.95);
}
</style>
