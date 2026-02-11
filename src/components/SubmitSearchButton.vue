<script setup lang="ts">
import AppButton from '@/components/reusable/AppButton.vue'

defineProps<{
  disabled: boolean
  /** Shown when hovering the button (e.g. why it is disabled). */
  disabledTooltip?: string
}>()

const emit = defineEmits<{
  submit: []
}>()
</script>

<template>
  <AppButton
    type="submit"
    appearance="emphasized"
    class="submit-search-btn__btn"
    :disabled="disabled"
    :title="disabled ? disabledTooltip : undefined"
    @click.prevent="emit('submit')"
  >
    <slot>Submit</slot>
  </AppButton>
</template>

<style scoped>
.submit-search-btn__btn {
  min-width: 6rem;
}
</style>
