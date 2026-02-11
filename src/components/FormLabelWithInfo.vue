<script setup lang="ts">
import { ref, nextTick, onBeforeUnmount } from 'vue'
import IconClass from '@/assets/IconClass.vue'

defineProps<{
  label: string
  infoText?: string
}>()

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
  <div class="form-label-row">
    <span class="form-label">{{ label }}</span>
    <div v-if="infoText" ref="wrapRef" class="form-label-with-info__wrap">
      <button
        type="button"
        class="form-label-with-info__btn"
        :aria-expanded="showInfo"
        aria-label="What is this field for?"
        @click="toggleInfo"
      >
        <IconClass name="info" icon-class="form-label-with-info__icon" />
      </button>
      <div v-if="showInfo" class="form-label-with-info__popover" role="tooltip">
        {{ infoText }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-label-with-info__wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.form-label-with-info__btn {
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

.form-label-with-info__btn:hover {
  color: hsl(var(--foreground));
  background: hsl(var(--accent));
}

.form-label-with-info__btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--ring));
}

.form-label-with-info__icon {
  width: 1rem;
  height: 1rem;
  display: block;
  vertical-align: middle;
}

.form-label-with-info__popover {
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
</style>
