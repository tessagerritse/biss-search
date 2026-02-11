<script setup lang="ts">
import { ref } from 'vue'
import QueriesPane from '@/components/QueriesPane.vue'
import ResultsPane from '@/components/ResultsPane.vue'
import SearchPane from '@/components/SearchPane.vue'
import type { DatasetId } from '@/components/DatasetTabs.vue'
import type { LawRefsOperator } from '@/components/LawReferencesField.vue'
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
const degreesSources = ref(0)
const degreesTargets = ref(0)
const documentTypes = ref<Record<string, boolean>>({
  decision: true,
  opinion: false,
})
</script>

<template>
  <div class="search-view">
    <QueriesPane
      :is-search-panel-open="isSearchPanelOpen"
      @open-search-panel="isSearchPanelOpen = true"
    />
    <ResultsPane />
    <SearchPane
      v-show="isSearchPanelOpen"
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
