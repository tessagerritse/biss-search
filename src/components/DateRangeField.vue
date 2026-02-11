<script setup lang="ts">
import { computed } from 'vue'
import IconClass from '@/assets/IconClass.vue'
import { toDDMMYYYY, todayISO } from '@/utils/date'

const props = defineProps<{
  startDate: string
  endDate: string
}>()

const emit = defineEmits<{
  'update:startDate': [value: string]
  'update:endDate': [value: string]
}>()

const formattedStart = computed(() => toDDMMYYYY(props.startDate))
const formattedEnd = computed(() => toDDMMYYYY(props.endDate))

function onStartChange(e: Event) {
  const value = (e.target as HTMLInputElement).value
  if (value) emit('update:startDate', value)
}

function onEndChange(e: Event) {
  const value = (e.target as HTMLInputElement).value
  if (value) emit('update:endDate', value)
}
</script>

<template>
  <div class="date-range-field">
    <div class="form-section">
      <span class="form-label">Start Date</span>
      <div class="date-input-wrap">
        <input
          type="text"
          class="date-input"
          :value="formattedStart"
          readonly
          aria-label="Start date (DD/MM/YYYY)"
          tabindex="-1"
        />
        <input
          type="date"
          class="date-input-native"
          :value="startDate"
          :max="todayISO()"
          aria-label="Start date (DD/MM/YYYY)"
          @change="onStartChange"
        />
        <IconClass name="calendar" icon-class="date-input-icon" />
      </div>
    </div>
    <div class="form-section">
      <span class="form-label">End Date</span>
      <div class="date-input-wrap">
        <input
          type="text"
          class="date-input"
          :value="formattedEnd"
          readonly
          aria-label="End date (DD/MM/YYYY)"
          tabindex="-1"
        />
        <input
          type="date"
          class="date-input-native"
          :value="endDate"
          :max="todayISO()"
          aria-label="End date (DD/MM/YYYY)"
          @change="onEndChange"
        />
        <IconClass name="calendar" icon-class="date-input-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.date-range-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.date-range-field .form-section {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.date-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  cursor: pointer;
}

.date-input-wrap:focus-within {
  outline: none;
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.date-input {
  flex: 1;
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  font-family: inherit;
  color: inherit;
  cursor: pointer;
}

.date-input:focus {
  outline: none;
}

.date-input-native {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}

.date-input-icon {
  flex-shrink: 0;
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 0.5rem;
  color: hsl(var(--muted-foreground));
}
</style>
