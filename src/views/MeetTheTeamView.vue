<script setup>
    import Navbar from '@/components/Navbar.vue';
    import Footer from '@/components/Footer.vue';
    import User from '@/assets/images/user-3d.png';
    import { reactive, onMounted, ref } from 'vue';
    import carousel from 'vue-owl-carousel';

    const state = reactive({
        members: [
            {
                id: 1,
                name: 'Bencchanan Idehen',
                position: 'CEO',
                bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate, reiciendis iusto tempore tenetur dicta, facere dignissimos sunt beatae possimus ipsam eligendi similique aliquid voluptatum error maxime voluptas. Provident itaque id, optio assumenda sint excepturi quas suscipit ab modi eveniet dolor non libero vel, porro dolore ipsa ad quae quasi expedita! Tempore quas ducimus quaerat officia reiciendis aliquid rem optio dolorem voluptates est molestias ipsa numquam quo facere debitis aliquam, distinctio, suscipit explicabo obcaecati, adipisci assumenda ex neque porro. Nisi, omnis id, dolorum sed in cumque unde est ipsam asperiores enim eum! Magnam, impedit? Veniam quidem quaerat expedita nemo vitae.',
                img: User,
                isActive: false
            },
            {
                id: 2,
                name: 'Pearl Ken-Idehen',
                position: 'Chief Design Officer',
                bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate, reiciendis iusto tempore tenetur dicta, facere dignissimos sunt beatae possimus ipsam eligendi similique aliquid voluptatum error maxime voluptas. Provident itaque id, optio assumenda sint excepturi quas suscipit ab modi eveniet dolor non libero vel, porro dolore ipsa ad quae quasi expedita! Tempore quas ducimus quaerat officia reiciendis aliquid rem optio dolorem voluptates est molestias ipsa numquam quo facere debitis aliquam, distinctio, suscipit explicabo obcaecati, adipisci assumenda ex neque porro. Nisi, omnis id, dolorum sed in cumque unde est ipsam asperiores enim eum! Magnam, impedit? Veniam quidem quaerat expedita nemo vitae.',
                img: User,
                isActive: true
            },
        ]
    }); 

    const toggleSwitch = (id) => {
        // const myInput = ref(null);
        console.log(this.$refs.activeSlide.value);   
    }
</script>

<template>
    <Navbar />
    <div class="flex w-full h-[85vh] overflow-hidden p-5">
        <section ref="activeSlide" v-for="member in state.members" :key="member.id" :class="['mr-48 h-full grid grid-cols-2 flex-shrink-0 items-center w-full', member.isActive ? 'active' : '']">
            <div class="user p-5 flex items-center rounded-full">
                <!-- <i class="far fa-user fa-9x mx-auto"></i> -->
                <img :src="member.img" class="rounded-full" alt="team-member-photo" />
            </div>
            <div class="h-full flex flex-col justify-center">
                <div class="text-primary mb-4">
                    <p class="text-3xl font-bold">{{ member.name }}</p>
                    <span class="font-bold">{{ member.position }}</span>
                </div>
                <p>{{ member.bio }}</p>
            </div>
        </section>
    </div>
    <div class="flex justify-center gap-3">
        <i :key="member.id" @click="toggleSwitch" :class="`hover:cursor-pointer far fa-circle`" v-for="member in state.members"></i>
    </div>
</template>

<style scoped>
.user{
    height: 300px;
    width: 300px;
    border: 4px solid #fff;
}

img{
    height: 200px;
}

section.active{
    display: grid;
}

section{
    display: none;
}
</style>