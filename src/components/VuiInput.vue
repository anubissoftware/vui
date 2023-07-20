<script setup lang="ts">
import { computed } from 'vue';
import { Input } from '@/types/input';
import { v4 } from 'uuid'

const emits = defineEmits(['update:modelValue', 'blur', 'focus', 'append'])
const props = defineProps<Input>();

const finalModeValue = computed(
  {
    get(): string | number {
      return props.modelValue
    },
    set(newValue: string | number): void {
      emits('update:modelValue', newValue)

    }
  }
)

const id = v4();

</script>

<template>
  <div class="px-0.5 pt-3 flex">
    <div class="relative flex w-full" :class="[props.size == 'lg' ? 'h-10' :
      props.size == 'sm' ? 'h-6' :
        'h-8']">
      <input class="h-full text-base outline-none border border-solid border-gray-500 text-black transition-all 
          ease-in-out rounded-md w-full accent-gray-500 px-2 placeholder:opacity-0 focus:placeholder:opacity-100"
        @focus="emits('focus')" :class="[
          { 'bg-gray-100 cursor-not-allowed': props.readonly },
          props.size == 'lg' ? 'py-4' :
            props.size == 'sm' ? 'py-1' : 'py-0.5'
        ]" :name="id" :id="id" autocomplete="off" v-model="finalModeValue" :readonly="props.readonly"
        :placeholder="props.placeholder ?? 'Write your value'" :required="props.required" @blur="emits('blur')" />
      <label v-if="props.label" :for="id" :style="{ '--sizeTranslateY': '-50%' }" class="absolute text-base bg-white rounded-lg font-bold top-1/2 -translate-y-1/2 bg-transparent  origin-top-left pointer-events-none
          py-0 px-1 my-0 mx-2 left-0 z-10 text-gray-600 ease-out transition-all duration-200">
        {{ props.label }}
      </label>
    </div>
    <span
      class="w-10 material-icons flex items-center justify-center cursor-pointer hover:text-primary hover:scale-125 duration-200 select-none"
      v-if="props.appendIcon" @click="emits('append')">
      {{ props.appendIcon }}
    </span>
  </div>
</template>

<style scoped>
input:focus+label {
  top: 0;
  transform: translateY(var(--sizeTranslateY)) scale(0.8) !important;
}

input:not(:placeholder-shown)+label {
  top: 0;
  transform: translateY(var(--sizeTranslateY)) scale(0.8) !important;
}

input:required+label:after {
  content: ' *';
}
</style>