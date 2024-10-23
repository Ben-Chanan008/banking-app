<script setup>
    import Header from '@/components/Header.vue';
    import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <Navbar />
    <Header>Contact Us</Header>
    <p class="text-center mb-3">We have a one of a kind contact team! We reply within 24 hours!</p>
    <section class="flex gap-3 justify-center">
        <div class="bg-green-700 rounded-lg p-5">
            <div class="mb-3">
                <i class="far fa-phone"></i>
                <span class="ml-4">+234 8036703674</span>
            </div>
            <div class="mb-3">
                <i class="far fa-envelope"></i>
                <span class="ml-4">bchanan.boss@gmail.com</span>
            </div>
            <div>
                <i class="far fa-location-dot"></i>
                <span class="ml-4">1511 Mckercher Dr. </span>
            </div>
        </div>
        <!-- <div class="bg-green-700 rounded-lg p-5">
        
        </div> -->
    </section>
    <div class="message absolute bottom-0 right-0 rounded-full m-4 bg-red-700">
        <i class="far fa-message"></i>
    </div>
</template>

<style>
    div.message{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
    }
</style>