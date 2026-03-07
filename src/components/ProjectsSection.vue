<template>
  <section id="projects" class="section">
    <div class="section-label fade-up">What I've built</div>
    <h2 class="section-title fade-up">Projects</h2>

    <div class="projects-grid">
      <div
        class="project-card fade-up"
        v-for="(project, index) in projects"
        :key="project.name"
      >
        <!-- Project label and name-->
        <div class="project-index">Project {{ String(index + 1).padStart(2, '0') }}</div>

        <div class="project-name">{{ project.name }}</div>

        <p class="project-desc">{{ project.description }}</p>

        <!-- Used Tech stack for projects -->
        <div class="project-tech">
          <span class="tech-pill" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
        </div>

        <!-- Work Highlights -->
        <ul class="project-bullets">
          <li v-for="point in project.highlights" :key="point">{{ point }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: { type: Array, required: true },
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.2s, transform 0.2s;
  cursor: default;
}
.project-card:hover { border-color: var(--accent); transform: translateY(-4px); }

.project-index {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--accent);
}

.project-name {
  font-family: var(--font-head);
  font-size: 1.25rem;
  font-weight: 700;
}

.project-desc {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.65;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-pill {
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 3px 10px;
  font-size: 0.73rem;
  color: var(--accent2);
}

.project-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.project-bullets li {
  display: flex;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.6;
}
.project-bullets li::before {
  content: '→';
  color: var(--accent);
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .projects-grid { grid-template-columns: 1fr; }
  .project-card  { padding: 24px; }
}
</style>
