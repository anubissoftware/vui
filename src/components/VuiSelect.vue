<template>
    <div class="flex w-full" ref="input">
        <VuiFloatingInput v-model="props.modelValue[props.accesor ?? 'name']" :width="width" :position="position" :label="props.label" :append-icon="props.appendIcon" ref="floating">
            <div class="bg-white max-h-40 rounded-lg list-none m-0 p-0 select-none">
                <div class="mt-0.5 py-0.5 px-2 flex justify-start duration-300 hover:bg-gray-400 hover:font-bold" v-for="(item, index) in props.data"
                    :class="[(props.modelValue['id'] ?? undefined) === (item['id'] ?? null) ? 'bg-gray-300' : '']"
                    :key="index" @click="setModelValue(item)">
                    {{ item[props.accesor ?? 'name'] }}
                </div>
            </div>
        </VuiFloatingInput>
    </div>
</template>


<script setup lang="ts">
import { Ref, ref } from 'vue';
import { position, superString } from '@/types/common';
import { Select } from '@/types/select';
import VuiFloatingInput from './VuiFloatingInput.vue';

const props = defineProps<Select>()
const floating: Ref<any> = ref()
const emits = defineEmits(['update:modelValue'])
const input: Ref<HTMLDivElement | undefined> = ref()
const position: Ref<position> = ref({
    x: 0,
    y: 0
})
const width: Ref<number> = ref(0)

const setModelValue = (model: superString) => {
    floating.value.closePicker()
    emits('update:modelValue', model)
}


</script>

<style scoped>
</style>