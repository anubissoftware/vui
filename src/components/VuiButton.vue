<script setup lang="ts">
import { ComponentSizes, DefaultColors } from '../types/constants'

const props = defineProps<{
    size?: ComponentSizes
    color?: string | DefaultColors,
    //Variant
    shadow?: string
    outlined?: boolean
    prependIcon?: string,
    appendIcon?: string,
}>();

</script>

<template>
    <button class="rounded text-sm md:text-base " 
    :class="[
      {'shadow-xl': props.shadow == 'xl'},
      {'shadow-lg': props.shadow == 'lg'},
      {'shadow-md': props.shadow == 'md'},
      {'shadow-sm': props.shadow == 'sm'},
      props.size == 'lg' ? 'px-3 py-2' :
        props.size == 'sm' ? 'px-1 py-0.5' : 'px-2 py-1',
      props.outlined ? `border ${(
        props.color == 'primary' ? 'border-blue-500 text-blue-500' :
            props.color == 'success' ? 'border-green-500 text-green-500' :
                props.color == 'warning' ? 'border-yellow-500 text-yellow-500' :
                    props.color == 'danger' ? 'border-red-500 text-red-500' : 'border-gray-500 text-gray-500'
        )}` : `text-white ${(
        props.color == 'primary' ? 'bg-blue-500 hover:bg-opacity-70' :
            props.color == 'success' ? 'bg-green-500 hover:bg-opacity-70' :
                props.color == 'warning' ? 'bg-yellow-500 hover:bg-opacity-70' :
                    props.color == 'danger' ? 'bg-red-500 hover:bg-opacity-70' : 'bg-gray-500 hover:bg-opacity-70'
        )}`
        
    ]">
        <slot />
    </button>
</template>