<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { fakeLogin, fakeRegister } from '@/services/auth.service';
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import LoginForm from '../components/auth/LoginForm.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';

const router = useRouter();
const auth = useAuthStore();

const error = ref('');

const mode = ref<'login' | 'register'>('login')

function toggleMode() {
  mode.value = mode.value === 'login' ? 'register' : 'login'
  error.value = '';
}

async function handleLogin(payload: { email: string; password: string }) {
  error.value = '';

  try {
    const result: any = await fakeLogin(payload.email, payload.password);
    auth.login(result.user, result.token);
    router.push({ name: 'ContactList' });
  } catch (err: any) {
    error.value = err.message;
  }
}

async function handleRegister(payload: { name: string; email: string; password: string }) {
  error.value = '';

  try{
    const result: any = await fakeRegister(payload.name, payload.email, payload.password);
    auth.login(result.user, result.token);
    router.push({ name: 'ContactList' });
  } catch (err: any) {
    error.value = err.message;
    return;
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 h-screen w-full justify-center items-center">

    <LoginForm
      v-if="mode === 'login'"
      @submit="handleLogin"
    />

    <RegisterForm
      v-else
      @submit="handleRegister"
    />

    <button
      class="text-sm text-purple-400 hover:underline"
      @click="toggleMode"
    >
      {{
        mode === 'login'
          ? 'Ainda não tem conta? Criar conta'
          : 'Já tem conta? Entrar'
      }}
    </button>

    <p v-if="error" class="text-red-500 text-sm">
      {{ error }}
    </p>
  </div>
</template>
