<script setup lang="ts">
</script>

<template>
  <main class="results-pane" aria-label="Search results">
    <p class="results-pane__placeholder">Search results will appear here</p>
  </main>
</template>

<style scoped>
.results-pane {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: hsl(var(--background));
}

.results-pane__placeholder {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin: 0;
  text-align: center;
}
</style>
