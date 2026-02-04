<script setup lang="ts">
  defineProps<{
    open: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();
</script>

<template>

  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      @click.self="emit('close')"
    >
      <div class="bg-zinc-800 p-6 rounded-lg w-full max-w-md">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
