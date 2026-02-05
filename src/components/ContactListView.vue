<script setup lang="ts">
  import { useContactsStore } from '@/stores/contacts.store';
  import TitleView from './TitleView.vue';
  import ContactListItemView from './ContactListItemView.vue';
  import BaseModalView from './BaseModalView.vue';
  import { ref } from 'vue';
  import AddContactForm from './AddContactForm.vue';
  import { useCallsStore } from '@/stores/calls.store';
import { useRouter } from 'vue-router';

  const router = useRouter();

  const contactsStore = useContactsStore();

  const isModalOpen = ref(false);

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  const callsStore = useCallsStore();

  function createCallToContact(contactId: number) {
    const userId = 1; // Simulated logged-in user ID
    callsStore.createCall(userId, contactId);
    router.push({ name: 'CallHistory' });
  }
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between align center">
      <TitleView title="Contact List" subtitle="Details of all contacts" />
      <button class="btn btn-primary" @click="openModal">Add Contact</button>
      <BaseModalView
        :open="isModalOpen"
        @close="closeModal"
      >
        <AddContactForm @submit="closeModal" />
    </BaseModalView>
    </div>
    <div
      class="flex flex-col gap-4"
      v-if="contactsStore.contacts.length > 0">
      <div
      class="flex w-full gap-2"
        v-for="contact in contactsStore.contacts"
        :key="contact.id"
      >
        <button class="btn btn-danger" @click="contactsStore.deleteContact(contact.id)">Delete</button>
        <ContactListItemView
        :name="contact.name"
        :phoneE164="contact.phoneE164"
        @click="createCallToContact(contact.id)"
        />
      </div>
    </div>
    <div v-else>
      No contacts found.
    </div>
  </div>
</template>
