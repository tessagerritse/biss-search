<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
    placeholder?: string
    type?: 'text' | 'search'
    id?: string
  }>(),
  {
    placeholder: '',
    type: 'text',
    id: undefined,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const uid = Math.random().toString(36).slice(2, 11)
const inputId = computed(() => props.id ?? `app-text-field-${uid}`)
</script>

<template>
  <div class="app-text-field" :class="{ 'app-text-field--with-leading': $slots.leading }">
    <span v-if="$slots.leading" class="app-text-field__leading">
      <slot name="leading" />
    </span>
    <input
      :id="inputId"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="app-text-field__input"
      autocomplete="off"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped>
.app-text-field {
  display: flex;
  flex-direction: column;
}

.app-text-field--with-leading {
  flex-direction: row;
  align-items: stretch;
}

.app-text-field__leading {
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  color: hsl(var(--muted-foreground));
  border: 1px solid hsl(var(--border));
  border-right: none;
  border-radius: calc(var(--radius) - 2px) 0 0 calc(var(--radius) - 2px);
  background: hsl(var(--background));
}

.app-text-field--with-leading .app-text-field__input {
  border-radius: 0 calc(var(--radius) - 2px) calc(var(--radius) - 2px) 0;
  border-left: none;
}

.app-text-field__input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}

.app-text-field__input::placeholder {
  color: hsl(var(--muted-foreground));
}

.app-text-field__input:focus {
  outline: none;
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}
</style>
