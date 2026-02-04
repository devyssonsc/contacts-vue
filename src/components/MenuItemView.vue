<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

  interface MenuItemViewProps {
    label: string;
    to: string;
  }

  defineProps<MenuItemViewProps>();

  const route = useRoute();
  const path = ref(route.path);

  watch(route, (newRoute) => {
    path.value = newRoute.path;
  });
</script>

<template>
  <RouterLink :class="`p-2 rounded-md ${path === to ? 'bg-zinc-800' : ''} hover:bg-zinc-700`" :to="to">{{ label }}</RouterLink>
</template>
