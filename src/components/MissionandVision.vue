<script setup>
    import Header from '@/components/Header.vue';
    import Card from '@/components/Card.vue';
</script>

<template>
    <section class="gap-3 grid grid-cols-2 mt-4 mx-48">
        <Card class-name="rounded-md">
            <div class="flex flex-col">
                <i class="far mb-0 fa-2x text-primary font-bold mr-3 fa-truck"></i>
                <Header class-name="text-start mb-3">Our Mission</Header>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas adipisci quae tempora ut quos impedit, vitae alias dicta saepe id consectetur, voluptatem consequatur. Cumque veniam beatae fuga minus laudantium modi. Sed molestias sunt vitae voluptates autem doloremque facilis nihil?</p>
        </Card>
        <Card class-name="rounded-md">
            <div class="flex flex-col">
                <i class="far mb-0 fa-2x text-primary font-bold mr-3 fa-magnifying-glass-dollar"></i>
                <Header class-name="text-start mb-3">Our Vision</Header>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas adipisci quae tempora ut quos impedit, vitae alias dicta saepe id consectetur, voluptatem consequatur. Cumque veniam beatae fuga minus laudantium modi. Sed molestias sunt vitae voluptates autem doloremque facilis nihil?</p>
        </Card>
    </section>
</template>