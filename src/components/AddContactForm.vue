<script setup lang="ts">
  import { useContactsStore } from '@/stores/contacts.store';
  import { ref, watch } from 'vue';
  import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js';
  import type { CountryCode } from 'libphonenumber-js';
  import { countries } from 'country-flag-icons';
  import "country-flag-icons/3x2/flags.css";

  const country = ref<CountryCode>('PT');
  const isTouched = ref(false);
  const isValid = ref(true)

  const name = ref('');
  const phoneNumber = ref('');
  const phoneE164 = ref<string | undefined>(undefined);

  const openOptions = ref(false);

  const contactsStore = useContactsStore();

  const emit = defineEmits<{
    (e: 'submit'): void;
  }>();

  watch([phoneNumber, country], () => {
    const formatter = new AsYouType(country.value)
    const formatted = formatter.input(phoneNumber.value)

    phoneNumber.value = formatted || phoneNumber.value

    const phone = parsePhoneNumberFromString(phoneNumber.value, country.value)
    phoneE164.value = phone?.format('E.164')
    isValid.value = phone?.isValid() ?? false
  })

  function submit() {
    contactsStore.createContact(name.value, phoneNumber.value, country.value);
    emit('submit');
  }

  function changeCountry(newCountry: CountryCode) {
    country.value = newCountry;
  }
</script>

<template>
  <h2 class="text-lg font-semibold mb-4">New Contact</h2>

  <form @submit.prevent="submit" class="space-y-4">
    <input
      v-model="name"
      class="w-full p-2 rounded bg-zinc-700"
      placeholder="Nome"
      required
    />

    <!-- <vue-tel-input v-model="phoneNumber" mode="international" required></vue-tel-input> -->

    <div class="space-y-2">
      <div class="flex justify-start items-center">
        <div :class="`relative h-full bg-zinc-700 rounded hover:bg-zinc-${openOptions ? 600 : 700} cursor-pointer`" @click="openOptions = !openOptions">
          <span class="h-full flex items-center gap-2 p-3 rounded cursor-pointer">
            <span :class="`flag:${country}`"></span>
            <span :class="`text-zinc-400 text-xs ${openOptions ? 'transform rotate-180' : ''}`">▼</span>
          </span>
          <ul :class="`absolute -bottom-half left-0 rounded mt-1 h-64 overflow-auto custom-scrollbar ${openOptions ? '' : 'hidden'}`">
            <li v-for="c in countries" :key="c" class="flex items-center gap-2 p-3 bg-zinc-700 hover:bg-zinc-600 cursor-pointer" @click="changeCountry(c as CountryCode)">
              <span :class="`flag:${c}`"></span>
              <strong>{{ c }}</strong>
            </li>
          </ul>
        </div>
        <input
          v-model="phoneNumber"
          @focus="isTouched = true"
          class="w-full p-2 rounded bg-zinc-700 ml-2"
          placeholder="Número de telefone"
          required
        />
      </div>

      <p v-if="isTouched && !isValid" class="text-red-500 text-sm">
        Número inválido para o país selecionado
      </p>
    </div>

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
