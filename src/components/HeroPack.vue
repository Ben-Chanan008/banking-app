<script setup>
    import Vertex from '@/assets/images/vertex.png';
</script>

<template>
    <div class="flex justify-center items-center p-5 mx-48"> 
        <slot></slot>
    </div>
</template>

<style scoped>
 div{
    height: 200px;
    background-repeat: no-repeat;
    background-image: url('../assets/images/bg.png');
 }
</style>
