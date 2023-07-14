<script setup lang="ts">
import { computed } from 'vue';
import { HTMLInputTypeAttribute } from '../types/constants';

const emits = defineEmits(['update:modelValue', 'blur'])
const props = defineProps<{
    modelValue: string, 
    label?: string,
    placeholder?:string
    size?: 'lg' | 'md' | 'sm'
    readonly?: boolean
    type?: HTMLInputTypeAttribute
    hint?: string
    required?: boolean
    //Modes
    outlined?: boolean

}>();

const finalModeValue = computed(
{
  get() : string | number {
    return props.modelValue
  }, 
  set(newValue :string | number): void {
    emits('update:modelValue', newValue)

  }
}
)
</script>

<template>
  <div class="flex flex-col justify-center items-start">
      <div class="relative w-full">
          <input
          class="text-base outline-none border border-solid border-gray-500 text-black transition-all 
          ease-in-out rounded-md w-full accent-gray-500 px-2 placeholder:opacity-0 focus:placeholder:opacity-100"
          :class="[
            {'bg-gray-100 cursor-not-allowed': props.readonly}, 
            props.size == 'lg' ? 'py-4' :
              props.size == 'sm' ? 'py-1' : 'py-2' 
          ]"
          name="input" 
          autocomplete="off"
          v-model="finalModeValue"
          :readonly="props.readonly"
          :placeholder="props.placeholder ?? 'Write your value'"
          :type="props.type ?? 'text'"
          :required="props.required"
          @blur="emits('blur')"
          />
          <label v-if="props.label" for="input" 
          :style="{'--sizeTranslateY': props.outlined ? '-85%' : '-45%'}"
          :class="props.outlined ? 'bg-transparent' : 'bg-white'"
          class="absolute text-base font-bold top-1/2 -translate-y-1/2 bg-transparent  origin-top-left pointer-events-none
          py-0 px-1 my-0 mx-2 left-0 z-10 text-gray-600 ease-out transition-all duration-200">
            {{ props.label }}
          </label>
      </div>
      <span v-if="props.hint" class="text-sm md:text-base py-1 ">
          {{ props.hint }}
      </span>
  </div>

</template>

<style scoped>
input:focus+label {
  top: 0;
  transform: translateY(var(--sizeTranslateY)) scale(0.9) !important;
}

input:not(:placeholder-shown)+label {
  top: 0;
  transform: translateY(var(--sizeTranslateY)) scale(0.9) !important;
}

input:required+label:after {
  content: ' *';
}
</style>