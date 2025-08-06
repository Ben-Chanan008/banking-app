<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="relative h-[88vh]">
		<ul class="flex gap-3 h-full justify-center fixed flex-col">
			<RouterLink :to="{name: 'dashboard'}"><li><i class="far fa-home"></i></li></RouterLink>
			<RouterLink :to="{name: 'wallet'}"><li><i class="far fa-wallet"></i></li></RouterLink>
			<li><i class="far fa-face-smile"></i></li>
		</ul>
	</div>
</template>

<style scoped>
</style>
