<template>
  <section id="education" class="section">
    <div class="section-label fade-up">Where I studied</div>
    <h2 class="section-title fade-up">Education</h2>

    <div class="edu-grid">
      <div
        class="edu-card fade-up"
        v-for="edu in education"
        :key="edu.degree"
      >
        <div class="edu-degree">{{ edu.degree }}</div>
        <div class="edu-uni">{{ edu.university }}</div>
        <div class="edu-meta">
          <span class="edu-score">{{ edu.score }}</span>
          <span class="edu-period">{{ edu.period }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  education: { type: Array, required: true },
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

.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.edu-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 32px;
  transition: border-color 0.2s;
}
.edu-card:hover { border-color: var(--accent); }

.edu-degree {
  font-family: var(--font-head);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.edu-uni {
  color: var(--muted);
  font-size: 0.85rem;
  margin-bottom: 6px;
}

.edu-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 0.78rem;
}

.edu-score  { color: var(--accent); font-weight: 700; }
.edu-period { color: var(--muted); }
</style>
