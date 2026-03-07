<template>
  <section id="about" class="stats-section">
    <div class="stats-row fade-up">
      <div class="stat-box" v-for="stat in stats" :key="stat.label">
        <div class="stat-number">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: { type: Array, required: true },
})
</script>

<style scoped>
.stats-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.stat-box {
  background: var(--surface);
  padding: 32px 24px;
  text-align: center;
}

.stat-number {
  font-family: var(--font-head);
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--accent);
}

.stat-label {
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 6px;
}
</style>
