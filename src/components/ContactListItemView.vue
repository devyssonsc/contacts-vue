<script setup lang="ts">
  interface ContactListItemViewProps {
    number: number;
    name: string;
  }

  defineProps<ContactListItemViewProps>();
</script>

<template>
  <div class="p-4 border-b border-gray-200 rounded-md hover:bg-zinc-500 flex justify-between">
    <span class="font-medium">{{ name }}</span>
    <span class="text-gray-300">{{ number }}</span>
  </div>
</template>
