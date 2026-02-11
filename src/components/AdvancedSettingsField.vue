<script setup lang="ts">
import FormLabel from '@/components/reusable/FormLabel.vue'
import AppNumberField from '@/components/reusable/AppNumberField.vue'
import DocumentTypesField from '@/components/DocumentTypesField.vue'

import { fieldInfo } from '@/copy/fieldInfo'

defineProps<{
  degreesSources: number
  degreesTargets: number
  documentTypes: Record<string, boolean>
}>()

defineEmits<{
  'update:degreesSources': [value: number]
  'update:degreesTargets': [value: number]
  'update:documentTypes': [value: Record<string, boolean>]
}>()
</script>

<template>
  <div class="advanced-settings-field">
    <div class="advanced-settings-field__section">
      <FormLabel label="Degrees Sources" :info-text="fieldInfo.degreesSources" />
      <AppNumberField
        :model-value="degreesSources"
        :min="0"
        @update:model-value="$emit('update:degreesSources', $event)"
      />
    </div>
    <div class="advanced-settings-field__section">
      <FormLabel label="Degrees Targets" :info-text="fieldInfo.degreesTargets" />
      <AppNumberField
        :model-value="degreesTargets"
        :min="0"
        @update:model-value="$emit('update:degreesTargets', $event)"
      />
    </div>
    <div class="advanced-settings-field__section">
      <FormLabel label="Document Types" :info-text="fieldInfo.documentTypes" />
      <DocumentTypesField
        :model-value="documentTypes"
        @update:model-value="$emit('update:documentTypes', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.advanced-settings-field {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.advanced-settings-field__section {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
</style>
