<template>
  <section id="home" class="home">
    <div class="home-greeting">👋 Hello, I'm</div>

    <h1 class="home-name">
      {{ firstName }}
      <span class="highlight">{{ lastName }}</span>
    </h1>

    <p class="home-role">
      <span class="role-tag">Java Backend</span> / Full Stack Developer
    </p>

    <p class="home-desc">{{ profile.summary }}</p>

    <div class="home-ctas">
      <a href="#projects" class="btn-primary">View Projects</a>
      <a href="#contact"  class="btn-outline">Get In Touch</a>
    </div>

    <!-- Contact Links Row -->
    <div class="home-contacts">
      <div class="contact-item">
        <span class="icon">📞</span>
        <span>{{ profile.phone }}</span>
      </div>
      <div class="contact-item">
        <span class="icon">✉</span>
        <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
      </div>
      <div class="contact-item">
        <span class="icon">📍</span>
        <span>{{ profile.location }}</span>
      </div>
      <div class="contact-item">
        <span class="icon">🔗</span>
        <a :href="profile.linkedin" target="_blank">LinkedIn</a>
      </div>
      <div class="contact-item">
        <span class="icon">💻</span>
        <a :href="profile.github" target="_blank">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  profile: { type: Object, required: true },
})

// Split name for styling
const firstName = computed(() => props.profile.name.split(' ')[0])
const lastName  = computed(() => props.profile.name.split(' ')[1])
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 100px 24px 60px;
}

.home-greeting {
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 20px;
}

.home-name {
  font-family: var(--font-head);
  font-size: clamp(3rem, 10vw, 6.5rem);
  font-weight: 800;
  line-height: 1.0;
  margin-bottom: 16px;
}
.home-name .highlight {
  color: var(--accent);
  display: block;
}

.home-role {
  font-size: clamp(1rem, 3vw, 1.4rem);
  color: var(--muted);
  margin-bottom: 32px;
}
.home-role .role-tag { color: var(--accent2); }

.home-desc {
  max-width: 600px;
  color: var(--muted);
  margin-bottom: 48px;
  font-size: 0.93rem;
  line-height: 1.75;
}

.home-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Buttons */
.btn-primary {
  background: var(--accent);
  color: #000;
  padding: 14px 32px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s, transform 0.15s;
}
.btn-primary:hover { background: #00ffb3; transform: translateY(-2px); }

.btn-outline {
  background: transparent;
  color: var(--text);
  padding: 14px 32px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  border: 1px solid var(--border);
  transition: border-color 0.2s, color 0.2s;
}
.btn-outline:hover { border-color: var(--accent); color: var(--accent); }

/* Contact row */
.home-contacts {
  margin-top: 64px;
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--muted);
}
.contact-item .icon { color: var(--accent); }
.contact-item a     { color: var(--muted); text-decoration: none; }
.contact-item a:hover { color: var(--accent); }
</style>
