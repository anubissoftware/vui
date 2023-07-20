<script setup lang="ts">
import { Button } from '@/types/button';

// import { ComponentSizes, DefaultColors } from '../types/constants'

const props = defineProps<{
    meta?: Button
}>();


</script>

<template>
    <div class="px-0.5 pt-3">
        <div :class="[
            props.meta?.size == 'lg' ? 'h-10' :
                props.meta?.size == 'sm' ? 'h-6' :
                    'h-8',
            props.meta?.twColor ? `hover:bg-${props.meta?.twColor} text-${props.meta?.twColor} border-${props.meta?.twColor}` : '',
            props.meta?.appendIcon || props.meta?.prependIcon ? 'justify-start' : 'justify-center',
            props.meta?.defColor ? `hover:bg-${props.meta?.defColor} text-${props.meta?.defColor} border-${props.meta?.defColor}` : ''
        ]"
            class="border px-1 rounded-lg flex items-center overflow-hidden truncate duration-200 cursor-pointer hover:text-white hover:font-bold">
            <span class="material-icons w-1/5" v-if="props.meta?.prependIcon">
                {{ props.meta?.prependIcon }}
            </span>
            <span class="w-full text-center">
                <slot />
            </span>
            <span class="material-icons w-1/5" v-if="props.meta?.appendIcon">
                {{ props.meta?.appendIcon }}
            </span>
        </div>
    </div>
</template>