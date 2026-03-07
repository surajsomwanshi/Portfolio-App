<template>
  <section id="skills" class="section">
    <div class="section-label fade-up">What I work with</div>
    <h2 class="section-title fade-up">Technical Skills</h2>

    <div class="skills-grid">
      <div
        class="skill-category fade-up"
        v-for="cat in skills"
        :key="cat.category"
      >
        <div class="skill-cat-title">{{ cat.category }}</div>
        <div class="skill-tags">
          <span class="skill-tag" v-for="tag in cat.items" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  skills: { type: Array, required: true },
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.skill-category {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 28px;
  transition: border-color 0.2s;
}
.skill-category:hover { border-color: var(--accent); }

.skill-cat-title {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 5px 12px;
  font-size: 0.78rem;
  color: var(--text);
  transition: border-color 0.2s, color 0.2s;
  cursor: default;
}
.skill-tag:hover { border-color: var(--accent); color: var(--accent); }
</style>
