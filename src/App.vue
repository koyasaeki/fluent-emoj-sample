<script setup lang="ts">
import { computed, onMounted, ref } from "@vue/runtime-core";
import FluentEmoji from "./components/FluentEmoji.vue";

interface Animation {
  firstFrame: number;
  fps: number;
  framesCount: 53;
}

interface Emoticon {
  id: string;
  etag: string;
  diverse: boolean;
  description: string;
  animation: Animation;
  keywords: string[];
  shortcuts: string[];
  unicode: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  emoticons: Emoticon[];
}

const list = ref<Category[]>([]);
const item = ref<string>("スマイル");
const disp = computed(() => list.value.find((x) => x.title === item.value));

onMounted(async () => {
  const result = await fetch(
    "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/metadata/8479a21d47934aed85d6d6f236847484/ja-jp.json"
  );
  const data = await result.json();
  list.value = data.categories;
});
</script>

<template>
  <div class="h-screen px-2 py-1">
    <div class="flex gap-1 px-1">
      <button
        v-for="category in list"
        :key="category.id"
        class="hover:shadow"
        @click="item = category.title"
      >
        {{ category.title }}
      </button>
    </div>

    <div v-if="disp && disp.emoticons.length > 0">
      <div v-for="icon in disp.emoticons" :key="icon.id">
        <FluentEmoji v-bind="icon" />
      </div>
    </div>
  </div>
</template>
