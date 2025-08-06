<script setup>
	import { Bar } from 'vue-chartjs';
	import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
	import { reactive } from 'vue';

	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

	const chartData = reactive({
		labels: labels,
		datasets: [
			{ 
				label: 'Income',
				backgroundColor: 'gold',
				data: [100.40, 500, 5000, 6000, 1000, 4000, 5000, 3000, 3000, 4500, 5600, 1400.90]
			},
		]	
	})

	const chartOptions = {
		responsive: true,
		mantainAspectRatio: true
	}
</script>

<template>
	<Bar 
		id="my-chart-id"
		:options="chartOptions"
		:data="chartData"

	/>
</template>
