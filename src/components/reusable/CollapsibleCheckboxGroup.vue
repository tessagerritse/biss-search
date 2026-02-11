<script setup lang="ts">
import { ref } from 'vue'

import IconClass from '@/assets/IconClass.vue'

const props = withDefaults(
  defineProps<{
    groupId: string
    groupLabel: string
    children: readonly { id: string; label: string }[]
    idPrefix: string
    modelValue: Record<string, boolean>
    defaultOpen?: boolean
  }>(),
  { defaultOpen: false },
)

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, boolean>]
}>()

const isOpen = ref(props.defaultOpen)

function toggleExpand() {
  isOpen.value = !isOpen.value
}

function setGroupChecked(checked: boolean) {
  const next = { ...props.modelValue, [props.groupId]: checked }
  for (const child of props.children) {
    next[child.id] = checked
  }
  emit('update:modelValue', next)
}

function setChildChecked(childId: string, checked: boolean) {
  emit('update:modelValue', { ...props.modelValue, [childId]: checked })
}
</script>

<template>
  <div class="collapsible-checkbox-group">
    <div class="collapsible-checkbox-group__row">
      <button
        type="button"
        class="collapsible-checkbox-group__chevron-btn"
        :aria-expanded="isOpen"
        :aria-label="isOpen ? 'Collapse' : 'Expand'"
        @click="toggleExpand"
      >
        <span
          class="collapsible-checkbox-group__chevron-wrap"
          :class="{ 'collapsible-checkbox-group__chevron-wrap--closed': !isOpen }"
        >
          <IconClass name="chevron-down" icon-class="collapsible-checkbox-group__chevron" />
        </span>
      </button>
      <input
        :id="`${idPrefix}-${groupId}`"
        type="checkbox"
        class="collapsible-checkbox-group__input"
        :checked="modelValue[groupId]"
        @change="setGroupChecked(($event.target as HTMLInputElement).checked)"
      />
      <label :for="`${idPrefix}-${groupId}`" class="collapsible-checkbox-group__label">
        {{ groupLabel }}
      </label>
    </div>
    <div v-show="isOpen" class="collapsible-checkbox-group__children" role="group">
      <div v-for="child in children" :key="child.id" class="collapsible-checkbox-group__child">
        <input
          :id="`${idPrefix}-${child.id}`"
          type="checkbox"
          class="collapsible-checkbox-group__input"
          :checked="modelValue[child.id]"
          @change="setChildChecked(child.id, ($event.target as HTMLInputElement).checked)"
        />
        <label :for="`${idPrefix}-${child.id}`" class="collapsible-checkbox-group__label">
          {{ child.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapsible-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.collapsible-checkbox-group__row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.collapsible-checkbox-group__chevron-btn {
  flex-shrink: 0;
  width: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
  margin: -0.25rem 0;
  border: none;
  background: transparent;
  color: hsl(var(--muted-foreground));
  cursor: pointer;
  border-radius: 2px;
}

.collapsible-checkbox-group__chevron-btn:hover {
  color: hsl(var(--foreground));
}

.collapsible-checkbox-group__chevron-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--ring));
}

.collapsible-checkbox-group__chevron-wrap {
  display: inline-flex;
  transition: transform 0.2s ease;
}

.collapsible-checkbox-group__chevron-wrap--closed {
  transform: rotate(-90deg);
}

.collapsible-checkbox-group__chevron {
  width: 1rem;
  height: 1rem;
}

.collapsible-checkbox-group__input {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  accent-color: hsl(var(--primary));
}

.collapsible-checkbox-group__label {
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  cursor: pointer;
}

/* Chevron column is 1.5rem; add a bit more so nested items sit to the right of parent checkbox */
.collapsible-checkbox-group__children {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 3rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.collapsible-checkbox-group__child {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
