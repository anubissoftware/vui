<template>
    <transition name="showing">
        <div class="fixed w-30 border rounded right-click-menu" ref="floating" v-if="visible">
            <slot />
        </div>
    </transition>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { Ref, nextTick, ref } from 'vue';

const floating: Ref<HTMLDivElement | undefined> = ref()
const visible: Ref<boolean> = ref(false)

onClickOutside(floating, () => {
    visible.value = false
})

const placeMenu = async (event: MouseEvent) => {
    visible.value = true

    await nextTick()

    let x = 0; let y = 0;

    x += event.x;
    y += event.y;

    const menuBounds = floating.value!.getBoundingClientRect()
    const overflowX = (menuBounds.width) + x
    const overflowY = (menuBounds.height) + y

    if (overflowX > window.innerWidth) {
        x -= overflowX - window.innerWidth + 20
    }
    if (overflowY > window.innerHeight) {
        y -= overflowY - window.innerHeight + 20
    }


    floating.value!.style.left = `${x}px`
    floating.value!.style.top = `${y}px`
}

defineExpose({ placeMenu })

</script>


<style>
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

.showing-enter-active,
.showing-leave-active {
    transition: opacity 0.3s ease;
}

.showing-enter-from,
.showing-leave-to {
    opacity: 0;
}
</style>

