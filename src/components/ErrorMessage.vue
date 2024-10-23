<script setup>
    import {defineProps} from 'vue';
    defineProps({
        message: String
    })
</script>

<template>
    <div class="p-2">
        <p class="text-red-500"><i class="far fa-info-circle mr-2"></i>{{ message }}</p>
    </div>
</template>