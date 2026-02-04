<script setup lang="ts">
  interface MenuItemViewProps {
    label: string;
    to: string;
  }

  defineProps<MenuItemViewProps>();
</script>

<template>
  <div class="p-2 rounded-md bg-zinc-800 hover:bg-zinc-700">
    <RouterLink :to="to">{{ label }}</RouterLink>
  </div>
</template>
