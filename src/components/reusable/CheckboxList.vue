<script setup lang="ts">
const props = defineProps<{
  options: readonly { id: string; label: string }[]
  idPrefix: string
  modelValue: Record<string, boolean>
}>()

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, boolean>]
}>()

function toggle(id: string, checked: boolean) {
  emit('update:modelValue', { ...props.modelValue, [id]: checked })
}
</script>

<template>
  <div class="checkbox-list" role="group">
    <div v-for="option in options" :key="option.id" class="checkbox-list__option">
      <input
        :id="`${idPrefix}-${option.id}`"
        :checked="modelValue[option.id]"
        type="checkbox"
        class="checkbox-list__input"
        @change="toggle(option.id, ($event.target as HTMLInputElement).checked)"
      />
      <label :for="`${idPrefix}-${option.id}`" class="checkbox-list__label">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  background: hsl(var(--background));
}

.checkbox-list__option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-list__input {
  width: 1rem;
  height: 1rem;
  accent-color: hsl(var(--primary));
}

.checkbox-list__label {
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  cursor: pointer;
}
</style>
