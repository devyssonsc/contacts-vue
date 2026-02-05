<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'submit', payload: { email: string; password: string }): void
}>()

const email = ref('')
const password = ref('')

function submit() {
  emit('submit', {
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <div class="flex flex-col gap-4 w-full justify-center items-center">
    <h1 class="text-4xl font-black antialiased">Login</h1>

    <form @submit.prevent="submit" class="space-y-4">
      <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="w-full p-2 rounded bg-zinc-700"
      required
      />

      <input
      v-model="password"
      type="password"
      placeholder="Senha"
      class="w-full p-2 rounded bg-zinc-700"
      required
      />

      <button type="submit" class="btn btn-primary w-full">
        Entrar
      </button>
    </form>
  </div>
</template>
