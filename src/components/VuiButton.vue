<script setup lang="ts">
import { ComponentSizes } from '../types/constants'

const props = defineProps<{
    size?: ComponentSizes
    color?: string,
}>();

</script>

<template>
    <button class="styleButton px-2 py-1 rounded" :style="{ backgroundColor: `#${props.color ?? 'f2f2f2'}`}">
        <slot />
    </button>
</template>

<style scoped>
.styleButton {
    /* padding: 1rem 2rem;
    background-color: brown; */
    
}
</style>