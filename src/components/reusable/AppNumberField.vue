<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: number
    min?: number
    max?: number
    step?: number
    id?: string
  }>(),
  {
    min: undefined,
    max: undefined,
    step: 1,
    id: undefined,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const uid = Math.random().toString(36).slice(2, 11)
const inputId = computed(() => props.id ?? `app-number-field-${uid}`)

const fallback = computed(() => props.min ?? 0)

function handleInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value
  if (raw === '') {
    emit('update:modelValue', fallback.value)
    return
  }
  const num = Number.parseFloat(raw)
  if (!Number.isNaN(num)) {
    emit('update:modelValue', num)
  }
}

function handleBlur(e: Event) {
  const raw = (e.target as HTMLInputElement).value
  if (raw === '') {
    emit('update:modelValue', fallback.value)
    return
  }
  const num = Number.parseFloat(raw)
  if (Number.isNaN(num)) {
    emit('update:modelValue', fallback.value)
  }
}
</script>

<template>
  <div class="app-number-field">
    <div class="app-number-field__wrap">
      <input
        :id="inputId"
        type="number"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        class="app-number-field__input"
        @input="handleInput"
        @blur="handleBlur"
      />
    </div>
  </div>
</template>

<style scoped>
.app-number-field {
  display: flex;
  flex-direction: column;
}

.app-number-field__wrap {
  width: 100%;
  max-width: 8rem;
}

.app-number-field__input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}

.app-number-field__input:focus {
  outline: none;
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}
</style>
