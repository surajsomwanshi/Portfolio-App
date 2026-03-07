<template>
  <section id="awards" class="section">
    <div class="section-label fade-up">Recognition</div>
    <h2 class="section-title fade-up">Awards</h2>

    <div class="awards-list">
      <div
        class="award-item fade-up"
        v-for="award in awards"
        :key="award.name"
      >
        <div class="award-icon">{{ award.icon }}</div>
        <div>
          <div class="award-name">{{ award.name }}</div>
          <div class="award-org">{{ award.org }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  awards: { type: Array, required: true },
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

.awards-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.award-item {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  transition: border-color 0.2s;
}
.award-item:hover { border-color: var(--accent); }

.award-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.award-name {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 4px;
}

.award-org {
  font-size: 0.8rem;
  color: var(--muted);
}
</style>
