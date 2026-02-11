<script setup lang="ts">
import InfoButton from '@/components/reusable/InfoButton.vue'

defineProps<{
  label: string
  infoText?: string
}>()
</script>

<template>
  <div class="form-label-row">
    <span class="form-label">{{ label }}</span>
    <InfoButton v-if="infoText" :info-text="infoText" />
  </div>
</template>
