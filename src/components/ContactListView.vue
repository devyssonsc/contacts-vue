<script setup lang="ts">
  import { useContactsStore } from '@/stores/contacts.store';
import TitleView from './TitleView.vue';
import ContactListItemView from './ContactListItemView.vue';

  const contactsStore = useContactsStore();
</script>

<template>
  <TitleView title="Contact List" subtitle="Details of all contacts" />
  <div class="flex flex-col gap-4">
    <ContactListItemView v-for="contact in contactsStore.contacts"
    :key="contact.number"
    :number="contact.number"
    :name="contact.name"
    />
  </div>
</template>
