import type { Call } from "@/models/call";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useContactsStore } from "./contacts.store";

export const useCallsStore = defineStore("calls", {
  state: () => ({
    calls: ref<Call[]>([])
  }),
  actions: {
    createCall(callerId: number, receiverId: number) {
      const id = this.getGreaterCallId() + 1;
      const timestamp = new Date();
      this.calls.push({ id, callerId, receiverId, timestamp });
    },

    getGreaterCallId(): number {
      if (this.calls.length === 0) {
        return 0;
      }
      return Math.max(...this.calls.map(call => call.id));
    },

    getOtherContactName(callId: number, userId: number) {
      const call = this.calls.find(c => c.id === callId);
      if (!call) {
        return null;
      }
      const otherContactId = call.callerId === userId ? call.receiverId : call.callerId;
      const contactsStore = useContactsStore();
      const otherContact = contactsStore.getById(otherContactId);
      return otherContact ? otherContact.name : null;
    },

    getCallStatus(callId: number, userId: number) {
      const call = this.calls.find(c => c.id === callId);
      if (!call) {
        return null;
      }
      return call.callerId === userId ? "Outgoing" : "Incoming";
    },

    getCallTimestamp(callId: number) {
      const call = this.calls.find(c => c.id === callId);
      return call ? call.timestamp : null;
    }
  }
});
