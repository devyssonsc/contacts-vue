<script setup lang="ts">
  import { useContactsStore } from '@/stores/contacts.store';
  import { ref } from 'vue';

  const emit = defineEmits<{
    (e: 'submit'): void;
  }>();

  const name = ref('');
  const phoneNumber = ref('');

  const contactsStore = useContactsStore();

  function submit() {
    contactsStore.createContact(name.value, phoneNumber.value);
    emit('submit');
  }
</script>

<template>
  <h2 class="text-lg font-semibold mb-4">New Contact</h2>

  <form @submit.prevent="submit" class="space-y-4">
    <input
      v-model="name"
      class="w-full p-2 rounded bg-zinc-700"
      placeholder="Nome"
    />

    <input
      v-model="phoneNumber"
      class="w-full p-2 rounded bg-zinc-700"
      placeholder="Telefone"
    />

    <div class="flex justify-end gap-2">
      <button type="button" class="btn btn-secondary" @click="emit('submit')">
        Cancelar
      </button>
      <button type="submit" class="btn btn-primary">
        Salvar
      </button>
    </div>
  </form>
</template>
