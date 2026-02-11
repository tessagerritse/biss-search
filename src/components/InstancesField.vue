<script setup lang="ts">
import { ref } from 'vue'
import CollapsibleCheckboxGroup from '@/components/reusable/CollapsibleCheckboxGroup.vue'
import { INSTANCE_FLAT_OPTIONS, INSTANCE_GROUPS } from '@/copy/instanceOptions'

const allIds = [
  ...INSTANCE_FLAT_OPTIONS.map((o) => o.id),
  ...INSTANCE_GROUPS.flatMap((g) => [g.id, ...g.children.map((c) => c.id)]),
]

const selected = ref<Record<string, boolean>>(
  Object.fromEntries(allIds.map((id) => [id, false])),
)
</script>

<template>
  <div class="instances-field">
    <div class="instances-field__flat">
      <div
        v-for="option in INSTANCE_FLAT_OPTIONS"
        :key="option.id"
        class="instances-field__option"
      >
        <span class="instances-field__spacer" aria-hidden="true" />
        <input
          :id="`inst-${option.id}`"
          v-model="selected[option.id]"
          type="checkbox"
          class="instances-field__input"
        />
        <label :for="`inst-${option.id}`" class="instances-field__label">
          {{ option.label }}
        </label>
      </div>
    </div>
    <CollapsibleCheckboxGroup
      v-for="group in INSTANCE_GROUPS"
      :key="group.id"
      id-prefix="inst"
      :group-id="group.id"
      :group-label="group.label"
      :children="group.children"
      v-model="selected"
      :default-open="false"
    />
  </div>
</template>

<style scoped>
.instances-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  background: hsl(var(--background));
}

.instances-field__flat {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.instances-field__option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Matches chevron column width in CollapsibleCheckboxGroup so checkboxes align */
.instances-field__spacer {
  flex-shrink: 0;
  width: 1.5rem;
}

.instances-field__input {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  accent-color: hsl(var(--primary));
}

.instances-field__label {
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  cursor: pointer;
}
</style>
