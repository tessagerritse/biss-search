<script setup lang="ts">
import QueriesPane from '@/components/QueriesPane.vue'
import ResultsPane from '@/components/ResultsPane.vue'
import SearchPane from '@/components/SearchPane.vue'
import { useSearchForm } from '@/composables/useSearchForm'

const {
  isSearchPanelOpen,
  dataset,
  semanticQuery,
  lawRefsOperator,
  lawRefsQuery,
  keywords,
  startDate,
  endDate,
  maxResults,
  degreesSources,
  degreesTargets,
  documentTypes,
  isSearching,
  searchResults,
  submitDisabled,
  submitDisabledTooltip,
  submitSearch,
  resetForm,
  dummySearchQueryTitle,
} = useSearchForm()
</script>

<template>
  <div class="search-view">
    <QueriesPane
      :is-search-panel-open="isSearchPanelOpen"
      @open-search-panel="isSearchPanelOpen = true"
    />
    <ResultsPane
      :is-searching="isSearching"
      :results="searchResults"
      :query-title="dummySearchQueryTitle"
    />
    <SearchPane
      v-show="isSearchPanelOpen"
      :submit-disabled="submitDisabled"
      :submit-disabled-tooltip="submitDisabledTooltip"
      :dataset="dataset"
      :semantic-query="semanticQuery"
      :law-refs-operator="lawRefsOperator"
      :law-refs-query="lawRefsQuery"
      :keywords="keywords"
      :start-date="startDate"
      :end-date="endDate"
      :max-results="maxResults"
      :degrees-sources="degreesSources"
      :degrees-targets="degreesTargets"
      :document-types="documentTypes"
      @close="isSearchPanelOpen = false"
      @update:dataset="dataset = $event"
      @update:semantic-query="semanticQuery = $event"
      @update:law-refs-operator="lawRefsOperator = $event"
      @update:law-refs-query="lawRefsQuery = $event"
      @update:keywords="keywords = $event"
      @update:start-date="startDate = $event"
      @update:end-date="endDate = $event"
      @update:max-results="maxResults = $event"
      @update:degrees-sources="degreesSources = $event"
      @update:degrees-targets="degreesTargets = $event"
      @update:document-types="documentTypes = $event"
      @submit="submitSearch"
      @reset="resetForm"
    />
  </div>
</template>

<style scoped>
.search-view {
  display: grid;
  grid-template-columns: minmax(200px, 240px) 1fr;
  min-height: 100vh;
}

@media (max-width: 900px) {
  .search-view {
    grid-template-columns: 1fr;
  }
}
</style>
