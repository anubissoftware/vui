<template>
    <div class="flex" ref="input">
        <VuiInput v-model="finalModeValue" :label="props.label" readonly class="w-full" append-icon="schedule"
            @focus="openPicker" @append="openPicker" />
        <FloatingMenu :position="position" :witdh="width" :visible="visible" @close="closePicker">
            <div v-for="(item, index) in []" :key="index">
                {{ item }}
            </div>
        </FloatingMenu>
    </div>
</template>


<script setup lang="ts">
import { Ref, computed, ref } from 'vue';
import VuiInput from './VuiInput.vue';
import { Input } from '@/types/input';
import { placeFloatingMenu } from '@/utils/floatingMenu'
import FloatingMenu from './FloatingMenu.vue';
import { position } from '@/types/constants';

const props = defineProps<Input>()
const emits = defineEmits(['update:modelValue'])
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

const finalModeValue = computed(
    {
        get(): string {
            return props.modelValue
        },
        set(newValue: string): void {
            emits('update:modelValue', newValue)
        }
    }
)

</script>