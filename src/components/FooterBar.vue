<template>
  <footer class="footer">
    <span>© 2026 Suraj Somwanshi. All rights reserved.</span>
    <span>Built with Vue 3 ✦ Designed with ♥</span>
  </footer>
</template>

<script setup>
// No props needed — purely static footer
// Edit the text directly in the template above if needed
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 0.78rem;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 640px) {
  .footer { padding: 24px 16px; flex-direction: column; text-align: center; }
}
</style>
