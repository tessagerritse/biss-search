<script setup lang="ts">
import { ref } from 'vue'
import IconClass from '@/assets/IconClass.vue'
import InfoButton from '@/components/reusable/InfoButton.vue'

const props = withDefaults(
  defineProps<{
    title: string
    defaultOpen?: boolean
    infoText?: string
  }>(),
  { defaultOpen: true },
)

const isOpen = ref(props.defaultOpen)
const sectionId = `collapsible-${Math.random().toString(36).slice(2, 11)}`

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="collapsible-section">
    <div
      class="collapsible-section__trigger"
      role="button"
      tabindex="0"
      :aria-expanded="isOpen"
      :aria-controls="sectionId"
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.space.prevent="toggle"
    >
      <span class="collapsible-section__title-wrap">
        <span class="collapsible-section__title">{{ title }}</span>
        <span v-if="infoText" @click.stop>
          <InfoButton :info-text="infoText" />
        </span>
      </span>
      <span class="collapsible-section__spacer" />
      <span
        class="collapsible-section__chevron-wrap"
        :class="{ 'collapsible-section__chevron-wrap--closed': !isOpen }"
      >
        <IconClass name="chevron-down" icon-class="collapsible-section__chevron" />
      </span>
    </div>
    <div :id="sectionId" class="collapsible-section__content" :hidden="!isOpen">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.collapsible-section {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.collapsible-section__trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: inherit;
  line-height: inherit;
  color: hsl(var(--foreground));
  cursor: pointer;
  text-align: left;
}

.collapsible-section__trigger:hover {
  color: hsl(var(--foreground));
}

.collapsible-section__trigger:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--ring));
}

.collapsible-section__title-wrap {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.collapsible-section__title-wrap .info-button {
  flex-shrink: 0;
}

.collapsible-section__spacer {
  flex: 1;
  min-width: 0;
}

.collapsible-section__chevron-wrap {
  flex-shrink: 0;
  display: inline-flex;
  transition: transform 0.2s ease;
}

.collapsible-section__chevron-wrap--closed {
  transform: rotate(-90deg);
}

.collapsible-section__chevron {
  width: 1rem;
  height: 1rem;
  color: hsl(var(--muted-foreground));
}

.collapsible-section__content {
  padding-top: 0.25rem;
}

.collapsible-section__content[hidden] {
  display: none;
}
</style>
