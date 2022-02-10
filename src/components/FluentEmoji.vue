<script setup lang="ts">
import { computed } from "vue";

interface Emoticon {
  id: string;
  keywords: string[];
  unicode: string;
}

const props = defineProps<Emoticon>();

const url = computed(
  () =>
    `https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v2/assets/emoticons/${props.id}/default/100_f.png`
);
</script>

<template>
  <div style="display: flex; align-items: center">
    <img :src="url" />
    <span>{{ unicode }}</span>
    <span>{{ keywords.join(",") }}</span>
  </div>
</template>
