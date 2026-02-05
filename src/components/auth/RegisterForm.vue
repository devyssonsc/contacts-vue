<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'submit', payload: {
    name: string
    email: string
    password: string
  }): void
}>()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

function submit() {
  error.value = ''

  if (password.value !== confirmPassword.value) {
    error.value = 'As senhas não coincidem'
    return
  }

  emit('submit', {
    name: name.value,
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <div class="flex flex-col gap-4 w-full justify-center items-center">
    <h1 class="text-4xl font-black antialiased">Criar conta</h1>
    <form @submit.prevent="submit" class="space-y-4">
      <input
        v-model="name"
        placeholder="Nome"
        class="w-full p-2 rounded bg-zinc-700"
        required
      />

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full p-2 rounded bg-zinc-700"
        required
      />

      <div class="flex gap-2">

        <input
        v-model="password"
        type="password"
        placeholder="Senha"
        class="w-1/2 p-2 rounded bg-zinc-700"
        required
        />

        <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirmar senha"
        class="w-1/2 p-2 rounded bg-zinc-700"
        required
        />
      </div>

      <p v-if="error" class="text-red-500 text-sm">
        {{ error }}
      </p>

      <button type="submit" class="btn btn-primary w-full">
        Criar conta
      </button>
    </form>
  </div>
</template>
