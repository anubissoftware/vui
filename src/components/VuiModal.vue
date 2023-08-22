<template>
    <transition name="showing">
        <div v-if="props.showing"
            class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center">
            <div class="max-h-screen phone:px-3 phone:w-full">
                <div class="bg-white rounded-lg px-4">
                    <!-- HEADER -->
                    <div class="pt-4 pb-2 relative flex border-b phone:px-3">
                        <div class="w-full text-2xl">
                            <slot name="title" />
                        </div>
                        <div class="w-10 flex items-center justify-center cursor-pointer hover:scale-125 duration-200"
                            @click="emits('close', false)">
                            <span class="material-icons">close</span>
                        </div>
                    </div>
                    <!-- BODY -->
                    <div class="pt-4 pb-2 phone:px-1 tablet:px-3 flex flex-wrap w-full">
                        <slot name="body"></slot>
                    </div>
                    <!-- ACTIONS -->
                    <div class="py-2 border-t flex justify-end items-center phone:px-3">
                        <VuiButton v-if="props.buttons?.clear && !props.customActions" @click="emits('clear')" class="w-32" :meta="{defColor: 'info', prependIcon: 'clear_all'}">
                            Clear
                        </VuiButton>
                        <VuiButton @click="emits('cancel')" class="w-32" :meta="props.buttons?.cancel" v-if="!props.customActions">
                            {{ props.buttons?.accept?.label ?? 'Cancel' }}
                        </VuiButton>
                        <VuiButton @click="emits('accept')" class="w-32" :meta="props.buttons?.accept" v-if="!props.customActions">
                            {{ props.buttons?.accept?.label ?? 'Accept' }}
                        </VuiButton>
                        <slot name="actions" v-if="props.customActions"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<script setup lang="ts">
import { watch } from 'vue';
import { VuiButton } from '../main';
import { Button } from '@/types/button'


const props = defineProps<{
    showing: boolean,
    buttons?: {
        accept?: Button
        cancel?: Button,
        clear?: boolean
    },
    customActions?: boolean
}>()

const emits = defineEmits(['close', 'cancel', 'accept', 'clear'])

const onKeyESC = (event: KeyboardEvent) => {
    console.log('event')
    if(event.key == "Escape"){
        emits('close')
    }
}

watch(
    () => props.showing,
    () => {
        if(props.showing){
            window.addEventListener('keydown', onKeyESC)
        }else{
            window.removeEventListener('keydown', onKeyESC)
        }
    },
    {
        immediate: true
    }
)

</script>

<style scoped>
.showing-enter-active,
.showing-leave-active {
    transition: opacity 0.3s ease;
}

.showing-enter-from,
.showing-leave-to {
    opacity: 0;
}
</style>