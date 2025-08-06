<script setup>
    import {RouterLink, useRoute} from 'vue-router';
    import { createPinia } from 'pinia';
    const isActive = (routePath) => {
        const route = useRoute();
        return route.path === routePath
    }
	import { useGlobalStore } from '@/stores/state';
	import LoggedInNavbar from './LoggedInNavbar.vue';
	const globalStore = useGlobalStore(createPinia());
</script>

<template>
    <nav class="p-4" v-if="!globalStore.token || !globalStore.verifyToken()">
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
            <div>
                <RouterLink class="btn" to="/user/login">
                    <i class="far fa-sign-in mr-2"></i>
                    <span>Login</span>
                </RouterLink>
            </div>
        </div>
    </nav>
	<LoggedInNavbar v-else/>
</template>

<style lang="css" scoped>
   
</style>
