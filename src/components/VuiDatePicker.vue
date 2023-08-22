<template>
    <div class="flex w-full">
        <VuiFloatingInput v-model="calculated" :width="width" :position="position" fit
            :label="props.label" append-icon="calendar_month" ref="floating">
            <div class="laptop:w-80 phone:w-full flex flex-wrap select-none pb-3">
                <div class="flex w-full items-center pt-1">
                    <div class="w-1/5 flex items-center justify-center py-1 hover:bg-gray-300 duration-200 cursor-pointer">
                        <span class="material-icons hover:scale-125 duration-200 cursor-pointer">
                            arrow_back
                        </span>
                    </div>
                    <div class="w-2/5 text-center flex items-center justify-center">
                        <span class="py-1 px-2 hover:bg-gray-300 duration-200 cursor-pointer rounded-lg">
                            {{ draft.marker.format('MMMM') }}
                        </span>
                    </div>
                    <div class="w-2/5 text-center flex items-center justify-center">
                        <span class="py-1 px-2 hover:bg-gray-300 duration-200 cursor-pointer rounded-lg">
                            {{ draft.marker.format('YYYY') }}
                        </span>
                    </div>
                    <div class="w-1/5 flex items-center justify-center py-1 hover:bg-gray-300 duration-200 cursor-pointer">
                        <span class="material-icons hover:scale-125 duration-200 cursor-pointer">
                            arrow_forward
                        </span>
                    </div>
                </div>
                <div class="w-full flex mt-1 mb-2">
                    <div class="w-1/7 overflow-hidden truncate text-center" v-for="(day, index) in days" :key="index">
                        {{ day.abrv() }}
                    </div>
                </div>
                <div class="w-full flex" v-for="(week, index) in draft.days" :key="index">
                    <div class="w-1/7 overflow-hidden truncate flex items-center justify-center"
                        v-for="(day, index) in week" :key="index"
                        :class="[day.obj.format('MM') != draft.marker.format('MM') ? 'text-gray-500' : '']">
                        <span class="p-1 hover:bg-gray-300 cursor-pointer duration-200 rounded-full"
                            :class="[day.date == today ? 'bg-primary bg-opacity-30' : '',
                            calculated == day.date ? 'bg-secondary bg-opacity-80' : '']"
                            @click="updateModel(day)">
                            {{ day.obj.format('DD') }}
                        </span>
                    </div>
                </div>
            </div>
        </VuiFloatingInput>
    </div>
</template>

<script setup lang="ts">
import { DatePicker } from '@/types/select';
import VuiFloatingInput from './VuiFloatingInput.vue';
import { Ref, onMounted, ref, watch } from 'vue';
import { position } from '@/types/common';
import moment, { Moment } from 'moment'

const props = defineProps<DatePicker>()
const floating: Ref<any> = ref()
const emits = defineEmits(['update:modelValue'])
const calculated: Ref<string> = ref('')
const width: Ref<number> = ref(0)
const position: Ref<position> = ref({
    x: 0,
    y: 0
})

interface DayInfo { date: string, obj: Moment, name: string }

const today = moment().format('YYYY-MM-DD')
const days = moment.weekdays()

const draft: Ref<{ days: DayInfo[][], months: string[], years: string[], marker: Moment }> = ref({
    days: [],
    months: [],
    years: [],
    marker: moment()
})


onMounted(() => {
    if(props.modelValue){
        calculated.value = props.modelValue.format('YYYY-MM-DD')
    }else{
        calculated.value = moment().format('YYYY-MM-DD')
    }
    feedDays()
})

const composeWeek = (iterator: Moment): DayInfo[] => {
    let sWeek: Moment = iterator.startOf('week')
    let days: DayInfo[] = []
    moment.weekdays().forEach((day, index) => {
        const obj = sWeek.clone().weekday(index)
        days.push({
            date: obj.format('YYYY-MM-DD'),
            obj: obj,
            name: day
        })
    })

    return days;
}

const feedDays = () => {
    let flag = true
    let iterator = draft.value.marker.clone().startOf('month')
    let currentMont = iterator.format('MM')
    draft.value.days = []

    while (flag) {
        const week: DayInfo[] = composeWeek(iterator)

        if (week[0].obj.format('MM') == currentMont || week[6].obj.format('MM') == currentMont) {
            draft.value.days.push(week)
        } else {
            flag = false
        }

        iterator.add(1, 'week')
    }

}

const updateModel = (event: DayInfo) => {
    floating.value.closePicker()
    calculated.value = event.obj.format('YYYY-MM-DD')

    emits('update:modelValue', event.obj)
}

watch(
    () => props.modelValue,
    () => {
        updateModel({date: '', obj: props.modelValue, name: ''})
    },
    {
        immediate: true
    }
)

</script>