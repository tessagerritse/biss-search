<script setup lang="ts">
import AppButton from '@/components/reusable/AppButton.vue'

defineProps<{
  disabled: boolean
  /** Shown when hovering the button area while disabled (browsers often don't show title on disabled buttons, so we use a wrapper). */
  disabledTooltip?: string
}>()

const emit = defineEmits<{
  submit: []
}>()
</script>

<template>
  <span
    :title="disabled ? disabledTooltip : undefined"
    class="submit-search-btn"
  >
    <AppButton
      type="submit"
      appearance="emphasized"
      class="submit-search-btn__btn"
      :disabled="disabled"
      @click.prevent="emit('submit')"
    >
      <slot>Submit</slot>
    </AppButton>
  </span>
</template>

<style scoped>
.submit-search-btn {
  display: inline-block;
}

.submit-search-btn__btn {
  min-width: 6rem;
}
</style>
