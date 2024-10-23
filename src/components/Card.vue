<script setup>
    import { defineProps } from 'vue';
    defineProps({
        className: String
    });
</script>

<template>
    <div :class="`${className} bg-gray-900 p-5`">
        <slot></slot>
    </div>
</template>