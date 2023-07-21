<template>
    <div class="flex" ref="input">
        <VuiFloatingInput v-model="props.modelValue[props.accesor ?? 'name']" :width="width" :position="position" 
        :visible="visible" :label="props.label" :append-icon="props.appendIcon" >
            <div v-for="(item, index) in props.data" 
            :class="[(props.modelValue['id'] ?? undefined) === (item['id'] ?? null) ? 'bg-gray-300' : '']"
            :key="index" @click="setModelValue(item)">
                {{ item[props.accesor ?? 'name'] }}
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
const emits = defineEmits(['update:modelValue'])
const input: Ref<HTMLDivElement | undefined> = ref()
const visible: Ref<boolean> = ref(false)
const position: Ref<position> = ref({
    x: 0,
    y: 0
})
const width: Ref<number> = ref(0)

const setModelValue = (model: superString) => {
    emits('update:modelValue', model)
    visible.value = false
}


</script>