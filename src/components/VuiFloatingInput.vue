<template>
    <div class="flex" ref="input">
        <VuiInput v-model="props.modelValue" :label="props.label" readonly class="w-full" :append-icon="props.appendIcon"
            @focus="openPicker" @append="openPicker" />
        <FloatingMenu :position="position" :witdh="width" :visible="visible" @close="closePicker" >
            <slot />
        </FloatingMenu>
    </div>
</template>


<script setup lang="ts">
import { Ref, ref } from 'vue';
import VuiInput from './VuiInput.vue';
import { placeFloatingMenu } from '@/utils/floatingMenu'
import FloatingMenu from './FloatingMenu.vue';
import { position } from '@/types/common';
import { InputFloating } from '@/types/input';

const props = defineProps<InputFloating>()
const input: Ref<HTMLDivElement | undefined> = ref()
const visible: Ref<boolean> = ref(false)
const position: Ref<position> = ref({
    x: 0,
    y: 0
})
const width: Ref<number> = ref(0)

const openPicker = () => {
    const current: position = placeFloatingMenu(input.value!)
    position.value.x = current.x
    position.value.y = current.y

    width.value = input.value!.getBoundingClientRect().width;

    visible.value = true
}

const closePicker = () => {
    visible.value = false
}


</script>