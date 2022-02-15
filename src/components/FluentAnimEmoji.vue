<script setup lang="ts">
import { computed, ref } from "vue";

interface Animation {
  firstFrame: number;
  fps: number;
  framesCount: number;
}

interface Emoticon {
  id: string;
  keywords: string[];
  unicode: string;
  animation: Animation;
}

const props = defineProps<Emoticon>();

const url = computed(
  () =>
    `https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v2/assets/emoticons/${props.id}/default/100_anim_f.png`
);
const objectPositionY = ref((props.animation.firstFrame - 1) * -100);

setInterval(() => {
  objectPositionY.value -= 100;
  if (objectPositionY.value <= -(props.animation.framesCount - 1) * 100)
    objectPositionY.value = 0;
}, 1000 / props.animation.fps);
const style = computed(() => `object-position: 0px ${objectPositionY.value}px`);
</script>

<template>
  <div style="display: flex; align-items: center">
    <img class="animation" :style="style" :src="url" />
    <span>{{ unicode }}</span>
    <span>{{ keywords.join(",") }}</span>
  </div>
</template>

<style scoped>
.animation {
  height: 100px;
  width: 100px;
  object-fit: cover;
}
</style>
