<template>
  <section id="contact" class="section">
    <div class="section-label fade-up">Let's connect</div>
    <h2 class="section-title fade-up">Get In Touch</h2>

    <div class="contact-block fade-up">
      <p class="contact-intro">
        I'm open to new opportunities in Java Full Stack Developer, Software Developer, Backend Developer, and Application Support roles.
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
        <div class="contact-row resume-row">
          <span class="icon">📄</span>
          <span>Resume</span>
          <div class="resume-actions">
            <a :href="profile.resumeUrl" target="_blank" class="resume-btn view-btn">View</a>
            <a :href="profile.resumeUrl" download="Suraj_Somwanshi_Resume.pdf"
              class="resume-btn download-btn">Download</a>
          </div>
        </div>
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

.resume-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.resume-actions {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.resume-btn {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.resume-btn:hover {
  opacity: 0.8;
}

.view-btn {
  background-color: #00e5a0;
  color: white;
}

.download-btn {
  background-color: #00e5a0;
  color: white;
}
</style>
