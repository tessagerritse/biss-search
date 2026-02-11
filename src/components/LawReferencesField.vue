<script setup lang="ts">
import IconClass from '@/assets/IconClass.vue'
import AppButton from '@/components/AppButton.vue'
import AppTextField from '@/components/AppTextField.vue'

export type LawRefsOperator = 'and' | 'or'

withDefaults(
  defineProps<{
    query: string
    operator?: LawRefsOperator
  }>(),
  { operator: 'and' },
)

const emit = defineEmits<{
  'update:query': [value: string]
  'update:operator': [value: LawRefsOperator]
}>()

function setOperator(value: LawRefsOperator) {
  emit('update:operator', value)
}
</script>

<template>
  <div class="law-refs-section" role="group" aria-labelledby="law-refs-heading">
    <div class="form-section form-section--label-row">
      <div class="form-label-row form-label-row--with-action">
        <span id="law-refs-heading" class="form-label">Law references</span>
        <div
          class="law-refs-operator"
          role="group"
          aria-label="Logical operator for law references"
        >
          <AppButton
            :appearance="operator === 'and' ? 'emphasized' : 'default'"
            group-position="first"
            @click="setOperator('and')"
          >
            <IconClass name="and" icon-class="operator-icon" />
            <span>AND</span>
          </AppButton>
          <AppButton
            :appearance="operator === 'or' ? 'emphasized' : 'default'"
            group-position="last"
            @click="setOperator('or')"
          >
            <IconClass name="or" icon-class="operator-icon" />
            <span>OR</span>
          </AppButton>
        </div>
      </div>
      <div class="law-refs-input-group">
        <AppTextField
          :model-value="query"
          type="text"
          placeholder="Add article(s) that may apply."
          @update:model-value="emit('update:query', $event)"
        >
          <template #leading>
            <IconClass name="search" icon-class="law-refs-search-icon" />
          </template>
        </AppTextField>
        <div class="law-refs-options">
          <span class="law-refs-options-title">Options</span>
          <p class="law-refs-options-empty">No results found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Wrapper so AND/OR is clearly scoped to this section only */
.law-refs-section {
  padding: 0.75rem 0.875rem;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  background: hsl(var(--accent) / 0.4);
}

.form-section--label-row .form-label-row--with-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.law-refs-operator {
  display: inline-flex;
}

.law-refs-operator .operator-icon {
  width: 1rem;
  height: 1rem;
}

.law-refs-input-group {
  margin-top: 0.5rem;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.law-refs-input-group .app-text-field {
  border: none;
}

.law-refs-input-group .app-text-field__input,
.law-refs-input-group .app-text-field__leading {
  border: none;
  border-radius: 0;
}

.law-refs-input-group .app-text-field__input:focus {
  box-shadow: none;
}

.law-refs-input-group:focus-within {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.law-refs-search-icon {
  width: 1rem;
  height: 1rem;
}

.law-refs-options {
  padding: 0.5rem 0.75rem 0.75rem;
  border-top: 1px solid hsl(var(--border));
}

.law-refs-options-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  display: block;
  margin-bottom: 0.25rem;
}

.law-refs-options-empty {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin: 0;
}
</style>
