<script setup lang="ts">
import { computed, ref } from "vue";
import FluentAnimEmoji from "./FluentAnimEmoji.vue";

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
const anim = ref(false);

const handleClick = () => {
  anim.value = !anim.value;
};

const url = computed(
  () =>
    `https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v2/assets/emoticons/${props.id}/default/100_f.png`
);
</script>

<template>
  <button style="display: flex; align-items: center" @click="handleClick">
    <template v-if="anim">
      <FluentAnimEmoji
        :id="id"
        :keywords="keywords"
        :unicode="unicode"
        :animation="animation"
      />
    </template>
    <template v-else>
      <img :src="url" />
      <span>{{ unicode }}</span>
      <span>{{ keywords.join(",") }}</span>
    </template>
  </button>
</template>
