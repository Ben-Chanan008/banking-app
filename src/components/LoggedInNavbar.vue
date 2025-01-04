<script setup>
    import {RouterLink, useRouter} from 'vue-router';
	import { ref } from 'vue';

	const dropdown = ref(null)
    import { useGlobalStore } from '@/stores/state';
	const router = useRouter();
	const globalStore = useGlobalStore();

	const toggleDropDown = () => {
		dropdown.value.classList.toggle('hidden');		
	}

	const dashboard = () => router.push({ name: 'dashboard' })
</script>

<template>
    <nav class="">
        <div class="mx-3 flex items-center justify-between p-3">
            <div class="logo">
                <RouterLink to="/" class="font-bold">Pixlr Bank</RouterLink>
            </div>
            <div>
                <div class="search-bar flex gap-4 py-3 px-4">
					<button>
						<i class="far fa-magnifying-glass"></i>
					</button>
					<input class="border-0 bg-transparent w-full focus:outline-none" placeholder="Search Pixlr"/>
				</div>
            </div>
			<div class="relative">
				<div class="user-account hover:cursor-pointer" @click="toggleDropDown">
					<span>{{ globalStore.initials}}</span>
				</div>
				<div ref="dropdown" class="z-10 absolute dropdown hidden w-full -left-0 mt-3 rounded-lg bg-gray-900 p-4">
					<ul class="w-full text-sm">
						<li class="mb-3 hover:cursor-pointer hover:font-bold hover:translate-x-0.5 transition-all">
							<i class="mr-2 far fa-gear text-yellow-300"></i>
						</li>
						<li class="mb-3 hover:cursor-pointer hover:font-bold hover:translate-x-0.5 transition-all">
							<i class="mr-2 far fa-info-circle text-green-700"></i>
						</li>
						<li class="mb-3 hover:cursor-pointer hover:font-bold hover:translate-x-0.5 transition-all" @click="dashboard()">
							<i class="mr-2 far fa-user-circle text-orange-400"></i>
						</li>
						<li class="hover:cursor-pointer hover:font-bold hover:translate-x-0.5 transition-all" @click="globalStore.logout()">
							<i class="mr-2 far fa-arrow-right-to-line text-red-600"></i>
						</li>
					</ul>
				</div>
			</div>
        </div>
    </nav>
</template>

<style lang="css" scoped>
   .search-bar{
		width: 500px;
		border: 2px solid #fff;
		font-size: 12px;
		border-radius: 30px;
   	}

	.user-account{
		padding: 10px;
		border: 2px solid #fff;
		border-radius: 50%;
	}
</style>
