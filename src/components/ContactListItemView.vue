<script setup lang="ts">
import parsePhoneNumberFromString from 'libphonenumber-js';


  interface ContactListItemViewProps {
    name: string;
    phoneE164: string;
  }

  const props = defineProps<ContactListItemViewProps>();

  const phone = parsePhoneNumberFromString(props.phoneE164);
  const formattedPhone = phone?.formatInternational();
</script>

<template>
  <div class="flex-1 p-4 border-b border-gray-200 rounded hover:bg-zinc-800 flex justify-between cursor-pointer">
    <span class="font-medium">{{ props.name }}</span>
    <span class="text-gray-300">{{ formattedPhone }}</span>
  </div>
</template>
