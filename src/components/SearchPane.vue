<script setup lang="ts">
import IconClass from '@/assets/IconClass.vue'
import AppTextField from '@/components/reusable/AppTextField.vue'
import SubmitSearchButton from '@/components/reusable/SubmitSearchButton.vue'
import FormLabel from '@/components/reusable/FormLabel.vue'
import AppNumberField from '@/components/reusable/AppNumberField.vue'
import DatasetTabs from '@/components/DatasetTabs.vue'
import LawReferencesField from '@/components/LawReferencesField.vue'
import KeywordsField from '@/components/KeywordsField.vue'
import DateRangeField from '@/components/DateRangeField.vue'
import CollapsibleSection from '@/components/reusable/CollapsibleSection.vue'
import InstancesField from '@/components/InstancesField.vue'
import DomainsField from '@/components/DomainsField.vue'
import AdvancedSettingsField from '@/components/AdvancedSettingsField.vue'
import type { DatasetId } from '@/components/DatasetTabs.vue'
import type { LawRefsOperator } from '@/components/LawReferencesField.vue'
import { fieldInfo } from '@/copy/fieldInfo'

defineProps<{
  isFormPristine: boolean
  dataset: DatasetId
  semanticQuery: string
  lawRefsOperator: LawRefsOperator
  lawRefsQuery: string
  keywords: string[]
  startDate: string
  endDate: string
  maxResults: number
  degreesSources: number
  degreesTargets: number
  documentTypes: Record<string, boolean>
}>()

const emit = defineEmits<{
  submit: []
  close: []
  'update:dataset': [value: DatasetId]
  'update:semanticQuery': [value: string]
  'update:lawRefsOperator': [value: LawRefsOperator]
  'update:lawRefsQuery': [value: string]
  'update:keywords': [value: string[]]
  'update:startDate': [value: string]
  'update:endDate': [value: string]
  'update:maxResults': [value: number]
  'update:degreesSources': [value: number]
  'update:degreesTargets': [value: number]
  'update:documentTypes': [value: Record<string, boolean>]
}>()
</script>

<template>
  <aside class="search-pane" aria-label="Search Documents">
    <div class="search-pane__header">
      <div class="search-pane__header-text">
        <h2 class="search-pane__title">Search Documents</h2>
        <p class="search-pane__intro">Build your query for the citation analysis here.</p>
      </div>
      <button
        type="button"
        class="search-pane__close"
        aria-label="Close search panel"
        @click="emit('close')"
      >
        <IconClass name="close" icon-class="search-pane__close-icon" />
      </button>
    </div>
    <div class="search-pane__scroll">
      <section class="search-pane__body" aria-label="Query builder">
        <div class="search-pane__section">
          <FormLabel label="Dataset" :info-text="fieldInfo.dataset" />
          <DatasetTabs
            :model-value="dataset"
            @update:model-value="emit('update:dataset', $event)"
          />
        </div>
        <div class="search-pane__section">
          <FormLabel label="Semantic Search" :info-text="fieldInfo.semanticSearch" />
          <AppTextField
            :model-value="semanticQuery"
            type="search"
            placeholder="Example: There is non-conformity even when the war…"
            @update:model-value="emit('update:semanticQuery', $event)"
          />
        </div>
        <div class="search-pane__section">
          <LawReferencesField
            :query="lawRefsQuery"
            :operator="lawRefsOperator"
            @update:query="emit('update:lawRefsQuery', $event)"
            @update:operator="emit('update:lawRefsOperator', $event)"
          />
        </div>
        <div class="search-pane__section">
          <FormLabel label="Keywords" :info-text="fieldInfo.keywords" />
          <KeywordsField
            :model-value="keywords"
            @update:model-value="emit('update:keywords', $event)"
          />
        </div>
        <div class="search-pane__section">
          <FormLabel label="Max results" />
          <AppNumberField
            :model-value="maxResults"
            :min="1"
            @update:model-value="emit('update:maxResults', $event)"
          />
        </div>
        <CollapsibleSection title="Date range" :info-text="fieldInfo.dateRange">
          <DateRangeField
            :start-date="startDate"
            :end-date="endDate"
            @update:start-date="emit('update:startDate', $event)"
            @update:end-date="emit('update:endDate', $event)"
          />
        </CollapsibleSection>
        <CollapsibleSection title="Instances" :info-text="fieldInfo.instances">
          <InstancesField />
        </CollapsibleSection>
        <CollapsibleSection title="Domains" :info-text="fieldInfo.domains">
          <DomainsField />
        </CollapsibleSection>
        <CollapsibleSection title="Advanced Settings" :default-open="false">
          <AdvancedSettingsField
            :degrees-sources="degreesSources"
            :degrees-targets="degreesTargets"
            :document-types="documentTypes"
            @update:degrees-sources="emit('update:degreesSources', $event)"
            @update:degrees-targets="emit('update:degreesTargets', $event)"
            @update:document-types="emit('update:documentTypes', $event)"
          />
        </CollapsibleSection>
      </section>
    </div>
    <footer class="search-pane__footer">
      <SubmitSearchButton
        :disabled="isFormPristine"
        disabled-tooltip="Change at least one search field to enable Submit"
        @submit="emit('submit')"
      />
    </footer>
  </aside>
</template>

<style scoped>
.search-pane {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(400px, 100vw);
  display: flex;
  flex-direction: column;
  background: hsl(var(--background));
  border-left: 1px solid hsl(var(--border));
  box-shadow: -4px 0 12px hsl(0 0% 0% / 0.05);
  z-index: 10;
}

.search-pane__header {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem 0.75rem;
  border-bottom: 1px solid hsl(var(--border));
}

.search-pane__header-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.search-pane__title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: hsl(var(--foreground));
}

.search-pane__close {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  background: none;
  border: none;
  border-radius: var(--radius);
  color: hsl(var(--muted-foreground));
  cursor: pointer;
}

.search-pane__close:hover {
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.search-pane__close-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.search-pane__intro {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin: 0;
  line-height: 1.45;
}

.search-pane__scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.search-pane__body {
  padding: 0 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.search-pane__section {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.search-pane__footer {
  flex-shrink: 0;
  padding: 1rem 0.75rem 1.25rem;
  display: flex;
  justify-content: flex-end;
  background: hsl(var(--background));
  border-top: 1px solid hsl(var(--border));
}

@media (max-width: 900px) {
  .search-pane {
    width: 100%;
    max-width: none;
    border-left: none;
    border-top: 1px solid hsl(var(--border));
  }
}
</style>
