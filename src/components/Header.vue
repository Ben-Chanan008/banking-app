<script setup>
    import {defineProps} from 'vue';
    defineProps({
        className: String
    });
</script>

<template>
    <p :class="`${className} text-green-500 text-2xl text-center font-bold`">
        <slot></slot>
    </p>
</template>
