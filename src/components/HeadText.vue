<script setup>
defineProps({
	className: {
		type: String,
	}
});
</script>

<template>
	<h1 :class="`font-bold xl:text-5xl text-3xl ${className}`">
		<slot></slot>
	</h1>
</template>
