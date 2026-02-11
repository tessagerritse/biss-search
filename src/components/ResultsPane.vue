<script setup lang="ts">
defineProps<{
  isSearching: boolean
  results: ReadonlyArray<{ ecli: string; similarity: number; snippet: string }>
  queryTitle: string
}>()
</script>

<template>
  <div class="results-pane" role="main" aria-label="Search results">
    <div v-if="isSearching" class="results-pane__loading">
      <span class="results-pane__spinner" aria-hidden="true"></span>
      <p class="results-pane__loading-text">Searching…</p>
    </div>
    <div v-else-if="results.length" class="results-pane__list-wrapper">
      <h2 class="results-pane__title">{{ queryTitle }}</h2>
      <ul class="results-pane__list">
        <li
          v-for="(item, index) in results"
          :key="item.ecli + String(index)"
          class="results-pane__item"
        >
          <div class="results-pane__item-header">
            <span class="results-pane__ecli">{{ item.ecli }}</span>
            <button type="button" class="results-pane__read-more">Read more</button>
          </div>
          <p class="results-pane__similarity">Similarity: {{ item.similarity.toFixed(2) }}%</p>
          <p class="results-pane__snippet">{{ item.snippet }}</p>
        </li>
      </ul>
    </div>
    <div v-else class="results-pane__placeholder">
      <p>Search results will appear here</p>
    </div>
  </div>
</template>

<style scoped>
.results-pane {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: hsl(var(--background));
  min-height: 0;
}

.results-pane__placeholder {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  text-align: center;
}

.results-pane__placeholder p {
  margin: 0;
}

.results-pane__loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.results-pane__spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid hsl(var(--border));
  border-top-color: hsl(var(--primary));
  border-radius: 50%;
  animation: results-pane-spin 0.8s linear infinite;
}

@keyframes results-pane-spin {
  to {
    transform: rotate(360deg);
  }
}

.results-pane__loading-text {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin: 0;
}

.results-pane__list-wrapper {
  width: 100%;
  max-width: 42rem;
  margin: 0 auto;
  padding-top: 0.5rem;
}

.results-pane__title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: hsl(var(--foreground));
}

.results-pane__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.results-pane__item {
  padding: 1rem 0;
  border-bottom: 1px solid hsl(var(--border));
}

.results-pane__item:last-child {
  border-bottom: none;
}

.results-pane__item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.results-pane__ecli {
  font-size: 0.8125rem;
  font-family: ui-monospace, monospace;
  color: hsl(var(--muted-foreground));
}

.results-pane__read-more {
  font-size: 0.8125rem;
  font-weight: 500;
  color: hsl(var(--primary));
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.15rem 0;
}

.results-pane__read-more:hover {
  text-decoration: underline;
}

.results-pane__similarity {
  font-size: 0.8125rem;
  color: hsl(var(--muted-foreground));
  margin: 0 0 0.35rem;
}

.results-pane__snippet {
  font-size: 0.875rem;
  line-height: 1.45;
  color: hsl(var(--foreground));
  margin: 0;
}
</style>
