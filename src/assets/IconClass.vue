<script setup lang="ts">
withDefaults(
  defineProps<{
    name: 'clock' | 'plus' | 'upload' | 'close' | 'info'
    iconClass?: string
  }>(),
  { iconClass: '' },
)
</script>

<template>
  <svg
    :class="iconClass"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <!-- History -->
    <template v-if="name === 'clock'">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </template>
    <!-- Create -->
    <template v-else-if="name === 'plus'">
      <path d="M12 5v14M5 12h14" />
    </template>
    <!-- Import -->
    <template v-else-if="name === 'upload'">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </template>
    <!-- Close -->
    <template v-else-if="name === 'close'">
      <path d="M18 6L6 18M6 6l12 12" />
    </template>
    <!-- Info -->
    <template v-else-if="name === 'info'">
      <circle cx="12" cy="12" r="10" fill="none" />
      <path d="M12 10v5" stroke="currentColor" fill="none" />
      <circle cx="12" cy="7.5" r="1.25" fill="currentColor" stroke="none" />
    </template>
  </svg>
</template>
