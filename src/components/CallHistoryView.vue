<script setup lang="ts">
  import { useCallsStore } from '@/stores/calls.store';
import TitleView from './TitleView.vue';
import CallItemView from './CallItemView.vue';

  const callsStore = useCallsStore();

  const userId = 1; // Simulated logged-in user ID

</script>

<template>
  <div class="flex flex-col">
    <TitleView title="Call History" subtitle="Recent calls" />
    <div class="flex flex-col gap-2 mt-4"
        v-if="callsStore.calls.length > 0">
        <CallItemView
          v-for="call in callsStore.calls"
          :key="call.id"
          :contactName="callsStore.getOtherContactName(call.id, userId)"
          :timestamp="callsStore.getCallTimestamp(call.id)"
          :callStatus="callsStore.getCallStatus(call.id, userId)"
        />
    </div>
    <div v-else>
      No calls found.
    </div>
  </div>
</template>
