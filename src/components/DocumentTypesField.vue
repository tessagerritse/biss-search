<script setup lang="ts">
const props = defineProps<{
  modelValue: Record<string, boolean>
}>()

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, boolean>]
}>()

const DOCUMENT_TYPE_OPTIONS = [
  { id: 'decision', label: 'Decision' },
  { id: 'opinion', label: 'Opinion' },
] as const

function toggle(id: string, checked: boolean) {
  const next = { ...props.modelValue, [id]: checked }
  const anySelected = DOCUMENT_TYPE_OPTIONS.some((o) => next[o.id])
  if (!anySelected) return
  emit('update:modelValue', next)
}
</script>

<template>
  <div class="document-types-field" role="group">
    <div
      v-for="option in DOCUMENT_TYPE_OPTIONS"
      :key="option.id"
      class="document-types-field__option"
    >
      <input
        :id="`doc-${option.id}`"
        type="checkbox"
        class="document-types-field__input"
        :checked="modelValue[option.id]"
        @change="toggle(option.id, ($event.target as HTMLInputElement).checked)"
      />
      <label :for="`doc-${option.id}`" class="document-types-field__label">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.document-types-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.document-types-field__option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.document-types-field__input {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  accent-color: hsl(var(--primary));
}

.document-types-field__label {
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  cursor: pointer;
}
</style>
