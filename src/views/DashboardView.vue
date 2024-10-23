<script setup>
  import { useGlobalStore } from "@/stores/state.js";
  import {ref, computed, reactive} from 'vue';
  const globalStore = useGlobalStore();

  // console.log(globalStore.user)
  import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <p>{{ globalStore.fullName  }}</p>
</template>

<style scoped>

</style>
