<script setup lang="ts">
import { ref } from 'vue'

const isSearchPanelOpen = ref(true)
</script>

<template>
  <div class="search-layout">
    <aside class="sidebar sidebar-left" aria-label="Queries">
      <h2 class="sidebar-title">Queries</h2>
      <div class="sidebar-actions">
        <button type="button" class="action-btn">
          <span class="action-icon">🕐</span>
          History
        </button>
        <button type="button" class="action-btn">
          <span class="action-icon">+</span>
          Create
        </button>
        <button type="button" class="action-btn">
          <span class="action-icon">↑</span>
          Import
        </button>
      </div>
    </aside>

    <main class="content-main" aria-label="Search results">
      <p class="results-placeholder">Search results will appear here</p>
    </main>

    <aside
      v-show="isSearchPanelOpen"
      class="sidebar sidebar-right"
      aria-label="Search Documents"
    >
      <div class="search-panel-header">
        <h2 class="search-panel-title">Search Documents</h2>
        <button
          type="button"
          class="close-btn"
          aria-label="Close search panel"
          @click="isSearchPanelOpen = false"
        >
          ×
        </button>
      </div>
      <p class="search-panel-intro">
        Build your query for the citation analysis here. We offer three different Case Law
        datasets: Rechtspraak, ECHR and CJEU.
      </p>
      <section class="search-panel-body" aria-label="Query builder">
        <!-- Form content will be added later -->
      </section>
    </aside>
  </div>
</template>

<style scoped>
.search-layout {
  display: grid;
  grid-template-columns: minmax(200px, 240px) 1fr minmax(280px, 380px);
  min-height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  border-right: 1px solid #e0e0e0;
}

.sidebar-left {
  padding: 1.5rem 1rem;
}

.sidebar-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: #333;
}

.sidebar-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;
}

.action-btn:hover {
  background: #f0f0f0;
  border-color: #ccc;
}

.action-icon {
  font-size: 1rem;
}

.content-main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #fff;
}

.results-placeholder {
  color: #888;
  font-size: 1rem;
}

.sidebar-right {
  border-right: none;
  border-left: 1px solid #e0e0e0;
  padding: 1.5rem;
  overflow-y: auto;
}

.search-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.search-panel-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.close-btn {
  padding: 0.25rem 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: #666;
  cursor: pointer;
  border-radius: 4px;
}

.close-btn:hover {
  background: #eee;
  color: #333;
}

.search-panel-intro {
  font-size: 0.9rem;
  color: #555;
  margin: 0 0 1.25rem;
  line-height: 1.4;
}

.search-panel-body {
  min-height: 120px;
}

@media (max-width: 900px) {
  .search-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }

  .sidebar-right {
    border-left: none;
    border-top: 1px solid #e0e0e0;
  }
}
</style>
