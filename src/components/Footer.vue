<script setup>
    import Header from '@/components/Header.vue';
</script>

<template>
    <hr class="mt-16 mx-16">
    <footer class="p-5 mt-8">
        <RouterLink to="/"><Header class-name="text-4xl">Pixlr Bank</Header></RouterLink>
        <div class="grid grid-cols-3 mt-8">
            <div class="flex flex-col justify-center">
                <RouterLink to="/"><h1 class="font-bold text-3xl">Pixlr Bank</h1></RouterLink>
            </div>
            <div>
                <p class="text-xl font-bold text-green-500">Quick Links</p>
                <ul class="mt-3">
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/what-we-do">What we do</RouterLink></li>
                    <li><RouterLink to="/contact">Contact</RouterLink></li>
                    <li><RouterLink to="/meet-the-team">Meet the Team</RouterLink></li>
                </ul>
            </div>
            <div>
                <p class="text-xl font-bold text-green-500">Company Info</p>
                <p class="mt-3"><i class="mr-2 far fa-location-dot text-primary"></i>104D 1511 Mckercher Dr. Saskatoon, SK. Canada</p>
                <p class="mt-3"><i class="mr-2 far fa-phone text-primary"></i>+1 (639) 384 - 9638</p>
                <p class="mt-3"><i class="mr-2 far fa-envelope text-primary"></i>pixlrbank@info.com</p>
            </div>
        </div>
        <p class="p-4 text-center">&copy; PixlrBank 2024.</p>
    </footer>
</template>

<style scoped>
    li{
        margin-bottom: 10px;
    }
</style>