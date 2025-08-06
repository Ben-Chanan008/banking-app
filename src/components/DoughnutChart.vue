<script setup>
	import { Doughnut } from 'vue-chartjs';
	import { Chart as ChartJS,ArcElement, Tooltip, Legend } from 'chart.js'
	import { reactive } from 'vue';

	const labels = ['January', 'February']

	ChartJS.register(ArcElement, Tooltip, Legend);

	const chartData = reactive({
		labels: labels,
		datasets: [
			{ 
				backgroundColor: ['gold', 'red'],
				data: [100.40, 50]
			},
		]	
	})

	const chartOptions = {
		responsive: true
	}
</script>

<template>
	<Doughnut 
		id="my-chart-id"
		:options="chartOptions"
		:data="chartData"
	/>
</template>
