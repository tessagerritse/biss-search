<script setup lang="ts">
import AppButton from '@/components/reusable/AppButton.vue'

export type DatasetId = 'rechtspraak' | 'echr' | 'cjeu'

const options: { value: DatasetId; label: string }[] = [
  { value: 'rechtspraak', label: 'Rechtspraak' },
  { value: 'echr', label: 'ECHR' },
  { value: 'cjeu', label: 'CJEU' },
]

defineProps<{
  modelValue: DatasetId
}>()

const emit = defineEmits<{
  'update:modelValue': [value: DatasetId]
}>()

function select(value: DatasetId) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="dataset-tabs" role="tablist" aria-label="Select dataset">
    <AppButton
      v-for="(opt, index) in options"
      :key="opt.value"
      type="button"
      role="tab"
      :aria-selected="modelValue === opt.value"
      :appearance="modelValue === opt.value ? 'emphasized' : 'default'"
      :group-position="
        options.length === 1
          ? 'only'
          : index === 0
            ? 'first'
            : index === options.length - 1
              ? 'last'
              : 'middle'
      "
      @click="select(opt.value)"
    >
      {{ opt.label }}
    </AppButton>
  </div>
</template>

<style scoped>
.dataset-tabs {
  display: flex;
  overflow: hidden;
  border-radius: var(--radius);
}

.dataset-tabs :deep(.app-btn) {
  flex: 1;
  min-width: 0;
}
</style>
