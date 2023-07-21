<template>
    <transition name="showing">
        <div class="fixed py-0.5 border flex flex-col w-40 max-h-48 overflow-auto bg-white z-30 rounded-lg right-click-menu"
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

.right-click-menu {
    background: #FAFAFA;
    border: 1px solid #BDBDBD;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 230px;
    z-index: 998;
}

.right-click-menu>div {
    margin: 3px 0px;
    padding: 2px 10px;
    display: flex;
    justify-content: left;
    transition: 0.3s;
}

.right-click-menu>div:hover {
    background-color: rgb(156, 163, 175);
    transition: 0.3s;
    font-weight: 600;
}
</style>