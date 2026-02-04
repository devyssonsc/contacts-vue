<script setup lang="ts">
  interface ContactListItemViewProps {
    contactName: string | null;
    timestamp: Date | null;
    callStatus: string | null;
  }

  defineProps<ContactListItemViewProps>();
</script>

<template>
  <div class="p-4 border-b border-gray-200 rounded-md hover:bg-zinc-500 flex justify-between">
    <div class="flex flex-col">
      <span class="font-medium">{{ contactName || "Contato Desconhecido"}}</span>
      <span class="text-gray-300 text-sm">{{ timestamp ? timestamp.toLocaleString() : '' }}</span>
    </div>
    <span class="text-gray-300">{{ callStatus }}</span>
  </div>
</template>

