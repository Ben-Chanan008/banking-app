<script setup>
	defineProps({
		noTransaction: {
			type: Boolean,
			default: true 
		},
		balance: {
			type: String,
			default: '20,000.34'
		},
		number: {
			type: String,
			default: ''
		},
		date: {
			type: String,
			default: '08/28'
		},
		type: {
			type: String,
			default: 'VISA'
		},
	})


	import card from './Card.vue';
	import HeadText from './HeadText.vue';
	import { useGlobalStore } from "@/stores/state.js";
	import CardPhoto from '@/assets/images/card.png'
	import moment from 'moment';
	import {computed, ref } from 'vue'
	const globalStore = useGlobalStore();

	let showNumber = ref(false)
	 const cardNumber = (num) => {
        // return computed(() => {
            if(showNumber.value)
                return num.replace(/(.{4})/g, '$1 ').trim()       
            else
              	return num.replace(/\d(?=\d{4})/g, '*').replace(/(.{4})/g, '$1 ').trim()        
        // })
    }
	
	const toggleCard = () => {
		showNumber.value = !showNumber.value
	}

	console.log(showNumber.value)
</script>

<template>
	<div class="xl:px-4 px-2">
		<section class="p-16 rounded-lg">
			<div class="py-2" v-show="number !== ''">
				<p class="text-xl font-bold hover:cursor-pointer" v-on:dblclick="toggleCard">{{ cardNumber(number) }}</p>
			</div>
			<p>Total Balance</p>
			<HeadText>${{ balance }}</HeadText>
			<div class="mt-4 flex items-center justify-between">
				<div>				
					<p>Exp Date</p>
					<p>{{ date }}</p>
				</div>
				<div>
					<HeadText className="uppercase">{{ type }}</HeadText>
				</div>
			</div>
		</section>
		<div v-show="noTransaction">
			<card class-name="mt-4 rounded-lg">
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
			</card>
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
