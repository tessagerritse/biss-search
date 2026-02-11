<script setup lang="ts">
import { ref } from 'vue'
import CollapsibleCheckboxGroup from '@/components/reusable/CollapsibleCheckboxGroup.vue'
import { DOMAIN_GROUPS } from '@/copy/domainOptions'

const allIds = DOMAIN_GROUPS.flatMap((g) => [g.id, ...g.children.map((c) => c.id)])

const selected = ref<Record<string, boolean>>(
  Object.fromEntries(allIds.map((id) => [id, false])),
)
</script>

<template>
  <div class="domains-field">
    <CollapsibleCheckboxGroup
      v-for="group in DOMAIN_GROUPS"
      :key="group.id"
      id-prefix="domain"
      :group-id="group.id"
      :group-label="group.label"
      :children="group.children"
      v-model="selected"
      :default-open="false"
    />
  </div>
</template>

<style scoped>
.domains-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  background: hsl(var(--background));
}
</style>
