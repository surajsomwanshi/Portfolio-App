<template>
  <section id="experience" class="section">
    <div class="section-label fade-up">Where I've worked</div>
    <h2 class="section-title fade-up">Experience</h2>

    <div class="experience-block fade-up">
      <!-- Header row -->
      <div class="exp-header">
        <div class="exp-title">{{ experience.title }}</div>
        <div class="exp-period">{{ experience.period }}</div>
      </div>

      <div class="exp-company">{{ experience.company }}</div>

      <!-- Experiance Bullet points -->
      <ul class="exp-bullets">
        <li v-for="point in experience.bullets" :key="point">
          {{ point }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  experience: { type: Object, required: true },
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

.experience-block {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 40px;
  position: relative;
}
/* Green left bar */
.experience-block::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: var(--accent);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 8px;
}

.exp-title {
  font-family: var(--font-head);
  font-size: 1.25rem;
  font-weight: 700;
}

.exp-period {
  font-size: 0.78rem;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 3px 10px;
  white-space: nowrap;
}

.exp-company {
  color: var(--muted);
  font-size: 0.88rem;
  margin-bottom: 24px;
}

.exp-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.exp-bullets li {
  display: flex;
  gap: 12px;
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.65;
}
.exp-bullets li::before {
  content: '▸';
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 640px) {
  .experience-block { padding: 24px 20px; }
}
</style>
