<script setup>
    import { RouterLink } from 'vue-router'
    import NotFound from '@/assets/images/404.avif';
</script>

<template>
    <section class="flex h-screen flex-col justify-center items-center">
        <!-- <img :src="NotFound" alt="404" /> -->
        <p class="text-3xl font-bold mb-3">404 | NOT FOUND</p>
        <RouterLink class="btn" to="/">Back to Home</RouterLink>
    </section>
</template>