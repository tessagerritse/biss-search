<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Visual style: default = light with border, emphasized = dark fill (e.g. main CTA or selected option in a group) */
    appearance?: 'default' | 'emphasized'
    type?: 'button' | 'submit'
    disabled?: boolean
    /** When used in a tab group: first/middle/last for shared borders and radius */
    groupPosition?: 'only' | 'first' | 'middle' | 'last'
  }>(),
  {
    appearance: 'default',
    type: 'button',
    disabled: false,
    groupPosition: 'only',
  },
)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['app-btn', `app-btn--${appearance}`, `app-btn--group-${groupPosition}`]"
  >
    <slot />
  </button>
</template>

<style scoped>
.app-btn {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: inherit;
  line-height: inherit;
  color: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: var(--radius);
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
}

.app-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.app-btn--emphasized {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border-color: hsl(var(--primary));
}

.app-btn--emphasized:hover:not(:disabled) {
  background: hsl(var(--primary) / 0.9);
  border-color: hsl(var(--primary) / 0.9);
}

.app-btn--default {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}

.app-btn--default:hover:not(:disabled) {
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

/* Tab group: shared borders, only outer corners rounded */
.app-btn--group-only {
  border-radius: var(--radius);
}

.app-btn--group-first {
  border-radius: var(--radius) 0 0 var(--radius);
  border-right-width: 0;
}

.app-btn--group-middle {
  border-radius: 0;
  border-right-width: 0;
}

.app-btn--group-last {
  border-radius: 0 var(--radius) var(--radius) 0;
}
</style>
