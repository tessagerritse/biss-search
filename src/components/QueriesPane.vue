<script setup lang="ts">
import IconClass from '@/assets/IconClass.vue'

import AppButton from '@/components/reusable/AppButton.vue'

defineProps<{
  isSearchPanelOpen?: boolean
}>()

defineEmits<{
  openSearchPanel: []
}>()
</script>

<template>
  <aside class="queries-pane" aria-label="Queries">
    <h2 class="queries-pane__title">Queries</h2>
    <div class="queries-pane__actions">
      <AppButton appearance="default" class="queries-pane__btn">
        <IconClass name="clock" icon-class="queries-pane__icon" />
        <span>History</span>
      </AppButton>
      <AppButton
        :appearance="isSearchPanelOpen ? 'emphasized' : 'default'"
        class="queries-pane__btn"
        aria-label="Open search panel"
        @click="$emit('openSearchPanel')"
      >
        <IconClass name="plus" icon-class="queries-pane__icon" />
        <span>Create</span>
      </AppButton>
      <AppButton appearance="default" class="queries-pane__btn">
        <IconClass name="upload" icon-class="queries-pane__icon" />
        <span>Import</span>
      </AppButton>
    </div>
  </aside>
</template>

<style scoped>
.queries-pane {
  display: flex;
  flex-direction: column;
  background: hsl(var(--background));
  border-right: 1px solid hsl(var(--border));
  padding: 1rem 0.75rem;
}

.queries-pane__title {
  font-size: inherit;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: hsl(var(--foreground));
}

.queries-pane__actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.queries-pane__btn {
  width: 100%;
  justify-content: flex-start;
  text-align: left;
}

.queries-pane__icon {
  flex-shrink: 0;
  order: 0;
  width: 1rem;
  height: 1rem;
}
</style>
