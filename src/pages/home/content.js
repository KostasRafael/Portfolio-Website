// Copy for the Home page.

export const hero = {
  kicker: 'intro',
  titleLines: ['I build fast, accessible', 'web applications'],
  lead: 'Frontend developer focused on performance, clean code architecture, and user-first digital experiences.',
  terminal: {
    title: 'bash',
    command: 'npx create-next-app@latest clarity-dev --typescript',
    output: '✓ Installed Next.js, React, Tailwind CSS & ESLint. Developer console initialized.',
  },
  cta: { label: 'View my work', href: '/projects.html', icon: 'arrow-right' },
}

export const techStack = {
  kicker: 'technologies',
  title: 'My Core Tech Stack',
  skills: [
    { label: 'HTML', icon: 'html5' },
    { label: 'CSS', icon: 'css3' },
    { label: 'Javascript', icon: 'javascript' },
    { label: 'React', icon: 'react' },
    { label: 'Node.js', icon: 'nodejs' },
    { label: 'Express', icon: 'express' },
    { label: 'MongoDB', icon: 'mongodb' },
    { label: 'AWS', icon: 'aws' },
    { label: 'Git & GitHub', icon: 'git-branch' },
    { label: 'Figma', icon: 'figma' },
   // { label: 'Next.js', icon: 'circle-x' },
   // { label: 'Tailwind CSS', icon: 'palette' },
   // { label: 'PostgreSQL', icon: 'database' },
  ],
}

export const learning = {
  kicker: 'ongoing-education',
  title: 'Currently Leveling Up On',
  items: [
    'Comprehensive E2E Testing with Vitest, Playwright and testing-library',
    'Type-safe GraphQL integration & fast query layers using tRPC',
    'Accessibility audit workflow for complex dynamic components (WCAG 2.2 Level AA)',
  ],
}
