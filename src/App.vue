<script setup lang="ts">
import { computed, onMounted, ref } from "@vue/runtime-core";
import FluentEmoji from "./components/FluentEmoji.vue";

interface Animation {
  firstFrame: number;
  fps: number;
  framesCount: number;
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
    "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/metadata/fa6ddff9337d4d55bf685c5241ed3710/ja-jp.json"
  );
  const data = await result.json();
  list.value = data.categories;
});
</script>

<template>
  <div class="h-screen px-2 py-1 flex flex-col">
    <!-- カテゴリ表示 -->
    <div class="flex gap-2 px-2 py-2 sticky top-0">
      <button
        v-for="category in list"
        :key="category.id"
        class="btn btn-primary hover:shadow px-2 py-1 rounded-lg grow"
        @click="item = category.title"
      >
        {{ category.title }}
      </button>
    </div>

    <div
      v-if="disp && disp.emoticons.length > 0"
      class="px-8 py-8 grow grid grid-cols-8 gap-8 justify-center overflow-y-scroll"
    >
      <FluentEmoji
        v-for="icon in disp.emoticons"
        :key="icon.id"
        :id="icon.id"
        :keywords="icon.keywords"
        :unicode="icon.unicode"
        :animation="icon.animation"
      />
    </div>
  </div>
</template>
