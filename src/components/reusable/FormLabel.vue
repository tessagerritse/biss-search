<script setup lang="ts">
import InfoButton from '@/components/reusable/InfoButton.vue'

defineProps<{
  label: string
  infoText?: string
  /** Show a required indicator (e.g. asterisk) next to the label */
  required?: boolean
}>()
</script>

<template>
  <div class="form-label-row">
    <span class="form-label">
      {{ label }}
      <span v-if="required" class="form-label__required" aria-hidden="true">*</span>
    </span>
    <InfoButton v-if="infoText" :info-text="infoText" />
  </div>
</template>
