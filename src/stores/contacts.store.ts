import { defineStore } from "pinia";
import { ref } from "vue";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    contacts: ref<{ number: number; name: string }[]>([
      { number: 123456789, name: "John Doe" },
      { number: 987654321, name: "Jane Smith" },
      { number: 555666777, name: "Alice Johnson" }
    ]),
  }),
  actions: {
    createContact(number: number, name: string) {
      this.contacts.push({ number, name });
    },

    deleteContact(number: number) {
      this.contacts = this.contacts.filter(
        (contact) => contact.number !== number
      );
    }
  }
})
