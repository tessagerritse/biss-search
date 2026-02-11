<script setup lang="ts">
import { ref } from 'vue'
import IconClass from '@/assets/IconClass.vue'

const isSearchPanelOpen = ref(true)
</script>

<template>
  <div class="search-layout">
    <aside class="sidebar sidebar-left" aria-label="Queries">
      <h2 class="sidebar-title">Queries</h2>
      <div class="sidebar-actions">
        <button type="button" class="action-btn">
          <IconClass name="clock" icon-class="action-icon" />
          <span>History</span>
        </button>
        <button
          type="button"
          class="action-btn"
          :class="{ active: isSearchPanelOpen }"
          aria-label="Open search panel"
          @click="isSearchPanelOpen = true"
        >
          <IconClass name="plus" icon-class="action-icon" />
          <span>Create</span>
        </button>
        <button type="button" class="action-btn">
          <IconClass name="upload" icon-class="action-icon" />
          <span>Import</span>
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
          <IconClass name="close" icon-class="close-icon" />
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

.action-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  cursor: pointer;
  text-align: left;
}

.action-btn:hover {
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.action-btn.active {
  background: hsl(var(--accent));
  border-color: hsl(var(--primary));
  color: hsl(var(--accent-foreground));
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

/* Right panel: fixed overlay to match original (425px, shadow, border-left) */
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
  min-height: 120px;
  padding: 0 0.75rem;
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
