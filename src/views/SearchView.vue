<script setup lang="ts">
import { ref } from 'vue'
import IconClass from '@/assets/IconClass.vue'
import AppButton from '@/components/AppButton.vue'
import DatasetTabs from '@/components/DatasetTabs.vue'
import AppTextField from '@/components/AppTextField.vue'
import AppNumberField from '@/components/AppNumberField.vue'
import FormLabelWithInfo from '@/components/FormLabelWithInfo.vue'
import LawReferencesField from '@/components/LawReferencesField.vue'
import KeywordsField from '@/components/KeywordsField.vue'
import DateRangeField from '@/components/DateRangeField.vue'
import type { DatasetId } from '@/components/DatasetTabs.vue'
import type { LawRefsOperator } from '@/components/LawReferencesField.vue'
import { fieldInfo } from '@/copy/fieldInfo'
import { todayISO } from '@/utils/date'

const isSearchPanelOpen = ref(true)
const dataset = ref<DatasetId>('rechtspraak')
const semanticQuery = ref('')
const lawRefsOperator = ref<LawRefsOperator>('and')
const lawRefsQuery = ref('')
const keywords = ref<string[]>([])

const startDate = ref('1990-01-01')
const endDate = ref(todayISO())
const maxResults = ref(5)
</script>

<template>
  <div class="search-layout">
    <aside class="sidebar sidebar-left" aria-label="Queries">
      <h2 class="sidebar-title">Queries</h2>
      <div class="sidebar-actions">
        <AppButton appearance="default" class="action-btn">
          <IconClass name="clock" icon-class="action-icon" />
          <span>History</span>
        </AppButton>
        <AppButton
          :appearance="isSearchPanelOpen ? 'emphasized' : 'default'"
          class="action-btn"
          aria-label="Open search panel"
          @click="isSearchPanelOpen = true"
        >
          <IconClass name="plus" icon-class="action-icon" />
          <span>Create</span>
        </AppButton>
        <AppButton appearance="default" class="action-btn">
          <IconClass name="upload" icon-class="action-icon" />
          <span>Import</span>
        </AppButton>
      </div>
    </aside>

    <main class="content-main" aria-label="Search results">
      <p class="results-placeholder">Search results will appear here</p>
    </main>

    <aside v-show="isSearchPanelOpen" class="sidebar sidebar-right" aria-label="Search Documents">
      <div class="search-panel-header">
        <h2 class="search-panel-title">Search Documents</h2>
        <button
          type="button"
          class="close-btn"
          aria-label="Close search panel"
          @click="isSearchPanelOpen = false"
        >
          <IconClass name="close" icon-class="close-icon" />
        </button>
      </div>
      <p class="search-panel-intro">Build your query for the citation analysis here.</p>
      <section class="search-panel-body" aria-label="Query builder">
        <div class="form-section">
          <FormLabelWithInfo label="Dataset" :info-text="fieldInfo.dataset" />
          <DatasetTabs v-model="dataset" />
        </div>
        <div class="form-section">
          <FormLabelWithInfo label="Semantic Search" :info-text="fieldInfo.semanticSearch" />
          <AppTextField
            v-model="semanticQuery"
            type="search"
            placeholder="Example: There is non-conformity even when the war…"
          />
        </div>
        <div class="form-section">
          <FormLabelWithInfo label="Keywords" :info-text="fieldInfo.keywords" />
          <KeywordsField v-model="keywords" />
        </div>
        <LawReferencesField v-model:query="lawRefsQuery" v-model:operator="lawRefsOperator" />
        <DateRangeField v-model:start-date="startDate" v-model:end-date="endDate" />
        <div class="form-section">
          <span class="form-label">Max number of results</span>
          <AppNumberField v-model="maxResults" :min="1" />
        </div>
      </section>
    </aside>
  </div>
</template>

<style scoped>
.search-layout {
  display: grid;
  grid-template-columns: minmax(200px, 240px) 1fr;
  min-height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  background: hsl(var(--background));
  border-right: 1px solid hsl(var(--border));
}

.sidebar-left {
  padding: 1rem 0.75rem;
}

.sidebar-title {
  font-size: inherit;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: hsl(var(--foreground));
}

.sidebar-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-actions .action-btn {
  width: 100%;
  justify-content: flex-start;
  text-align: left;
}

.action-icon {
  flex-shrink: 0;
  order: 0;
  width: 1rem;
  height: 1rem;
}

.close-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.content-main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: hsl(var(--background));
}

.results-placeholder {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

.sidebar-right {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 51;
  width: 425px;
  max-width: 425px;
  display: flex;
  flex-direction: column;
  padding: 24px 4px;
  overflow-y: auto;
  background: hsl(var(--background));
  border-left: 1px solid rgb(226, 232, 240);
  box-shadow: var(--panel-shadow);
}

.search-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0 0.75rem;
}

.search-panel-title {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: hsl(var(--foreground));
}

.close-btn {
  padding: 0.25rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: hsl(var(--muted-foreground));
  cursor: pointer;
  border-radius: calc(var(--radius) - 4px);
}

.close-btn:hover {
  background: hsl(var(--accent));
  color: hsl(var(--foreground));
}

.search-panel-intro {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: hsl(var(--muted-foreground));
  margin: 0 0 1rem;
  padding: 0 0.75rem;
}

.search-panel-body {
  padding: 0 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

@media (max-width: 900px) {
  .search-layout {
    grid-template-columns: 1fr;
  }

  .sidebar-right {
    width: 100%;
    max-width: none;
    border-left: none;
    border-top: 1px solid rgb(226, 232, 240);
  }
}
</style>
