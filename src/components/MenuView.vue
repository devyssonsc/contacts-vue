<script setup lang="ts">
  import MenuItemView from './MenuItemView.vue';
</script>

<template>
  <nav class="flex flex-col">
    <MenuItemView label="Contact List" to="/contact-list" />
    <MenuItemView label="Call History" to="/call-history" />
  </nav>
</template>
