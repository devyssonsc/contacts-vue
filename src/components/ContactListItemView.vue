<script setup lang="ts">

  interface ContactListItemViewProps {
    name: string;
    phoneNumber: string;
    contryCode: string;
  }

  defineProps<ContactListItemViewProps>();
</script>

<template>
  <div class="flex-1 p-4 border-b border-gray-200 rounded hover:bg-zinc-500 flex justify-between">
    <span class="font-medium">{{ name }}</span>
    <span class="text-gray-300">({{ contryCode }}) {{ phoneNumber }}</span>
  </div>
</template>
