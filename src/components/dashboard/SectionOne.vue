<script setup>
	import HeadText from '../HeadText.vue';
	import Card from '../Card.vue';
	import { useGlobalStore } from "@/stores/state.js";
	import BarChart from '../BarChart.vue';
	import DoughnutChart from '../DoughnutChart.vue';
	
	const globalStore = useGlobalStore();
</script>

<template>
	<section>
		<HeadText class-name="mb-8">Hi {{ globalStore.user.first_name }},</HeadText>
		<ul class="flex gap-3 mb-8">
			<li>Overview</li>
			<li>Deposit</li>
			<li>Contact</li>
			<li>Transfer Money</li>
			<li>History</li>
		</ul>
		<Card class-name="rounded-lg mb-4">
			<div class="flex justify-between">
				<p class="font-bold">Revenue Flow</p>
				<p>View all <i class="far fa-angle-right"></i></p>
			</div>
			<div class="p-3"><BarChart /></div>
		</Card>
		<div class="grid grid-cols-3/1 gap-3">
			<Card class-name="rounded-lg row-span-2">
				<div class="flex justify-between">
					<p class="font-bold">Expense Report</p>
					<p>View all <i class="far fa-angle-right"></i></p>
				</div>
				<div class="p-5"><DoughnutChart /></div>
			</Card>
			<Card class-name="h-full rounded-lg">
				<div class="flex justify-between">
					<p class="font-bold">Weekly Expense</p>
					<p><i class="far fa-ellipsis"></i></p>
				</div>
				<p class="mt-4 text-sm">This weeks' total expense</p>
				<div class="flex h-3/4 items-center justify-center">
					<HeadText>$2.2 k</HeadText>
				</div>
			</Card>
			<Card class-name="rounded-lg">
				<div class="flex justify-between">
					<p class="font-bold">Income Flow</p>
					<p><i class="far fa-ellipsis"></i></p>
				</div>
				<p class="mt-4 text-sm">This weeks' total income</p>
				<div class="flex h-3/4 items-center justify-center">
					<HeadText>$100Bn</HeadText>
				</div>
			</Card>
		</div>
	</section>
</template>

<style scoped>
	li{
		/* background-image: linear-gradient(70deg, transparent, #213A34); */
		background-color: #084b3b;
		padding: 9px 15px;
		border-radius: 2rem;
		/* border: 2px solid #fff; */
	}

	li:hover{
		cursor: pointer;
	}

	.span{
		grid-row: 1 / 3;
	}
</style>
