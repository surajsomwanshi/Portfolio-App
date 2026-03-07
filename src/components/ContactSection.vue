<template>
  <section id="contact" class="section">
    <div class="section-label fade-up">Let's connect</div>
    <h2 class="section-title fade-up">Get In Touch</h2>

    <div class="contact-block fade-up">
      <p class="contact-intro">
        I'm open to new opportunities in Java Backend / Full Stack development.
        Feel free to reach out if you'd like to work together or just say hi!
      </p>

      <div class="contact-links">
        <a :href="'mailto:' + profile.email" class="contact-row">
          <span class="icon">✉</span>
          <span>{{ profile.email }}</span>
        </a>
        <div class="contact-row">
          <span class="icon">📞</span>
          <span>{{ profile.phone }}</span>
        </div>
        <a :href="profile.linkedin" target="_blank" class="contact-row">
          <span class="icon">🔗</span>
          <span>linkedin.com/in/suraj-somwanshi</span>
        </a>
        <a :href="profile.github" target="_blank" class="contact-row">
          <span class="icon">💻</span>
          <span>github.com/surajsomwanshi</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  profile: { type: Object, required: true },
})
</script>

<style scoped>
.section {
  max-width: 960px;
  margin: 0 auto;
  padding: 80px 24px 120px;
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

.contact-block {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 40px;
  position: relative;
}
.contact-block::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: var(--accent);
}

.contact-intro {
  color: var(--muted);
  margin-bottom: 32px;
  max-width: 520px;
  font-size: 0.93rem;
  line-height: 1.75;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.88rem;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
a.contact-row:hover { color: var(--accent); }

.icon { color: var(--accent); font-size: 1rem; }
</style>
