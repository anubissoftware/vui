<template>
    <div class="flex w-full" ref="input">
        <VuiInput v-model="props.modelValue" :label="props.label" readonly class="w-full" :append-icon="props.appendIcon"
            @focus="openPicker" @blur="visible = false" @append="openPicker" />
        <FloatingMenu :position="position" :witdh="width" ref="floating" :visible="visible" @close="closePicker">
            <slot />
        </FloatingMenu>
    </div>
</template>


<script setup lang="ts">
import { Ref, nextTick, ref } from 'vue';
import VuiInput from './VuiInput.vue';
import { placeFloatingMenu } from '@/utils/floatingMenu'
import FloatingMenu from './FloatingMenu.vue';
import { position } from '@/types/common';
import { InputFloating } from '@/types/input';

const props = defineProps<InputFloating>()
const input: Ref<HTMLDivElement | undefined> = ref()
const floating: Ref<Object | undefined> = ref()
const visible: Ref<boolean> = ref(false)
const position: Ref<position> = ref({
    x: 0,
    y: 0
})
const width: Ref<number> = ref(0)

const openPicker = async () => {
    visible.value = true
    await nextTick()
    const current: position = placeFloatingMenu(input.value!, (floating.value! as any).$el!)
    position.value.x = current.x
    position.value.y = current.y

    if (!props.fit) {
        width.value = input.value!.getBoundingClientRect().width;
    } else {
        width.value = 0
    }
}

const closePicker = () => {
    visible.value = false
}


defineExpose({ closePicker })

</script>