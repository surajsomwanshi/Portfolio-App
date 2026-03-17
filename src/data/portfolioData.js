//  portfolioData.js — All my portfolio content data is here!

// MY PERSONAL INFO 
export const profile = {
  name:     'Suraj Somwanshi',
  role:     'Java Backend / Full Stack Developer',
  phone:    '+91 9623002058',
  email:    'surajsomwanshi99.ss@gmail.com',
  location: 'Pune, Maharashtra',
  linkedin: 'https://www.linkedin.com/in/suraj-somwanshi',
  github:   'https://github.com/surajsomwanshi',
  resumeUrl: '/resume/Suraj_Somwanshi_Resume.pdf',
  summary:
    'Java Full Stack Developer with 4 years of experience in BFSI Insurance and Life Science domains. Strong expertise in Spring Boot, REST APIs, PostgreSQL, and experience working with Microservices and Monolithic architectures. Working knowledge of Angular and Vue with a primary focus on backend development, production support, and Agile delivery. Committed to writing clean, efficient code, optimizing application performance, and continuously upgrading skills to align with evolving technology trends',
}

// STATS
export const stats = [
  { value: '4',  label: 'Years Experience'      },
  { value: '120+', label: 'RESTful APIs built'   },
  { value: '3×',  label: 'Star of the Month'     },
  { value: '50+', label: 'Incidents Resolved'    },
  { value: '30%', label: 'Response Time Reduced' },
]

// SKILLS
export const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices', 'Angular', 'Vue 3'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Oracle DB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS S3', 'Secrets Manager', 'IAM', 'Jenkins', 'GitLab CI/CD', 'Docker'],
  },
  {
    category: 'Testing & Security',
    items: ['JUnit', 'JWT', 'SAST', 'Code Vulnerability Checks', 'Unit Testing'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Maven', 'Postman', 'Swagger UI', 'OpenAPI', 'Kibana', 'Splunk', 'JIRA', 'IntelliJ IDEA'],
  },
  {
    category: 'Methodologies',
    items: ['Agile (Scrum)', 'Sprint Planning', 'Code Reviews', 'UAT Support'],
  },
]

// EXPERIENCE
export const experience = {
  title:   'Systems Engineer — Java Full Stack Developer',
  company: 'Tata Consultancy Services',
  period:  'Feb 2022 – Present',
  bullets: [
    'Collaborated with clients, product owners, and business analysts across 2 domains to translate requirements into technical solutions — 100% alignment with business objectives.',
    'Actively participated in Agile ceremonies (Sprint Planning, Reviews, Retrospectives, backlog refinements) across 10+ sprints, consistently delivering features on time.',
    'Managed end-to-end deployments using Jenkins and GitLab CI/CD pipelines in AWS & Azure cloud environments.',
    'Resolved 50+ issues using Kibana and Splunk for root-cause analysis, maintaining SLA compliance.',
    'Performed SAST and Code Vulnerability Checks, achieving 100% adherence to secure coding standards.',
    'Actively contributed to peer code reviews, learned and shared best practices, and supported the on-boarding of new team members',
    'Recognized 3× as Star of the Month for exceptional performance, code quality, and timely delivery.',
  ],
}

// PROJECTS
export const projects = [
  {
    name:        'Personal Portfolio App',
    description: 'Designed and developed a responsive personal portfolio website using Vue 3, showcasing projects, skills, and professional background. Implemented component-based architecture',
    tech:        ['Vue 3', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite'],
    highlights: [
      'Built a personal portfolio website using Vue 3 with component-based architecture',
      'Designed and developed fully responsive UI compatible web application',
      'Wrote clean, reusable components following Vue 3 best practices'
    ],
  },
  {
    name:        'TCS ADD Safety Platform',
    description: 'AI-enabled pharmacovigilance platform automating safety-case processing in life sciences — case ingestion, medical coding, seriousness/causality assessments, and narrative report generation.',
    tech:        ['Spring Boot', 'Angular', 'PostgreSQL', 'Jenkins', 'AWS'],
    highlights: [
      'Designed and implemented RESTful APIs using Spring Boot across multiple application modules, including File Case Monitor, Ontology Management, Analytics, and Batch Monitor.',
      'Developed 10+ reusable Angular components, improving UI reusability and reducing frontend development effort by 25%.',
      'Migrated Spring Boot applications to newer versions by upgrading Spring Boot, Spring Framework, and Java versions, ensuring compatibility, improved performance, and security fixes.',
    ],
  },
  {
    name:        'TRYG Leap Norway[House & Content Product Team]',
    description: 'A scalable insurance solution enabling digital transformation of home & content/cabin, pet insurance products through microservices-based architecture for seamless policy and offers management.',
    tech:        ['Spring Boot', 'Microservices', 'OpenAPI/Swagger', 'Oracle DB', 'Vue 3', 'Azure', 'GitLab CI/CD'],
    highlights: [
      'Developed and maintained RESTful APIs for Home, Content, and Pet insurance products using Spring Boot and OpenAPI/Swagger, improving system integration efficiency by 30%.',
      'Built Vue 3 UI components for the Franchise application and integrated them with Spring Boot backend services.',
      'Designed and implemented RESTful APIs for the Franchise application, supporting core business operations and frontend integration',
    ],
  },
]

// EDUCATION
export const education = [
  {
    degree:     'MSc in Computer Science',
    university: 'Savitribai Phule Pune University',
    score:      'CGPA: 9.3 / 10',
    period:     'Jun 2019 – Aug 2021',
  },
  {
    degree:     'BSc in Computer Science',
    university: 'Savitribai Phule Pune University',
    score:      '72.78%',
    period:     'Jun 2016 – May 2019',
  },
]

// CERTIFICATIONS 
export const certifications = [
  { name: 'AWS Foundations: Getting Started with the AWS Cloud Essentials',   status: 'Completed', statusClass: 'completed' },
  { name: 'AWS Technical Essentials',  status: 'Completed',     statusClass: 'completed'     },
  { name: 'Learning Spring with Spring Boot',                status: 'Completed',     statusClass: 'completed'     },
  { name: 'TCS: Spring Boot & Microservices Architecture',          status: 'Completed',   statusClass: 'completed'   },
  { name: 'TCS: Secure Coding Training',                      status: 'Completed',   statusClass: 'completed'   },
]

// AWARDS 
export const awards = [
  { icon: '🏆', name: 'Star of the Month (×3)',              org: 'Tata Consultancy Services — Exceptional performance, code quality & timely delivery' },
  { icon: '🎯', name: 'Contextual Master Award',             org: 'Tata Consultancy Services' },
  { icon: '🚀', name: 'Talent Development Elevate Wings Award', org: 'Tata Consultancy Services' },
]

//  NAVBAR LINKS  
export const navLinks = [
  { id: 'about',          label: 'About'        },
  { id: 'skills',         label: 'Skills'       },
  { id: 'experience',     label: 'Experience'   },
  { id: 'projects',       label: 'Projects'     },
  { id: 'education',      label: 'Education'    },
  { id: 'certifications', label: 'Certs'        },
  { id: 'awards',         label: 'Awards'       },
  { id: 'contact',        label: 'Contact'      },
]
