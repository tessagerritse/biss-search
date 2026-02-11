<script setup lang="ts">
withDefaults(
  defineProps<{
    name:
      | 'clock'
      | 'plus'
      | 'upload'
      | 'close'
      | 'info'
      | 'search'
      | 'and'
      | 'or'
      | 'calendar'
      | 'chevron-down'
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
    <!-- Search (magnifying glass) -->
    <template v-else-if="name === 'search'">
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </template>
    <!-- AND: two circles overlapping (intersection) -->
    <template v-else-if="name === 'and'">
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </template>
    <!-- OR: two circles side by side (union, no overlap) -->
    <template v-else-if="name === 'or'">
      <circle cx="8" cy="12" r="4" />
      <circle cx="16" cy="12" r="4" />
    </template>
    <!-- Calendar -->
    <template v-else-if="name === 'calendar'">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </template>
    <!-- Chevron down -->
    <template v-else-if="name === 'chevron-down'">
      <polyline points="6 9 12 15 18 9" />
    </template>
  </svg>
</template>
