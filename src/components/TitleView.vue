<script setup lang="ts">
  interface TitleViewProps {
    title: string;
    subtitle?: string;
  }

  defineProps<TitleViewProps>();
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p v-if="subtitle" class="text-sm text-gray-600">{{ subtitle }}</p>
  </div>
</template>
