<template>
  <section id="certifications" class="section">
    <div class="section-label fade-up">Always learning</div>
    <h2 class="section-title fade-up">Certifications</h2>

    <div class="cert-grid">
      <div
        class="cert-card fade-up"
        v-for="cert in certifications"
        :key="cert.name"
      >
        <div class="cert-name">{{ cert.name }}</div>
        <!-- statusClass: 'in-progress' | 'planned' | 'completed' -->
        <span class="cert-status" :class="cert.statusClass">{{ cert.status }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  certifications: { type: Array, required: true },
})
</script>

<style scoped>
.section {
  max-width: 960px;
  margin: 0 auto;
  padding: 80px 24px;
}

.section-label {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-head);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 48px;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.cert-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 24px;
  transition: border-color 0.2s;
}
.cert-card:hover { border-color: var(--accent); }

.cert-name {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.4;
}

.cert-status {
  display: inline-block;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 8px;
  border: 1px solid;
}

/* Status color variants */
.cert-status.in-progress { color: var(--accent);  border-color: var(--accent);  }
.cert-status.planned     { color: var(--muted);   border-color: var(--muted);   }
.cert-status.completed   { color: var(--accent2); border-color: var(--accent2); }
</style>
