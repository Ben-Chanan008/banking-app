<script setup>
	import HeadText from '../HeadText.vue';
	import Card from '../Card.vue';
	import { useGlobalStore } from "@/stores/state.js";
	import CardPhoto from '@/assets/images/card.png'
	import DebitCard from '../DebitCard.vue';
	const globalStore = useGlobalStore();
</script>

<template>
	<section>
		<HeadText class-name="text-center mb-8">My Cards</HeadText>
		<!-- <img :src="CardPhoto" alt="card-image"> -->
		<DebitCard />
	</section>
</template>

