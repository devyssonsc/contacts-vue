import { defineStore } from "pinia";
import { ref } from "vue";
import type { Contact } from "@/models/contact";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    contacts: ref<Contact[]>([
      {
        id: 1,
        name: "John Doe",
        phoneNumber: "123-456-7890"
      },
      {
        id: 2,
        name: "Jane Smith",
        phoneNumber: "987-654-3210"
      },
      {
        id: 3,
        name: "Alice Johnson",
        phoneNumber: "555-123-4567"
      }
    ])
  }),
  getters: {
    getById: (state) => {
      return (id: number) => state.contacts.find(contact => contact.id === id);
    }
  },
  actions: {
    createContact(name: string, phoneNumber: string) {
      const id = this.getGreatterContactId() + 1;
      this.contacts.push({ id, name, phoneNumber });
    },

    deleteContact(id: number) {
      this.contacts = this.contacts.filter(
        (contact) => contact.id !== id
      );
    },
    getGreatterContactId(): number {
      if (this.contacts.length === 0) {
        return 0;
      }
      return Math.max(...this.contacts.map(contact => contact.id));
    }
  }
})
