<script setup>
  import { useGlobalStore } from "@/stores/state.js";
  import {ref, computed, reactive} from 'vue';
  const globalStore = useGlobalStore();
  import Sidebar from "@/components/Sidebar.vue";
  // console.log(globalStore.user)
import Navbar from "@/components/Navbar.vue";
import SectionOne from "@/components/dashboard/SectionOne.vue";
import SectionTwo from "@/components/dashboard/SectionTwo.vue";
</script>

<template>
	<Navbar />
	<section class="px-4 relative mt-16 grid gap-2 grid-cols-50/1/1">
		<Sidebar />
		<SectionOne />
		<SectionTwo />
	</section>

</template>

<style scoped>

</style>
