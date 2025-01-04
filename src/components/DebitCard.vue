<script setup>
	import Card from './Card.vue';
	import HeadText from './HeadText.vue';
	import { useGlobalStore } from "@/stores/state.js";
	import CardPhoto from '@/assets/images/card.png'
	const globalStore = useGlobalStore();
</script>

<template>
	<div class="xl:px-4 px-2">
		<section class="p-16 rounded-lg">
			<p>Total Balance</p>
			<HeadText>$20,000.34</HeadText>
			<div class="mt-4 flex items-center justify-between">
				<div>				
					<p class="">Exp Date</p>
					<p>08/28</p>
				</div>
				<div>
					<HeadText>VISA</HeadText>
				</div>
			</div>
		</section>
		<div>
			<Card class-name="mt-4 rounded-lg">
				<div class="flex mb-4 justify-between px-3">
					<p class="text-xl font-bold">Transactions</p>
					<button>View all <i class="far fa-angle-right"></i></button>
				</div>
				<div class="grid grid-cols-1 gap-3">
					<div class="flex justify-between mb-4 items-center">
						<div class="flex items-center gap-3">
							<div class="rounded-full bg-gray-800">
								<img :src="CardPhoto" alt="logo" />
							</div>
							<p>RBC Canada</p>
						</div>
						<p>-$2,400.00</p>
					</div>
					<div class="flex justify-between mb-4 items-center">
						<div class="flex items-center gap-3">
							<div class="rounded-full bg-gray-800">
								<img :src="CardPhoto" alt="logo" />
							</div>
							<p>RBC Canada</p>
						</div>
						<p>-$400.40</p>
					</div>
				</div>
			</Card>
		</div>
	</div>
</template>

<style scoped>
	section{
		background-image: linear-gradient(to right, var(--site-primary), #1a1a1a);
	}

	img{
		width: 50px;
		height: 50px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
