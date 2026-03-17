<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="nav-logo">Suraj Somwanshi<span class="accent">.</span></div>

    <!-- Navigation Links -->
    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.id">
        <a
          :href="'#' + link.id"
          :class="{ active: activeSection === link.id }"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
// Props passed from App.vue
defineProps({
  navLinks:      { type: Array,  required: true },
  activeSection: { type: String, default: '' },
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 48px;
  background: rgba(10, 10, 15, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-logo {
  font-family: var(--font-head);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text);
}
.nav-logo .accent { color: var(--accent); }

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}

.nav-links a {
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.active { color: var(--accent); }

@media (max-width: 640px) {
  .navbar { padding: 14px 16px; }
  .nav-links { gap: 14px; }
  .nav-links a { font-size: 0.66rem; }
}
</style>
