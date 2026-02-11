<script setup lang="ts">
import { ref } from 'vue'
import IconClass from '@/assets/IconClass.vue'

const props = defineProps<{
  modelValue: string[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const inputValue = ref('')
const inputEl = ref<HTMLInputElement | null>(null)

function commitInput() {
  const raw = inputValue.value.trim()
  if (!raw) return
  const parts = raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  if (parts.length === 0) return
  emit('update:modelValue', [...props.modelValue, ...parts])
  inputValue.value = ''
}

function removeKeyword(index: number) {
  const next = props.modelValue.filter((_, i) => i !== index)
  emit('update:modelValue', next)
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault()
    commitInput()
    return
  }
  if (e.key === 'Backspace' && !inputValue.value && props.modelValue.length > 0) {
    e.preventDefault()
    removeKeyword(props.modelValue.length - 1)
  }
}
</script>

<template>
  <div class="keywords-input-wrap" role="group" aria-label="Keywords" @click="inputEl?.focus()">
    <span v-for="(keyword, index) in modelValue" :key="`${keyword}-${index}`" class="keyword-chip">
      <span class="keyword-chip__text">{{ keyword }}</span>
      <button
        type="button"
        class="keyword-chip__remove"
        :aria-label="`Remove ${keyword}`"
        @click.stop="removeKeyword(index)"
      >
        <IconClass name="close" icon-class="keyword-chip__icon" />
      </button>
    </span>
    <input
      ref="inputEl"
      v-model="inputValue"
      type="text"
      class="keywords-input"
      :placeholder="modelValue.length === 0 ? 'Type and press Enter or comma' : ''"
      autocomplete="off"
      @keydown="handleKeydown"
    />
  </div>
</template>

<style scoped>
.keywords-input-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  min-height: 2.25rem;
  padding: 0.35rem 0.75rem;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}

.keywords-input-wrap:focus-within {
  outline: none;
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.keyword-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.35rem 0.2rem 0.5rem;
  background: hsl(var(--accent));
  border-radius: 9999px;
  font-size: 0.875rem;
}

.keyword-chip__text {
  color: hsl(var(--foreground));
}

.keyword-chip__remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  color: hsl(var(--muted-foreground));
  cursor: pointer;
  border-radius: 2px;
}

.keyword-chip__remove:hover {
  color: hsl(var(--foreground));
}

.keyword-chip__icon {
  width: 0.875rem;
  height: 0.875rem;
}

.keywords-input {
  flex: 1;
  min-width: 10rem;
  padding: 0.15rem 0;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  font-family: inherit;
  color: inherit;
}

.keywords-input::placeholder {
  color: hsl(var(--muted-foreground));
}

.keywords-input:focus {
  outline: none;
}
</style>
