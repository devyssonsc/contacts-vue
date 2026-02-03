<script setup lang="ts">
  interface MenuItemViewProps {
    label: string;
    to: string;
  }

  defineProps<MenuItemViewProps>();
</script>

<template>
  <RouterLink :to="to">{{ label }}</RouterLink>
</template>
