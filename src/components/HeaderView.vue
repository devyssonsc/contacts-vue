<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

function logout() {
  auth.logout();
  router.push({ name: 'Auth' });
}
</script>

<template>
  <header class="w-full h-16 p-4 flex justify-between items-center border-b border-zinc-500">
    <h2 class="text-xl font-black antialiased">MyPhone</h2>
    <div class="flex gap-2">
      <div class="flex flex-col items-end justify-center">
        <span class="text-zinc-300 text-sm">{{ auth.user?.name }}</span>
        <span class="text-zinc-400 text-xs">{{ auth.user?.email }}</span>
      </div>
      <button class="btn btn-danger" @click="logout">Logout</button>
    </div>
  </header>
</template>
