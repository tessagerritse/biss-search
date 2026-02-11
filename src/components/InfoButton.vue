<script setup lang="ts">
import { ref, nextTick, onBeforeUnmount } from 'vue'
import IconClass from '@/assets/IconClass.vue'

withDefaults(
  defineProps<{
    infoText: string
    /** Popover alignment: left (default) or right */
    popoverAlign?: 'left' | 'right'
  }>(),
  { popoverAlign: 'left' },
)

const showInfo = ref(false)
const wrapRef = ref<HTMLDivElement | null>(null)

let clickOutsideHandler: ((e: MouseEvent) => void) | null = null

function closeInfo() {
  showInfo.value = false
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler)
    clickOutsideHandler = null
  }
}

function toggleInfo() {
  if (showInfo.value) {
    closeInfo()
    return
  }
  showInfo.value = true
  nextTick(() => {
    clickOutsideHandler = (e: MouseEvent) => {
      if (wrapRef.value?.contains(e.target as Node)) return
      closeInfo()
    }
    document.addEventListener('click', clickOutsideHandler)
  })
}

onBeforeUnmount(() => {
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler)
  }
})
</script>

<template>
  <div ref="wrapRef" class="info-button" :class="{ 'info-button--popover-right': popoverAlign === 'right' }">
    <button
      type="button"
      class="info-button__btn"
      :aria-expanded="showInfo"
      aria-label="What is this for?"
      @click="toggleInfo"
    >
      <IconClass name="info" icon-class="info-button__icon" />
    </button>
    <div v-if="showInfo" class="info-button__popover" role="tooltip">
      {{ infoText }}
    </div>
  </div>
</template>

<style scoped>
.info-button {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.info-button__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: hsl(var(--muted-foreground));
  cursor: pointer;
  line-height: 0;
}

.info-button__btn:hover {
  color: hsl(var(--foreground));
  background: hsl(var(--accent));
}

.info-button__btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--ring));
}

.info-button__icon {
  width: 1rem;
  height: 1rem;
  display: block;
  vertical-align: middle;
}

.info-button__popover {
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  margin-top: 0.25rem;
  padding: 0.5rem 0.75rem;
  max-width: 360px;
  min-width: 280px;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: hsl(var(--popover-foreground));
  background: hsl(var(--popover));
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  box-shadow: var(--panel-shadow);
}

.info-button--popover-right .info-button__popover {
  left: auto;
  right: 0;
}
</style>
