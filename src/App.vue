<template>
  <!-- Fixed navigation bar -->
  <NavBar :navLinks="navLinks" :activeSection="activeSection" />

  <!-- Sections in order -->
  <HomeSection          :profile="profile" />
  <StatsRow             :stats="stats" />
  <SkillsSection        :skills="skills" />
  <ExperienceSection    :experience="experience" />
  <ProjectsSection      :projects="projects" />
  <EducationSection     :education="education" />
  <CertificationsSection :certifications="certifications" />
  <AwardsSection        :awards="awards" />
  <ContactSection       :profile="profile" />

  <!-- Footer -->
  <FooterBar />
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Imports of all components
import NavBar               from './components/NavBar.vue'
import HomeSection          from './components/HomeSection.vue'
import StatsRow             from './components/StatsRow.vue'
import SkillsSection        from './components/SkillsSection.vue'
import ExperienceSection    from './components/ExperienceSection.vue'
import ProjectsSection      from './components/ProjectsSection.vue'
import EducationSection     from './components/EducationSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import AwardsSection        from './components/AwardsSection.vue'
import ContactSection       from './components/ContactSection.vue'
import FooterBar            from './components/FooterBar.vue'

// Import all data from a single file which is portfolioData.js
import {
  profile,
  stats,
  skills,
  experience,
  projects,
  education,
  certifications,
  awards,
  navLinks,
} from './data/portfolioData.js'

// Active nav section
const activeSection = ref('home')

// Scroll animations + active nav detection
onMounted(() => {
  // Fade-up animation on scroll
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) el.target.classList.add('visible')
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el))

  // Highlight active nav link based on scroll position
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { rootMargin: '-40% 0px -40% 0px' }
  )
  document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s))
})
</script>
