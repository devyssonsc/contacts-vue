import { defineStore } from "pinia";
import { ref } from "vue";
import type { Contact } from "@/models/contact";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    contacts: ref<Contact[]>([
      {
        id: 1,
        name: "John Doe",
        phoneE164: "+14155552671"
      },
      {
        id: 2,
        name: "Jane Smith",
        phoneE164: "+13239876543"
      },
      {
        id: 3,
        name: "Alice Johnson",
        phoneE164: "+13125550199"
      }
    ])
  }),
  getters: {
    getById: (state) => {
      return (id: number) => state.contacts.find(contact => contact.id === id);
    }
  },
  actions: {
    createContact(name: string, phoneE164: string) {
      const id = this.getGreatterContactId() + 1;
      this.contacts.push({ id, name, phoneE164 });
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
