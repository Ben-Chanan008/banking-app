<script setup>
    import {RouterLink, useRoute} from 'vue-router';
    const isActive = (routePath) => {
        const route = useRoute();
        return route.path === routePath
    }
    import { useGlobalStore } from '@/stores/state';
	const globalStore = useGlobalStore();
</script>

<template>
    <nav class="">
        <div class="mx-3 flex items-center justify-between p-3">
            <div class="logo">
                <RouterLink to="/" class="font-bold">Pixlr Bank</RouterLink>
            </div>
            <div>
                <ul class="flex list-none">
                    <li class="mx-3"><RouterLink :class="[isActive('/') ? 'active-link' : 'hover-link']" to="/">Home</RouterLink></li>
                    <li class="mx-3"><RouterLink :class="[isActive('/what-we-do') ? 'active-link' : 'hover-link']" to="/what-we-do">What We Do</RouterLink></li>
                    <li class="mx-3"><RouterLink :class="[isActive('/meet-the-team') ? 'active-link' : 'hover-link']" to="/meet-the-team">Meet the Team</RouterLink></li>
                    <li class="mx-3"><RouterLink :class="[isActive('/contact') ? 'active-link' : 'hover-link']" to="/contact">Contact</RouterLink></li>
                </ul>
            </div>
            <div v-if="!globalStore.token">
                <RouterLink class="btn" to="/account/register">
                    <i class="far fa-lock mr-2"></i>
                    <span>Create Account</span>
                </RouterLink>
            </div>
            <div v-else>
                <button @click="globalStore.logout()">
                    <i class="far fa-power-off fa-2x"></i>
                </button>
            </div>
        </div>
    </nav>
</template>

<style lang="css" scoped>
   
</style>
