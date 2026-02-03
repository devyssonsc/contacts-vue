<script setup lang="ts">
    import MenuView from '@/components/MenuView.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="border-b border-zinc-500 h-16 p-4">
      Header
    </header>
    <div class="flex">
      <aside class="w-64 p-4 border-r border-zinc-500 h-[calc(100vh-4rem)]">
        <MenuView />
      </aside>
      <main class="flex-1 p-4 h-[calc(100vh-4rem)] overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>
