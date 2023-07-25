<template>
    <transition name="showing">
        <div class="fixed border-gray-400 py-0 border flex flex-col w-fit overflow-auto bg-white z-30 rounded-lg " 
            ref="floating" v-if="props.visible">
            <slot />
        </div>
    </transition>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import { position } from '@/types/common'
import { onClickOutside, useWindowSize, until } from '@vueuse/core'


const floating: Ref<HTMLDivElement | undefined> = ref()
const props = defineProps<{
    position: position,
    visible: boolean,
    witdh?: number
}>()
const justOpened = ref(false)
const { width } = useWindowSize()
const emits = defineEmits(['close'])

onClickOutside(floating, () => {
    if (!justOpened.value) emits('close')
})

watch(
    () => width.value,
    () => {
        emits('close')
    },
    {
        immediate: true
    }
)


watch(
    () => props.visible,
    async () => {
        if (!props.visible) return
        justOpened.value = true
        await until(floating).toBeTruthy()
        floating.value!.style.top = `${props.position.y}px`
        floating.value!.style.left = `${props.position.x}px`

        if (props.witdh) floating.value!.style.width = `${props.witdh}px`

        setTimeout(() => {
            justOpened.value = false
        }, 200)
    },
    {
        immediate: true
    }
)


</script>

<style>
.showing-enter-active,
.showing-leave-active {
    transition: opacity 0.3s ease;
}

.showing-enter-from,
.showing-leave-to {
    opacity: 0;
}


</style>